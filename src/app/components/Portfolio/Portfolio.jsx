import PortfolioBg from '@/app/assests/portfolioBg.png';
import PortfolioImg1 from '@/app/assests/p1.png';
import PortfolioImg2 from '@/app/assests/p2.png';
import PortfolioImg3 from '@/app/assests/p3.png';
import AfterH1 from '@/app/assests/Underline_06.svg';
import Items from '../Portfolio/Items';
import Image from 'next/image';

const carouselSlides = [
    <div key={1} className="relative w-[265px] h-[140px] md:w-[518px] md:h-[280px] bg-white rounded-[16px] shadow-lg shadow-[#4a5568] flex flex-col items-center justify-center mx-auto text-white text-2xl mt-10 mb-5 md:mb-10">
        <div className="absolute top-[-30%] w-[191px] h-[126px] md:mt-12 md:w-[418px] md:h-[260px] md:top-[-36%] z-20">
            <Image src={PortfolioImg1} alt="Portfolio Image 1" layout="fill" />
        </div>
        {/* Container div to stack the headings vertically */}
        <div className="pt-16 flex flex-col items-center font-poppins">
            <h2 className="text-[14px] md:text-[24px] font-poppins font-semibold text-gradient-two pt-4 md:pt-[110px]">Eventos Premium</h2>
            <h2 className="text-[10px] md:text-[14px] font-poppins font-regular text-black mt-1">Elegante - Serio - Estatus</h2>
        </div>
    </div>,
    <div key={2} className="relative w-[265px] h-[140px] md:w-[518px] md:h-[280px] bg-white rounded-[16px] shadow-lg shadow-[#4a5568] flex flex-col items-center justify-center mx-auto text-white text-2xl mt-10 mb-5">
        <div className="absolute top-[-30%] w-[191px] h-[126px] md:mt-12 md:w-[418px] md:h-[260px] md:top-[-36%] z-20">
            <Image src={PortfolioImg2} alt="Portfolio Image 2" layout="fill" />
        </div>
        {/* Container div to stack the headings vertically */}
        <div className="pt-16 flex flex-col items-center">
            <h2 className="text-[14px] md:text-[24px] font-poppins font-semibold text-gradient-two pt-4 md:pt-[110px]">Mi Portal U</h2>
            <h2 className="text-[10px] md:text-[14px] font-poppins font-regular text-black mt-1">Amigable - Dashboard - Simple</h2>
        </div>
    </div>,
    <div key={3} className="relative w-[265px] h-[140px] md:w-[518px] md:h-[280px] bg-white rounded-[16px] shadow-lg shadow-[#4a5568] flex flex-col items-center justify-center mx-auto text-white text-2xl mt-10 mb-5">
        <div className="absolute top-[-30%] w-[191px] h-[126px] md:mt-12 md:w-[418px] md:h-[260px] md:top-[-36%] z-20">
            <Image src={PortfolioImg3} alt="Portfolio Image 3" layout="fill" />
        </div>
        {/* Container div to stack the headings vertically */}
        <div className="pt-16 flex flex-col items-center">
            <h2 className="text-[14px] md:text-[24px] font-poppins font-semibold text-gradient-two pt-4 md:pt-[110px]">A&C App</h2>
            <h2 className="text-[10px] md:text-[14px] font-poppins font-regular text-black mt-1">Elegante - Serio - Estatus</h2>
        </div>
    </div>,


];


export default function Portfolio() {
    return (
        <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${PortfolioBg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='pl-14'>
                <h1 className=" text-[24px] md:text-[64px] font-poppins font-semibold text-gradient-three">Portfolio</h1>
                <Image
                    src={AfterH1}
                    className='mb-4 w-[68px] h-[10px] md:w-[166px] md:h-[23px]  ml-10 md:ml-[120px] md:mb-8'
                    alt='Decorative Img'
                />
            </div>
            <div className="mb-5">
                <Items autoSlide autoSlideInterval={3000}>
                    {carouselSlides}
                </Items>
            </div>
        </div>
    );
}