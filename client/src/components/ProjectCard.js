import React from 'react'

const ProjectCard = (props) => {
    const {title,image,description,date,madeBy,link}=props
    return (
        <div class="card mb-3 my-3">
            <img src={image} class="card-img-top" alt="..." style={{height:'50vh',width:'30wh'}}/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">By {madeBy}</h6>
                <p class="card-text">{description}</p>
                <p class="card-text"><small class="text-muted">Made on {new Date(date).toGMTString()}</small></p>
                <a href={link} class ="btn btn-primary" target="_blank">Github Link</a>
            </div>
        </div>
    )
}

export default ProjectCard

