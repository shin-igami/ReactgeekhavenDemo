import React from 'react'

const BlogCard = (props) => {
    const {title,image,description,date,author,link}=props
    return (
        <div className="col-md-6 my-2">
            <div class="card mb-3">
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">By {author}</h6>
                    <p class="card-text">{description}</p>
                    <p class="card-text"><small class="text-muted">Written on {new Date(date).toGMTString()}</small></p>
                    <a href={link} class ="btn btn-primary" target="_blank">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
