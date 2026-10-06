import Link from "next/link";

export default function ContactPage() {
    return (
        <section className="md:m-[10px] md:w-full md:h-full md:p-[20px] m-[40px] w-full h-full p-[40px] text-[#b81bf6]">
        <div className="flex justify-start w-full items-center mb-[15px] bg-[#26262c] p-2 rounded-md">
          <h3 className="text-lg font-bold pl-[25px]">Contact</h3>
          <div className="w-[50px] h-[2px] bg-white m-[10px]"></div>
        </div>
        <form className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] mb-12">
          <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] mb-12">
            <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">Get In Touch</h3>
          <input className="bg-[#26262c] text-[#b81bf6] placeholder:text-[#b81bf6] border border-[#b81bf6] focus:outline-none focus:ring-2 focus:ring-blue-500 align-center" type="text" placeholder="Name" required />
          <input className="bg-[#26262c] text-[#b81bf6] placeholder:text-[#b81bf6] border border-[#b81bf6] focus:outline-none focus:ring-2 focus:ring-blue-500 align-center" type="email" placeholder="Email" required />
          <input className="bg-[#26262c] text-[#b81bf6] placeholder:text-[#b81bf6] border border-[#b81bf6] focus:outline-none focus:ring-2 focus:ring-blue-500 align-center" type="text" placeholder="Subject" required />
          <textarea className="bg-[#26262c] text-[#b81bf6] placeholder:text-[#b81bf6] border border-[#b81bf6] focus:outline-none focus:ring-2 focus:ring-blue-500 align-center" placeholder="Message" rows={4} required />
          <button className="bg-[#b81bf6] text-[#26262c] hover:bg-white hover:text-[#b81bf6] font-bold py-2 px-4 rounded-md transition duration-300" type="submit">SUBMIT</button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] mb-12"> 
          <h3>Social</h3>
          <div className="mt-4 flex gap-4 fixed md:bottom-40 left-0 right-0 justify-center md:justify-center">
              <Link href="mailto:rachaelvallee2019@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8" src="/email.svg" alt="Email" />
              </Link>
              <Link href="https://www.linkedin.com/in/rachael-vallee-3b215a19b" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8" src="/linkedin.svg" alt="LinkedIn" />
              </Link>
              <Link href="https://github.com/rvallee1017" target="_blank" rel="noopener noreferrer">
                <img className="w-8 h-8" src="/github.svg" alt="Github" />
              </Link>
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0 md:text-3xl">Address</h3>
            <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] mb-12">
              <a href="https://www.google.com/maps/place/Lockesburg,+AR+71846/@33.9714845,-94.1798886,5501m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8634ecf00eb65d01:0x6fc39cd2c5d3ba53!8m2!3d33.9673188!4d-94.1684956!16zL20vMHF4NXA?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D">  <img src="icons/maps-and-flags.png" title="Google Maps" alt="GoogleMap" /></a>
              <p className="text-[#b81bf6]">Lockesburg, AR 71846 </p>
            </div>
             <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4 md:fit bg-[#26262c] rounded-md h-fit md:w-[668px] md:text-xl mx-12 m-block-[15px] mb-12">
              <img className="w-8 h-8" src="icons/phone-call.png" alt="Phone" />
              <p className="text-[#b81bf6]">_ _ _ _ _ _ _ _ _ _ </p>
            </div> 
      </section>
    );
}

