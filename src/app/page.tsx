"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.scss";

const lightColor = "red";
const gradientSize = "16px";

export default function Home() {
  const pageRef = React.useRef<HTMLDivElement>(null);
  const sunRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav a");

    function handleMouseMove(this: HTMLElement, e: MouseEvent) {
      const x = e.pageX - this.offsetLeft;
      const y = e.pageY - this.offsetTop;
      const xy = x + "px " + y + "px";
      const originalBG = window.getComputedStyle(this).backgroundColor;
      const bgWebKit = `-webkit-gradient(radial, ${xy}, 0, ${xy}, 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), ${originalBG}`;
      const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, ${lightColor} 0%, ${originalBG} ${gradientSize}px)`;

      this.style.background = bgWebKit;
      this.style.background = bgMoz;
    }

    function handleMouseLeave(this: HTMLElement) {
      const originalBG = window.getComputedStyle(this).backgroundColor;
      this.style.background = originalBG;
    }

    navLinks.forEach((link: any) => {
      link.addEventListener("mousemove", handleMouseMove);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      navLinks.forEach((link: any) => {
        link.removeEventListener("mousemove", handleMouseMove);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;
    const sun = sunRef.current;
    if (sun && x && y) {
      sun.style.top = `${y - 450}px`;
      sun.style.left = `${x - 450}px`;
      sun.style.transition = `1100ms all ease-out`;
    }
  };

  return (
    <main className={`nav ${styles.main}`} onMouseMove={handleMouseMove}>
      <div className="sun" ref={sunRef} />
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
