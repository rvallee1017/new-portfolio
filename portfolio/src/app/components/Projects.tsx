
export default function Projects() {
  return (
    <section className="md:flex md:justify-center md:items-center md:gap-10 mt-10 md:mx-10 block flex flex-col justify-center items-center gap-10 text-[16px]">
      <div className="flex justify-start w-full items-center mb-[15px] bg-[#26262c] p-2 rounded-md">
        <h3 className="text-[#b81bf6] pl-[25px] text-[20px] md:text-3xl">Projects</h3>
        <div className="w-[50px] h-[2px] bg-white m-[10px]"></div>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px]">
          <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">
            Project 1: Portfolio Website
          </h3>
          <div className="w-[150px] h-[2px] bg-white m-[10px] opacity-50"></div>

          <ul className="text-[#b81bf6]">
            <li>
              <i className="arrow">&gt; </i>
              <strong>Description:</strong> A personal portfolio website showcasing my skills, projects, and experience.
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Technologies Used:</strong> React, TypeScript, Tailwind CSS, Next.js
            </li>
            <li>
              <i className="arrow">&gt; </i>
              <strong>Link:</strong>{' '}
              <a href="https://example.com" target="_blank" rel="noreferrer" className="text-[#b81bf6] hover:text-white">
                View Project
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px]">
          <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">
            Project 2: Library Website
          </h3>
          <div className="w-[150px] h-[2px] bg-white m-[10px] opacity-50"></div>

          <ul className="text-[#b81bf6]">
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
              <a href="https://react-library-uqf7-git-main-leigh5.vercel.app/" target="_blank" rel="noreferrer" className="text-[#b81bf6] hover:text-white">
                View Project
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px]">
          <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">
            Project 3: Movie Website
          </h3>
          <div className="w-[150px] h-[2px] bg-white m-[10px] opacity-50"></div>

          <ul className="text-[#b81bf6]">
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
              <a href="https://final-react-project-six.vercel.app/" target="_blank" rel="noreferrer" className="text-[#b81bf6] hover:text-white">
                View Project
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] mb-12">
          <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">
            Project 4: Internship Project Website
          </h3>
          <div className="w-[150px] h-[2px] bg-white m-[10px] opacity-50"></div>

          <ul className="text-[#b81bf6]">
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
              <a href="https://summarist-home-page1-zqll.vercel.app/" target="_blank" rel="noreferrer" className="text-[#b81bf6] hover:text-white">
                View Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
    