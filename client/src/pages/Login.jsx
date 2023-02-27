import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../redux/authSlice'

export default function Login() {

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const userInfo = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitForm = (data) => {
        dispatch(userLogin(data))
    }

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)

    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 py-16 items-center">
                <div className="md:w-full px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-[#002D74]">Giriş Yap</h2>
                    <p className="text-xs mt-4 text-[#002D74]">Lütfen Kullanıcı Adı ve Şifreniz ile Oturum Açınız</p>

                    <form action="" className="flex flex-col gap-4" onSubmit={submitForm}>
                        <input className="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Kullanıcı Adı" value={user} onChange={handleUserInput} />
                        <div className="relative py-3">
                            <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Parola" value={pwd} onChange={handlePwdInput} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </div>
                        <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}


// import { useRef, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { useDispatch } from 'react-redux'
// import { setCredentials } from '../redux/authSlice'
// import { useLoginMutation } from '../redux/authApiSlice'

// const Login = () => {
//     const userRef = useRef()
//     const errRef = useRef()
//     const [user, setUser] = useState('')
//     const [pwd, setPwd] = useState('')
//     const [errMsg, setErrMsg] = useState('')
//     const navigate = useNavigate()

//     const [login, { isLoading }] = useLoginMutation()
//     const dispatch = useDispatch()

//     useEffect(() => {
//         userRef.current.focus()
//     }, [])

//     useEffect(() => {
//         setErrMsg('')
//     }, [user, pwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         try {
//             const userData = await login({ user, pwd }).unwrap()
//             dispatch(setCredentials({ ...userData, user }))
//             setUser('')
//             setPwd('')
//             navigate('/')
//         } catch (err) {
//             if (!err?.originalStatus) {
//                 isLoading: true until timeout occurs
//                 setErrMsg('No Server Response');
//             } else if (err.originalStatus === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.originalStatus === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     const handleUserInput = (e) => setUser(e.target.value)

//     const handlePwdInput = (e) => setPwd(e.target.value)

//     const content = isLoading ? <h1>Loading...</h1> : (
//         <section className="login">
//             <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

//             <h1>Employee Login</h1>

//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <input
//                     type="text"
//                     id="username"
//                     ref={userRef}
//                     value={user}
//                     onChange={handleUserInput}
//                     autoComplete="off"
//                     required
//                 />

//                 <label htmlFor="password">Password:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     onChange={handlePwdInput}
//                     value={pwd}
//                     required
//                 />
//                 <button>Sign In</button>
//             </form>
//         </section>
//     )

//     return content
// }
// export default Login