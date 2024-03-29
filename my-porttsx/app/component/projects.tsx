import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '../lib/data'
import Project from './project'


function Projects() {
  return (
    <section>
      <SectionHeading>My Project</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}




export default Projects