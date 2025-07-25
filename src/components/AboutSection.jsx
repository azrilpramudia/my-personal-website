const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary to-secondary flex flex-col justify-center items-center px-4 text-center text-white">
      {/* {Title} */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-poppins">
        About Me
      </h1>

      {/* {Desciption} */}
      <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 font-poppins">
        I'm an informatics engineering student looking to develop and learn new
        things. My learning experience in web development with JavaScript,
        React, TailwindCSS, and Node.js has been around for about 3 months now.
      </p>

      {/* Quote */}
      <blockquote className="mt-8 text-sm sm:text-base md:text-lg font-poppins text-gray-200 italic">
        <span className="font-semibold text-white">
          "First, solve the problem. Then, write the code."
        </span>
        <br />
        <span className="text-gray-400 text-sm mt-2 block">— John Johnson</span>
      </blockquote>
    </section>
  );
};

export default AboutSection;
