import { FaDownload } from 'react-icons/fa'

const ResumeDownloadCard = () => {
  return (
      <a 
      href='/files/Hadi-resume.pdf'
      className='font-semibold text-sm md:text-base flex items-center gap-3 mt-4 border border-gray-400 px-4 rounded py-2 hover:border-emerald-300 hover:shadow-lg transition-all'
      >
        Download my resume
        <FaDownload/>
      </a>
  )
}

export default ResumeDownloadCard;
