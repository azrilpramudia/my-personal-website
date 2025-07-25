const ExperienceSection = () => {
  const data = [
    {
      title: "Head of Communication & Information",
      company: "Himpunan Mahasiswa Teknik Informatika",
      date: "July 2023 – January 2024",
      descriptions: [
        "Collaborated with QA and Backend teams to ensure timely project completion.",
        "Developed a New Student Admission website utilizing Next.js technology.",
        "Implemented reusable components using Tailwind CSS.",
        "Applied Atomic Design principles and Nx Monorepo for efficient development.",
      ],
    },
    {
      title: "DevOps & Cloud Server Training",
      company: "ID-Networkers",
      date: "July 2023 – January 2024",
      descriptions: [
        "Collaborated with QA and Backend teams to ensure timely project completion.",
        "Developed a New Student Admission website utilizing Next.js technology.",
        "Implemented reusable components using Tailwind CSS.",
        "Applied Atomic Design principles and Nx Monorepo for efficient development.",
      ],
    },
    {
      title: "Frontend Web Developer Intern",
      company: "PT Sagara Technology",
      date: "Feb 2024 – April 2024",
      descriptions: [
        "Assisted in building reusable UI components with React.",
        "Maintained responsive layouts using Tailwind CSS.",
        "Participated in daily stand-ups and sprint planning.",
        "Improved website performance by optimizing images and code structure.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self Employed",
      date: "May 2024 – Present",
      descriptions: [
        "Designed and deployed client portfolio websites using Next.js and Tailwind.",
        "Integrated contact forms with EmailJS.",
        "Handled mobile responsiveness and browser compatibility.",
        "Implemented animations using Framer Motion.",
      ],
    },
    {
      title: "Tech Workshop Facilitator",
      company: "Campus Tech Club",
      date: "Jan 2023 – June 2023",
      descriptions: [
        "Conducted basic web dev workshops for students.",
        "Created tutorial modules and live coding sessions.",
        "Guided students through GitHub and Netlify deployment.",
        "Received positive feedback from 95% of participants.",
      ],
    },
  ];

  return (
    <section className="bg-secondary text-white py-20 px-4 font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Experience
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-20 relative">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 shadow-[0_0_10px_rgba(100,100,255,0.2)] z-0" />

        {data.map((exp, index) => (
          <div key={index} className="grid md:grid-cols-12 gap-4 items-start">
            {/* Left Column (Timeline + Title) */}
            <div className="md:col-span-5 relative z-10 pl-10">
              {/* Dot with inner circle */}
              <div className="absolute left-5 top-3 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#0F111A] border border-gray-600 shadow-[0_0_8px_rgba(100,100,255,0.2)] flex items-center justify-center z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-transparent border border-gray-400" />
              </div>

              {/* Text */}
              <h3 className="text-lg md:text-xl font-bold">{exp.title}</h3>
              <p className="italic text-sm text-gray-400">{exp.company}</p>
            </div>

            {/* Right Column (Box Content) */}
            <div className="md:col-span-7">
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
    </section>
  );
};

export default ExperienceSection;
