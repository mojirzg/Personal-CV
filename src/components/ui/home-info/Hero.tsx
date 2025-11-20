'use client';
import { FunctionComponent, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const Hero: FunctionComponent = () => {
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
        'flex md:justify-center md:justify-start h-screen items-center flex-col gap-8 md:pt-[83px] pt-10'
      }
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-around w-full">
        <div className="flex flex-col gap-4 px-8">
          <span className="flex gap-2 text-4xl font-bold mt-8">
            <p className="">{t('homeGreetings')} </p>
            <h1>{t('NAME')}</h1>
          </span>
          <p className="text-sm -mt-2 opacity-70">{t('expertice')}</p>
          <p className="md:max-w-[500px]">{t('homeDescription')}</p>
        </div>
        <Image
          className="rounded-full shadow-xl w-64 h-64 lg:w-[30vw] h-[auto] aspect-square"
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
