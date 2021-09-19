import React from 'react'

const About = () => {

  const skills = [
    'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript',
    'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript',
    'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript',
    'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript',
    'HTML', 'CSS', 'SASS', 'JavaScript', 'TypeScript'
  ]

  return (
    <div className="min-vh-100 py-5">
      <div className="container">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta ipsum provident, laboriosam doloribus assumenda non, optio necessitatibus impedit, libero maiores exercitationem incidunt hic cum debitis? Tempore, assumenda. Ea totam dignissimos maxime eum vel expedita reiciendis temporibus pariatur voluptatem eveniet cumque aut vitae accusamus, numquam officiis nobis nemo eius. Velit temporibus accusantium enim voluptatem repudiandae ab iure debitis impedit harum aspernatur est deserunt dolor rerum aliquam consequuntur dolores facilis amet reprehenderit, beatae, nisi laudantium in sit magnam? Architecto, mollitia, molestias amet doloremque similique ab officia quam voluptates hic distinctio iste nesciunt ducimus perferendis maxime dolor porro, velit quo rem reprehenderit.
        </p>
        <h1 className="text-center m-5">Skills</h1>
        <div className="d-flex flex-wrap">
          {
            skills?.map((skill: any) => (
              <div className="skill-btn border border-primary m-3 px-5 py-2 rounded-pill text-primary">
                {skill}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About
