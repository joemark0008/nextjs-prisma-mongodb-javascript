import prisma from '../lib/prismadb'


// CREATE
export const createPost = async (payload) => {
    const post = await prisma.post.create({
        data: payload
    })
    return post
}

export const createComment = async () => {
    const post = await prisma.post.update({
        where: {
            id: "634e459a0d221d5f9dbf5088"
        },

        data: {
            title: "hahaha",
            description: "asdasd",
            comments: {
                create: {
                    title: "asdas"
                }
            }
        },
        include: {
            comments: true, // Include all posts in the returned object
        },

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

