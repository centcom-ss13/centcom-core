const shell = require('shelljs');
const config = require('config');


const environment = {
  CENTCOM_API_SSL: config.get('apiSSL'),
  CENTCOM_API_PORT: config.get('apiPort'),
  CENTCOM_API_HOST: config.get('apiHost'),
  CENTCOM_DEBUG: config.get('debug'),
  CENTCOM_DB_DATABASE: config.get('databaseDb'),
  CENTCOM_DB_HOST: config.get('databaseUrl'),
  CENTCOM_DB_PASSWORD: config.get('databasePassword'),
  CENTCOM_DB_PORT: config.get('databasePort'),
  CENTCOM_DB_USER: config.get('databaseUsername'),
  CENTCOM_FRONT_END_PORT: config.get('frontEndPort'),
  CENTCOM_FRONT_END_SSL: config.get('frontEndSSL'),
  CENTCOM_FRONT_END_URL: config.get('frontEndUrl'),
  CENTCOM_SSL_CERT_FILE: config.get('apiSSLCertFile'),
  CENTCOM_SSL_KEY_FILE: config.get('apiSSLKeyFile'),
  CENTCOM_SSL_KEY_PASSPHRASE: config.get('apiSSLKeyPassphrase'),
};

Object.entries(environment).forEach(([key, value]) => {
  shell.env[key] = value;
});

shell.exec('dockerd');
shell.exec('docker-compose up');