import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/input"
import { useNavigate } from "react-router-dom"

const Form = ({
    isSigninPage = true,
}) => {

    const [data, setData] = useState({
        ...(isSigninPage && {
            fullName: ''
        }),
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    return (
        <div className="bg-light h-screen flex items-center justify-center">
            <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
                <div className="text-4xl font-extrabold">
                    welcome {isSigninPage && 'Back'}
                </div>
                <div className="text-xl font-light mb-14">
                    {isSigninPage ? "Sign in to explore" : "Sign up to get started"}
                </div>

                <form className="flex flex-col items-center w-full" onSubmit={() => console.log("Submitted")}>
                    {!isSigninPage && <Input label="Full Name" name="name" placeholder="Enter your full name" className="mb-6 w-[50%]" value={data.fullName} onChange={(e) => { setData({ ...data, fullName: e.target.value }) }} />}
                    <Input label="Email Address" type="email" name="email" placeholder="Enter your email" className="mb-6 w-[50%]" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                    <Input label="Password" type="password" name="password" placeholder="Enter your password" className="mb-8 w-[50%]" value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                    <Button label={isSigninPage ? "Sign in" : "Sign up"} type="Submit" className="w-1/2 mb-2 " />
                </form>

                <div>{isSigninPage ? "Didn't have an account?" : "Already have an account?"} <span className="text-primary cursor-pointer underline" onClick={() => navigate(`/users/${isSigninPage ? 'sign_up': 'sign_in' }`)}>{isSigninPage ? "Sign up" : "Sign in"}</span></div>

            </div>
        </div>
    )
}

export default Form
