'use client';
import { FunctionComponent, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const HomeInfo: FunctionComponent = () => {
  const t = useTranslations();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    function followMouse(e: MouseEvent) {
      if (imageRef && imageRef.current) {
        imageRef.current.style.left = e.x + 10 + 'px';
        imageRef.current.style.top = e.y + 10 + 'px';
      }
    }

    document.addEventListener('pointermove', followMouse);
    if (imageRef?.current?.style.display === 'block') {
      document.addEventListener('pointermove', followMouse);
    }
    return () => {
      document.removeEventListener('pointermove', followMouse);
    };
  }, [imageRef]);

  return (
    <div
      id="about"
      className={
        'flex justify-center md:justify-start h-screen items-center flex-col gap-8 md:pt-[83px]'
      }
    >
      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col gap-4">
          <span className="flex gap-2 text-4xl font-bold">
            <p className="">{t('homeGreetings')} </p>
            <h1>{t('NAME')}</h1>
          </span>
          <p>{t('expertice')}</p>
          <p className="max-w-[500px]">{t('homeDescription')}</p>
        </div>
        <Image
          className="rounded-full shadow-xl"
          src="/images/me.jpg"
          ref={imageRef}
          alt="a"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
