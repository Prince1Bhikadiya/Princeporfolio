// testimonial data
const testimonialSlides = [
  {
    image: '/t-avt-1.png',
    name: '	Kelly',
    position: 'Las Vegas, USA',
    message:
      'Working with Prince Bhikadiya was an absolute pleasure. Their attention to detail and creative flair transformed my vision into a stunning reality for my business.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Rebecca ',
    position: 'San Diego',
    message:
      'I highly recommend Prince Bhikadiya for anyone seeking a top-notch web designer and Application Designer. Their dedication, creativity, and collaborative approach make them an invaluable asset to any project.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Ramchandra ',
    position: 'Mumbai, India',
    message:
      'From the initial consultation to the final launch, Prince Bhikadiya demonstrated unwavering commitment and skill. My website not only looks fantastic but also performs flawlessly',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jack',
    position: 'Australia',
    message:
      'Choosing Prince Bhikadiya for my portfolio website was a game-changer. They seamlessly blended aesthetics with functionality, creating a platform that truly represents my brand.',
  },
];

// import swiper react 
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import {FaQuoteLeft} from 'react-icons/fa';  

//next image
import Image from 'next/image';


const TestimonialSlider = () => {
  return (
     <Swiper 
       navigation={true}
       pagination={{
       clickable: true,
    }}
    modules={[Navigation, Pagination ]}
    className='h-[400px]'
  >
    {testimonialSlides.map((person, index)=> {
        return (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row
           gap-x-8 h-full px-16'>
            
            {/*avatar , name , position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center 
            items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/*avatar*/}
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt=' '/>
                </div>
                {/*name */}
                <div className='text-lg'>{person.name}</div>
                {/*position */}
                <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
              </div>
            </div>
            {/* quote & message */}
            <div className='flex-1 flex flex-col justify-center
             before:w-[1px] xl:before:bg-white/20 xl:before:absolute
              xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              {/*quote icon */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
                 md:mx-0'/>
              </div>
              {/* message */}
              <div className='xl:text-lg text-center md:text-left '>{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
        );
      })}
  </Swiper>
  );
};


export default TestimonialSlider;


