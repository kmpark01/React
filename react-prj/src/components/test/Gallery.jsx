import React, { useState } from 'react';

const Gallery = () => {

  const images = [
    "https://picsum.photos/300",
    "https://via.placeholder.com/300",
    "https://placeimg.com/300/300/any",
    "https://source.unsplash.com/random/300x300",
    "https://dummyimage.com/300",
    "https://loremflickr.com/300/300",
    "https://loremflickr.com/320/240",
    "https://www.fillmurray.com/300/300",
    "https://www.placecage.com/300/300",
    "https://www.stevensegallery.com/300/300"
  ];


  const [imageNum, setImageNum] = useState(0);
  const changeImage = (e) => {
    const {name} = e.target;
    if(name === 'prev' && imageNum > 0){
      setImageNum(imageNum - 1);
    }else if(name === 'next' && imageNum < images.length){
      setImageNum(imageNum + 1);
    }
  }

  return (
    <div>
      <h2>갤러리</h2>
      <div>
        <button name='prev' onClick={changeImage}>이전</button>
        <img src={images[imageNum]} alt=""/>
        <button name='next' onClick={changeImage}>다음</button>
      </div>
    </div>
  );
};

export default Gallery;