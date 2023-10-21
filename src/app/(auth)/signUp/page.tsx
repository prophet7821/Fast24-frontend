import SignUpForm from "@/components/SignUpForm";
import {Metadata} from "next";


export const metadata: Metadata={
    title: "Sign Up | Fast24",
}
const SignUpPage = () => {
    return (
        <SignUpForm/>
    );
}

export default SignUpPage;
