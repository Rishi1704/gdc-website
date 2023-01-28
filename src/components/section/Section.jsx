import React from 'react'
import './Section.css';
import Navbar from '../navbar/Navbar';

const Section = () => {
  return (
    <div className='body'>
        <Navbar />
        <div className='heading'>
            <img src='https://media.geeksforgeeks.org/wp-content/uploads/20200422171614/CSharp-Tutorial.png' />
            <h2>Article Title</h2>
        </div>
        <div className='image-container'>
            <img src='https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
            <img src='https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
            <img src='https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
        </div>
    </div>
  )
}

export default Section;
