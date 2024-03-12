import { AuthForSignin } from "../components/AuthForSignin"
import { Quote } from "../components/Quote"

export const Signin = () => {
    return <div>
        <div className="grid lg:grid-cols-2">
            <div>
                <AuthForSignin></AuthForSignin>
            </div>
            <div className="invisible lg:visible">
                <Quote></Quote>
            </div>
        </div>
    </div>
}
