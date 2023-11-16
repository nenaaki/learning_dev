import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from 'next-http-proxy-middleware'

// ファイルのアップロードなどでmultipart/form-dataを使用するときの設定
export const config = {
  api: {
    bodyParser: false
  },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  console.warn(req.cookies?.token)
  const token = req.cookies?.token
  return token
  ? httpProxyMiddleware(req, res, {
    target: process.env.GRAPHQL_ENDPOINT!,
    changeOrigin: true,
    headers: {
        Authorization: `Bearer ${req.cookies?.token}`
    },
    pathRewrite: [{
        patternStr: '^/api/graphql',
        replaceStr: '/graphql'
    }]})
  : httpProxyMiddleware(req, res, {
    target: process.env.GRAPHQL_ENDPOINT!,
    changeOrigin: true,
    pathRewrite: [{
        patternStr: '^/api/graphql',
        replaceStr: '/graphql'
    }]});
}