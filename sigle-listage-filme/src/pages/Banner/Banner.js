import React from "react";
import ImgBanner from "../../assets/banner.jpg";

function Banner() {
  return (
    <div id='banner'>
      <img src={ImgBanner} className='w-100' alt='Imagem do banner' />
    </div>
  );
}

export default Banner;
