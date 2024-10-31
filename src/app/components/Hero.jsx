import Image from "next/image";
import HeroBg from '../assests/Hero.png';
import HeroImage from '../assests/Allura UI Windows.png';
import Arrow from '../assests/Arrow_01.png'
import HeadingImg from '../assests/Highlight_05.png'

export default function Hero() {
  return (
    <div className="relative  w-full grid grid-cols-1">
      {/* Background Image - visible only on large screens */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src={HeroBg}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content on Top of Background Image (always visible) */}
      <div className="relative z-10 ml-9 mt-16 h-full font-poppins text-black md:mx-[140px] lg:mt-[160px]">
        <div className="ml-[190px]">
        <Image
        src={HeadingImg}
        alt="Heading Img"
        />
        </div>
        <h1 className="text-[55px] w-[372px] mt-[-30px] font-poppins font-semibold leading-[105%] md:text-[96px] md:w-[650px]">Hi, I am Cristian 🎨</h1>
        <p className="mt-10 text-[10px] font-light w-[215px] md:w-[375px] md:text-[14px]">
          I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users; The idea is not to create an interface for creating it, it is that users prefer you because your product is easy to use.
        </p>
        <button className="mt-10 bg-gradient-to-r from-gradient-two to-gradient-three text-white px-[10px] py-[10px] text-[14px] rounded-[10px] md:px-[50px] md:py-[20px] md:text-[24px]">
          ¡Contact Me!
        </button>
        <div className=" ml-[160px] mt-[-60px] md:ml-[245px] md:mt-[-75px]">
          <Image
            src={Arrow}
            alt="Arrow"
          />
        </div>
      </div>

      {/* Second Section (visible on large screens only) */}
      <div className="hidden lg:block absolute bottom-0 left-100 right-0 z-20 h-[80vh] w-[50%] lg:top-2 ">
        <Image
          src={HeroImage}
          alt="Overlay Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-80"
        />
      </div>
    </div>
  );
}
