import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cookies from "js-cookie"; // Correct import convention




const Banner=()=>{
    return(
        <>
       <div className="mt-4 w-full max-w-screen-xl mx-auto rounded-lg overflow-hidden shadow-2xl">
  <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
    spaceBetween={30}
    slidesPerView={1}
    effect="fade"
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    className="w-full h-[200px] sm:h-[300px] md:h-[400px]"
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <img
        src="https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?semt=ais_hybrid&w=740"
        alt="Banner 1"
        className="w-full h-full object-cover"
      />
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <img
        src="https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg"
        alt="Banner 2"
        className="w-full h-full object-cover"
      />
    </SwiperSlide>

    {/* Slide 3 */}
    <SwiperSlide>
      <img
        src="https://cdn.vectorstock.com/i/500p/91/98/shopping-online-with-discount-conceptual-banner-vector-47519198.jpg"
        alt="Banner 3"
        className="w-full h-full object-cover"
      />
    </SwiperSlide>

    {/* Slide 4 */}
    <SwiperSlide>
      <img
        src="https://www.orchardtaunton.co.uk/app/uploads/2020/03/OSC-Spring-Generic-2020-Website-Shopping-Banner-01.jpg"
        alt="Banner 4"
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
  </Swiper>
</div>

        </>
    )

}
export default Banner


