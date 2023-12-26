import React from 'react';
import Image from 'next/image';

export default function ImgBox({ src, description, width, height }) {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-100 dark:bg-slate-700 border border-t-2 border-r-2 border-l-2 border-transparent rounded-xl overflow-hidden shadow-xl shadow-slate-400 dark:shadow-slate-900">
            <Image src={src} alt={description} width={width} height={height} />
            <p className="text-xs font-bold">{description}</p>
        </div>
    );
}
