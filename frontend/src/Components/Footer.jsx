import {Link} from 'react-router-dom'
import logo from '../assets/food-logo.png'
function Footer() {
//   return (
//     <div>
//       <div classNameName="container">
//   <footer classNameName="py-3 my-4">
//     <ul classNameName="nav justify-content-center border-bottom pb-3 mb-3">
//       <Link  to='/' classNameName="nav-link nav-item px-2 text-muted">Home</Link>
//       <Link  to='/' classNameName="nav-link px-2 text-muted">Features</Link>
//       <Link  to='/' classNameName="nav-link px-2 text-muted">Pricing</Link>
//       <Link  to='/' classNameName="nav-link px-2 text-muted">FAQs</Link>
//       <Link  to='/' classNameName="nav-link px-2 text-muted">About</Link>
//     </ul>
//     <p classNameName="text-center text-muted">© 2024 Eat India, Inc</p>
//   </footer>
// </div>
//     </div>
//  )
return(
    <>
    <div className=' bg-gray-950 -mt-6'>
    <footer className="text-gray-400">
  <div className="container px-5 py-[70px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left pl-14 pr-14">
      <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        
        <img src={logo} className='w-10'></img>
        <span className="ml-3 text-2xl text-white font-bold font-serif">EatIndia</span>
      </Link>
      <p className="mt-2 text-sm text-gray-500"> &copy; {new Date().getFullYear()} Akshat Kumar Gupta - IIT Kanpur</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left gap-28 text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
        <nav className="list-none mb-10">
          <li>
            <Link className="text-gray-400 hover:text-gray-800" to="aboutpage">About Project</Link>
          </li>
          <li>
            <Link className="text-gray-400 hover:text-gray-800" to="/">Home</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT US</h2>
        <nav className="list-none mb-10">
          <li>
            <Link className="text-gray-400 hover:text-gray-800" to="/contactus">Help</Link>
          </li>
          <li>
            <Link className="text-gray-400 hover:text-gray-800" to="/contactus">Phone Number</Link>
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">WE DELIVER TO:</h2>
        <nav className="list-none mb-10">
          <li>
            <span className="text-gray-400 hover:text-gray-800">Kolkata</span>
          </li>
          <li>
            <span className="text-gray-400 hover:text-gray-800">Kanpur</span>
          </li>
          <li>
            <span className="text-gray-400 hover:text-gray-800">Banglore</span>
          </li>
          <li>
            <span className="text-gray-400 hover:text-gray-800">Pune</span>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div>
    <div className="mx-auto py-4 px-5 flex flex-wrap text-center flex-col sm:flex-row">
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link className="text-white" to="https://www.facebook.com/akshat.kumargupta.54/">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        {/* <Link className="ml-3    text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link> */}
        <Link className="ml-3 text-white" to="https://www.instagram.com/">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link className="ml-3 text-white" to="https://www.linkedin.com/in/akshat-kumar-gupta-23227b306/">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
    </div>
    </>
)
}
export default Footer

