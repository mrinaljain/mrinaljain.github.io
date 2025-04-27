/* eslint-disable react/no-unescaped-entities */
// import 'bootstrap/dist/css/bootstrap.css';
import './Resume.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faBullseye, faCertificate, faCodeBranch, faEnvelope, faGlobe, faHeart, faListCheck, faLocationPin, faPhone, faSquareCheck, faSuitcase, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function ResumeSection() {
   return (
      <div className="body w-auto min-h-screen ">
         <div className="container mx-auto">
            <div className="w-full flex flex-col">
               <div id="photoHeader" className="text-center">
                  {/* PHOTO (AVATAR) */}
                  <div id="photo" className="inline-block justify-center mb-4 w-[160px] h-[160px]  rounded-full overflow-hidden p-[5px] bg-[#334960]">
                     <Image
                        src="./mrinal_jain.jpeg"
                        height={160}
                        width={160}
                        alt="avatar"
                        className="rounded-full border-4 border-gray-200 shadow-md"
                     />
                  </div>
                  <div id="textHeader">
                     <h1 className=" ">
                        Mrinal Jain
                        <br />
                        <span className="">Web Developer</span>
                     </h1>
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap">
               <div className="w-full sm:w-7/12 px-3.5 flex flex-col">
                  {/* ABOUT ME */}
                  <div className="box">
                     <h2 className='flex items-center'>
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
                  {/* WORK EXPERIENCE */}
                  <div className="box">
                     <h2 className='flex items-center'>
                        <FontAwesomeIcon icon={faSuitcase} className="inline-block w-5 h-5 mr-1.5" />
                        WORK EXPERIENCE
                     </h2>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">
                                 AMEX
                                 <div className="float-right">Phoinex</div>
                              </div>
                              <div className="year">Apr 2024 – Present</div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="job-details col-xs-11">
                              <div className="profession">Web Developer</div>
                              <div className="description">
                                 Worked on an internal campaign analytics dashboard using React, Redux, and Storybook, enabling marketing teams to track multi-channel content performance. Developed modular components and integrated Azure DevOps pipelines for smooth releases.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="listGroupItem">Developed analytics dashboard using React + Redux</li>
                                    <li className="listGroupItem">Integrated Storybook for component testing</li>
                                    <li className="listGroupItem">Built reusable components for internal marketing tools

                                    </li>
                                    <li className="listGroupItem">Supported campaign reporting across multiple regions</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">
                                 STAGE OTT
                                 <div className="float-right">NOIDA</div>
                              </div>
                              <div className="year">Mar 2019 – Mar 2024</div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="job-details col-xs-11">
                              <div className="profession">Engineering Manager</div>
                              <div className="description">
                                 Oversaw sprint planning, release cycles, and architectural decisions across web, mobile, and TV platforms. Collaborated cross-functionally with product, design, and marketing teams to align engineering goals with business growth—contributing to a major spike in platform scalability and user engagement.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="listGroupItem">Directed architecture decisions across mobile, web, and TV</li>
                                    <li className="listGroupItem">Scaled platform to support 200k+ concurrent users</li>
                                    <li className="listGroupItem">Reduced release time by 50% using automation</li>

                                 </ul>
                              </div>
                              <div className="profession">Lead Developer</div>
                              <div className="description">
                                 Led a team of developers in delivering high-impact features like payment systems, analytics, and Firebase A/B testing. Standardized the codebase across multiple apps using Flutter flavors, improving release efficiency and reducing bugs by 40%.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="listGroupItem">Implemented real-time analytics and AB testing</li>
                                    <li className="listGroupItem">Standardized codebase across 6+ apps</li>
                                    <li className="listGroupItem">Led a cross-platform engineering team of 5+</li>
                                    <li className="listGroupItem">Delivered sprint goals consistently in agile setup</li>
                                 </ul>
                              </div>
                              <div className="profession"> Founding Engineer</div>
                              <div className="description">
                                 Built and optimized the STAGE OTT mobile and TV apps using Flutter, delivering a smooth cross-platform experience across Android, iOS, and Android TV. Integrated features like deep linking, secure video streaming, and in-app purchases, contributing to a 150% increase in user onboarding.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="listGroupItem">Built mobile and Android TV apps using Flutter</li>
                                    <li className="listGroupItem">Integrated deep linking and in-app purchases</li>
                                    <li className="listGroupItem">Improved app stability with Firebase Crashlytics</li>
                                    <li className="listGroupItem">Used Flutter flavors to support multiple app variants</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">
                                 WittyFeed
                                 <div className="float-right">Indore</div>
                              </div>
                              <div className="year">Feb 2017 – Feb 2019</div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="job-details col-xs-11">
                              <div className="profession">Web Developer</div>
                              <div className="description">
                                 Redesigned and scaled the content publishing platform using React to handle over 200,000 real-time users. Built an internal CMS and A/B testing tools that supported editorial workflows and improved content delivery speed and consistency across 12–15 websites.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="listGroupItem">
                                       Ran A/B testing across homepage and articles.
                                    </li>
                                    <li className="listGroupItem">Created custom CMS for editorial team</li>
                                    <li className="listGroupItem">Maintained 12–15 websites with one config</li>
                                    <li className="listGroupItem">
                                       Rebuilt the platform in React to handle viral traffic.
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">Arya.ai (Axis Bank)</div>
                              <div className="year">April 2016 – January 2017</div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="job-details col-xs-11">
                              <div className="profession">Frontend Developer</div>
                              <div className="description">
                                 Built front-end tools using React for automating KYC verification, signature detection, and cheque scanning. Integrated Arya’s APIs for seamless data extraction from ID proofs, reducing manual effort and improving accuracy for Axis Bank.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="listGroupItem">
                                       Built frontend for KYC automation tools.
                                    </li>
                                    <li className="listGroupItem">
                                       Integrated signature detection and cheque scanning.
                                    </li>
                                    <li className="listGroupItem">
                                       Used React + TypeScript for scalable components.
                                    </li>
                                    <li className="listGroupItem">
                                       Improved KYC speed by 40%
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">YallaSpree</div>
                              <div className="year">January 2015 – April 2016</div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="job-details col-xs-11">
                              <div className="profession">Web Developer</div>
                              <div className="description">
                                 Developed a real-time e-commerce discovery app using Flutter, helping users explore shopping offers across malls in the Middle East. Focused on building location-aware UI and optimizing for both Android and iOS platforms.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="listGroupItem">
                                       Integrated mall APIs for live offers
                                    </li>
                                    <li className="listGroupItem">
                                       Supported multilingual UI for Middle East market
                                    </li>
                                    <li className="listGroupItem">
                                       Focused on performance and UX optimization.
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">WittyHacks</div>
                              <div className="year">March 2018 – Present</div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="job-details col-xs-11">
                              <div className="profession">Founding Organiser</div>
                              <div className="description">
                                 Started WittyHacks, Central India’s first 36-hour student-led hackathon, to foster innovation and collaboration among developers. The event became a launchpad for over 70% of participants experiencing their first hackathon, successfully building a strong local tech community.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="listGroupItem">
                                       Onboarded 70% first-time hackers.
                                    </li>
                                    <li className="listGroupItem">
                                       Partnered with 20+ sponsors and communities.
                                    </li>
                                    <li className="listGroupItem">
                                       Hosted 300+ developers in-person.
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>


                  </div>
                  {/* AWARDS */}
                  <div className="box">
                     <h2 className='flex items-center'>
                        <FontAwesomeIcon icon={faCertificate} className='inline-block w-5 h-5 mr-1.5' /> Awards
                     </h2>
                     <ul id="awards" className="flex flex-col">
                        <li>
                           <div className="year float-left">October 2014</div>
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
                           <div className="year float-left">October 2014</div>
                           <div className="description float-right">
                              <h3>Developer Circle Lead of the Year</h3>
                              <p>
                                 <i className="fas fa-trophy ico" /> Most Influential Techie
                              </p>
                              <p>
                                 For my work towards technical communites in Indore.
                              </p>
                           </div>
                        </li>
                     </ul>
                  </div>
                  {/* VOLUNTEER */}
                  <div className="box">
                     <h2 className=''>
                        <FontAwesomeIcon icon={faUsers} className="inline-block w-5 h-5 mr-1.5" /> Volunteer
                     </h2>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">Open Source Project</div>
                              <div className="address">
                                 <Link href="http://opensourceproject.com" target="_blank">
                                    <i className="fas fa-globe ico" />{" "}
                                    http://opensourceproject.com
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
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">Open Source Project</div>
                              <div className="address">
                                 <Link href="http://opensourceproject.com" target="_blank">
                                    <i className="fas fa-globe ico" />{" "}
                                    http://opensourceproject.com
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
                  </div>
                  {/* PROJECTS */}
                  <div className="box">
                     <h2 className='flex items-center'>
                        <FontAwesomeIcon icon={faCodeBranch} className='inline-block w-5 h-5 mr-1.5' /> Projects
                     </h2>
                     <ul className="list-group">
                        <li className="listGroupItem">
                           <span style={{ fontWeight: "bold" }}>JSON Resume</span>: JSON Resume
                           is a community driven open source initiative to create a JSON based
                           standard for resumes. There is no reason why there can't be a common
                           standard for writing a resume that can be extended with an ecosystem
                           of open source tools.
                        </li>
                        <li className="listGroupItem">
                           <span style={{ fontWeight: "bold" }}>Cdnjs</span>: Following
                           Google's CDN for jQuery, we decided to start a CDN for the less
                           popular Javascript frameworks. The CDN is community moderated and
                           open source on GitHub. We secured a partnership with Cloudflare who
                           now supports the infrastructure.
                        </li>
                        <li className="listGroupItem">
                           <span style={{ fontWeight: "bold" }}>MobTranslate</span>:
                           Open-source Indigenous language dictionary platform supporting
                           advanced search, real-time AI translation, and server-side
                           rendering. Built with Next.js and Turborepo.
                        </li>
                        <li className="listGroupItem">
                           <span style={{ fontWeight: "bold" }}>JsonBlog CLI</span>: Static
                           blog generator CLI supporting Markdown and JSON with flexible
                           deployment (GitHub Pages, Netlify, IPFS). Built in TypeScript with
                           strong extensibility and theming.
                        </li>
                        <li className="listGroupItem">
                           <span style={{ fontWeight: "bold" }}>
                              BLAH - Barely Logical Agent Host
                           </span>
                           : Open-source AI agent ecosystem supporting decentralized tool
                           publishing, discovery, and execution using the Model Context
                           Protocol (MCP). Features secure sandboxing and a comprehensive CLI.
                        </li>
                        <li className="listGroupItem">
                           <span style={{ fontWeight: "bold" }}>JSON Resume MCP Server</span>:
                           The JSON Resume MCP Server is an innovative tool that uses AI to
                           automate the process of updating a user's JSON Resume by analyzing
                           their coding projects. It empowers AI assistants to check for an
                           existing resume, comprehend the user's skills and projects through
                           codebase analysis, and enhance the resume with up-to-date project
                           data. This server effectively eliminates manual resume updates,
                           providing significant value to busy developers by automating and
                           simplifying the task of keeping their resumes current. Hence, you
                           can simply instruct your AI assistant to enhance your resume with
                           your current project, and it seamlessly does so by the intelligent
                           analysis of your code, extraction, and formulation of key project
                           details and skills and finally updating your resume. It leverages
                           OpenAI to generate professional-level descriptions of projects and
                           skills.
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="w-full sm:w-5/12 px-3.5 flex flex-col">
                  {/* CONTACT */}
                  <div className="box">
                     <h2 className='flex items-center'>
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
                  {/* EDUCATION */}
                  <div className="box">
                     <h2 className='flex items-center'>
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
                  {/* SKILLS */}
                  <div className="box">
                     <h2 className='flex items-center'>
                        <FontAwesomeIcon icon={faListCheck} className="inline-block w-5 h-5 mr-1.5" />
                        Skills
                     </h2>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Frontend
                           <span className="skill-level">Senior</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">HTML / JSX</span>
                           <span className="skill badge">
                              SCSS / CSS / BEM / Styled Components
                           </span>
                           <span className="skill badge">Javascript / Typescript</span>
                           <span className="skill badge">React / Next</span>
                           <span className="skill badge">Redux / Apollo</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Backend
                           <span className="skill-level">Senior</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Node</span>
                           <span className="skill badge">Ruby</span>
                           <span className="skill badge">Python</span>
                           <span className="skill badge">Postgres</span>
                           <span className="skill badge">Redis</span>
                           <span className="skill badge">Serverless</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Devops
                           <span className="skill-level">Senior</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">AWS</span>
                           <span className="skill badge">G Cloud</span>
                           <span className="skill badge">Heroku</span>
                           <span className="skill badge">Caching</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Next.js
                           <span className="skill-level">Expert</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Server-side Rendering</span>
                           <span className="skill badge">React</span>
                           <span className="skill badge">Web Development</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           TypeScript
                           <span className="skill-level">Expert</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Static Typing</span>
                           <span className="skill badge">Web Development</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Turborepo
                           <span className="skill-level">Intermediate</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Monorepo Management</span>
                           <span className="skill badge">Parallel Builds</span>
                           <span className="skill badge">Package Sharing</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Node.js
                           <span className="skill-level">Highly Proficient</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Node.js</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Testing and Linting
                           <span className="skill-level">Proficient</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Testing</span>
                           <span className="skill badge">ESLint</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Blog Content Management
                           <span className="skill-level">Proficient</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Markdown</span>
                           <span className="skill badge">JSON</span>
                           <span className="skill badge">IPFS</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           JavaScript
                           <span className="skill-level">Intermediate</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">ES6</span>
                           <span className="skill badge">ESLint</span>
                           <span className="skill badge">Prettier</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           AI Technology
                           <span className="skill-level">Beginner</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">OpenAI API</span>
                           <span className="skill badge">Supabase</span>
                           <span className="skill badge">Pinecone</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           GitHub Tools
                           <span className="skill-level">Intermediate</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">GitHub Actions</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Version Control
                           <span className="skill-level">Advanced</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">GitHub</span>
                           <span className="skill badge">Git</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           AI Integration
                           <span className="skill-level">Advanced</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">AI-powered job recommendations</span>
                           <span className="skill badge">AI resume suggestions</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Golang
                           <span className="skill-level">Expert</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Web Servers</span>
                           <span className="skill badge">Concurrency</span>
                           <span className="skill badge">Error Handling</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Serverless Architecture
                           <span className="skill-level">Expert</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Deno Runtime</span>
                           <span className="skill badge">Efficient Resource Management</span>
                           <span className="skill badge">On-Demand Scaling</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Web Hosting
                           <span className="skill-level">Expert</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">TLS Certificates</span>
                           <span className="skill badge">Domain Management</span>
                           <span className="skill badge">Subdomain Mapping</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Containerization
                           <span className="skill-level">Experienced</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Docker</span>
                           <span className="skill badge">CI/CD</span>
                           <span className="skill badge">GitHub Actions</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           Prettier
                           <span className="skill-level">Expert</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">Code Formatting</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           OpenAI
                           <span className="skill-level">Advanced</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">AI</span>
                           <span className="skill badge">Machine Learning</span>
                           <span className="skill badge">NLP</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           GitHub API
                           <span className="skill-level">Advanced</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">API</span>
                           <span className="skill badge">Integration</span>
                           <span className="skill badge">Version Control</span>
                        </div>
                     </div>
                     <div className="skills clearfix">
                        <div className="item-skills">
                           JSON Resume
                           <span className="skill-level">Advanced</span>
                        </div>
                        <div className="col-sm-offset-1 col-sm-12 clearfix">
                           <span className="skill badge">JSON</span>
                           <span className="skill badge">Resume Standard</span>
                        </div>
                     </div>
                  </div>
                  {/* HOBBIES */}
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
                  <div className="box">
                     <h2 className='flex items-center'>
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
               </div>
            </div>
         </div>
      </div>
   )
}

