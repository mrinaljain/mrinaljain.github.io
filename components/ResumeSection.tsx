/* eslint-disable react/no-unescaped-entities */
// import 'bootstrap/dist/css/bootstrap.css';
import './Resume.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns, faBullseye, faCertificate, faCodeBranch, faEnvelope, faGlobe, faHeart, faListCheck, faLocationPin, faPhone, faSquareCheck, faSuitcase, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
                        <span className="">Software Developer</span>
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
                              <div className="profession">Software Developer</div>
                              <div className="description">
                                 Over the past several years, I've worked at various roles and
                                 companies. Mostly early stage startups, doing full stack product
                                 development.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="list-group-item">React / Next</li>
                                    <li className="list-group-item">Node / Laravel</li>
                                    <li className="list-group-item">LLM's</li>
                                    <li className="list-group-item">Diagrams / Canvas</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">
                                 STAGE
                                 <div className="float-right">NOIDA</div>
                              </div>
                              <div className="year">Mar 2019 – Mar 2024</div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="job-details col-xs-11">
                              <div className="profession">Engineering Manager</div>
                              <div className="description">
                                 Tokenized is a Bitcoin wallet for issuing, managing and trading
                                 digital tokens. I built out the front end which was packaged as
                                 an electron app. It was a difficult frontend to build because we
                                 store the users keys locally and used them to sign transactions
                                 and contracts.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="list-group-item">React</li>
                                    <li className="list-group-item">Redux</li>
                                    <li className="list-group-item">SCSS</li>
                                    <li className="list-group-item">Product</li>
                                 </ul>
                              </div>
                              <div className="profession">Engineering Manager</div>
                              <div className="description">
                                 Tokenized is a Bitcoin wallet for issuing, managing and trading
                                 digital tokens. I built out the front end which was packaged as
                                 an electron app. It was a difficult frontend to build because we
                                 store the users keys locally and used them to sign transactions
                                 and contracts.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="list-group-item">React</li>
                                    <li className="list-group-item">Redux</li>
                                    <li className="list-group-item">SCSS</li>
                                    <li className="list-group-item">Product</li>
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
                              <div className="profession">Senior Javascript Developer</div>
                              <div className="description">
                                 Blockbid is an Australian crypto currency exchange. I started
                                 off on the frontend but eventually became lead tech and worked
                                 on every moving piece of the exchange. I really enjoyed working
                                 with liquidity providers and connecting their platforms to help
                                 us achieve liquid markets.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="list-group-item">
                                       React, Apollo, Styled Components
                                    </li>
                                    <li className="list-group-item">Node.js / Rails</li>
                                    <li className="list-group-item">Docker / Heroku / GCP</li>
                                    <li className="list-group-item">
                                       Used Figma for design and UX work
                                    </li>
                                    <li className="list-group-item">
                                       Optimizing markets with tens of millions of rows using SQL.
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="job clearfix">
                        <div className="row">
                           <div className="details">
                              <div className="where">Arya.ai</div>
                              <div className="year">April 2016 – January 2017</div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="job-details col-xs-11">
                              <div className="profession">Developer</div>
                              <div className="description">
                                 Built a very large and complex React / Redux application. It
                                 works on all platforms and has IOS/Android builds due to it
                                 being a PWA. (wrapped it in React Native though only
                                 implementing a WebView)
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="list-group-item">
                                       Worked with Postgres, Redis and Dynamodb for storage.
                                    </li>
                                    <li className="list-group-item">
                                       Hosted on a mixture of Heroku Apps and EC2 servers.
                                    </li>
                                    <li className="list-group-item">
                                       Caching by Fastly and Cloudflare
                                    </li>
                                    <li className="list-group-item">
                                       Hybrid app supported on all platforms
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
                              <div className="profession">Developer</div>
                              <div className="description">
                                 Hired to take EFF's campaigning to the next level by building an
                                 action centre in Ruby on Rails. The action centre is built
                                 around some large open source tools that lower the barrier to
                                 entry when contacting congress.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="list-group-item">
                                       Developed new tools for contacting congress
                                    </li>
                                    <li className="list-group-item">
                                       Brainstormed campaign ideas to raise maximum awareness about
                                       issues
                                    </li>
                                    <li className="list-group-item">
                                       Lots of social networking integration
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
                              <div className="profession">CTO</div>
                              <div className="description">
                                 Started off as a front end developer but took on the role of CTO
                                 in early 2013. The application frontend is built with Javascript
                                 and organized as a single page application that talks to a
                                 collection of Rails web servers which are connected to MongoDB.
                                 <div className="highlights">Highlights</div>
                                 <ul className="list-group">
                                    <li className="list-group-item">
                                       Managed a small team of developers and designers
                                    </li>
                                    <li className="list-group-item">
                                       Built the entire frontend application with Backbone.js
                                    </li>
                                    <li className="list-group-item">
                                       Transferred all of the infrastructure from Heroku to AWS
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
                     <ul id="awards" className="clearfix">
                        <li>
                           <div className="year float-left">October 2014</div>
                           <div className="description float-right">
                              <h3>Fight For The Future</h3>
                              <p>
                                 <i className="fas fa-trophy ico" /> Defender of the Internet
                              </p>
                              <p>
                                 For my work against mass surveillance and building out civic
                                 tools for digital democracy.
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
                                 <a href="http://opensourceproject.com" target="_blank">
                                    <i className="fas fa-globe ico" />{" "}
                                    http://opensourceproject.com
                                 </a>
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
                                    <li className="list-group-item">
                                       Fixed critical bugs and added new features.
                                    </li>
                                    <li className="list-group-item">
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
                        <li className="list-group-item">
                           <span style={{ fontWeight: "bold" }}>JSON Resume</span>: JSON Resume
                           is a community driven open source initiative to create a JSON based
                           standard for resumes. There is no reason why there can't be a common
                           standard for writing a resume that can be extended with an ecosystem
                           of open source tools.
                        </li>
                        <li className="list-group-item">
                           <span style={{ fontWeight: "bold" }}>Cdnjs</span>: Following
                           Google's CDN for jQuery, we decided to start a CDN for the less
                           popular Javascript frameworks. The CDN is community moderated and
                           open source on GitHub. We secured a partnership with Cloudflare who
                           now supports the infrastructure.
                        </li>
                        <li className="list-group-item">
                           <span style={{ fontWeight: "bold" }}>MobTranslate</span>:
                           Open-source Indigenous language dictionary platform supporting
                           advanced search, real-time AI translation, and server-side
                           rendering. Built with Next.js and Turborepo.
                        </li>
                        <li className="list-group-item">
                           <span style={{ fontWeight: "bold" }}>JsonBlog CLI</span>: Static
                           blog generator CLI supporting Markdown and JSON with flexible
                           deployment (GitHub Pages, Netlify, IPFS). Built in TypeScript with
                           strong extensibility and theming.
                        </li>
                        <li className="list-group-item">
                           <span style={{ fontWeight: "bold" }}>
                              BLAH - Barely Logical Agent Host
                           </span>
                           : Open-source AI agent ecosystem supporting decentralized tool
                           publishing, discovery, and execution using the Model Context
                           Protocol (MCP). Features secure sandboxing and a comprehensive CLI.
                        </li>
                        <li className="list-group-item">
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
                        <div className="title only float-right">732-829-8338</div>
                     </div>
                     <div className="contact-item">
                        <div className="icon float-left text-center">
                           <FontAwesomeIcon className='inline-block w-4 h-4' icon={faEnvelope} />
                        </div>
                        <div className="title only float-right">
                           <a href="mailto:thomasalwyndavis@gmail.com" target="_blank">
                              jain.mrinal140@gmail.com
                           </a>
                        </div>
                     </div>
                     <div className="contact-item">
                        <div className="icon float-left text-center">
                           <FontAwesomeIcon className='inline-block w-4 h-4' icon={faGlobe} />
                        </div>
                        <div className="title only float-right">
                           <a href="https://mrinaljain.com" target="_blank">
                              https://mrinaljain.com
                           </a>
                        </div>
                     </div>
                     <div className="contact-item">
                        <div className="icon float-left text-center">
                           <FontAwesomeIcon className='inline-block w-4 h-4' icon={faXTwitter} />
                        </div>
                        <div className="title float-right">twitter</div>
                        <div className="description float-right">
                           <a href="https://twitter.com/_mrinaljain" target="_blank">
                              _mrinaljain
                           </a>
                        </div>
                     </div>
                     <div className="contact-item">
                        <div className="icon float-left text-center">

                           <FontAwesomeIcon className='inline-block w-4 h-4' icon={faGithub} />
                        </div>
                        <div className="title float-right">github</div>
                        <div className="description float-right">
                           <a href="https://github.com/mrinaljain" target="_blank">
                              mrinaljain
                           </a>
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
                     <blockquote>
                        <div>
                           I’ve had the pleasure of working with Mrinal Jain at Wittyfeed and the Facebook Developer Circle. He is excellent in application development and great public speaker. As my mentor, Mrinal demonstrated impressive leadership, team management and planning skills. He’s also a vital contributor to the developer community in Central India and is truly an asset to any team. I highly recommend him.
                        </div>
                        <footer>
                           <a href="https://www.linkedin.com/in/bhavinjawade/" target="_blank">
                              Bhavin Jawade, Research Scientist Netflix, Inc.
                           </a>
                        </footer>
                     </blockquote>
                     <br />
                     <blockquote>
                        <div>
                           Mrinal has been an outstanding Engineering Manager, leading our team to consistently meet project deadlines and exceed expectations. His leadership fosters a collaborative environment where innovation thrives. Mrinal's strategic vision and technical skills are exceptional. Highly recommend him for any leadership role.
                        </div>
                        <footer>
                           <a href="" target="_blank">
                              Mofidul Islam, Senior Flutter Developer, STAGE, Inc.
                           </a>
                        </footer>
                     </blockquote>
                     <br />
                     <blockquote>
                        <div>
                           I had a exceptional experience of working with Mrinal. During our time together at Yallaspree, Mrinal consistently demonstrated a high level of precision and attention to detail in his work.

                           Mrinal's meticulous approach to tasks was truly commendable. He displayed a keen interest in learning and excelling in the field of technology and web development. His commitment to understanding intricate details and staying abreast of the latest industry trends was evident throughout our collaboration.

                           Not only did Mrinal contribute significantly to our projects, but he also fostered a positive and collaborative work environment. His dedication to delivering quality results and his passion for continuous improvement made a lasting impression on our team.

                           I am confident that Mrinal's skills and commitment to excellence will make him a valuable asset wherever he goes. I believe that he will continue to thrive and make significant contributions in any tech or web development role.
                        </div>
                        <footer>
                           <a href="" target="_blank">
                              Harish Lalwani, Solutions Architect at 
                           </a>
                        </footer>
                     </blockquote>
                     <br />
                     <blockquote>
                        <div>
                           I met this wonderful person Mrinal at StageOTT, he very knowledgable person and tech enthusiast. I had wonderful learnings and guidance in very less time. He was always there to guide.

                           I recommend to people who is working with him or people who have any kind of doubts, dont hesitate to reach out to him, you will find a best solution to your query
                        </div>
                        <footer>
                           <a href="" target="_blank">
                              SaiNaveen
                           </a>
                        </footer>
                     </blockquote>
                     <br />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

