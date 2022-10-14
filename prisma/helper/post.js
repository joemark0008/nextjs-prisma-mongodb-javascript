import prisma from '../../lib/prismadb'


// CREATE
export const createPost = async (title) => {
    // console.log(title)
    const post = await prisma.post.create({
        data: {
            title
        }
    })
    return post
}


// GET
export const getAllPosts = async () => {
    const posts = await prisma.post.findMany({})
    return posts
}

export const getPost = async (id) => {
    const post = await prisma.post.findUnique({
        where: { id }
    })
    return post
}