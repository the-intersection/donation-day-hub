const pool = require('../modules/pool')
const testSocketMethod = require('./testSocketMethod')
const attachSocketMethods = (socket, io, serverMethods) => {
    
  testSocketMethod(socket, io)
}

module.exports = attachSocketMethods