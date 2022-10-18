import prisma from '../lib/prismadb'


// CREATE
export const createPost = async (payload) => {
    const post = await prisma.post.create({
        data: payload
    })
    return post
}



// GET
export const getAllPosts = async () => {
    const posts = await prisma.post.findMany({
        include: {
            comments: true
        }
    })
    return posts
}

export const getPost = async (id) => {
    const post = await prisma.post.findUnique({
        where: { id },
        include: {
            comments: true
        }
    })
    return post
}

