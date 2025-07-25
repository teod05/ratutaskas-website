import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import michelinLogo from './assets/Michelin-Logo-emblem.jpg';
import hankookLogo from './assets/Hankook-Logo-1999.png';
import firestoneLogo from './assets/Firestone-Logo.png';
import bridgestoneLogo from './assets/Bridgestone-logo.jpg';
import bfgoodrichLogo from './assets/BFGoodrich-logo-3840x2160.png';
import photo2025Logo from './assets/photo_2025-07-25 12.37.54.jpeg';

const sliderSettings = {
  spaceBetween: 30,
  slidesPerView: 2,
  loop: true,
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
};

const logos = [
  { src: michelinLogo, alt: 'Michelin Logo' },
  { src: hankookLogo, alt: 'Hankook Logo' },
  { src: firestoneLogo, alt: 'Firestone Logo' },
  { src: bridgestoneLogo, alt: 'Bridgestone Logo' },
  { src: bfgoodrichLogo, alt: 'BFGoodrich Logo' },
  { src: photo2025Logo, alt: 'Brand Logo' },
];

const logoCardStyle = {
  background: '#fff',
  borderRadius: '1rem',
  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)',
  padding: '2rem 1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 60,
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
};

const BrandSlider = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '2rem 1vh',
        background: 'linear-gradient(90deg, #f8fafc 0%, #f1f5f9 100%)',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.07)',
      }}
    >
      <Swiper
        {...sliderSettings}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        style={{ padding: '0 1rem' }}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={logoCardStyle}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.boxShadow = '0 4px 16px 0 rgba(0,0,0,0.12)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = logoCardStyle.boxShadow;
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxHeight: 60,
                  maxWidth: 120,
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider; 