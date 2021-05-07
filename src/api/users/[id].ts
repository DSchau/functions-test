import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import fs from 'fs'
import fsP from 'fs/promises'
import path from 'path'

const db = path.resolve('./users.json')

const getDb = () => {
  try {
    return fsP.readFile(db, 'utf-8').then(str => JSON.parse(str))
  } catch (e) {
    return Promise.resolve({
      users: []
    })
  }
}

export default async function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  if (req.method !== 'POST') {
    return res.status(401).json({
      message: 'Unsupported request, please use POST'
    })
  }

  try {
    let database = await getDb()
      .catch(() => ({
        users: []
      }))


    database.users = database.users.concat(
      req.body
    )

    await fsP.writeFile(db, JSON.stringify(database), 'utf-8')

    return res.status(200).json({
      success: true,
      user: req.body
    })

  } catch (e) {
    return res.status(500).json({
      message: 'An errror has occurred',
      e: e.stack
    })
  }
}
