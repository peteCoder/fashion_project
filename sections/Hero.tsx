import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto relative hero-linear-gradient rounded-[20px]'>
            <div className='w-full h-[30vh] lg:h-[619px] relative'>
                <div id='eclipse-big' className="bg-[#FFFFFF] w-[250px] h-[250px] sm:w-[294px] sm:h-[294px] lg:w-[499.88px] lg:h-[499.88px] rounded-full absolute  right-[50%] center-item-hero top-[60%] lg:-right-4 lg:-top-4"></div>
            </div>
            <div className='absolute top-20 lg:top-[30%] left-4 lg:left-24 z-[1000]  space-y-3 text-center sm:text-left'>
                <h3 className='text-[#23A6F0] font-bold text-[16px] '>SUMMER 2020</h3>
                <h3 className='text-[#252B42] text-[35px] md:text-[58px] sm:text-[40px] text-center sm:text-left font-bold'>NEW COLLECTION</h3>
                <p className='text-[#737373] text-[18px] md:text-[20px] text-center sm:text-left sm:max-w-[369px] mx-auto sm:mx-0'>
                    We know how large objects will act, 
                    but things on a small scale.
                </p>
                <Link className="px-7 bg-[#23A6F0] py-3 rounded-[5px] text-white inline-block" href="/">Shop now</Link>
            </div>

            <div className='lg:absolute lg:-right-4 lg:bottom-0 '>
                <div className='relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:w-[500px] md:h-[500px] mx-auto lg:mr-auto lg:w-[600px] lg:h-[600px]'>
                    <Image
                        src="/images/hero1.png"
                        alt="hero1"
                        fill
                        className=''
                    />
                    <div className="bg-[#977DF4] h-[15.26px] w-[15.26px] absolute rounded-full lg:right-3 xl:-right-3 top-[25%]"></div>
                </div>
            </div>

            <div className="bg-[#ffffff] h-[31.24px] w-[31.24px] absolute rounded-full right-0 top-[40%]"></div>
            <div className="bg-[#ffffff] h-[31.24px] w-[31.24px] absolute rounded-full right-0 top-[40%]"></div>
            
            <div className="bg-[#977DF4] h-[15.26px] w-[15.26px] absolute rounded-full right-[37%] top-[67%]"></div>
        </div>
    )
}

export default Hero