import React from 'react'
import "./button.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
let buttonsarray=["Great for groups","Family-friendly","Animals","Arts&writing","Baking","Cooking","Dance","Drinks","Entertainment","Fitness","History&culture","Magic","Social impact","Wellness","Olympians&Paralympians","Designed for accessibility"]
let alwaysdis=["Dates","Group size","More filters"]
const Buttoned = () => {
    
    const slideLeft =()=>{
var slider =document.getElementById('slider')
slider.scrollLeft=slider.scrollLeft-500
    }
    const slideRight =()=>{
        var slider =document.getElementById('slider')
        slider.scrollLeft=slider.scrollLeft+500
    }
  return (
    <div className='beku'>
        <div className="staticbuttons">
                {alwaysdis.map((e)=>{
                    return(
                        <>
                        <button className='insidebuttons'>{e}</button>
                        </>
                    )
                })}
              <div className="vl"></div>
            </div>
        <KeyboardArrowLeftIcon onClick={slideLeft}/>
        <div id="slider" className='chind'>
        {
            buttonsarray.map((e)=>{
                return(
                <button className="buttonsdead">{e}</button>
                )
            })
        }
        </div>
        <KeyboardArrowRightIcon onClick ={slideRight}/>
    </div>
  )
}

export default Buttoned