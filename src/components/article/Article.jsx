import React from 'react'
import './Article.css';
import Navbar from '../navbar/Navbar';

const Article = () => {
  return (
    <div className='article'>
        <Navbar />
        <div className='heading'>
            <img src='https://media.geeksforgeeks.org/wp-content/uploads/20200422171614/CSharp-Tutorial.png' />
            <h2>Article Title</h2>
        </div>
        <h3>Subtitle</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ligula at purus sollicitudin varius semper sit amet nunc. Nullam id ultrices nisl. Phasellus ac malesuada lectus. Suspendisse sit amet vehicula ipsum. Nunc congue ante vel ligula tempor vehicula. Nam quis lorem neque. In augue enim, lobortis at commodo a, dictum sed quam. 
        Vivamus vehicula rutrum turpis, sit amet pretium elit molestie at. Quisque venenatis nibh elit, a imperdiet dolor mollis rhoncus. Donec non cursus eros, id rutrum libero. Phasellus ac placerat nisl, at pretium massa. Maecenas posuere placerat tincidunt.Vivamus rhoncus urna ac quam tempus, ac feugiat libero dictum. Proin ligula mauris, suscipit eget lobortis vitae, semper auctor sapien. 
        Maecenas eget consectetur ante. Cras ut varius nunc, at convallis magna. Phasellus dignissim nec diam sit amet congue. Integer ultricies varius tincidunt. In volutpat dolor in tempor euismod. Ut venenatis molestie urna, non mollis ante malesuada quis. Phasellus augue eros, iaculis eu nunc id, condimentum tincidunt ligula.Etiam tellus sem, volutpat eget augue sed, tristique vestibulum orci. 
        Nulla massa felis, tristique in venenatis pellentesque, facilisis a odio. Nunc feugiat leo feugiat tellus tempus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate tempor ultricies. Pellentesque aliquet mi at ligula blandit aliquam. Nam hendrerit, arcu non sodales facilisis, nisi sapien facilisis leo, auctor viverra ante est non sapien. Praesent in tellus metus.Suspendisse potenti. 
        Duis sit amet dignissim augue. Aenean pellentesque dui non tellus consequat cursus. Fusce convallis diam in ullamcorper consectetur. Quisque consectetur accumsan orci quis convallis. Mauris semper vestibulum elit, non malesuada lectus dictum vitae. Aliquam scelerisque egestas fringilla. Aenean metus erat, condimentum eget nulla at, elementum aliquet leo. Aenean leo leo, bibendum vitae sem vel, venenatis bibendum turpis.
        In malesuada justo tellus, ac commodo ipsum viverra lobortis. Aenean sit amet laoreet ligula. In sagittis eros justo, vitae lacinia ex volutpat a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sodales cursus neque. Quisque nec lorem non eros venenatis congue a vitae nulla. Suspendisse blandit lorem a libero dictum tincidunt. In viverra rutrum mi posuere blandit. 
        Nunc id volutpat quam, sit amet feugiat nunc. Vivamus sit amet metus et enim porttitor molestie vel id lorem. Duis suscipit, massa vel vulputate lacinia, diam felis vulputate dui, eget fermentum arcu leo nec est. Donec et ipsum vel libero iaculis fringilla non a sapien.</p>
    </div>
  )
}

export default Article
