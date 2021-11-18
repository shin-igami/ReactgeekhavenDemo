import React from 'react'

const Cyber = (props) => {
    const { name, wing, image, profile } = props;
    return (
        <>
        <div className="col-md-4 my-3">
            <div class="card" style={{width: '18rem'}}>
                <img src={image} class="card-img-top" alt="..."/>
                <div class ="card-body text-center">
                <h5 class ="card-title">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{wing}</h6>
                <a href={profile} class ="btn btn-primary" target="_blank">Profile</a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Cyber
