import * as deepL from 'deepl-node'

import dotEnv from 'dotenv'

dotEnv.config()

const DEEPL_AUTH_KEY = process.env.DEEPL_AUTH_KEY as string

export const apiDeepL = async (reqBody) => {
  const yiDeepL = await new deepL.Translator(DEEPL_AUTH_KEY)

  const result = await yiDeepL.translateText(reqBody.text, reqBody.from, reqBody.to)

  return {
    result
  }
}
