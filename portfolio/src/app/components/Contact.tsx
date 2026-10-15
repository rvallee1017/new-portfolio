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
    <section className="md:m-[10px] md:p-[20px] md:w-full md:h-full w-full h-full p-[40px]" style={{ color: "var(--text-primary)" }}>
      <div className="flex justify-start w-full items-center mb-[15px] p-2 rounded-md" style={{ backgroundColor: "var(--bg-card)" }}>
        <h3 className="pl-[25px] text-[20px] md:text-3xl" style={{ color: "var(--text-primary)" }}>Contact</h3>
        <div className="w-[50px] h-[2px] m-[10px]" style={{ backgroundColor: "var(--border-color)" }}></div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit rounded-md h-fit md:w-[668px] md:text-xl mx-auto m-block-[15px] mb-12" style={{ backgroundColor: "var(--bg-card)" }}>
        <div className="flex flex-col items-center gap-4 p-6 w-full max-w-[400px] rounded-3xl" style={{ backgroundColor: "var(--bg-card-inner)", border: "1px solid var(--text-primary)" }}>
          <h3 className="text-xl font-bold align-center p-0 m-0 md:text-3xl" style={{ color: "var(--text-primary)" }}>
            Get In Touch
          </h3>
          <input
            className="align-center rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-purple-300"
            style={{ backgroundColor: "var(--bg-input)", color: "var(--text-primary)", borderColor: "var(--text-primary)" }}
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="align-center rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-purple-300"
            style={{ backgroundColor: "var(--bg-input)", color: "var(--text-primary)", borderColor: "var(--text-primary)" }}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="align-center rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-purple-300"
            style={{ backgroundColor: "var(--bg-input)", color: "var(--text-primary)", borderColor: "var(--text-primary)" }}
            name="subject"
            type="text"
            placeholder="Subject"
            required
          />
          <textarea
            className="align-center rounded-md p-2 border focus:outline-none focus:ring-2 focus:ring-purple-300"
            style={{ backgroundColor: "var(--bg-input)", color: "var(--text-primary)", borderColor: "var(--text-primary)" }}
            name="message"
            placeholder="Message"
            rows={4}
            required
          />
          <button
            className="font-bold py-2 px-4 rounded-md transition duration-300 cursor-pointer"
            style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-primary)" }}
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit rounded-md h-fit md:w-[668px] md:text-xl mx-auto m-block-[15px] mb-12 text-3xl" style={{ backgroundColor: "var(--bg-card)" }}>
        <h3 className="text-xl font-bold align-center p-0 m-0 md:text-3xl" style={{ color: "var(--text-primary)" }}>
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
      <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit rounded-md h-fit md:w-[668px] md:text-xl mx-auto m-block-[15px] mb-12" style={{ backgroundColor: "var(--bg-card)" }}>
        <h3 className="text-xl font-bold align-center p-0 m-0 md:text-3xl" style={{ color: "var(--text-primary)" }}>
          Address
        </h3>
          <Link
            href="https://maps.app.goo.gl/ay4wKztY8BtiRGF18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-20 h-20" src="/location.svg" alt="Google Maps" />
          </Link>{" "}
          <p style={{ color: "var(--text-primary)" }}>Lockesburg, AR 71846</p>
        </div>
    </section>
  );
}
