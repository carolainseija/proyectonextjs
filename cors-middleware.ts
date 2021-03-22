import corsWrapper from 'cors'
import { RequestHandler } from 'express'

/**
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors
 * @see https://github.com/expressjs/cors#configuration-options
 */
const CORS_OPTIONS = {
  methods: ['GET', 'OPTIONS'],
}

function promisifyMiddleware(middleware: RequestHandler) {
  return (req: any, res: any) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: Error | unknown) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

// Initialize the cors middleware
const cors = promisifyMiddleware(corsWrapper(CORS_OPTIONS))

export default cors
