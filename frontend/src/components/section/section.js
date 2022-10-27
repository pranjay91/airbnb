import React from 'react'
import "./section.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from 'react';

const Section = () => {
    const [value,setValue]=useState("true");
    const handlebutton1 =()=>{
         if(!value){
             setValue(!value) 
         }
    }
    const handlebutton2 =()=>{
        if(value){
      setValue(!value)
        }
   }
    return (
        <section>
        <div className="conditioning">
            <div className="pit">
            <h1>New this Week</h1>
            </div>
            <div className="chit">
                <KeyboardArrowLeftIcon  className={value?"hop":"dop"} onClick={()=>handlebutton1()}/>
                <KeyboardArrowRightIcon className={value?"dop":"hop"} onClick={()=>handlebutton2()}/>
            </div>

        </div>
        <div className= {value?"cards":"carte"}>
      <div className="card">
        <img  className="sectionimage"src="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720" alt="" />
        <div className="imagetext">
        <p className='cardpara'>Collection</p>
        <h1 className='cardtexts'>Most popular <br/>around the world</h1>
        <button className='cardbuttons'>Show all</button>
        </div>
      </div>
      <div className="card vom">
        <img  className="sectionimage"src="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720" alt="" />
        <div className="imagetext">
       <p className='cardpara'>Collection</p>
            <h1 className='cardtexts'>Most popular <br/>around the world</h1>
          <button className='cardbuttons'>Show all</button>
        </div>
      </div>
      <div className="card vom">
        <img  className="sectionimage"src="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720" alt="" />
        <div className="imagetext">
         <p className='cardpara'>Collection</p>
        <h1 className='cardtexts'>Most popular <br/>around the world</h1>
        <button className='cardbuttons'>Show all</button>
        </div>
      </div>
      </div>
        </section>
    )
}

export default Section
// "https://a0.muscache.com/im/pictures/4759fff1-e4a0-4976-9aa0-8efde1d7b9a4.jpg?im_w=720"
// "https://news.airbnb.com/wp-content/uploads/sites/4/2020/11/Dogs-of-Chernobyl.jpg"
// "https://static01.nyt.com/images/2020/05/04/travel/04airbnb-experiences-promo/04airbnb-experiences-promo-superJumbo-v2.jpg"