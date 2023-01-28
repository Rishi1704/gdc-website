import React, { useRef, useState } from 'react';
import './home.css';
import Miscellaneous from './Miscellaneous';


const images = [{ index: 1, src: 'https://images.unsplash.com/photo-1670662902769-da0cb1157fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
{ index: 2, src: 'https://images.unsplash.com/photo-1671036089231-a56464fdaadd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
{ index: 3, src: 'https://images.unsplash.com/photo-1671173488124-70749eb5396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
{ index: 4, src: 'https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
{ index: 5, src: 'https://plus.unsplash.com/premium_photo-1663013644564-f34ba6d12144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
{ index: 6, src: 'https://images.unsplash.com/photo-1671036133005-e85e8852d0cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
{ index: 7, src: 'https://images.unsplash.com/photo-1671070850059-01e6ef78b35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' },
{ index: 8, src: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80' }]

const Home = (props) => {
    const ref = useRef();
    const [mouseClickLocation, setMouseClickLocation] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const width = images.length * 22 + (images.length - 1) * 2 + 100;
    const handleMouseDown = (e) => {
        setMouseClickLocation(e.clientX);
        setPrevPercentage((ref.current.scrollLeft / (ref.current.scrollWidth - ref.current.clientWidth)) * -100);
    };
    const handleMouseMove = (e) => {
        if (mouseClickLocation === 0) return;
        const mouseDelta = mouseClickLocation - e.clientX;
        const maxDelta = window.innerWidth / 2;
        const perc = (mouseDelta / maxDelta) * (-100);
        let nextpercentage = perc + prevPercentage;
        nextpercentage = Math.min(nextpercentage, 0);
        nextpercentage = Math.max(nextpercentage, -100);
        ref.current.scrollLeft = (-nextpercentage / 100) * (ref.current.scrollWidth - ref.current.clientWidth);
    };
    const handleMouseUp = (e) => {
        setMouseClickLocation(0);
        setPrevPercentage((ref.current.scrollLeft / (ref.current.scrollWidth - ref.current.clientWidth)) * -100);
    };
    const handleScroll = (e) => {
        console.log(e);
        const perce = (ref.current.scrollLeft / (ref.current.scrollWidth - ref.current.clientWidth)) * -100
        setPercentage(perce);
    };

    function horizontalScroll(event) {
        event.preventDefault();
        // const perce = (ref.current.scrollLeft / (ref.current.scrollWidth - ref.current.clientWidth)) * -100
        // const delta = Math.max(-1, Math.min(1, (event.nativeEvent.wheelDelta || -event.nativeEvent.detail)))
        event.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
        });
    }

    return (
        <div className='home-component' style={{ backgroundColor: 'black', color: 'white' }}>
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1
                    onMouseEnter={() => props.setH(true)}
                    onMouseLeave={() => props.setH(false)}>Game Development</h1>
                <h1
                    onMouseEnter={() => props.setH(true)}
                    onMouseLeave={() => props.setH(false)}>Club</h1>
            </div>
            <hr />
            <h2 className='home-learn-heading'
                onMouseEnter={() => props.setH(true)}
                onMouseLeave={() => props.setH(false)}>Learn</h2>
            <div ref={ref} className='learn-body' onScroll={handleScroll} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onWheel={horizontalScroll}>
                <div className='image-track'>

                    <div style={{ width: '50vw', marginRight: '-2vw' }}></div>

                    {images.map((image) => (
                        <img
                            onMouseEnter={() => props.setH(true)}
                            onMouseLeave={() => props.setH(false)}
                            key={image.index} unselectable='on' draggable='false' alt='' src={image.src} style={{ objectPosition: `${Math.min(Math.max((percentage) * (width - 100) / 100 + 50 + image.index * 22 + (image.index - 1) * 2, 0), 100)}% 50%` }} />
                    ))}


                    <div style={{ width: '50vw', marginLeft: '-2vw' }}></div>

                </div>
            </div>

            <Miscellaneous />
        </div >
    )
}

export default Home