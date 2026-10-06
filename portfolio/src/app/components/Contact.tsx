"use client";

import { useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function ContactPage() {
    const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      "service_w4fwdlb",
      "template_s31hblj",
      form.current,
      {
        publicKey: "n8h9P_GHHt-J6hERZ",
      }
    )
    .then(() => {
      alert("Message sent!");
      form.current?.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong. Please try again.");
    });
};

  return (
    <section className="md:m-[10px] md:w-full md:h-full md:p-[20px] m-[40px] w-full h-full p-[40px] text-[#b81bf6]">
      <div className="flex justify-start w-full items-center mb-[15px] bg-[#26262c] p-2 rounded-md">
        <h3 className="text-[#b81bf6] pl-[25px] text-[20px] md:text-3xl">Contact</h3>
        <div className="w-[50px] h-[2px] bg-white m-[10px]"></div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-auto m-block-[15px] mb-12">
        <div className="flex flex-col items-center gap-4 p-6 w-full max-w-[400px] border border-[#b81bf6] bg-[#202021] rounded-3xl">
          <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">
            Get In Touch
          </h3>
          <input
            className="bg-[#3a3a3d] text-[#b81bf6] placeholder:text-[#b81bf6] border border-[#b81bf6] focus:outline-none focus:ring-2 focus:ring-purple-300 align-center rounded-md p-2"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="bg-[#3a3a3d] text-[#b81bf6] placeholder:text-[#b81bf6] border border-[#b81bf6] focus:outline-none focus:ring-2 focus:ring-purple-300 align-center rounded-md p-2"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="bg-[#3a3a3d] text-[#b81bf6] placeholder:text-[#b81bf6] border border-[#b81bf6] focus:outline-none focus:ring-2 focus:ring-purple-300 align-center rounded-md p-2"
            name="subject"
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            className="bg-[#3a3a3d] text-[#b81bf6] placeholder:text-[#b81bf6] border border-[#b81bf6] focus:outline-none focus:ring-2 focus:ring-purple-300 align-center rounded-md p-2"
            name="message"
            placeholder="Message"
            rows={4}
            required
          />
          <button
            className="bg-[#b81bf6] text-[#26262c] hover:bg-white hover:text-[#b81bf6] font-bold py-2 px-4 rounded-md transition duration-300"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-auto m-block-[15px] mb-12 text-3xl">
        <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">
          Social
        </h3>
        <div className="mt-4 flex gap-4 justify-center ">
          <Link
            href="mailto:rachaelvallee2019@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-10 h-10" src="/email.svg" alt="Email" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rachael-vallee-3b215a19b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-10 h-10" src="/linkedin.svg" alt="LinkedIn" />
          </Link>
          <Link
            href="https://github.com/rvallee1017"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-10 h-10" src="/github.svg" alt="Github" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-auto m-block-[15px] mb-12">
        <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">
          Address
        </h3>
          <Link
            href="https://maps.app.goo.gl/ay4wKztY8BtiRGF18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-20 h-20" src="/location.svg" alt="Google Maps" />
          </Link>{" "}
          <p className="text-[#b81bf6]">Lockesburg, AR 71846</p>
        </div>
    </section>
  );
}
