const KNOWN = ['port', 'host', 'features', 'retries'];

function validateConfig(config) {
  const errors = [];
  if (!Number.isInteger(config.port) || config.port < 1 || config.port > 65535) errors.push('port must be an integer between 1 and 65535');
  if (typeof config.host !== 'string' || config.host.trim() === '') errors.push('host is required');
  if (config.features !== undefined && !(Array.isArray(config.features) && config.features.every((f) => typeof f === 'string'))) {
    errors.push('features must be an array of strings');
  }
  if (config.retries !== undefined && !(Number.isInteger(config.retries) && config.retries >= 0)) errors.push('retries must be a non-negative integer');
  for (const key of Object.keys(config)) if (!KNOWN.includes(key)) errors.push(`unknown key: ${key}`);
  return errors;
}
