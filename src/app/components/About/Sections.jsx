import Image from "next/image"
import Icon1 from '@/app/assests/medal-star.svg'
import Icon2 from '@/app/assests/Icono1.png'
import CenterIcon from '@/app/assests/Mask group.png'
export default function Sections() {
    return (
        <div className="grid grid-cols-3 mx-auto  bg-white h-[109px] w-[330px] mt-[48px] rounded-[18px] md:w-[675px] md:h-[207px] lg:h-[363px] lg:w-[1150px]">
            <div className="w-[78px] h-[79px] mx-auto pt-3 md:w-[145px] md:h-[147px]  lg:w-[188px] lg:h-[263px] lg:pt-10  ">
                <div className="flex justify-center">
                    <Image
                        src={Icon1}
                        alt="Icon 1"
                        className="w-[36px] h-[36px] md:w-[65px] md:h-[65px] lg:w-[118px] lg:h-[118px]"
                    />
                </div>
                <h2 className=" text-[19px] md:text-[36px] lg:text-[64px] font-poppins font-bold flex justify-center">100%</h2>
                <h2 className='text-[10px] md:text-[20px] lg:text-[36px] font-poppins font-semibold flex justify-center'>Responsibilty</h2>
            </div>
            <div className="h-[133px] w-[97px] md:w-[182px] md:h-[250px] lg:h-[443px] lg:w-[324px] bg-gradient-to-b from-gradient-three to-gradient-two text-white rounded-[14px] md:rounded-[22px] mt-[-50px] mx-auto md:mt-[-80px] lg:mt-[-120px] lg:rounded-[55px]">
                <div className="mt-[-10px]  ">
                    <Image
                        src={CenterIcon}
                        alt="center Icon"
                        className="md:w-[182.3px] md:h-[125.7px] lg:w-[324px] lg:h-[223px]"
                    />
                </div>
                <h2 className=" text-[19px] md:text-[36px] lg:text-[64px] font-poppins font-bold flex justify-center">100%</h2>
                <h2 className='text-[10px] md:text-[20px] lg:text-[36px] font-poppins font-semibold flex justify-center' >Colombian</h2>
            </div>
            <div className="w-[57px] h-[79px] mx-auto pt-3 md:w-[145px] md:h-[147px] lg:w-[188px] lg:h-[263px] lg:pt-10">
                <div className="flex justify-center">
                    <Image
                        src={Icon2}
                        alt="Icon 1"
                       className="w-[36px] h-[36px] md:w-[65px] md:h-[65px] lg:w-[118px] lg:h-[118px]"
                    />
                </div>
                <h2 className=" text-[19px] md:text-[36px] lg:text-[64px] font-poppins font-bold flex justify-center">100%</h2>
                <h2 className='text-[10px] md:text-[20px] lg:text-[36px] font-poppins font-semibold flex justify-center'>Puntuality</h2>
            </div>
        </div>
    )
}
