import { experienceData } from "../data/experienceData";

const ExperienceSection = () => {
  return (
    <section className="bg-secondary text-white py-20 px-4 sm:px-6 md:px-10 font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Experience
      </h1>
      <div className="max-w-6xl mx-auto relative">
        {/* {Vertical Line} */}
        <div className="absolute top-0 left-4 w-0.5 h-full bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 shadow-[0_0_10px_rgba(100,100,255,0.2)] z-0" />

        <div className="flex flex-col gap-20">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start relative"
            >
              {/* Bullet */}
              <div className="absolute left-4 top-3 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0F111A] border border-gray-600 shadow-[0_0_8px_rgba(100,100,255,0.2)] flex items-center justify-center z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-transparent border border-gray-400" />
              </div>

              {/* Left Side - Desktop */}
              <div className="md:col-span-5 relative z-10 hidden md:block pl-12">
                <h3 className="text-base sm:text-lg md:text-xl font-bold">
                  {exp.title}
                </h3>
                <p className="italic text-sm text-gray-400">{exp.company}</p>
              </div>

              {/* Mobile Title */}
              <div className="md:hidden relative z-10 pl-12">
                <h3 className="text-base sm:text-lg font-bold">{exp.title}</h3>
                <p className="italic text-sm text-gray-400">{exp.company}</p>
              </div>

              {/* Right Side Box */}
              <div className="md:col-span-7 mt-4 md:mt-0 ml-12">
                <div className="bg-[#111] border border-gray-700 rounded-xl p-5 shadow-md shadow-purple-500/40">
                  <p className="font-semibold mb-3 text-sm">{exp.date}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
