import { createPost, getAllPosts, getPost } from "../../prisma/helper/post";



export default async function handler(req, res) {


  try {

    switch (req.method) {
      case 'POST': {
        // Create a new post
        const { title } = req.body
        const post = await createPost(title)
        return res.json(post)
      }
      case "GET": {
        if (req.query.id) {
          const post = await getPost(req.query.id)
          return res.status(200).json(post)
        } else {
          const post = await getAllPosts()
          return res.json(post)
        }
      }
    }

  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }

}