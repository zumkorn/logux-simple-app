const { Server } = require('@logux/server')

const server = new Server(
  Server.loadOptions(process, {
    subprotocol: '1.0.0',
    supports: '1.x',
    root: __dirname
  })
)

server.auth(({userId, token}) => {
  console.log(userId, token);
  return true;
})

server.type('some_action', {
  async access (ctx) {
    return true;
  },
  async process (ctx, action, meta) {
    ctx.sendBack({ type: 'some_action/done', data: 123 })
  }
})

server.listen()