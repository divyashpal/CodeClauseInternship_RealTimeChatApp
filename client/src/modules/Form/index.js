import Button from "../../components/Button"
import Input from "../../components/input"

const Form = ({
    isSigninPage = true,
}) => {
    return (
        <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div className="text-4xl font-extrabold">
                welcome {isSigninPage && 'Back'}
            </div>
            <div className="text-xl font-light mb-14">
                {isSigninPage ? "Sign in to explore":"Sign up to get started"}
            </div>
            { !isSigninPage && <Input label="Full Name" name="name" placeholder="Enter your full name" className="mb-6"/>}
            <Input label="Email Address" name="email" placeholder="Enter your email" className="mb-6"/>
            <Input label="Password" type="password" name="password" placeholder="Enter your password" className="mb-8"/>
            <Button label={isSigninPage? "Sign in":"Sign up"} className="w-1/2 mb-2 "/>
            <div>Already have an account? <span className="text-primary cursor-pointer underline">Sign in</span></div>

        </div>
    )
}

export default Form
