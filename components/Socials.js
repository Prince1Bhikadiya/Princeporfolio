// links
import Link from 'next/link';

//icons
import {
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine,  
  RiBehanceLine, 
  RiPinterestLine,
  RiLinkedinLine,
  RiDribbbleLine,
  
  } from 'react-icons/ri'; 



  // return(
  //   <div className='flex flex-auto items-center gap-x-5 text-lg' >
  //     <Link href={''} className='hover:text-accent transition-all duration-300 '>
  //       <RiYoutubeLine />
  //     </Link>
  //     <Link href={''} className='hover:text-accent transition-all duration-300 '>
  //       <RiInstagramLine />
  //     </Link>
  //     <Link href={''} className='hover:text-accent transition-all duration-300 '>
  //       <RiFacebookLine />
  //     </Link>
  //     <Link href={''} className='hover:text-accent transition-all duration-300 '>
  //       <RiDribbbleline />
  //     </Link>
  //     <Link href={''} className='hover:text-accent transition-all duration-300 '>
  //       <RiBehanceLine />
  //     </Link>
  //     <Link href={''} className='hover:text-accent transition-all duration-300 '>
  //       <RiPinterestLine />
  //     </Link>
  //   </div>
  // );
  const Socials = () => {
    return(
      <div className='flex items-center  gap-x-5 text-lg' >
        <Link href={'https://www.linkedin.com/company/prince-solution/'} alt ='' className='hover:text-accent transition-all duration-300 '>
          <RiLinkedinLine/>
        </Link>
        <Link href={'https://www.facebook.com/profile.php?id=61562212764991'} alt ='' className='hover:text-accent transition-all duration-300 '>
          <RiFacebookLine/>
        </Link>
        <Link href={'https://www.instagram.com/prince_solutions/'} alt ='' className='hover:text-accent transition-all duration-300 '>
          <RiInstagramLine/>
        </Link>
        
        <Link href={'https://www.youtube.com/@princebhikadiya1627'} alt ='' className='hover:text-accent transition-all duration-300 '>
          <RiYoutubeLine/>
        </Link>
        <Link href={'https://www.behance.net/a'} alt ='' className='hover:text-accent transition-all duration-300 '>
          <RiBehanceLine/>
        </Link>
        <Link href={'https://in.pinterest.com/princebhikadiya304/'} alt ='' className='hover:text-accent transition-all duration-300 '>
          <RiPinterestLine/>
        </Link>
        <Link href={'https://dribbble.com/PRINCE1BHIKADIYA'} alt ='' className='hover:text-accent transition-all duration-300 '>
          <RiDribbbleLine/>
        </Link>
      
      </div>
    );

  };

export default Socials;