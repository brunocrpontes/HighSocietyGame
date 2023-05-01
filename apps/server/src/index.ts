import Koa from 'koa'
import Router from '@koa/router'

const router = new Router()
const App = new Koa()

router.get("/", (context) => {
  context.response.body = JSON.stringify(context, null, 2)
})

router.get("/ping", (context) => {
  context.response.body = "Server is Up!"
  context.response.status = 200
})

App
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3002, () => console.log("Server Listening on port 3002"))