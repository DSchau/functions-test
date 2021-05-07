import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import fs from 'fs'
import fsP from 'fs/promises'
import path from 'path'

export default async function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  if (req.method !== 'GET') {
    return res.status(401).json({
      message: 'Unsupported request, please use GET'
    })
  }

  const db = path.resolve('./users.json')

  const exists = await fs.existsSync(db)
  if (exists) {
    return res.status(200).json(
      await fsP.readFile(db)
    )
  }
  return res.status(200).json({
    users: []
  })
}
