"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Typed from "typed.js";


export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null);

useEffect(() => {
  if (!typedRef.current) return;

  const typed = new Typed(typedRef.current, {
    strings: [
      "Frontend Developer.", 
      "React Developer.", 
      "Web Designer."
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });

  return () => {
    typed.destroy();
  };
}, []);

  return (
    <>
    <NavBar />

      <main className="w-[95%] mt-5">
        <section className="flex flex-col-reverse md:flex-col-reverse items-center justify-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-[30px] font-semibold text-[#b81bf6] mb-2.5 align-center justify-center">
              <h1 className="align-center md:align text-center">Rachael Vallee</h1>
              <h2 className="type text-3xl text-center md:text-center  w-[420px] max-w-full min-h-[40px]">
                I am a <span ref={typedRef}></span>
              </h2>
            </div>

            <div className="mt-4 flex gap-4 fixed md:bottom-40 left-0 right-0 justify-center md:justify-center">
              <Link href="mailto:rachaelvallee2019@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src="/email.svg" alt="Email" />
              </Link>
              <Link href="https://www.linkedin.com/in/rachael-vallee-3b215a19b" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src="/linkedin.svg" alt="LinkedIn" />
              </Link>
              <Link href="https://github.com/rvallee1017" target="_blank" rel="noopener noreferrer">
                <img className="w-10 h-10" src="/github.svg" alt="Github" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img className="rounded-full w-80 h-80 object-cover" src="rachael.png" alt="Rachael Vallee" />
          </div>
        </section>
      </main>

      <footer className="mt-5 text-center fixed bottom-5 left-0 right-0 text-[#b81bf6] py-2">
        <p>
          Made with <span style={{ color: "red" }}>❤</span> and &lt;/&gt; by Rachael Vallee.
        </p>
      </footer>
    </>
  );
}
