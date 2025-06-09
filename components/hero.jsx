"use client";
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  const [isScroll, setIsScrolled] = useState(false);
  useEffect(() => {
     const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;
        if (scrollPosition > scrollThreshold) {
            setIsScrolled(true)
        }else if (scrollPosition < scrollThreshold) {            
            setIsScrolled(false)
        }
     }
     window.addEventListener("scroll", handleScroll)
  }, []);
  return (
   <section className='w-full pt-36 md:pt-48 pb-10'>
      <div className='space-y-6 text-center'>
        <div className='space-y-6 mx-auto'>
            <h1 className='gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl'>Mentora a tool  <span className='text-red-400'>for</span>
                <br />
                <p className='zoomIn transition-all text-6xl tracking-normal'>Growth <span className='text-red-400'>And</span> Success</p> 
            </h1>
            <p className='rainbowText bg-amber-500'> Enhance your career with this tool find much better Jobs and having supported guidelines.</p>
        </div>
      <div className='space-x-5'>
          <Link href={"/dashboard"}>
             <Button size={'lg'} className={"px-8"}>Get Started</Button>
          </Link>
          <Link href="http://192.168.31.83:8288/runs">
             <Button variant={"outline"} size={'lg'} className={"px-8"}>Watch Demo</Button>
          </Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      </div>
      <div className='hero-image-wrapper mt-5 md:mt-0'>
        <div className={`${isScroll && "scrolled"} hero-image`}>
          <Image 
             alt='banner'
             src={require("../asset/banner.png")}
             className={`rounded-lg shadow-2xl  border mx-auto bg-contain`}
             priority
          />
        </div>
      </div>
      </div>
   </section>
  )
}

export default HeroSection