// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function MySlider() {
    return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              autoplay={{
          delay: 3000, // задержка 3 секунды
          disableOnInteraction: false, // автоплей продолжится после взаимодействия
        }}
      slidesPerView={1} 
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
    >
        <SwiperSlide className="w-full h-full">
            <img src="/slide3.webp" alt="slide 1" className='w-[100%] h-auto'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/slide2.webp" alt="slide 2" className='w-[100%] h-auto'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="/slide1.webp" alt="slide 3" className='w-[100%] h-auto'/>
        </SwiperSlide>
    </Swiper>
    )
}

export default MySlider