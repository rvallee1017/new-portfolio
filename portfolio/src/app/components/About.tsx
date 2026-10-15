

export default function About() {
  return (
    <>
      <section className="md:flex md:justify-center md:items-center md:gap-10 mt-10 md:mx-10 block flex flex-col justify-center items-center gap-10 text-[16px]">
        <div className="flex justify-start w-full items-center mb-[15px] p-2 rounded-md" style={{ backgroundColor: "var(--bg-card)" }}>
          <h3 className="pl-[25px] text-[20px]" style={{ color: "var(--text-primary)" }}>About</h3>
          <div className="w-[50px] h-[2px] m-[10px]" style={{ backgroundColor: "var(--border-color)" }}></div>
        </div>
        <div className="w-full flex flex-col  justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-4 p-6 md:p-4  md:w-[300px] md:h-[400px] rounded-md" style={{ backgroundColor: "var(--bg-card)" }}>
            <img className="w-[200px] h-[200px] rounded-full object-cover pt-2" src="rachael.png" alt="Rachael Vallee" />
            <h3 className="text-xl font-bold align-center p-0 m-0" style={{ color: "var(--text-primary)" }}>Rachael Vallee</h3>
            <ul style={{ color: "var(--text-primary)" }}>
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
          <div className="md:mt-[15px] md:ml-[15px] md:w-[500px] md:h-fit md:mb-12 rounded-md p-6 mb-12" style={{ backgroundColor: "var(--bg-card)" }}>
            <p className="text-[16px]" style={{ color: "var(--text-primary)" }}>
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