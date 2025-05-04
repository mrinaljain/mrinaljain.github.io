import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Skills() {
  return (
     <div className="box">
        <h2 className='flex items-center mt-5 mb-2.5'>
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

     </div>
  )
}

export default Skills;