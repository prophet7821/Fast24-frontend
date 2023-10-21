import './global.css'
import App from '@/components/App'
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Fast24',
}

const RootLayout = ({children}: {
    children: React.ReactNode,
}) => {
    return (
        <App>
            {children}
        </App>
    )
}


export default RootLayout
