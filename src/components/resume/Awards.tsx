import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Awards() {
  return (
     <div className="box">
        <h2 className='flex items-center mt-5 mb-2.5'>
           <FontAwesomeIcon icon={faCertificate} className='inline-block w-5 h-5 mr-1.5' /> Awards
        </h2>
        <ul id="awards" className="flex flex-col">
           <li>
              <div className="year float-left">October 2020</div>
              <div className="description float-right">
                 <h3>30 Under 30</h3>
                 <p>
                    <i className="fas fa-trophy ico" /> Most Influential Techie
                 </p>
                 <p>
                    For my work towards technical communites in Indore.
                 </p>
              </div>
           </li>
           <li>
              <div className="year float-left">Januay 2019</div>
              <div className="description float-right">
                 <h3>Developer Circle Lead of the Year</h3>
                 <p>
                    <i className="fas fa-trophy ico" /> Most Influential Techie
                 </p>
                 <p>
                    For my work towards Facebook communites in Central India.
                 </p>
              </div>
           </li>
        </ul>
     </div>
  )
}

export default Awards;