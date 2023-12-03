
import { Swiper, SwiperSlide } from 'swiper/react';
import { projectDataList } from '../../data/data-lists';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swiper.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Portfolio = () => {
    return (
        <>
            <h2 className="project__heading">PORTFOLIO</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {projectDataList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={`/img/${item.src}`} onClick={() => window.open(item.path, "_blank")} />
                        <p className='project__description'>{item.description}</p>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
export default Portfolio;