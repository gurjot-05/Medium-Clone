import { AuthForSignup } from "../components/AuthForSignup"
import { Quote } from "../components/Quote"

export const Signup = () => {
    return <div>
        <div className="grid lg:grid-cols-2">
            <div>
                <AuthForSignup></AuthForSignup>
            </div>
            <div className="invisible lg:visible">
                <Quote></Quote>
            </div>
        </div>
    </div>
}
