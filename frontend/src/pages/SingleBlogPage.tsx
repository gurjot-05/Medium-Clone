import { useParams } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { SingleBlog } from "../components/SingleBlog"
import { useSingleBlog } from "../hooks"
import { SingleBlogSkeleton } from "../components/SingleBlogSkelaton"


export const SingleBlogPage = () => {
    const { id } = useParams()
    const { loading, blog } = useSingleBlog({ id: id || "" });
    if (loading) {
        return <div>
            <Appbar />
            <SingleBlogSkeleton />
        </div>
    }
    return <div>
        <Appbar />
        <div>
            {blog && (
                <SingleBlog
                    title={blog.Title}
                    content={blog.Content}
                    authorName={blog.AuthorName}
                />
            )}
        </div>

    </div>
}