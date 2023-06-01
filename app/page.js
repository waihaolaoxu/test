'use client';
import React, { useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getText } from "@/app/lang"
import Advantage from '@/app/ui/Advantage'

// Import Swiper styles
import 'swiper/css/bundle';


import Image from 'next/image'
import styles from './page.module.scss';



// function eventHandle() {
//   alert("点击了")
// }

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  // 服务内容
  const SERVICE = {
    cn: {
      tit: "服务内容"
    },
    en: {
      tit: "Service Content"
    },
    de: {
      tit: "Service-Inhalte"
    },
  }

  // 服务半径
  const SERVICE_RADIUS = {
    cn: {
      tit: "服务半径"
    },
    en: {
      tit: "Service Radius"
    },
    de: {
      tit: "Dienstradius"
    },
  }

  return (

    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        // 上下按钮
        navigation={true}
        // 间距，通栏时没用
        spaceBetween={50}
        // 一屏显示几张
        slidesPerView={1}
        // 分页
        pagination={true}
        // 居中显示
        centeredSlides={true}
        // 无限循环
        loop={true}
        // 自动播放
        autoplay={{
          // 轮播间隔
          delay: 3000,
          // false 操作之后还能动
          disableOnInteraction: false,
        }}
        // 进度
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.banner}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <div className={styles['autoplayProgress']} slot="container-end">
          <svg className={styles['autoplayProgress_svg']} viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <h2 className="block-tit">{SERVICE[process.env.lang].tit}</h2>
      <h2 className="block-tit">{SERVICE_RADIUS[process.env.lang].tit}</h2>
      <div className='content'>
        <Advantage></Advantage>
      </div>

    </>
  )
}
