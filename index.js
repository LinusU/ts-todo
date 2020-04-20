module.exports = function todo () {
  const error = Object.assign(new Error('Not yet implemented'), { code: 'ERR_TODO' })
  if (typeof Error.captureStackTrace === 'function') Error.captureStackTrace(error, todo)
  throw error
}
