// This is the code for gemini.js

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.API_KEY; // Securely gets the key from Netlify settings
  // Use a stable (non-dated) model ID. Dated "preview" IDs get retired and then
  // return 404 "model not found" from the Gemini API.
  const MODEL = 'gemini-2.5-flash';
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

  try {
    const requestBody = JSON.parse(event.body);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return { statusCode: response.status, body: errorBody };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};