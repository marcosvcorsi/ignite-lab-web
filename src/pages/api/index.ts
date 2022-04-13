import { getAccessToken } from "@auth0/nextjs-auth0";
import httpProxyMiddleware from "next-http-proxy-middleware";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { accessToken } = await getAccessToken(req, res);
}
