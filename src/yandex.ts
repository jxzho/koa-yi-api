import queryString from 'querystring'

import dotEnv from 'dotenv'

import type { ParamsYi } from './types'

dotEnv.config()

const YANDEX_AUTH_KEY = process.env.YANDEX_AUTH_KEY as string

export const apiYandex = async (reqBody: ParamsYi) => {
  const res = await fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?' + queryString.stringify({
    key: YANDEX_AUTH_KEY,
    text: reqBody.text,
    lang: reqBody.from + '-' + reqBody.to
  }), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })

  if (res.ok) {
    return await res.json()
  } else {
    return Promise.reject({
      statusText: res.statusText,
      status: res.status
    })
  }
}
