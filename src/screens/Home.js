import React from 'react'
import NavBar from '../components/NavBar'
import ThemeWrapper from '../components/ThemeWrapper'
// import '../components/styles.css'
const Home = () => {
  return (
    <div>
        <ThemeWrapper>
        <h1 className='primary'>desde home</h1>
        <NavBar/>

        </ThemeWrapper>
        </div>
  )
}

export default Home