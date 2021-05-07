import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  return res.status(200).json({ hello: `world` })
}
