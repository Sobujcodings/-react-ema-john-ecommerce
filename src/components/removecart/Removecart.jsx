import React from 'react';
import './removecart.css'
import img from '../../images/Madrid_Heathered-Grey_Feature-Float-1380.webp'
const Removecart = () => {
    return (
        <div className='d-flex justify-around align-middle mx-5 mb-5'>

            <div className='mx-5 h-1/2'>
                <div>
                    <div className="card">
                        <div className="card-body d-flex ">
                            <img className='tinyimg' src={img} alt="" />
                            <h5 className="card-title">Ultraboost 22 Shoes</h5>
                            <p className="card-text d-block">With supporting text below as a natural lead-in to additional content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body d-flex" >
                        <img className='tinyimg' src={img} alt="" />
                            <h5 className="card-title">Ultraboost 22 Shoes</h5>
                            <p className="card-text">Some quick example text to build on the Ultraboost 22 Shoes and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body d-flex" >
                        <img className='tinyimg' src={img} alt="" />
                            <h5 className="card-title">Ultraboost 22 Shoes</h5>
                            <p className="card-text">Some quick example text to build on the Ultraboost 22 Shoes and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body d-flex" >
                        <img className='tinyimg' src={img} alt="" />
                            <h5 className="card-title">Ultraboost 22 Shoes</h5>
                            <p className="card-text">Some quick example text to build on the Ultraboost 22 Shoes and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        {/* <img src="..." className="card-img-top" alt="..."> */}
                        <div className="card-body d-flex" >
                        <img className='tinyimg' src={img} alt="" />
                            <h5 className="card-title">Ultraboost 22 Shoes</h5>
                            <p className="card-text">Some quick example text to build on the Ultraboost 22 Shoes and make up the bulk of the card's content.</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className='mx-2  '>
                <div className="card p-3" >
                    <div className="card-body">
                        <h5 className="card-title ">Order Summary</h5>
                        <p className="card-text ">Sp the bulk of the card's content.</p>
                        <p className="card-text ">Sp the bulk of the card's content.</p>
                        <p className="card-text ">Sp the bulk of the card's content.</p>
                        <p className="card-text ">Sp the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary d-block ">Go somewhere</a>
                        <a href="#" className="btn btn-primary d-block mt-1">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Removecart;