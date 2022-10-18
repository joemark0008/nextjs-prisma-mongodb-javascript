import { createComment, createPost, getAllPosts, getPost } from "../../controller/post";
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  // console.log(req)
  const session = await unstable_getServerSession(req, res, authOptions)
  // console.log("Session", JSON.stringify(session, null, 2))

  try {
    switch (req.method) {
        case "POST" : {
            const comments = createComment()
            return res.json(comments)
          }

  
    }
  }
  catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }











}