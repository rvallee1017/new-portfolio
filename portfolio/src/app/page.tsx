import Link from "next/dist/client/link";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
    <NavBar />

      <main className="w-[95%] mx-auto mt-5">
        <section className="flex flex-row-reverse items-center justify-around">
          <div className="text-left">
            <div className="text-[30px] font-semibold text-[#b81bf6] mb-2.5">
              <h1 className="m-0">Rachael Vallee</h1>
              <div className="type">
                I am a <span id="element">Frontend Developer.</span>
                <span className="typed-cursor typed-cursor--blink" aria-hidden="true">
                  |
                </span>
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              <Link href="mailto:rachaelvallee2019@gmail.com">
                <img src="email.svg" id="email" alt="Email" />
              </Link>
              <Link href="https://www.linkedin.com/in/rachael-vallee">
                <img src="linkedin.svg" id="linkedin" alt="LinkedIn" />
              </Link>
              <Link href="https://github.com/rvallee1017">
                <img src="github.svg" id="github" alt="Github" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img src="rachael.png" id="profile-pic" alt="Rachael Vallee" />
          </div>
        </section>
      </main>

      <footer className="mt-5 text-center">
        <p>
          Made With <span id="Heart">❤</span> and &lt;/&gt; by Rachael Vallee.
        </p>
      </footer>
    </>
  );
}
