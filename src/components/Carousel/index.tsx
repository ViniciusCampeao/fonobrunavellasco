import React, { useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import carouselData from './partials/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './partials/styles.css';

const ImageCarousel: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const renderDots = (dots: React.ReactNode) => {
    return (
      <ul className="custom-dots">
        {React.Children.toArray(dots).slice(0, isMobile ? 3 : React.Children.count(dots))}
      </ul>
    );
  };

  return (
    <div className="mb-20 flex justify-center items-center flex-col">
      <h1 className="mb-5 text-[#6f6657] font-quicksand text-2xl md:text-3xl font-semibold">Conheça nosso consultório</h1>
      <div className="w-[80%] rounded-container">
        <Slider {...settings} appendDots={renderDots}>
          {carouselData.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full mx-auto">
              <img src={item.img} alt="Clínica" className="md:w-[50%] md:h-[50%] object-cover mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
