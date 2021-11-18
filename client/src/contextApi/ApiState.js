import React, { useState } from 'react'
import api from '../Api/teams'
import ApiContext from './ApiContext'

const ApiState = (props) => {
    const [teams, setTeams] = useState("")
    const [webTeam, setWebTeam] = useState("")
    const [appTeam, setAppTeam] = useState("")
    const [ccTeam, setCCTeam] = useState("")
    const [cyberTeam, setCyberTeam] = useState("")
    const [designTeam, setDesignTeam] = useState("")
    const [blogs,setBlogs] = useState("")
    const [projects,setProjects] = useState("")
    const [contact, setContact] = useState("")
    //teams

    //get all Team Cards
    const retrieveTeams = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const response = await api.get("/teams", { headers })
        return response.data.Team;
    }

    const getAllTeams = async () => {
        const allTeams = await retrieveTeams();
        setTeams(allTeams);
        if (teams) {
            const webTeams = teams.filter((e) => {
                return e.wing === "Web";
            })
            setWebTeam(webTeams);
            const appTeams = teams.filter((e) => {
                return e.wing === "App";
            })
            setAppTeam(appTeams)
            const ccTeams = teams.filter((e) => {
                return e.wing === "CC";
            })
            setCCTeam(ccTeams)
            const cyberTeams = teams.filter((e) => {
                return e.wing === "Cyber";
            })
            setCyberTeam(cyberTeams)
            const designTeams = teams.filter((e) => {
                return e.wing === "Design";
            })
            setDesignTeam(designTeams)
        }
        console.log(webTeam);
    }

    //blogs

    //get all blogs 

    const retrieveBlogs = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const response = await api.get("/blogs", { headers })
        return response.data.Blog;
    }
    const getAllBlogs = async () => {
        const allBlogs = await retrieveBlogs();
        setBlogs(allBlogs);
    }
    //get all projects

    const retrieveProjects = async () => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const response = await api.get("/projects", { headers })
        return response.data.Project;
    }
    const getAllProjects = async () => {
        const allProjects = await retrieveProjects();
        setProjects(allProjects);
    }

    //post contact in database
    const addContact = async(name,number,email) =>{
        const request = {
            name,number,email
        }
        const  headers = {
          'Content-Type': 'application/json',
      }
        const response = await api.post("/contacts",request,{headers})
        setContact(contact.concat(response.data.Contact))
    }
  
   
    return (
        <ApiContext.Provider value={{ teams, getAllTeams, webTeam, appTeam ,ccTeam,cyberTeam,designTeam,blogs,getAllBlogs,projects,getAllProjects,addContact}}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState
