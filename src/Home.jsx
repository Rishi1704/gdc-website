import React, { useState } from 'react'
import './home.css';

const images = ['https://images.unsplash.com/photo-1670662902769-da0cb1157fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
'https://images.unsplash.com/photo-1671036089231-a56464fdaadd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
'https://images.unsplash.com/photo-1671173488124-70749eb5396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
'https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
'https://plus.unsplash.com/premium_photo-1663013644564-f34ba6d12144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
'https://images.unsplash.com/photo-1671036133005-e85e8852d0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
'https://images.unsplash.com/photo-1671070850059-01e6ef78b35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
'https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80']

const Home = () => {
    const [mouseClickLocation,setMouseClickLocation] = useState(0);
    const [percentage,setPercentage] = useState(50);
    const [prevPercentage,setPrevPercentage] = useState(50);
    const width = images.length*22 + (images.length-1)*2;
    const handleMouseDown = (e)=>{
        setMouseClickLocation(e.clientX);
    };
    const handleMouseMove = (e)=>{
        if(mouseClickLocation===0) return;
        const mouseDelta = mouseClickLocation - e.clientX;
        const maxDelta = window.innerWidth/2;
        const perc = (mouseDelta/maxDelta)*(-width);
        let nextpercentage = ((prevPercentage-50)/100)*width+50+perc;
        nextpercentage = Math.min(nextpercentage,50);
        nextpercentage = Math.max(nextpercentage,-(width-50));
        nextpercentage = ((nextpercentage-50)/(width))*100 + 50;
        setPercentage(nextpercentage);
    };
    const handleMouseUp = (e)=>{
        setMouseClickLocation(0);
        setPrevPercentage(percentage)
    }
  return (
    <div style={{backgroundColor: 'black',color: 'white'}}>
        <div style={{height:'100vh',display:'flex',alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
            <h1>Game Development</h1>
            <h1>Club</h1>
        </div>
        <hr />
        <h2>Learn</h2>
        <div className='learn-body' onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className='image-track' style={{transform: `translate(${((percentage-50)/100)*width+50}%,10%)`}}>
                {images.map((image)=>(
                    <img key={image} unselectable='on' draggable='false' src={image} style={{objectPosition: `${percentage+50}% 50%`}} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home