//next iimage
import Image from "next/image";

const TopLeftImg = () => {
  return (
  <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[300px] xl:w-[450px]
  opacity-50'>
    <img src='top-left-img.png' width='300px' height='450px' alt=' '/>
  </div>
  );
};

export default TopLeftImg;
