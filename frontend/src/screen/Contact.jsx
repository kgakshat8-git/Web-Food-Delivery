import { PhoneIcon, MailIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';

export default function Contact() {
  return (
<>
    <Navbar1/>

    <div className='min-h-screen dark:bg-gray-950 relative'>
    <div className='ml-8 pt-20  dark:text-white'>
        <div className='text-3xl font-bold mb-3'>Contact us</div>
        <div className='mb-3 grid grid-cols-3'> Hi, I am Akshat Kumar Gupta, the creator of this website. I am there to help you with any doubts or questions you have. I am also open to feedback which will help me furthur improve the page.</div>
        <div className='flex'>
       <PhoneIcon className="h-6 w-6 text-gray-900 dark:text-white" />
      <span className="text-gray-900 dark:text-white ml-5"> 9038161858</span>
      </div>
      <div className='flex'>
      <MailIcon className="h-6 w-6 text-gray-900 dark:text-white" />
      <Link className="text-gray-900 dark:text-white ml-5" to="mailto:kgakshat8@gmail.com"> kgakshat8@gmail.com</Link>
      </div>
    </div>
    <div className='mt-48'>
        <Footer/>
    </div>

    </div>
    </>
  )

}
