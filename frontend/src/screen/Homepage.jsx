import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import homestyle from '../assets/Homestyle.png'
import food1 from '../assets/biryani1.png'
import food2 from '../assets/biryani2.png'
import food3 from '../assets/biryani3.png'

const bgImage={
    backgroundImage: `url(${homestyle})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
    width:"100%",
    height: "100%",
};

const HomeImage=[
    {
        id:1,
        image:food1,
    },
    {
        id:2,
        image:food2,
    },
    {
        id:3,
        image:food3,
    }
];


function Homepage() {
    const [searchst, setSearchst] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const [imageid, setimageid]= useState(food2);
    const loadData = async () => {
        const response = await fetch('https://web-food-delivery-backend-akshat-kumar-guptas-projects.vercel.app/api/foodData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let response1 = await response.json();
        setFoodCat(response1[1]);
        setFoodItem(response1[0]);
    }

    const noScrollbarStyle = {
        msOverflowStyle: "none", /* IE and Edge */
        scrollbarWidth: "none",  /* Firefox */
    };

    const hideWebkitScrollbarStyle = {
        ...noScrollbarStyle,
        WebkitScrollbar: {
            display: "none"  /* Chrome, Safari, and Opera */
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
        <Navbar1/>
        <div className="dark:bg-gray-950 pt-16">
        <div style ={bgImage} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center">
            <div className="container pb-8 sm:pb-0" data-aos="fade-down-left">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome to <span className="text-yellow-500">EatIndia </span>
                </h1> 
                <p className="text-l font-serif flex flex-wrap">
                Discover our diverse menu, featuring fresh ingredients and delicious flavors. Order now for quick, reliable delivery and exceptional culinary quality.
                </p>
                <div className="mt-10">
                    <input className="w-auto lg:w-[450px] h-8 pl-2 dark:bg-gray-300 text-black border border-gray-800"  type="search" placeholder="Search" value={searchst }aria-label="Search" onChange={(e) => { setSearchst(e.target.value) }} />
                 </div>
                </div>
                 <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">

                    <div className="flex justify-center items-center h-[400px] sm:h-[450px] overflow-hidden translate-y-20 sm:translate-y-0">
                        <img src={imageid} className="w-[300px] sm:w-[450px]     sm:mx-auto spin"/>
                    </div>
                    <div className="flex-col justify-center translate-y-20 sm:translate-y-0 lg:py-2">
                        {
                            HomeImage.map((item)=>(
                                <img key={item.id} src={item.image} alt="" className="max-w-[780px] h-[80px] object-contain  hover:scale-125 duration-200 relative sm:mx-10 flex cursor-pointer" 
                                onClick={()=> setimageid(item.image)}></img>
                            ))
                        }
                    </div>

                 </div>
                 </div>
            </div>
        </div>
        
        
        <div className="text-center text-3xl w-64 mx-auto rounded-md mt-7 bg-yellow-400 mb-10 font-serif text-opacity-100 "> Our Services </div>
        <hr className="w-1/6 mx-auto border-gray-600 -mt-9"/>
        <div>
                        {foodCat.map(fcat => {
                            return (
                                <div className="mb-3 mt-6" key={fcat._id}>
                                    <div className="text-3xl m-3 mt-6 ml-32 font-cursive text-yellow-500">
                                        {fcat.CategoryName}
                                    </div>
                                    <hr className="border-gray-500 w-10/12 mx-auto"/>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3 justify-items-center">
                                    {foodItem.filter((item) => item.CategoryName === fcat.CategoryName && item.name.toLowerCase().includes(searchst.toLowerCase())).map(fitem => {
                                        return (
                                            
                                                <div className="py-10">

                                                    
                                                <Card data={fitem} />
                                            
                                            </div>
                                            
                                        )
                                    })}
                                    </div>
                                    </div>
                            )
                        })}
                    </div>
                    </div>
                    <Footer/>
        
        </>
    );

}

export default Homepage;