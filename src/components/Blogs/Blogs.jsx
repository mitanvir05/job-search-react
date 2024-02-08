import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div >
            
            <div className="grid md:grid-cols-2 gap-6 mt-4 p-5 ">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;