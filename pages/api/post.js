import { createComment, createPost, getAllPosts, getPost } from "../../controller/post";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  // console.log(req)
  const session = await unstable_getServerSession(req, res, authOptions)
  // console.log("Session", JSON.stringify(session, null, 2))

  try {
    switch (req.method) {
      case 'POST': {
        if (session.user.role === "ADMIN") {
          const payload = req.body
          const post = await createPost(payload)
          return res.json(post)
        } else {
          // Not Signed in
          res.status(401)
        }
        res.end()
      }


      case "GET": {
        if (session) {
          if (req.query.id) {
            const post = await getPost(req.query.id)
            return res.status(200).json(post)
          } else {
            const post = await getAllPosts()
            return res.json(post)
          }

        } else {
          // Not Signed in
          res.status(401)
        }
        res.end()
      }


    }
  }
  catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }











}