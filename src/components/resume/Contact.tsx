import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBullseye, faEnvelope, faGlobe, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

function Contact() {
  return (
     <div className="box">
        <h2 className='flex items-center mt-5 mb-2.5'>
           <FontAwesomeIcon icon={faBullseye} className="inline-block w-5 h-5 mr-1.5" />
           Contact
        </h2>
        <div className="contact-item">
           <div className="icon float-left text-center">

              <FontAwesomeIcon className='inline-block w-4 h-4' icon={faLocationPin} />
           </div>
           <div className="title only  float-right">New York US</div>
        </div>
        <div className="contact-item">
           <div className="icon float-left text-center">
              <FontAwesomeIcon className='inline-block w-4 h-4' icon={faPhone} />
           </div>
           <div className="title only float-right">7328298338</div>
        </div>
        <div className="contact-item">
           <div className="icon float-left text-center">
              <FontAwesomeIcon className='inline-block w-4 h-4' icon={faEnvelope} />
           </div>
           <div className="title only float-right">
              <Link href="mailto:thomasalwyndavis@gmail.com" target="_blank">
                 jain.mrinal140@gmail.com
              </Link>
           </div>
        </div>
        <div className="contact-item">
           <div className="icon float-left text-center">
              <FontAwesomeIcon className='inline-block w-4 h-4' icon={faGlobe} />
           </div>
           <div className="title only float-right">
              <Link href="https://mrinaljain.com" target="_blank">
                 https://mrinaljain.com
              </Link>
           </div>
        </div>
        <div className="contact-item">
           <div className="icon float-left text-center">
              <FontAwesomeIcon className='inline-block w-4 h-4' icon={faXTwitter} />
           </div>
           <div className="title float-right">twitter</div>
           <div className="description float-right">
              <Link href="https://twitter.com/_mrinaljain" target="_blank">
                 _mrinaljain
              </Link>
           </div>
        </div>
        <div className="contact-item">
           <div className="icon float-left text-center">

              <FontAwesomeIcon className='inline-block w-4 h-4' icon={faGithub} />
           </div>
           <div className="title float-right">github</div>
           <div className="description float-right">
              <Link href="https://github.com/mrinaljain" target="_blank">
                 mrinaljain
              </Link>
           </div>
        </div>
     </div>
  )
}

export default Contact;