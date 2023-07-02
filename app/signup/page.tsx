'use client'

import { useRouter } from "next/navigation"
import { SetStateAction, useState } from "react"
import signUp from "../firebase/auth/signup"

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()

        const {result, error} = await signUp(email, password)
        if (error) { console.log('sign up failed')}
        else router.push('/')
    }

    const passwordChange = (event: { target: { value: SetStateAction<string> } }) =>
        setPassword(event.target.value);
    const emailChange = (event: { target: { value: SetStateAction<string> } }) =>
        setEmail(event.target.value);

    return <>
        <h1>SIGN UP</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" onChange={emailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" onChange={passwordChange} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
}