
export default function Education() {
  return (
    <section className="md:flex md:justify-center md:items-center md:gap-10 mt-10 md:mx-10 block flex flex-col justify-center items-center gap-10 text-[16px] transition-colors duration-300">
      <div className="flex justify-start w-full items-center mb-[15px] p-2 rounded-md transition-colors duration-300" style={{ backgroundColor: "var(--bg-card)" }}>
        <h3 className="pl-[25px] text-[20px] md:text-3xl transition-colors duration-300" style={{ color: "var(--text-primary)" }}>Education & Skills</h3>
        <div className="w-[50px] h-[2px] m-[10px] transition-colors duration-300" style={{ backgroundColor: "var(--border-color)" }}></div>
      </div>
      <div className="w-full flex flex-col  justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4  md:fit rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] transition-colors duration-300" style={{ backgroundColor: "var(--bg-card)" }}>
          <h3 className="text-xl font-bold align-center p-0 m-0 md:text-3xl transition-colors duration-300" style={{ color: "var(--text-primary)" }}>Education</h3>
          <div className="w-[150px] h-[2px] m-[10px] opacity-50 transition-colors duration-300" style={{ backgroundColor: "var(--border-color)" }}></div>
          <ul style={{ color: "var(--text-primary)" }} className="transition-colors duration-300">
            <li>
              <i className="arrow">&gt; </i>
              <strong>Certificate:</strong> Software Engineering
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Frontend Simplified, Software Engineering Program</strong>
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Date:</strong> April, 2026 - Present
            </li>
            <div className="w-[150px] h-[2px] m-[10px] opacity-50 transition-colors duration-300" style={{ backgroundColor: "var(--border-color)" }}></div>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Certificate:</strong> Foundations of Cybersecurity
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Coursera</strong>
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Date:</strong> January, 2026
            </li>
            <div className="w-[150px] h-[2px] m-[10px] opacity-50 transition-colors duration-300" style={{ backgroundColor: "var(--border-color)" }}></div>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Certificate:</strong> Play It Safe: Manage Security Risks
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Coursera</strong>
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Date:</strong> January, 2026
            </li>
            <div className="w-[150px] h-[2px] m-[10px] opacity-50 transition-colors duration-300" style={{ backgroundColor: "var(--border-color)" }}></div>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Certificate:</strong> Connect and Protect: Networks and Network Security
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Coursera</strong>
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Date:</strong> January, 2026
            </li>
            <div className="w-[150px] h-[2px] m-[10px] opacity-50 transition-colors duration-300" style={{ backgroundColor: "var(--border-color)" }}></div>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Certificate:</strong> Tools of the Trade: Linux and SQL
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Coursera</strong>
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Date:</strong> April, 2026
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4  md:h-[400px] rounded-md h-fit md:w-[668px] md:text-xl mx-12 mb-12 transition-colors duration-300" style={{ backgroundColor: "var(--bg-card)" }}>
          <h3 className="text-xl font-bold align-center p-0 m-0 md:text-3xl transition-colors duration-300" style={{ color: "var(--text-primary)" }}>Skills</h3>
          <div className="w-[150px] h-[2px] m-[10px] opacity-50 transition-colors duration-300" style={{ backgroundColor: "var(--border-color)" }}></div>
          <ul style={{ color: "var(--text-primary)" }} className="transition-colors duration-300">
            <li>
              <i className="arrow">&gt; </i>
              <strong>Programming Languages:</strong> JavaScript, TypeScript, HTML, CSS, React, Next.js, Tailwind CSS
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Frameworks:</strong> React, Node.js, Next.js
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Tools:</strong> Git, Vercel, VS Code
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
