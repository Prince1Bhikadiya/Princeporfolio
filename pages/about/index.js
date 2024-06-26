import React, { useState } from 'react';
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAndroid,
  SiPython,
  SiR,
  SiTensorflow,
  SiScikitlearn,
  SiJupyter,
  SiSqlite,
  SiMysql,
  SiJira,
  // SiXml,
} from "react-icons/si";





//  about data
export const aboutData = [
  {

    title: 'skills',
    info: [
      {
        title: 'Data Science -',
        icons : [
          <SiPython key="1" />,
          <SiScikitlearn key="2" />,
          <SiTensorflow key="3" />,
          <SiR key="4" />,
          <SiJira key="5"/>,
          <SiJupyter key="6"/>,
        ],  
      },
      {
        title: 'Android Development -',
        icons: [
           <SiAndroid key="11" />,
           <SiMysql key="12"/>,
           <SiSqlite key="13"/>,
          // <SiJava />,
          // <SiXml />,
        ],
      },
    
      {
        title: 'Web Development -',
        icons: [
          <FaHtml5 key="21"/>,
          <FaCss3 key="22" />,
          <FaJs key="23" />,
          <FaReact key="24" />,
          <SiNextdotjs key="25" />,
          <SiFramer key="26" />,
          <FaWordpress key="27" />,
        ],
      },
      {
        title: 'UI/UX Design -',
        icons: [<FaFigma key="31" />, <SiAdobexd key="32" />, <SiAdobephotoshop key="33" />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '5 Star in Python HackerRank -',
        stage: '2022',
      },
      {
        title: '5 Star in Java HackerRank -',
        stage: '2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Self Employed',
        
      },
      {
        title: 'Augustcode Solutions',
        stage: '',
      },
      {
        title: 'Tracious Technology',
        stage: '',
      },
      {
        title: 'Invica Information Technology',
        stage: '',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Google Project Management: Professional Certificate -',
        stage: 'Google',
      },
      {
        title: 'Initiating and Planning Projects -',
        stage: 'University of California, Irvine - The Paul Merage School of Business',
      },
      {
        title: 'Python for Data Science Essential Training - ',
        stage: 'LinkedIn Learning',
      },
      {
        title: 'Visualizing Data with Microsoft Power BI -',
        stage: 'Great Learning',
      },
      {
        title: 'Application Development -',
        stage: 'Udemy',
      },
      
    ],
  },
  {
    title: 'University',
    info: [
      {
        title: 'Parul University',
        stage: 'Computer Science Engineering specification in Artificial Intelligence'
      }
    ],
  },
];
//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

//counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img*/}
      <motion.div
       variants={fadeIn('right', 0.2)} 
       initial='hidden' 
       animate='show' 
       exit='hidden'
       className='hidden xl:flex absolute bottom-0 -left-[370px]'
       >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row 
       gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2  
          variants={fadeIn('right', 0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='h2'
        >
            Captivating <span className='text-accent animate-pulse'>stories</span> birth 
            magnificent designs.
        </motion.h2>
          <motion.p 
           variants={fadeIn('right', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
        >
            
            Chat Assistant, our revolutionary AI-powered platform, 
            revolutionizes IT operations by seamlessly integrating 
            with existing systems to automate repetitive tasks, provide instant answers 
            to technical queries, and facilitate collaborative problem-solving.
            </motion.p>
            {/*counter*/}
            <motion.div 
             variants={fadeIn('right', 0.6)} 
             initial='hidden' 
             animate='show' 
             exit='hidden' 
             className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
             <div className='flex flex-1 xl:gap-x-6'>
              {/*experience*/}
              <div className='relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={-10} end={4} duration={5}    /> +
                 </div>
                 <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                 max-w-[100px]'>
                  Years of Experiences
                  </div>
                 </div> 
                              
             {/* clients */}
             <div className='relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={-10} end={50} duration={5}    /> +
                 </div>
                 <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                 max-w-[100px]'>
                  Satisfied Clients
                  </div>
                 </div>  
                  {/* Projects */}             
             <div className='relative flex-1 after:w-[1px] after:h-full
               after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={-10} end={100} duration={5}    /> +
                 </div>
                 <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                 max-w-[100px]'>
                  Finished Projects
                </div>
                </div>
                {/* awards */}
                <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={-10} end={5} duration={5}    /> +
                 </div>
                 <div className='text-xs uppercase tracking-[1px] leading-[1.4] 
                 max-w-[100px]'>
                  Winning Awards
              </div>    
           </div>  
       </div>
    </motion.div>
   </div> 

       {/* info*/ }
        <motion.div 
         variants={fadeIn('left', 0.4)} 
         initial='hidden' 
         animate='show' 
         exit='hidden' 
         className='flex flex-col w-full xl:max-w-[48%] h-[480px]'> 
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
              <div
               key={itemIndex} 
               className={`${
                index === itemIndex && 
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
              }  
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
           items-center xl:items-start '>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
              <div 
              key={itemIndex} 
              className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 '>
            {/* title */}
            <div className='font-light mb-2 md:mb-0 '>{item.title}</div>
            <div className='hidden md:flex'></div>
            <div>{item.stage}</div>
            <div className='flex gap-x-4 '>
                {/*icons */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div key={itemIndex} className='text-3xl text-white relative flex items-center group hover:text-accent transition-all duration-300 '>{icon}</div>;
                })}
               </div>
              </div>
              );
            } )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
