import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <div className="bg-light">
      <div className="container p-5 min-vh-100 d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <div className="m-5">
          <img className="rounded-circle" src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
        </div>
        <div>
          <p className="display-6 text-uppercase fw-bold font-monospace mb-5">
            Hi, I'm Raj<br />
            Full stack web developer
          </p>
          <a href="#" className="btn-lg bg-primary text-light w-lg-100">Hire me</a>
        </div>
      </div>
    </div>
  )
}

export default Home
