const loadEnvironmentVariable = (envName) => {
  if (process.env[envName]) {
    return process.env[envName];
  }
  throw new Error(`Missing environment variable: ${envName}`);
};

module.exports = {
  database_uri: loadEnvironmentVariable('POSTGRES_URI'),
};
