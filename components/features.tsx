"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Zoom } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Imagen1 from '../public/images/inventario/niño/102002NGO.jpg'
import Imagen2 from '../public/images/inventario/niño/8515402NGO.jpg'
import Imagen3 from '../public/images/inventario/niño/410903CHT.jpg'
import Imagen4 from '../public/images/inventario/niño/32568.jpg'

import Image from "next/image";

export default function Features() {
  return (
    <section className="pt-2">
      <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{clickable: true}}
          navigation={true}
          zoom={true}
          modules={[Pagination,Navigation, Zoom]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
          breakpoints={{
              375: {
                  slidesPerView:1
              },
              767: {
                  slidesPerView:2
              },
              1023: {
                  slidesPerView:3
              }

          }}
          >
      <SwiperSlide>
          <div className="swiper-zoom-container">
              <Image
                src={Imagen1}
                alt="Primer zapato"
              />
          </div>
          <p className="text-center">Zapato Azul</p>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-zoom-container">
              <Image
                  src={Imagen2}
                  alt="Primer zapato"
              />
          </div>
          <p className="text-center">Zapato Café</p>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-zoom-container">
              <Image
                  src={Imagen3}
                  alt="Primer zapato"
              />
          </div>
          <p className="text-center">Zapato De vestir</p>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper-zoom-container">
              <Image
                  src={Imagen4}
                  alt="Primer zapato"
              />
          </div>
          <p className="text-center">Zapato de enfermería</p>
      </SwiperSlide>
    </Swiper>
    </section>
  )
}
