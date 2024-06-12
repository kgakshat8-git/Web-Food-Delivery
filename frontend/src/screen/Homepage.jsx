import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { useState, useEffect } from "react";

function Homepage() {
    const [searchst, setSearchst] = useState("");
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        const response = await fetch('http://localhost:5000/api/foodData', {
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
            <div>
                <Navbar1 />
                <div style={{ width: "98.9vw", overflow: "hidden"}}>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{objectFit: "contain !important" }}>
                        <div className="carousel-inner" id="carousel" style={hideWebkitScrollbarStyle}>
                            <div className="carousel-caption" style={{ zIndex: "5" }}>
                                <div className="form-inline d-flex justify-content-center">
                                    <input className="w-50 form-control mr-sm-2 m-1" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setSearchst(e.target.value) }} />
                                </div>
                            </div>
                            <div>
                                <div className="carousel-item active" style={{ marginTop: '100px' }}>
                                    <img className="d-block w-100" src="https://static.toiimg.com/photo/51892394.cms" alt="First slide" style={{ maxHeight: "400px", width: "auto", zIndex: "100"}} />
                                </div>
                                <div className="carousel-item" style={{ marginTop: '100px' }}>
                                    <img className="d-block w-100" src="https://cdn.loveandlemons.com/wp-content/uploads/2022/08/mezze-platter.jpg" alt="Second slide" style={{ maxHeight: "400px", width: "auto" }} />
                                </div>
                                <div className="carousel-item" style={{ marginTop: '100px' }}>
                                    <img className="d-block w-100" src="https://akm-img-a-in.tosshub.com/sites/indiacontent/0/images/product/public/05122019/00/01/57/55/30/38/80/41/1575530388041/659-variety-of-kababs-veg---non-veg-food-at-barbeque-nation-restaurant-image-Barbeque_Nation_Food_RG_08.jpg" alt="Third slide" style={{ maxHeight: "400px", width: "auto" }} />
                                </div>
                                <div className="carousel-item" style={{ marginTop: '100px' }}>
                                    <img className="d-block w-100" src="https://i.ytimg.com/vi/PDxvTCFutc8/maxresdefault.jpg" alt="Fourth slide" style={{ maxHeight: "400px", width: "auto" }} />
                                </div>
                            </div>
                            <button className="carousel-control-prev bg-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next bg-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        {foodCat.map(fcat => {
                            return (
                                <div className="row mb-3" key={fcat._id}>
                                    <div className="fs-3 m-3">
                                        {fcat.CategoryName}
                                    </div>
                                    <hr />
                                    {foodItem.filter((item) => item.CategoryName === fcat.CategoryName && item.name.toLowerCase().includes(searchst.toLowerCase())).map(fitem => {
                                        return (
                                            <div className="col-12 col-md-6 col-lg-3" key={fitem._id}>
                                                <Card data={fitem} />
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Homepage;