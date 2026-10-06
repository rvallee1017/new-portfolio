

export default function About() {
  return (
    <>
      <section className="md:flex md:justify-center md:items-center md:gap-10 mt-10 md:mx-10 block flex flex-col justify-center items-center gap-10 text-[16px]">
        <div className="flex justify-start w-full items-center mb-[15px] bg-[#26262c] p-2 rounded-md">
          <h3 className="text-[#b81bf6] pl-[25px] text-[20px]">About</h3>
          <div className="w-[50px] h-[2px] bg-white m-[10px]"></div>
        </div>
        <div className="w-full flex flex-col  justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4  md:w-[300px] md:h-[400px]  bg-[#26262c] rounded-md">
            <img className="w-[200px] h-[200px] rounded-full object-cover pt-2" src="rachael.png" alt="Rachael Vallee" />
            <h3 className="text-xl font-bold text-[#b81bf6] align-center p-0 m-0">Rachael Vallee</h3>
            <ul className="text-[#b81bf6]">
              <li>
                <i className="arrow">&gt; </i>
                <strong>Birthday:</strong> October 2000
              </li>
              <li>
                <i className="arrow">&gt; </i>
                <strong>Phone:</strong> _ _ _ _ _ _ _ _ _ _
              </li>
              <li>
                <i className="arrow">&gt; </i>
                <strong>City:</strong> Lockesburg, Arkansas
              </li>
              <li>
                <i className="arrow">&gt; </i>
                <strong>Email:</strong> rachaelvallee2019@gmail.com
              </li>
            </ul>
          </div>
          <div className="md:mt-[15px] md:ml-[15px] md:w-[500px] md:h-fit md:mb-12 bg-[#26262c] rounded-md p-6 mb-12">
            <p className="text-[#b81bf6] text-[16px]">
              Hello,
              <br />
              <br />
              I am Rachael Vallee, a passionate and dedicated Frontend Developer with a strong focus on creating visually appealing and user-friendly web applications. With a keen eye for design and a solid understanding of frontend technologies, I strive to deliver seamless user experiences that leave a lasting impression.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}