import { Link } from "react-router-dom"
import { AvatarComponent } from "./AvatarComponent"


export const Appbar = () => {
    const userName = (localStorage.getItem('name') as string).toUpperCase();
    return (

        <div className="border-b border-slate-100 px-10 py-2 flex justify-between items-center">
            <Link to={`/blogs`} className="flex items-center cursor-pointer text-xl font-bold">
                Medium
            </Link>
            <div className="flex">
                <div>
                    <Link to={`/blogs/publish`}>
                        <button className="bg-green-700 hover:bg-green-900 text-white font-semibold py-1 px-3 rounded-full">
                            Create
                        </button>
                    </Link>
                </div>
                <div className="pl-2">
                    <AvatarComponent name={userName} ></AvatarComponent>
                </div>
            </div>
        </div>
    );
}
