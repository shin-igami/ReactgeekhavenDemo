import React,{useEffect,useContext} from 'react'
import BlogCard from '../components/BlogCard';
import apiContext from '../contextApi/ApiContext';
const Blogs = () => {
    const context = useContext(apiContext)
    const {blogs,getAllBlogs} = context;
    useEffect(() => {
        getAllBlogs();
    }, [blogs])

    return (
     <div className="container text-center my-3">
         <h2>Blogs</h2>
         <div className="row my-4">
             {blogs && blogs.map((blog)=>{
                 return <BlogCard
                 key={blog._id}
                 title={blog.title}
                 description={blog.description}
                 author={blog.author}
                 image={blog.image}
                 date={blog.date}
                 link={blog.link}
                 />
             })}
         </div>
     </div>
    )
}

export default Blogs
