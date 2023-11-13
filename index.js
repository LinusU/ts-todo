export default function todo (message) {
  message = message 
    ? `Not yet implemented (${message})`
    : 'Not yet implemented'

  const error = Object.assign(new Error(message), { code: 'ERR_TODO' })
  if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(error, todo)
  throw error
}
