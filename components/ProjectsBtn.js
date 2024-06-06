//next image
import Image from 'next/image';

//next link
import Link from 'next/link';

//icons
import { HiArrowDownRight, HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
   <div className='mx-auto xl:mx-0'>
    <Link
     href= {'/work'} 
     className='relative w-[185px] h-[185px] flex justify-center
     items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
     >
     <Image
     src={'/myproject.png'} 
     width={148} 
     height={148} 
     alt=' ' 
     className='animate-spin-slow w-[81%] h-[85%] max-w-[148px] max-h-[148]' />
     <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 
     transition-all duration-300' />
   </Link>

  </div>
  );
};

export default ProjectsBtn;
