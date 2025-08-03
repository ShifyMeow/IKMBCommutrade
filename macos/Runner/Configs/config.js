/**
 * @file config.js
 * @description
 * This file contains configuration settings for the macOS build of the Flutter application.
 * You can customize these values to match your development and production environments.
 * This is a JavaScript file that can be used by build scripts or other tools.
 */

// We use 'module.exports' to make this configuration object available to other files.
// You can access these values by requiring this file, for example:
// const config = require('./path/to/config.js');

module.exports = {
  // --- General Application Settings ---

  // Placeholder for your API base URL. This is the main address for your server.
  // Example: 'https://api.yourdomain.com/v1'
  API_BASE_URL: 'https://your-api-server.com/api',

  // Placeholder for an API key. This is a secret key to authenticate your app with a service.
  // It's a good practice to handle API keys securely.
  API_KEY: 'your_super_secret_api_key_12345',

  // The current version of your application. This can be used for things like API requests or debugging.
  APP_VERSION: '1.0.0',

  // A boolean flag to indicate if the application is running in debug mode.
  // Set to 'true' for development and 'false' for production.
  DEBUG_MODE: true,

  // --- macOS Specific Settings ---

  // A unique identifier for your app on macOS.
  MACOS_BUNDLE_ID: 'com.yourcompany.commuTrade',

  // The name of your app as it appears on macOS.
  MACOS_APP_NAME: 'CommuTrade',

  // Placeholder for any other custom settings you might need.
  // For example, if you have a special feature enabled only on macOS.
  MACOS_FEATURE_FLAG: false,

};
