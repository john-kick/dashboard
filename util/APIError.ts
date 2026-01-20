export default class APIError extends Error {
  constructor(code: number, message: string) {
    super(`Code (${code}): ${message}`);
  }
}
