import axios from "axios";
import { useState } from "react";
import { ButtonComponent } from "./ButtonComponent";
import { HeadingComponent } from "./HeadingComponent";
import { InputBox } from "./InputBox";
import { SubHeadingComponent } from "./SubHeadingComponent";
import { useNavigate } from "react-router-dom";
import { SigninInput } from "@gurjot_05/medium-common";
import { BACKEND_URL } from "../config";


export const AuthForSignin = () => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SigninInput>({
        email: "",
        password: ""
    })
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs)
            localStorage.setItem('token', `Bearer ${response.data.token}`);
            localStorage.setItem('name', `${response.data.name}`)
            navigate('/blogs')
        } catch (error) {
            alert("Please signin with correct inputs!")
            navigate('/signin')
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full">
                <HeadingComponent label="Sign In"></HeadingComponent>
                <SubHeadingComponent label="Don't have an account?" link_to="/signup" next_route="Sign up"></SubHeadingComponent>
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
                <ButtonComponent onClicking={sendRequest} label="Sign In"></ButtonComponent>
            </div>
        </div>
    );
}

