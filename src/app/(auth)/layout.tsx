import AuthSkeleton from "@/components/AuthSkeleton";


const AuthLayout = ({children}: { children: React.ReactNode }) => {

    return (
        <AuthSkeleton>
            {children}
        </AuthSkeleton>
    )
}

export default AuthLayout