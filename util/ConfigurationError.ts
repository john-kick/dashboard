export default class ConfigurationError extends Error {
  constructor(key: string, message: string) {
    const msg = `Key [${key}] is invalid: ${message}`;
    super(msg);
  }
}
