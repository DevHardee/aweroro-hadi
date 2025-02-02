import React from 'react'
import { FaDownload } from 'react-icons/fa'

const ResumeDownloadCard = () => {
  return (
      <a 
      href='/files/Hadi-resume.pdf'
      className='font-semibold flex items-center gap-3 mt-4 border px-4 rounded py-2'
      >
        Download my resume
        <FaDownload/>
      </a>
  )
}

export default ResumeDownloadCard;
