"use client";
import Image from "next/image";
import Link from 'next/link';

interface CardProps {
  backgroundImage?: string;
  color: string;
  url:string;
}



const CustomCard: React.FC<CardProps> = ({ backgroundImage,color,url }) => {
  return (
    <>
    <Link href={url}>
    <div
      className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6 min-h-[180px]"
      style={{
        background: `#${color}`,
      }}
    >
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <p className="text-theme-xs text-white/100 dark:text-white/90">¿Te gustaría hablar?</p>
          <h3 className="text-lg font-semibold text-white/100 dark:text-white/90">
           Estoy aquí para escucharte
          </h3>
        </div>
         {backgroundImage && (
          <Image
            className="w-full h-auto"
            src={backgroundImage}
            alt="Hablemos"
            width={500}
            height={300}
          />
        )}
      </div>
    </div>
    </Link>
    </>
  );
};

export default CustomCard;