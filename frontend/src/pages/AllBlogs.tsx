import { Appbar } from "../components/Appbar"
import { BlogCardComponent } from "../components/BlogCardComponent"
import { BlogSkeleton } from "../components/BlogSkelaton";
import { useBlogs } from "../hooks"

export const AllBlogs = () => {
    const { loading, blogs } = useBlogs();
    if (loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center items-center pt-10">
                <div className="flex flex-col items-center">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div>
                {blogs.map(blog =>
                    <BlogCardComponent authorName={blog.AuthorName} title={blog.Title} content={blog.Content} id={blog.Id} publishDate="Dec 5, 2024"></BlogCardComponent>
                )}
            </div>
        </div>
    </div>

}