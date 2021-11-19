import { useState } from 'react'
import '../css/swiperTop.scss'
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper-bundle.min.js'
import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
// import Swiper from 'swiper';
const SwiperTop = () => {
  const swiperimg = [
    {
      key: 'home_bg1',
      imgs: ['/img/swiper/home_bg1.jpg']
    }, {
      key: 'home_bg2',
      imgs: ['/img/swiper/home_bg2.jpg']
    }, {
      key: 'home_bg3',
      imgs: ['/img/swiper/home_bg3.jpg']
    }, {
      key: 'home_bg4',
      imgs: ['/img/swiper/home_bg4.jpg']
    }, {
      key: 'home_bg5',
      imgs: ['/img/swiper/home_bg5.jpg']
    },
  ]
  const [swiperList] = useState(swiperimg);


  return (
    <>
      <div className="SwiperTop">
        <div className="mask"></div>
        <section className="hero-section">
          <h1>
            北京2020冬季奥运会
          </h1>
          <h2>2020 / 北京、延庆、张家口</h2>
        </section>
        <Carousel autoplay>
          {swiperList.map((item) => {
            return (
              <div className="swiper-slide" key={item.key}>
                <img src={item.imgs} alt='首页海报' />
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}
export default SwiperTop
