import { Link } from "react-router-dom";
import { AvatarComponent } from "./AvatarComponent";

interface BlogCardComponentProps {
    authorName: string,
    publishDate: string,
    title: string,
    content: string,
    id: string
}

export const BlogCardComponent = ({ authorName, publishDate, title, content, id }: BlogCardComponentProps) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);

    return <Link to={`/blogs/${id}`}>
        <div className="border-b text-slate-200 w-screen pt-2 max-w-screen-sm hover:cursor-pointer">
            <div className="text-sm text-slate-500 p-2 flex items-center">
                <div className="mr-2">
                    <AvatarComponent name={authorName} />
                </div>
                <span className="font-semibold text-slate-700">{authorName}</span>
                <span className="pl-1">. {publishDate}</span>
            </div>
            <div className="text-2xl text-slate-900 font-bold p-2">
                {title}
            </div>
            <div className="text-lg text-slate-800 px-2">
                {content.length >= 100 ? content.slice(0, 100) + "..." : content}
            </div>
            <div className="text-sm text-slate-500 pt-6 pb-4 px-2 ">
                {`${readingTime} min read`}
            </div>
        </div>
    </Link>
}
