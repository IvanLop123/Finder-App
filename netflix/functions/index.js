/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require('firebase-functions');
const vision = require('@google-cloud/vision');
const admin = require('firebase-admin');
admin.initializeApp();

// Create a client for the Google Cloud Vision API
const client = new vision.ImageAnnotatorClient();

exports.annotateImage = functions.https.onCall(async (data, context) => {
  // Check if the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'The function must be called while authenticated.'
    );
  }

  const imageBase64 = data.imageBase64;
  const request = {
    image: { content: imageBase64 },
    features: [{ type: 'TEXT_DETECTION' }],
  };

  try {
    const [result] = await client.annotateImage(request);
    const text = result.fullTextAnnotation.text;
    return { text };
  } catch (error) {
    console.error("Error calling Vision API", error);
    throw new functions.https.HttpsError('internal', 'Error calling Vision API');
  }
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
