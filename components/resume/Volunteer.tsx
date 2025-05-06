/* eslint-disable react/no-unescaped-entities */

import { faGlobe, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

function Volunteer() {
  return (
     <div className="box">
        <h2 className='mt-5 mb-2.5'>
           <FontAwesomeIcon icon={faUsers} className="inline-block w-5 h-5 mr-1.5" /> Volunteer
        </h2>
        <div className="job">
           <div className="row">
              <div className="details">
                 <div className="where">Mozilla Foundation</div>
                 <div className="address">
                    <Link href="https://mozilla.org" target="_blank">
                       <FontAwesomeIcon className='inline-block w-4 h-4 mr-1.5' icon={faGlobe} />{" "}
                       https://mozilla.org
                    </Link>
                 </div>
                 <div className="year">January 2014 – Present</div>
              </div>
           </div>
           <div className="row">
              <div className="job-details col-xs-11">
                 <div className="profession">Contributor</div>
                 <div className="description">
                    Contributing to open source projects to improve software
                    quality.
                    <div className="highlights">Highlights</div>
                    <ul className="list-group">
                       <li className="listGroupItem">
                          Fixed critical bugs and added new features.
                       </li>
                       <li className="listGroupItem">
                          Mentored new contributors.
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div className="job">
           <div className="row">
              <div className="details">
                 <div className="where">Meta Developer Circle's</div>
                 <div className="address">
                    <Link href="" target="_blank">
                       <i className="fas fa-globe ico" />{" "}
                       say
                    </Link>
                 </div>
                 <div className="year">January 2016 – Present</div>
              </div>
           </div>
           <div className="row">
              <div className="job-details col-xs-11">
                 <div className="profession">Contributor</div>
                 <div className="description">
                    Contributing to open source projects to improve software
                    quality.
                    <div className="highlights">Highlights</div>
                    <ul className="list-group">
                       <li className="listGroupItem">
                          Fixed critical bugs and added new features.
                       </li>
                       <li className="listGroupItem">
                          Mentored new contributors.
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div className="job">
           <div className="row">
              <div className="details">
                 <div className="where">Fluter Indore</div>
                 <div className="address">
                    <Link href="" target="_blank">
                       <i className="fas fa-globe ico" />{" "}
                       say
                    </Link>
                 </div>
                 <div className="year">January 2016 – Present</div>
              </div>
           </div>
           <div className="row">
              <div className="job-details col-xs-11">
                 <div className="profession">Contributor</div>
                 <div className="description">
                    Contributing to open source projects to improve software
                    quality.
                    <div className="highlights">Highlights</div>
                    <ul className="list-group">
                       <li className="listGroupItem">
                          Fixed critical bugs and added new features.
                       </li>
                       <li className="listGroupItem">
                          Mentored new contributors.
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div className="job">
           <div className="row">
              <div className="details">
                 <div className="where">Microsoft Student Partner</div>
                 <div className="address">
                    <Link href="" target="_blank">
                       <i className="fas fa-globe ico" />{" "}
                       say
                    </Link>
                 </div>
                 <div className="year">January 2016 – Present</div>
              </div>
           </div>
           <div className="row">
              <div className="job-details col-xs-11">
                 <div className="profession">Contributor</div>
                 <div className="description">
                    Contributing to open source projects to improve software
                    quality.
                    <div className="highlights">Highlights</div>
                    <ul className="list-group">
                       <li className="listGroupItem">
                          Fixed critical bugs and added new features.
                       </li>
                       <li className="listGroupItem">
                          Mentored new contributors.
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div className="job">
           <div className="row">
              <div className="details">
                 <div className="where">WittyHacks</div>
                 <div className="address">
                    <Link href="" target="_blank">
                       <i className="fas fa-globe ico" />{" "}
                       say
                    </Link>
                 </div>
                 <div className="year">January 2016 – Present</div>
              </div>
           </div>
           <div className="row">
              <div className="job-details col-xs-11">
                 <div className="profession">Contributor</div>
                 <div className="description">
                    Contributing to open source projects to improve software
                    quality.
                    <div className="highlights">Highlights</div>
                    <ul className="list-group">
                       <li className="listGroupItem">
                          Fixed critical bugs and added new features.
                       </li>
                       <li className="listGroupItem">
                          Mentored new contributors.
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div className="job">
           <div className="row">
              <div className="details">
                 <div className="where">Code.org</div>
                 <div className="address">
                    <Link href="https://mozilla.org" target="_blank">
                       <FontAwesomeIcon className='inline-block w-4 h-4 mr-1.5' icon={faGlobe} />{" "}
                       https://mozilla.org
                    </Link>
                 </div>
                 <div className="year">January 2014 – Present</div>
              </div>
           </div>
           <div className="row">
              <div className="job-details col-xs-11">
                 <div className="profession">Contributor</div>
                 <div className="description">
                    Contributing to open source projects to improve software
                    quality.
                    <div className="highlights">Highlights</div>
                    <ul className="list-group">
                       <li className="listGroupItem">
                          Fixed critical bugs and added new features.
                       </li>
                       <li className="listGroupItem">
                          Mentored new contributors.
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </div>
  )
}

export default Volunteer;