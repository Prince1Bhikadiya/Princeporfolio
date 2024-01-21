// components
import TestimonialSlider from "../../components/TestimonialSlider";
import ParticlesContainer from "../../components/ParticlesContainer";

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'



const Testimonials = () => {
  return (
  <div className='h-full bg-primary/30 py-32 text-center'>
    <div className='container mx-auto h-full flex flex-col justify-center'>
      {/* titile */}
      <motion.h2 
       variants={fadeIn('up', 0.3)} 
       initial='hidden' 
       animate='show'
       exit='hidden' 
       className='h2 mb-8 xl:mb-0'
       >
        What Clients <span className='text-accent'>Say.</span>
      </motion.h2>
      {/* slider */}
      <motion.div
        variants={fadeIn('up', 0.5)} 
        initial='hidden' 
        animate='show'
        exit='hidden' 
      >
        <TestimonialSlider />
        
      </motion.div>
      < ParticlesContainer />
    </div>
  </div>
  );
};

export default Testimonials;
