import { AvatarComponent } from "./AvatarComponent";
interface SingleBlogProps {
    title: string,
    content: string,
    authorName: string
}
export const SingleBlog = ({ title, content, authorName }: SingleBlogProps) => {
    return (
        <div className="grid grid-cols-10 pt-10">
            <div className="col-span-10 lg:col-span-7 flex justify-center lg:justify-start px-24">
                <div>
                    <div className="text-3xl font-extrabold">
                        {title}
                    </div>
                    <div className="pt-2 text-slate-500">
                        Posted on Dec 5, 2024
                    </div>
                    <div className="pt-2 text-slate-700">
                        {content}
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 invisible lg:visible">
                <div className="text-slate-950 font-semibold pb-4">
                    Author
                </div>
                <div className="flex items-center">
                    <AvatarComponent name={authorName}></AvatarComponent>
                    <div className="pl-2 text-2xl font-bold">{authorName}</div>
                </div>
            </div>
        </div>
    );
}
