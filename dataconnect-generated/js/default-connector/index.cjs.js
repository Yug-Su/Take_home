const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'fullstack-vuetify-note-app-main',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

