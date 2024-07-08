
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import homestyle from '../assets/Homestyle.png'
export default function About() {

    const bgImage={
        backgroundImage: `url(${homestyle})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        width:"100%",
        height: "100%",
    };
  return (
    <>
        <Navbar1/>
      <div className="dark:bg-gray-950 pt-16">
        <div style ={bgImage} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 justify-center ml-5 ">
            <h1 className="text-4xl font-cursive font-semibold mx-auto ml-[650px] mb-4 pt-6"> About Project </h1>
            <div className="">  
            <span className="font-semibold underline text-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '0 5px' }}>FOOD DELIVERY WEBSITE (MERN Full Stack Project)</span><br/> <br/>
            <span className="font-semibold underline text-xl">Technologies Used: </span><br/>

                MongoDB<br/>
            Express.js<br/>
            React<br/>
Node.js<br/>
Tailwind CSS</div>
<br/>
<div>   
<span className="font-semibold underline text-xl">Project Description:</span> <br/>
Developed a user-friendly e-commerce web application enabling users to sign up, log in, browse food items,<br/> add items to a cart, and place orders. The homepage features an attractive landing page and a catalog of food items. Users can <br/>view their past orders in the "My Orders" section. Dark mode is available for enhanced user experience.
</div>
<br/>
<div className="mb-10">
<span className="font-semibold underline text-xl">Responsibilities:</span><br/>

Designed a responsive UI with React, incorporating an attractive landing page and product listings.<br/>
Built RESTful APIs with Node.js and Express.js for handling user authentication, product management, and order processing.<br/>
Managed MongoDB schemas for users, products, and orders to ensure efficient data storage and retrieval.<br/>
Implemented secure user authentication using JWT.<br/>
Developed functionalities for adding items to the cart, checking out, and viewing order history.<br/>
Utilized Tailwind CSS for styling and ensuring a consistent design.<br/>
Implemented a dark mode feature for user interface customization.<br/>
Added animations on scroll to enhance user engagement.<br/>
Integrated comprehensive user authentication using Google OAuth, implemented secure and efficient payment processing<br/> through Stripe, and utilized Nodemailer for automated email notifications and communication within a web application, ensuring a seamless <br/> user experience.<br/>
 <br/></div>
            </div>
            </div>
            <div className="-mt-10">
            <Footer/>
            </div>
    </>
  )
}
