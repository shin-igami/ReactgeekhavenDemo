import React,{useContext,useEffect} from 'react'
import App from '../components/Teams/App'
import Web from '../components/Teams/Web'
import Cyber from '../components/Teams/Cyber'
import Design from '../components/Teams/Design'
import CC from '../components/Teams/CC'
import apiContext from '../contextApi/ApiContext'
const Teams = () => {
    const context = useContext(apiContext)
    const {teams,getAllTeams,webTeam,appTeam,ccTeam,designTeam,cyberTeam} = context;
    useEffect(() => {
        getAllTeams();
    }, [teams])

    return (
         <div className="container my-4">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="web-tab" data-bs-toggle="tab" data-bs-target="#web" type="button" role="tab" aria-controls="web" aria-selected="true">Web Wing</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="app-tab" data-bs-toggle="tab" data-bs-target="#app" type="button" role="tab" aria-controls="app" aria-selected="false">App Wing</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="cyber-tab" data-bs-toggle="tab" data-bs-target="#cyber" type="button" role="tab" aria-controls="cyber" aria-selected="false">Cyber Wing</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="design-tab" data-bs-toggle="tab" data-bs-target="#design" type="button" role="tab" aria-controls="design" aria-selected="false">Design Wing</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="cc-tab" data-bs-toggle="tab" data-bs-target="#cc" type="button" role="tab" aria-controls="cc" aria-selected="false">CC Wing</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="web" role="tabpanel" aria-labelledby="web-tab">
                    <div className="row my-3">
                        {webTeam && webTeam.map((team)=>{
                            return <Web key={team._id}
                            name={team.name}
                            wing={team.wing}
                            image={team.image}
                            profile={team.profile}
                            />
                        })}
                    </div>
                    </div>
                    <div class="tab-pane fade" id="app" role="tabpanel" aria-labelledby="app-tab">
                    <div className="row my-3">
                        {appTeam && appTeam.map((team)=>{
                            return <App key={team._id}
                            name={team.name}
                            wing={team.wing}
                            image={team.image}
                            profile={team.profile}
                            />
                        })}
                    </div>
                    </div>
                    <div class="tab-pane fade" id="cyber" role="tabpanel" aria-labelledby="cyber-tab">
                    <div className="row my-3">
                    {cyberTeam && cyberTeam.map((team)=>{
                            return <Cyber key={team._id}
                            name={team.name}
                            wing={team.wing}
                            image={team.image}
                            profile={team.profile}
                            />
                          
                        })}
                          </div>
                    </div>
                    <div class="tab-pane fade" id="design" role="tabpanel" aria-labelledby="design-tab">
                    <div className="row my-3">
                    {designTeam && designTeam.map((team)=>{
                            return <Design key={team._id}
                            name={team.name}
                            wing={team.wing}
                            image={team.image}
                            profile={team.profile}
                            />
        
                        })}
                          </div>
                    </div>
                    <div class="tab-pane fade" id="cc" role="tabpanel" aria-labelledby="cc-tab">
                    <div className="row my-3">
                    {ccTeam && ccTeam.map((team)=>{
                            return <CC key={team._id}
                            name={team.name}
                            wing={team.wing}
                            image={team.image}
                            profile={team.profile}
                            />
                        
                        })}
                          </div>
                    </div>
                </div>

            </div>
    )
}

export default Teams
