import prisma from '../lib/prismadb'




export const createComment = async () => {
    const post = await prisma.post.update({
        where: {
            id: "634e4dc9d3155556855ad59c"
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
