import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
          Hi, I'm Abhishek Sharma, a passionate front-end web developer with expertise in building modern, responsive, and user-friendly websites. I specialize in React.js, JavaScript, HTML, CSS, and other cutting-edge technologies to create seamless digital experiences.

          With experience in freelancing, I've worked on diverse projects, ranging from business websites to interactive web applications. My goal is to write clean, efficient code and craft intuitive designs that enhance user engagement.

          I'm always eager to learn new technologies and take on challenging projects. Let's collaborate to bring your ideas to life!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
