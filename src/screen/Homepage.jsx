import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import Itemstocard from "../Components/Itemstocard";
import { useState, useEffect } from "react";

function Homepage() {
    const [searchst, setsearchst]=useState("")
    const [foodCat, setfoodCat] = useState([]);
    const [foodItem, setfoodItem] = useState([]);

    const loadData = async () => {
        const response = await fetch('http://localhost:5000/api/foodData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }

        })
        let response1 = await response.json();
        //console.log(response1[0]);
        setfoodCat(response1[1]);
        setfoodItem(response1[0]);
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <>
            <div>
                <Navbar1 />
                <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{objectFit: "contain !important"}}>
  <div className="carousel-inner" id="carousel">
    <div className="carousel-caption" style={{zIndex: "5"}}>
    <div className="form-inline d-flex justify-content-center">
    <input className=" w-50 form-control mr-sm-2 m-1" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{ setsearchst(e.target.value)}}  />
    {/* <button className="btn btn-success my-2 my-sm-0" >Search</button> */}
  </div>
    </div>
    <div className="carousel-item active" style={{marginTop:'85px'}}>
    <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?platter" alt="First slide" style={{"maxHeight": "400px", "width": "auto",zIndex:"100"}}/>

    </div>
    <div className="carousel-item" style={{marginTop:'85px'}}>
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?pizza" alt="Second slide" style={{"maxHeight": "400px", "width": "auto"}}/>
    </div>
    <div className="carousel-item" style={{marginTop:'85px'}}>
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?barbeque" alt="Third slide" style={{"maxHeight": "400px", "width": "auto"}}/>
    </div>
    <div className="carousel-item" style={{marginTop:'85px'}}>
      <img className="d-block w-100" src="https://source.unsplash.com/random/900x700/?dessert" alt="Fourth slide" style={{"maxHeight": "400px", "width": "auto"}}/>
    </div>
  </div>
  <button className="carousel-control-prev  bg-secondary" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
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
                    {
                        foodCat.map(fcat => {
                            return (
                                <div className="row mb-3">
                                    <div className="fs-3 m-3">
                                        {fcat.CategoryName}
                                    </div>
                                    <hr />
                                    {
                                        foodItem.filter((item) => item.CategoryName === fcat.CategoryName&& (item.name.toLowerCase().includes(searchst.toLocaleLowerCase()))).map(fitem => {
                                            return (
                                                <div className="col-12 col-md-6 col-lg-3">
                                                    <Card data={fitem} />
                                                </div>
                                            )
                                        })
                                    }
                                </div> 
                            )
                        })
                    }
                </div>
                < Footer />
                
            </div>
        </>
    )
        
}
export default Homepage