import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { CreateBlog } from "@gurjot_05/medium-common";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const PublishBlog = () => {
    const navigate = useNavigate()
    const [blogInputs, setBlogInputs] = useState<CreateBlog>({
        title: "",
        content: ""
    })
    async function sendBlogRequest() {
        try {
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                blogInputs,
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }
            );
            navigate(`/blogs/${response.data.id}`);
        } catch (error) {
            alert("Please signin with correct inputs!")
            navigate('/signin')
        }
    }
    return (
        <div>
            <Appbar />
            <div className="flex flex-col items-center pt-10">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Title
                        </label>
                        <textarea
                            id="title"
                            className="block p-2.5 w-full sm:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none"
                            placeholder="Write your title here..."
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setBlogInputs(c => ({
                                    ...c,
                                    title: e.target.value
                                }))
                            }}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Content
                        </label>
                        <textarea
                            id="content"
                            className="block p-2.5 w-full sm:w-96 h-48 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 resize-none"
                            placeholder="Tell your story..."
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setBlogInputs(c => ({
                                    ...c,
                                    content: e.target.value
                                }))
                            }}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={sendBlogRequest}
                            type="submit"
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-700"
                        >
                            Publish post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
