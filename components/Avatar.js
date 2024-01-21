{ /* next image */ }   
import Image from 'next/image' 


const Avatar = () => {
  return (
  <div className='hidden xl:flex  xl:max-w-none' style={{
    width: '600px', height: '600px'
  }}>
     <Image
       src={'/fffimg.png'}
       width={737}
       height={600} 
       alt=' '
       className=' translate-z-0 w-full h-full '
      />
  </div>
  );
};

export default Avatar;
