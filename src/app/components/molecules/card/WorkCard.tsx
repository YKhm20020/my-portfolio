import React from "react";
import Image from "next/image";

type WorkCardProps = {
    src: string;
    alt?: string;
    workTitle: string;
    knowledge: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ src, alt, workTitle, knowledge }) => {
    return (

        <a href="">
            <div className="flex justify-center w-full">
                <div className="relative group flex flex-col shadow-2xl rounded-xl overflow-hidden md:w-80 md:-ml-16">
                    <Image className="object-cover object-center w-full rounded-t-xl lg:h-60 md:h-48"
                        src={src}
                        alt={alt ?? workTitle}
                        width={600}
                        height={600} />
                    <div className="bg-white transition duration-500 ease-in-out delay-150 group-hover:translate-y-[-100px]">
                        <div className="px-6 mt-8 mb-4">
                            <h1 className="mt-4 mb-4 text-2xl font-semibold text-neutral-600">{workTitle}</h1>
                            <p className="text-base font-normal text-gray-500 leading-relax">{knowledge}</p>
                            <p className="text-base font-normal text-gray-500 leading-relax">{knowledge}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>

    );
};

export default WorkCard;