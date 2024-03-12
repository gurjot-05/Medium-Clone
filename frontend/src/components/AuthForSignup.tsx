import axios from "axios";
import { useState } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { HeadingComponent } from "./HeadingComponent";
import { InputBox } from "./InputBox";
import { SubHeadingComponent } from "./SubHeadingComponent";
import { SignupInput } from "@gurjot_05/medium-common";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const AuthForSignup = () => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs)
            localStorage.setItem('token', `Bearer ${response.data.token}`)
            localStorage.setItem('name', `${response.data.name}`)
            navigate('/blogs')
        } catch (error) {
            alert("Please signup with correct inputs!")
            navigate('/signup')
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full">
                <HeadingComponent label="Create an account"></HeadingComponent>
                <SubHeadingComponent label="Already have an account?" link_to="/signin" next_route="Login"></SubHeadingComponent>
                <InputBox type="text" label="Name" placeHolder="John Doe" onChanging={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        name: e.target.value
                    }))
                }} />
                <InputBox type="email" label="Email" placeHolder="you@example.com" onChanging={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        email: e.target.value
                    }))
                }} />
                <InputBox type="password" label="Password" placeHolder="**********" onChanging={(e) => {
                    setPostInputs(c => ({
                        ...c,
                        password: e.target.value
                    }))
                }} />
                <ButtonComponent onClicking={sendRequest} label="Sign Up"></ButtonComponent>
            </div>
        </div>
    );
}

