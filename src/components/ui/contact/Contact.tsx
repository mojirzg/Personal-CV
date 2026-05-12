'use client';
import { FormEvent, FunctionComponent, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Textarya } from '@/components';
import { CONTACT_INFO } from '@/consts';
import Link from 'next/link';

interface Props {}

const SOCIALS_DETAILS = [
  { link: CONTACT_INFO.linkedIn, name: 'linkedIn' },
  { link: CONTACT_INFO.github, name: 'github' },
  { link: CONTACT_INFO.gitlab, name: 'gitlab' },
  { link: CONTACT_INFO.instagram, name: 'instagram' },
];

export const Contact: FunctionComponent<Props> = () => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations();
  const [text, setText] = useState(t('send'));
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    setLoading(true);
    setText(t('sending'));

    const form = e.currentTarget;
    if (!form) return;

    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        .value,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setText(t('sent'));
      })
      .catch(() => {
        setText(t('error'));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      id="contact"
      className="flex gap-y-10 relative flex-col md:flex-row pt-[32px] md:pt-[93px] pb-[132px] md:pb-[93px] md:px-[120px] columns-1 md:columns-3 px-4 h-fit"
    >
      <div className="flex flex-col flex-1 gap-4 md:pe-10">
        <p className="text-5xl md:text6xl text-content-secondary">
          {t('contact')}
        </p>
        <p className="text-xl md:text3xl text-content-secondary">
          {t('contactDescription')}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1  py-10 md:py-0  px-8 md:px-[120px] relative">
        <LineDevider />
        <form
          className="flex flex-col w-full gap-3"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input name="name" placeholder={t('yourName')} required />
          <Input
            name="email"
            type="email"
            placeholder={t('yourEmail')}
            required
          />
          <Textarya name="message" placeholder={t('yourMessage')} />
          <Button
            className="self-end mt-6 uppercase"
            type="submit"
            loading={loading}
          >
            {text}
          </Button>
        </form>
        <LineDevider right />
      </div>
      <div className="flex flex-col items-start  ms:items-center justify-start flex-1 gap-4 md:ps-10 [&>a]:w-[160px] [&>p]:w-[160px]">
        <p className="text-base uppercase text-content-secondary ">
          {t('contactInfo')}
        </p>
        <Link
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-lg font-bold text-content-primary "
        >
          {CONTACT_INFO.email}
        </Link>
        {/* <Link
          href={`tell:${CONTACT_INFO.phone.replaceAll(' ', '')}`}
          className="text-lg font-bold text-content-primary"
        >
          {CONTACT_INFO.phone}
        </Link> */}
        <div className="flex flex-1 gap-[10px] justify-start items-center w-[160px]">
          <Link target="_blank" href={CONTACT_INFO.telegram}>
            <i
              className={`icon-telegram text-content-secondary text-2xl cursor-pointer transition-transform duration-[0.1s] ease-[ease] hover:transition-transform hover:duration-[0.1s] hover:ease-[ease] hover:scale-110`}
            />
          </Link>
          <Link target="_blank" href={CONTACT_INFO.whatsapp}>
            <i
              className={`icon-whatsapp text-content-secondary text-2xl cursor-pointer transition-transform duration-[0.1s] ease-[ease] hover:transition-transform hover:duration-[0.1s] hover:ease-[ease] hover:scale-110`}
            />
          </Link>
        </div>
        <p className="text-base text-content-secondary mt-[55px] uppercase ">
          {t('socials')}
        </p>
        {SOCIALS_DETAILS.map((item) => (
          <Link
            target="_blank"
            key={item.link}
            href={item.link}
            className="text-lg font-bold text-content-primary"
          >
            {t(item.name)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;

const LineDevider = ({ right = false }: { right?: boolean }) => {
  return (
    <div
      className={`md:h-[100%] h-[1px] md:w-[1px] w-[100%] absolute  r-0 line ${
        right
          ? ' top-0 right-auto md:right-0 animation-delay-5_5 '
          : ' bottom-0 md:left-0 '
      }`}
    />
  );
};
