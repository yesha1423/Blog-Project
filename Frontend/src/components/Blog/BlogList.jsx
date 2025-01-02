import { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(res => setBlogs(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>All Blogs</h1>
            {blogs.map(blog => (
                <div key={blog._id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
