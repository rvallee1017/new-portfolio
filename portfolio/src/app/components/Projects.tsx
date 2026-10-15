
export default function Projects() {
  return (
    <section className="md:flex md:justify-center md:items-center md:gap-10 mt-10 md:mx-10 block flex flex-col justify-center items-center gap-10 text-[16px]">
      <div className="flex justify-start w-full items-center mb-[15px] p-2 rounded-md" style={{ backgroundColor: "var(--bg-card)" }}>
        <h3 className="pl-[25px] text-[20px] md:text-3xl" style={{ color: "var(--text-primary)" }}>Projects</h3>
        <div className="w-[50px] h-[2px] m-[10px]" style={{ backgroundColor: "var(--border-color)" }}></div>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-10 ">

        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] transition-colors duration-200" style={{ backgroundColor: "var(--bg-card)" }}>
          <h3 className="text-xl font-bold align-center p-0 m-0 md:text-3xl" style={{ color: "var(--text-primary)" }}>
            Project 1: Library Website
          </h3>
          <div className="w-[150px] h-[2px] m-[10px] opacity-50" style={{ backgroundColor: "var(--border-color)" }}></div>

          <ul style={{ color: "var(--text-primary)" }}>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Description:</strong> A simple library management website where users can browse and search for books.
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Technologies Used:</strong> Html, CSS, JavaScript
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Link:</strong>{' '}
              <a href="https://react-library-uqf7-git-main-leigh5.vercel.app/" target="_blank" rel="noreferrer" style={{ color: "var(--text-primary)" }} className="hover:opacity-80">
                View Project
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] transition-colors duration-200" style={{ backgroundColor: "var(--bg-card)" }}>
          <h3 className="text-xl font-bold align-center p-0 m-0 md:text-3xl" style={{ color: "var(--text-primary)" }}>
            Project 2: Movie Website
          </h3>
          <div className="w-[150px] h-[2px] m-[10px] opacity-50" style={{ backgroundColor: "var(--border-color)" }}></div>

          <ul style={{ color: "var(--text-primary)" }}>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Description:</strong> On this website you can search for movies and sort them alphabetically. As well as getting information about them such as title, description, actors, director, etc. This project was built using React and the TMDB API.
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Technologies Used:</strong> Html, CSS, JavaScript, React
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Link:</strong>{' '}
              <a href="https://final-react-project-six.vercel.app/" target="_blank" rel="noreferrer" style={{ color: "var(--text-primary)" }} className="hover:opacity-80">
                View Project
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] mb-12 transition-colors duration-200" style={{ backgroundColor: "var(--bg-card)" }}>
          <h3 className="text-xl font-bold align-center p-0 m-0 md:text-3xl" style={{ color: "var(--text-primary)" }}>
            Project 3: Internship Project Website
          </h3>
          <div className="w-[150px] h-[2px] m-[10px] opacity-50" style={{ backgroundColor: "var(--border-color)" }}></div>

          <ul style={{ color: "var(--text-primary)" }}>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Description:</strong> A website where users can login and look up, read, and listen to brief summaries of books.
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Technologies Used:</strong> React, TypeScript, Tailwind CSS, Next.js
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Link:</strong>{' '}
              <a href="https://summarist-home-page1-zqll.vercel.app/" target="_blank" rel="noreferrer" style={{ color: "var(--text-primary)" }} className="hover:opacity-80">
                View Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
    