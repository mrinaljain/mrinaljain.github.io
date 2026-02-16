import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Education() {
   return (
      <div className="box">
         <h2 className='flex items-center mt-5 mb-2.5'>
            <FontAwesomeIcon icon={faBuildingColumns} className="inline-block w-5 h-5 mr-1.5" />
            Education
         </h2>
         <ul id="education" className="clearfix">
            <li>
               <div className="year float-left">2011 2015</div>
               <div className="description float-right">
                  <h3>Rajiv Gandhi Proudyogiki Vishwavidyalaya</h3>
                  <div className="where" />
                  <p>
                     <i className="fas fa-graduation-cap ico" /> Bachelors of Technology
                  </p>
                  <p>Computer Science</p>
               </div>
            </li>
         </ul>
      </div>
   )
}

export default Education;