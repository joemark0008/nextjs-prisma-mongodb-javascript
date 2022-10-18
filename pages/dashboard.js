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

    console.log(session)

    return (
        <>
            <NavBar />


            <section className="py-10 bg-gray-50 max-w-screen-lg mx-auto">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                            <div className="max-w-md md:max-w-lg mx-auto lg:mx-0 mb-6">
                                <span className="text-sm font-semibold uppercase">
                                    <span>In the</span>
                                    <span className="text-green-500">numbers</span>
                                </span>
                                <h2 className="font-heading text-3xl sm:text-4xl mt-4">
                                    WELCOME {session.user.email}
                                    </h2>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full sm:w-1/2 px-4 sm:mt-16 mb-8 sm:mb-0">
                                    <div className="p-6 mb-8 bg-white rounded">
                                        <div className="flex items-center justify-center w-14 h-14 mb-8 bg-green-50 rounded">
                                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.02 2C6.21 2 2 6.74612 2 12.015C2 13.6975 2.49 15.4291 3.35 17.0115C3.51 17.2729 3.53 17.6024 3.42 17.9139L2.75 20.1572C2.6 20.698 3.06 21.0976 3.57 20.9374L5.59 20.3375C6.14 20.1572 6.57 20.3866 7.08 20.698C8.54 21.5583 10.36 22 12 22C16.96 22 22 18.1642 22 11.985C22 6.65598 17.7 2 12.02 2Z" fill="#00CBA6" stroke="#00CBA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.69518 13.3909C7.05042 13.3909 6.52661 12.8671 6.52661 12.2223C6.52661 11.5795 7.05042 11.0557 7.69518 11.0557C8.33994 11.0557 8.86375 11.5795 8.86375 12.2223C8.86375 12.8671 8.33994 13.3909 7.69518 13.3909ZM12.238 13.3909C11.5933 13.3909 11.0695 12.8671 11.0695 12.2223C11.0695 11.5795 11.5933 11.0557 12.238 11.0557C12.8828 11.0557 13.4066 11.5795 13.4066 12.2223C13.4066 12.8671 12.8828 13.3909 12.238 13.3909ZM15.6124 12.2223C15.6124 12.8671 16.1362 13.3909 16.781 13.3909C17.4258 13.3909 17.9496 12.8671 17.9496 12.2223C17.9496 11.5795 17.4258 11.0557 16.781 11.0557C16.1362 11.0557 15.6124 11.5795 15.6124 12.2223Z" fill="white"></path>
                                            </svg>
                                        </div>
                                        <h4 className="font-heading text-2xl mb-2">65K+</h4>
                                        <span className="text-sm">Dolor sit amet consectutar</span>
                                    </div>
                                    <div className="p-6 bg-white rounded">
                                        <div className="flex items-center justify-center w-14 h-14 mb-8 bg-green-50 rounded">
                                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42233 19.8203C7.84433 19.8203 8.18733 20.1633 8.18733 20.5853C8.18733 21.0073 7.84433 21.3493 7.42233 21.3493C7.00033 21.3493 6.65833 21.0073 6.65833 20.5853C6.65833 20.1633 7.00033 19.8203 7.42233 19.8203Z" fill="#00CBA6" stroke="#00CBA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6747 19.8203C19.0967 19.8203 19.4397 20.1633 19.4397 20.5853C19.4397 21.0073 19.0967 21.3493 18.6747 21.3493C18.2527 21.3493 17.9097 21.0073 17.9097 20.5853C17.9097 20.1633 18.2527 19.8203 18.6747 19.8203Z" fill="#00CBA6" stroke="#00CBA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M5.79288 15.083L5.12273 7.099H19.9089C20.7259 7.099 21.3529 7.823 21.2359 8.632L20.2869 15.19C20.1579 16.078 19.3979 16.736 18.5019 16.736H7.58988C6.65188 16.736 5.87088 16.018 5.79288 15.083Z" fill="#00CBA6"></path>
                                                <path d="M2.74988 3.25L4.82988 3.61L5.79288 15.083C5.87088 16.018 6.65188 16.736 7.58988 16.736H18.5019C19.3979 16.736 20.1579 16.078 20.2869 15.19L21.2359 8.632C21.3529 7.823 20.7259 7.099 19.9089 7.099H5.12273" stroke="#00CBA6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14.1254 10.795H16.8984" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                        <h4 className="font-heading text-2xl mb-2">250K+</h4>
                                        <span className="text-sm">Dolor sit amet consectutar</span>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 px-4">
                                    <div className="p-6 mb-8 bg-white rounded">
                                        <div className="flex items-center justify-center w-14 h-14 mb-8 bg-green-50 rounded">
                                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.02 8.91334C15.841 8.91334 17.317 7.43734 17.317 5.61634C17.317 3.79634 15.841 2.31934 14.02 2.31934" stroke="#00CBA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M15.5361 12.4963C16.0801 12.5333 16.6201 12.6113 17.1531 12.7293C17.8921 12.8763 18.7821 13.1793 19.0981 13.8423C19.3001 14.2673 19.3001 14.7623 19.0981 15.1873C18.7831 15.8503 17.8921 16.1533 17.1531 16.3053" stroke="#00CBA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59137 13.2063C11.2814 13.2063 14.4334 13.7653 14.4334 15.9983C14.4334 18.2323 11.3014 18.8103 7.59137 18.8103C3.90137 18.8103 0.750366 18.2523 0.750366 16.0183C0.750366 13.7843 3.88137 13.2063 7.59137 13.2063Z" fill="#00CBA6" stroke="#00CBA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5914 10.0188C5.1574 10.0188 3.2074 8.06776 3.2074 5.63376C3.2074 3.20076 5.1574 1.24976 7.5914 1.24976C10.0254 1.24976 11.9764 3.20076 11.9764 5.63376C11.9764 8.06776 10.0254 10.0188 7.5914 10.0188Z" fill="#00CBA6" stroke="#00CBA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                        <h4 className="font-heading text-2xl mb-2">500K+</h4>
                                        <span className="text-sm">Dolor sit amet consectutar</span>
                                    </div>
                                    <div className="p-6 bg-white rounded">
                                        <div className="flex items-center justify-center w-14 h-14 mb-8 bg-green-50 rounded">
                                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7368 2.76184H8.08376C6.02476 2.76184 4.24976 4.43084 4.24976 6.49084V17.2038C4.24976 19.3798 5.90876 21.1148 8.08376 21.1148H16.0728C18.1328 21.1148 19.8018 19.2648 19.8018 17.2038V8.03784L14.7368 2.76184Z" fill="#00CBA6" stroke="#00CBA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.677 2.518V5.427C14.677 6.847 15.826 7.999 17.245 8.002C18.562 8.005 19.909 8.006 20 8" fill="#80E5D3"></path>
                                                <path d="M14.677 2.518V5.427C14.677 6.847 15.826 7.999 17.245 8.002C18.562 8.005 19.909 8.006 20 8L14.677 2.518Z" stroke="#80E5D3" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M14.2841 15.5577H8.88708" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M12.2426 10.6056H8.8866" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                        <h4 className="font-heading text-2xl mb-2">1.5M+</h4>
                                        <span className="text-sm">Dolor sit amet consectutar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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