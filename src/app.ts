import Koa from 'koa'
import KoaRouter from '@koa/router'
import koaBody from 'koa-body'
import { apiYandex } from './yandex'

const app = new Koa()

const router = new KoaRouter()

router.post('/api/yi', koaBody(), async ctx => {
  const reqBody = ctx.request.body
  
  try {
    const result = await apiYandex(reqBody)
    ctx.body = {
      code: 0,
      result: result.text
    }
  } catch (error) {
    ctx.body = {
      code: 1,
      ...error
    }
  }
})

app.use(router.routes())
  .use(router.allowedMethods())

const port = 5200

app.listen(port, () => {
  console.log(`Server is running on : ${port}`);
})
