import { REQ_TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(REQ_TIMEOUT_SEC)]);
    if (!res.ok) {
      const data = await res.json();
      throw new Error(`${data.message} (${res.status})`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const res = await Promise.race([fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(uploadData)
    }), timeout(REQ_TIMEOUT_SEC)]);
    if (!res.ok) {
      const data = await res.json();
      throw new Error(`${data.message} (${res.status})`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Added some new functionality here for the proper rendering. It works as replacement for fractional module. I was getting error on netflify

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export function decimalToFraction(decimal) {
  const precision = 100; // Precision factor
  const whole = Math.floor(decimal);
  const fractionPart = decimal - whole;

  // Calculate numerator and denominator
  let numerator = Math.round(fractionPart * precision);
  let denominator = precision;

  // Simplify the fraction
  const divisor = gcd(numerator, denominator);
  numerator /= divisor;
  denominator /= divisor;

  // Return formatted string
  return numerator
    ? `${whole ? whole + " " : ""}${numerator}/${denominator}`
    : whole.toString();
}