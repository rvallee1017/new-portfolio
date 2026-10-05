

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center h-[70px]">
      <div>
        <p className="my-[10px] mx-[30px] text-[25px] font-semibold text-[#b81bf6]" title="Rachael-Vallee">Rachael`s Portfolio</p>
      </div>
      <ul className="display-none md:flex justify-between items-center gap-7.5 text-[20px] font-semibold bg-[#1c1c21] absolute top-15 left-0 right-0 h-160 ">
          <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center items-center relative overflow-hidden text-[#b81bf6]"><a  data-section="home">Home</a></li>
          <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center items-center relative overflow-hidden text-[#b81bf6]"><a href="/about" data-section="about">About</a></li>
          <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center items-center relative overflow-hidden text-[#b81bf6]"><a href="/education" data-section="education">Education & Skills</a></li>
          <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center items-center relative overflow-hidden text-[#b81bf6]"><a href="/projects" data-section="projects">Projects</a></li>
          <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center items-center relative overflow-hidden text-[#b81bf6]"><a href="Resume.pdf" target="_blank">Resume</a></li>
          <li className="w-24.25 transition-color duration-100ms ease-in-out py-5 px-2.5 flex justify-center items-center relative overflow-hidden text-[#b81bf6]"><a href="/contact" data-section="contact">Contact</a></li>
      </ul>
      <div className="text-[30px] text-[#b81bf6] cursor-pointer md:hidden block flex-end mr-[30px]">
        ☰
      </div>
    </nav>
    );
}