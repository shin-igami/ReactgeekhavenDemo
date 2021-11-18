import React,{useContext,useEffect} from 'react'
import ProjectCard from '../components/ProjectCard';
import apiContext from '../contextApi/ApiContext';

const Project = () => {
    const context = useContext(apiContext)
    const {projects,getAllProjects} = context;
    useEffect(() => {
        getAllProjects();
    }, [projects])
    return (
        <div className="container my-3 text-center">
            <h2>Projects</h2>
            {projects && projects.map((project)=>{
                return <ProjectCard
                key={project._id}
                 title={project.title}
                 description={project.description}
                 madeBy={project.madeBy}
                 image={project.image}
                 date={project.date}
                 link={project.link}
                />
            })}
        </div>
    )
}

export default Project
