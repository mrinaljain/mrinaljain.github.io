import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Hobbies() {
  return (
     <div className="box">
        <h2 className='flex items-center'>
           <FontAwesomeIcon icon={faHeart} className="inline-block w-5 h-5 mr-1.5" /> Interests
        </h2>
        <div className="interests clearfix">
           <div className="item-interests">Gardening</div>
           <div className="col-sm-offset-1 col-sm-12 clearfix">
              <span className="interest badge">Lazy Gardening</span>
           </div>
        </div>
        <div className="interests clearfix">
           <div className="item-interests">Music</div>
           <div className="col-sm-offset-1 col-sm-12 clearfix">
              <span className="interest badge">Guitar</span>
              <span className="interest badge">Singing</span>
              <span className="interest badge">Dancing</span>
           </div>
        </div>
        <div className="interests clearfix">
           <div className="item-interests">Books</div>
           <div className="col-sm-offset-1 col-sm-12 clearfix">
              <span className="interest badge">Reading</span>
              <span className="interest badge">Writing</span>
              <span className="interest badge">History</span>
           </div>
        </div>
        <div className="interests clearfix">
           <div className="item-interests">Open Source</div>
           <div className="col-sm-offset-1 col-sm-12 clearfix">
              <span className="interest badge">All of it</span>
           </div>
        </div>
     </div>
  )
}

export default Hobbies;