import React from 'react'
import HomeContent from '../components/HomeContent'
import HomeCoursel from '../components/HomeCoursel'

const Home = () => {
    return (
      <div className="container my-3">
        <h1 className="text-center">GeekHaven-The Technical Society</h1>
      <HomeCoursel/>
      <HomeContent/>
      </div>
    )
}

export default Home
