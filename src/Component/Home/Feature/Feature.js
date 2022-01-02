import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
    EffectFade,Pagination,Autoplay
  } from 'swiper';
SwiperCore.use([Autoplay,EffectFade,Pagination]);

const Feature = () => {
    const [features,setFeatures]=useState([])
    useEffect(()=>{
        fetch('./Featured.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    },[])
    return (
        <Container className="mt-5">
            <h2 className="mb-3">Featured Candidates</h2>
            <Swiper effect={'coverflow'} grabCursor={true} slidesPerView={'auto'} coverflowEffect={{"rotate": 50, "stretch": 0, "depth": 100, "modifier": 1, "slideShadows": true}}  navigation={true}autoplay={{"delay": 2500,"disableOnInteraction": false}} 
                breakpoints={{"@0.00": { "slidesPerView": 1, "spaceBetween": 10}, "@0.75": {"slidesPerView": 2, "spaceBetween": 20}, "@1.00": {"slidesPerView": 3,"spaceBetween": 40},"@1.50": {"slidesPerView": 4, "spaceBetween": 50}}}
            className="mySwiper mx-5">
            {
            features.map(feature=>
                <SwiperSlide className="shadow-lg my-4 rounded-3 py-5" key={feature._id}>
                    <img className="w-50" src={feature.photo} alt="FeatureEmployee" />
                    <h5 className="mt-4">{feature.name}</h5>
                    <span className="text-secondary">{feature.designation}</span>                            
                </SwiperSlide>)
            } 
            </Swiper>
        </Container>
    );
};

export default Feature;