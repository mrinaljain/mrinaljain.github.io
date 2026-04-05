/* eslint-disable react/no-unescaped-entities */

import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function Projects() {
  return (
     <div className="box">
        <h2 className='flex items-center mt-5 mb-2.5'>
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
  )
}

export default Projects;