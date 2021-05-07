import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  const body = req.body
  return res.status(200).json(body)
}
