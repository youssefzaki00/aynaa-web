import Link from "next/link";
import Image from "next/image";
import { deviceParams } from "@/app/start/[device]/deviceData";
const unifiedColor = 'from-red-500 to-red-600 shadow-red-400';

export default function OtherDeviceButton({device,gen,soon}:deviceParams){
    return(
    
        <Link
            href={soon ? '/comingsoong' : `/start/${device}`}
            className={`border-4 border-transparent hover:border-orange-800 relative group p-6 lg:px-10 duration-300 transform text-gray-900 rounded-[30px] flex flex-col gap-5 justify-center items-center transition-all
                ${
                    soon
                    ?`hidden`
                    :`[]`
                }
            `}
            >
            <div className='flex flex-col justify-center items-center gap-1 relative'>
                {/* Floating Soft Glow Effect */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div
                            className={`w-[140px] h-[140px] rounded-full bg-opacity-30 opacity-0 group-hover:opacity-50 transition-all duration-500 blur-2xl ${unifiedColor}`}
                        />
                    </div>

                            {/* Device Image */}
                <div className='relative w-[60px] h-[60px] flex justify-center items-center transition-all duration-300 group-hover:scale-105'>
                <Image
                    src={require(`@/public/devices/black/black-${device}.svg`)}
                    alt={device}
                    className='object-contain drop-shadow-md transition-all duration-300'
                    width={120}
                    height={120}
                />
                </div>
                    <h3 className='text- font-bold capitalize transition-all duration-300'>
                    {device === 'windows'
                        ? 'ويندوز'
                        : device === 'router'
                        ? 'راوتر'
                        : device === 'android'
                        ? 'أندرويد'
                        : device}
                    </h3>
            </div>
        </Link>
    )
}