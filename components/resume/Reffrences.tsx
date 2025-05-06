/* eslint-disable react/no-unescaped-entities */

import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

function Reffrences() {
  return (
     <div className="box">
        <h2 className='flex items-center mt-5 mb-2.5'>
           <FontAwesomeIcon icon={faSquareCheck} className="inline-block w-5 h-5 mr-1.5" />References
        </h2>
        <blockquote className="p-3 pl-6 mb-3 text-base border-l-4 border-gray-200">
           <div>
              I’ve had the pleasure of working with Mrinal Jain at Wittyfeed and the Facebook Developer Circle. He is excellent in application development and great public speaker. As my mentor, Mrinal demonstrated impressive leadership, team management and planning skills. He’s also a vital contributor to the developer community in Central India and is truly an asset to any team. I highly recommend him.
           </div>
           < footer className="block text-sm leading-[1.42857143] text-gray-500">
              <Link href="https://www.linkedin.com/in/bhavinjawade/" target="_blank">
                 Bhavin Jawade, Research Scientist Netflix, Inc.
              </Link>
           </footer>
        </blockquote>
        <br />
        <blockquote className="p-3 pl-6 mb-3 text-base border-l-4 border-gray-200">
           <div>
              Mrinal has been an outstanding Engineering Manager, leading our team to consistently meet project deadlines and exceed expectations. His leadership fosters a collaborative environment where innovation thrives. Mrinal's strategic vision and technical skills are exceptional. Highly recommend him for any leadership role.
           </div>
           < footer className="block text-sm leading-[1.42857143] text-gray-500">
              <Link href="https://www.linkedin.com/in/iammofidul" target="_blank">
                 Mofidul Islam, Senior Flutter Developer, STAGE, Inc.
              </Link>
           </footer>
        </blockquote>
        <br />
        <blockquote className="p-3 pl-6 mb-3 text-base border-l-4 border-gray-200">
           <div>
              I had a exceptional experience of working with Mrinal. During our time together at Yallaspree, Mrinal consistently demonstrated a high level of precision and attention to detail in his work.

              Mrinal's meticulous approach to tasks was truly commendable. He displayed a keen interest in learning and excelling in the field of technology and web development. His commitment to understanding intricate details and staying abreast of the latest industry trends was evident throughout our collaboration.

              Not only did Mrinal contribute significantly to our projects, but he also fostered a positive and collaborative work environment. His dedication to delivering quality results and his passion for continuous improvement made a lasting impression on our team.

              I am confident that Mrinal's skills and commitment to excellence will make him a valuable asset wherever he goes. I believe that he will continue to thrive and make significant contributions in any tech or web development role.
           </div>
           < footer className="block text-sm leading-[1.42857143] text-gray-500">
              <Link href="https://www.linkedin.com/in/harishlalwani" target="_blank">
                 Harish Lalwani, Solutions Architect at
              </Link>
           </footer>
        </blockquote>
        <br />
        <blockquote className="p-3 pl-6 mb-3 text-base border-l-4 border-gray-200">
           <div>
              I met this wonderful person Mrinal at StageOTT, he very knowledgable person and tech enthusiast. I had wonderful learnings and guidance in very less time. He was always there to guide.

              I recommend to people who is working with him or people who have any kind of doubts, dont hesitate to reach out to him, you will find a best solution to your query
           </div>
           < footer className="block text-sm leading-[1.42857143] text-gray-500">
              <Link href="https://www.linkedin.com/in/sainaveen-draksharapu-215869148" target="_blank">
                 SaiNaveen, Senior Software Engineer
              </Link>
           </footer>
        </blockquote>
        <br />
        <blockquote className="p-3 pl-6 mb-3 text-base border-l-4 border-gray-200">
           <div>
              I worked with Mrinal for a year. He was a supportive leader with great technical skills. Mrinal created a positive and collaborative work environment, making him an outstanding manager and asset to any team. Highly recommend him as a manager!
           </div>
           < footer className="block text-sm leading-[1.42857143] text-gray-500">
              <Link href="https://www.linkedin.com/in/arora-aditya-" target="_blank">
                 Aditya Arora, Software Development Engineer
              </Link>
           </footer>
        </blockquote>
        <br />
        <blockquote className="p-3 pl-6 mb-3 text-base border-l-4 border-gray-200">
           <div>
              Mrinal is an excellent Engineering Manager. He sets realistic goals and provides reasonable deadlines, ensuring tasks are completed effectively. He is also a great listener and pays meticulous attention to detail. His exceptional understanding of team dynamics and individual needs creates a comfortable and supportive environment for everyone working under him. Additionally, Mrinal is a great motivator who instills positive energy in every team member, keeping everyone focused and driven to achieve their goals.
           </div>
           < footer className="block text-sm leading-[1.42857143] text-gray-500">
              <Link href="https://www.linkedin.com/in/rashmi-bhandari-6192448b" target="_blank">
                 Rashmi Bhandari, Senior Software Engineer
              </Link>
           </footer>
        </blockquote>
        <br />
        <blockquote className="p-3 pl-6 mb-3 text-base border-l-4 border-gray-200">
           <div>
              It Was Great time working with Mrinal. He is Passionate about his work and always take responsibility. He is always ready to sharing his knowledge and experience on web design & development.
           </div>
           < footer className="block text-sm leading-[1.42857143] text-gray-500">
              <Link href="https://www.linkedin.com/in/sunilbyadav0909" target="_blank">
                 Sunil Yadav
              </Link>
           </footer>
        </blockquote>
     </div>
  )
}

export default Reffrences;