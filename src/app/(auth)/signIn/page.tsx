import SignInForm from "@/components/SignInForm";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Sign In | Fast24',
}
const SignInPage = () => {

    return (
        <SignInForm/>
    )
}

export default SignInPage;

//testing github actions