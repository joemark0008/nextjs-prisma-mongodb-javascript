import React from 'react'
import { signOut, useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import NavBar from '../components/NavBar'

const DashBoard = () => {
    const router = useRouter()
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            // The user is not authenticated, handle it here.
            router.push('/')
        },
    })

    if (status === "loading") {
        return "Loading"
    }

    // console.log(session)

    return (
        <>
            <NavBar />
            <section className='flex justify-center'>
                <h1>WELCOME {session.user.email}</h1>
            </section>
        </>
    )
}

export default DashBoard

// export async function getServerSideProps({ req }) {

//     const session = await getSession({ req })
//     console.log(session)

//     if (!session) {
//         return {
//             redirect: {
//                 destination: "/",
//                 premanent: false
//             }
//         }
//     }
//     // authorize user return session
//     return {
//         props: { session }
//     }
// }