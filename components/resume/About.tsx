/* eslint-disable react/no-unescaped-entities */

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function About() {
   const delay = Promise.resolve(() => {
      setTimeout(() => {
         return "data";
      }, 5000);
   });
  return (
     <div className="box">
        <h2 className='flex items-center mt-5 mb-2.5'>
           <FontAwesomeIcon icon={faUser} className="inline-block w-5 h-5 mr-1.5" />
           About
        </h2>
        <p>
           I'm a full stack web developer who can build web and mobile apps from the ground up.
           I've worked mostly at startups so I am used to wearing many hats. I am
           a very product focused developer who prioritizes user feedback first
           and foremost. I'm generally very flexible when investigating new roles.
           I'm skilled in building developer communities, creating technical content, and delivering workshops, demos, and
           open-source contributions.
        </p>
     </div>
  )
}

export default About;