import React from 'react';
import Image from 'next/image';

export default function ImgBox({ src, description, width, height }) {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-200 dark:bg-slate-600 border border-t-2 border-r-2 border-l-2 border-transparent rounded-xl overflow-hidden">
            <Image src={src} alt={description} width={width} height={height} />
            <p className="text-xs">{description}</p>
        </div>
    );
}
