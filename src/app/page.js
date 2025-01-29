"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "AUTONOMY POWER",
    subtitle: "SOLAR POWER MANAGEMENT SYSTEM",
    image: "/images/1.png",
    description:
      "During my time in <a href='https://itio.dev'>ITIO.dev</a>, I was part of developing a solar energy management platform.",
    techIcons: [
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
    ],
    actions: [
      {
        label: "MORE",
        section: "about",
        video: "/videos/surafel-interaction.mp4",
      },
      { label: "SITE", section: "projects" },
      { label: "CODE", section: "experience" },
    ],
    tags: [
      {
        label: "APP",
        section: "about",
        video: "/videos/surafel-interaction.mp4",
      },
      { label: "WORK", section: "projects" },
      { label: "ENERGY", section: "experience" },
      { label: "ANALYTICS", section: "experience" },
    ],
  },
  {
    title: "PETGEN.ART",
    subtitle: "AI-POWERED IMAGE GENERATOR",
    image: "/images/3.png",
    description:
      "AI-powered pet image generator creating unique, high-quality pet avatars based on user preferences.",
    techIcons: [
      "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    ],
    actions: [
      { label: "MORE", section: "about" },
      { label: "SITE", section: "projects" },
      { label: "CODE", section: "experience" },
    ],
    tags: [
      {
        label: "APP",
        section: "about",
        video: "/videos/surafel-interaction.mp4",
      },
      { label: "WORK", section: "projects" },
      { label: "AI", section: "experience" },
      { label: "PAYMENT", section: "experience" },
    ],
  },
  {
    title: "ASUN PAY",
    subtitle: "SECURE PAYROLL MANAGEMENT SYSTEM",
    image: "/images/2.png",
    description:
      "A secure payroll management system automating salary processing and transactions efficiently.",
    techIcons: [
      "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    ],
    actions: [
      { label: "MORE", section: "about" },
      { label: "SITE", section: "projects" },
      { label: "CODE", section: "experience" },
    ],
    tags: [
      {
        label: "APP",
        section: "about",
        video: "/videos/surafel-interaction.mp4",
      },
      { label: "WORK", section: "projects" },
      { label: "PAYMENT", section: "experience" },
      { label: "ANALYTICS", section: "experience" },
    ],
  },

  {
    title: "AGRISUN ETHIOPIA",
    subtitle: "MARKETING SITE",
    image: "/images/4.png",
    description:
      "An HTML, CSS, and JavaScript-based site integrated with a CMS, promoting sustainable agricultural solutions.",
    techIcons: [
      "https://cdn-icons-png.flaticon.com/512/620/620030.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    ],
    actions: [
      { label: "MORE", section: "about" },
      { label: "SITE", section: "projects" },
      { label: "CODE", section: "experience" },
    ],
    tags: [
      { label: "SUSTAINABILITY", section: "about" },
      { label: "AGRICULTURE", section: "projects" },
      { label: "INNOVATION", section: "experience" },
    ],
  },
  {
    title: "DIGITAL LEARNING HUB",
    subtitle: "MARKETING SITE",
    image: "/images/5.png",
    description:
      "A dynamic, community-driven learning platform combining innovative technologies with personalized education for the future.",
    techIcons: [
      "https://cdn-icons-png.flaticon.com/512/226/226778.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    ],
    actions: [
      { label: "MORE", section: "about" },
      { label: "SITE", section: "projects" },
      { label: "CODE", section: "experience" },
    ],
    tags: [
      { label: "EDUCATION", section: "about" },
      { label: "INNOVATION", section: "projects" },
      { label: "COMMUNITY", section: "experience" },
    ],
  },
  {
    title: "MULTIFACET SOLUTION",
    subtitle: "MARKETING SITE",
    image: "/images/6.png",
    description:
      "A cutting-edge logistics platform built on Squarespace, designed to streamline operations with innovative tools.",
    techIcons: [
      "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    ],
    actions: [
      { label: "MORE", section: "about" },
      { label: "SITE", section: "projects" },
      { label: "CODE", section: "experience" },
    ],
    tags: [
      { label: "LOGISTICS", section: "about" },
      { label: "TECHNOLOGY", section: "projects" },
      { label: "EFFICIENCY", section: "experience" },
    ],
  },
  {
    title: "EMPIRE LEAD MACHINE",
    subtitle: "MARKETING SITE",
    image: "/images/7.png",
    description:
      "A powerful executive empowerment platform built on GoHighLevel, offering leadership growth and strategic innovation.",
    techIcons: [
      "https://cdn-icons-png.flaticon.com/512/226/226779.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    ],
    actions: [
      { label: "MORE", section: "about" },
      { label: "SITE", section: "projects" },
      { label: "CODE", section: "experience" },
    ],
    tags: [
      { label: "EXECUTIVES", section: "about" },
      { label: "LEADERSHIP", section: "projects" },
      { label: "INNOVATION", section: "experience" },
    ],
  },
];

const ContactMeForm = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Copied to clipboard!");
    setTimeout(() => setCopyMessage(""), 2000); // Clear the message after 2 seconds
  };

  return (
    <div className="flex items-center ">
      <div className="w-full p-6 rounded-2xl shadow-lg">
        <div className="mb-8 flex gap-4">
          {[
            { name: "Email", link: "mailto:surafel.yimam@celerus.io" },
            {
              name: "LinkedIn",
              link: "https://linkedin.com/in/surafel-kebede",
            },
            { name: "Telegram", link: "https://t.me/YouAreTheThingILoveMost" },
            { name: "GitHub", link: "https://github.com/surafelx" },
          ].map((social, index) => (
            <button
              key={index}
              onClick={() => copyToClipboard(social.link)}
              className="w-[40px] h-[40px] px-2 border border-white flex items-center justify-center text-gray-800 transition "
            >
              {social.name == "Email" ? (
                <svg
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
              ) : social.name == "LinkedIn" ? (
                <svg
                  fill="#FFF"
                  height="30px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 310 310"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="XMLID_801_">
                      {" "}
                      <path
                        id="XMLID_802_"
                        d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                      ></path>{" "}
                      <path
                        id="XMLID_803_"
                        d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                      ></path>{" "}
                      <path
                        id="XMLID_804_"
                        d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              ) : social.name == "Telegram" ? (
                <svg
                  height="40px"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                  stroke-width="4.608"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M228.646,34.7676a11.96514,11.96514,0,0,0-12.21778-2.0752L31.87109,105.19729a11.99915,11.99915,0,0,0,2.03467,22.93457L84,138.15139v61.833a11.8137,11.8137,0,0,0,7.40771,11.08593,12.17148,12.17148,0,0,0,4.66846.94434,11.83219,11.83219,0,0,0,8.40918-3.5459l28.59619-28.59619L175.2749,217.003a11.89844,11.89844,0,0,0,7.88819,3.00195,12.112,12.112,0,0,0,3.72265-.59082,11.89762,11.89762,0,0,0,8.01319-8.73925L232.5127,46.542A11.97177,11.97177,0,0,0,228.646,34.7676ZM32.2749,116.71877a3.86572,3.86572,0,0,1,2.522-4.07617L203.97217,46.18044,87.07227,130.60769,35.47461,120.28811A3.86618,3.86618,0,0,1,32.2749,116.71877Zm66.55322,86.09375A3.99976,3.99976,0,0,1,92,199.9844V143.72048l35.064,30.85669ZM224.71484,44.7549,187.10107,208.88772a4.0003,4.0003,0,0,1-6.5415,2.10937l-86.1543-75.8164,129.66309-93.645A3.80732,3.80732,0,0,1,224.71484,44.7549Z"></path>{" "}
                  </g>
                </svg>
              ) : social.name == "GitHub" ? (
                <svg
                  height="40px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-140.000000, -7559.000000)"
                        fill="#ffffff"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                            id="github-[#ffffff]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              ) : (
                <></>
              )}
            </button>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-6 text-white">Message Me</h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-gray-800 py-3 hover:bg-gray-800 hover:text-white transition"
          >
            Send Message
          </button>
        </form>
        {copyMessage && (
          <p className="mt-4 text-center text-green-500 text-sm">
            {copyMessage}
          </p>
        )}
      </div>
    </div>
  );
};
export default function Home() {
  const [activeSection, setActiveSection] = useState("start");
  const [videoSrc, setVideoSrc] = useState("/videos/surafel-interaction.mp4");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoChanging, setIsVideoChanging] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState("");

  const [loading, setLoading] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // state to track if the music is playing
  const videoRef = useRef();
  const audioRef = useRef();

  const menuItems = [
    {
      label: "ABOUT",
      section: "about",
      video: "/videos/surafel-interaction.mp4",
    },
    { label: "PROJECTS", section: "projects" },
    { label: "EXPERIENCE", section: "experience" },
    { label: "OTHER", section: "other" },
    { label: "CONTACT", section: "contact" },
  ];

  const preloadFonts = () => {
    console.log("🔄 Preloading fonts...");
    document.fonts.load("1em 'vcr-osd-mono.ttf'");
    document.fonts.load("1em 'vcr-osd-neue.ttf'");
  };

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false); // Skip the video if user has visited before
    }
    setTimeout(() => {
      preloadFonts();
      setShowPlayButton(true); // Hide the button after clicking
      console.log("✅ Fonts preloaded (3s mark)");
    }, 3000);
  }, []);

  const preloadVideos = () => {
    console.log("🔄 Preloading videos...");
    const videoFiles = [
      "/videos/loader.mp4",
      "/videos/surafel-introduction.mp4",
      "/videos/surafel-interaction.mp4",
      "/videos/surafel-guitar.mp4",
      "/videos/surafel-cat.mp4",
      "/videos/surafel-guitar.mp4",
    ];
    videoFiles.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
    });
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    }
  };

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setShowPlayButton(false); // Hide the button after clicking
    preloadVideos();
    // Play lofi music after 7 seconds
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 7000);

    // Show site after 10s
    setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 10000);
  };
  const experiences = [
    {
      date: "AUG 2024 - JAN 2025",
      title: "INDEPENDENT CONTRACTOR",
      description:
        "Worked independently on data migration, Salesforce automation, and cloud-based solutions using Python, Google Cloud Platform, and Azure Vector Search. Provided backend and infrastructure support, optimizing workflows and improving data integrity across multiple systems.",
    },
    {
      date: "JAN 2023 - AUG 2024",
      title: "TECH LEAD - AGRISUN ENGINEERING",
      description:
        "Led the development of technology solutions, from marketing websites to embedded systems for monitoring inverter output, solar energy generation, and water pump efficiency. Designed and deployed software solutions for internal and client-facing applications, integrating IoT for real-time data tracking.",
    },
    {
      date: "JUL 2020 - JAN 2023",
      title: "FULL-STACK ENGINEER - ITIO.DEV",
      description:
        "Developed and deployed full-stack web applications using the PERN and MERN stacks. Implemented Test-Driven Development (TDD) practices, built scalable front-end solutions, optimized backend performance, and established CI/CD pipelines for seamless deployments.",
    },
    {
      date: "JUN 2019 - JUL 2020",
      title: "INDEPENDENT CONTRACTOR",
      description:
        "Designed and built an embedded system for tracking solar energy metrics, including energy input/output, temperature, humidity, and other environmental factors. Developed a cloud-based platform for real-time monitoring and data visualization.",
    },
    {
      date: "AUG 2018 - JUN 2019",
      title: "SOFTWARE ENGINEER - SOLARVILLAGE",
      description:
        "Developed and maintained the company website, implemented an IT inventory management system, and assisted in hardware installations. Led software solutions for stock tracking and automated reporting while providing IT support and mentoring interns.",
    },
  ];
  const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
      <div className="flex flex-col items-center w-[100%]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col items-start w-full mb-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h3 className="bg-white w-[280px] text-black pl-2 text-lg mb-2 uppercase">
              {exp.date}
            </h3>
            <div className="border-l-2 border-white pl-4 pt-2 mb-2">
              <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
              <p className="text-md mb-4">{exp.description}</p>

              {/* {hoveredIndex === index && (
                <div
                  className="transition-all duration-300 opacity-100 scale-100"
                  style={{ transform: "scale(1)" }}
                >
                  <div className="flex gap-2 w-full mb-4">
                    <img
                      className="w-1/2"
                      src="https://placehold.co/600x400/EEE/31343C"
                      alt="Preview 1"
                    />
                    <img
                      className="w-1/2"
                      src="https://placehold.co/600x400/EEE/31343C"
                      alt="Preview 2"
                    />
                  </div>
                  <ul>
                    <li className="text-md">Automated pipelines</li>
                    <li className="text-md">Optimized workflows</li>
                  </ul>
                </div>
              )}

              {hoveredIndex !== index && (
                <div
                  className="transition-all duration-300 opacity-0 scale-95"
                  style={{ transform: "scale(0.95)" }}
                />
              )} */}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTitle = () => {
    switch (activeSection) {
      case "about":
        return "ABOUT";
      case "projects":
        return "PROJECTS";
      case "experience":
        return "EXPERIENCE";
      case "other":
        return "OTHER";
      case "contact":
        return "CONTACT";
      default:
        return null;
    }
  };

  const handleInteraction = () => {
    console.log("Video Interaction", videoSrc);

    // Trigger the video change with a delay for smooth fade
    setIsVideoChanging(true);
    setTimeout(() => {
      // change this to intro later
      setVideoSrc("/videos/surafel-interaction.mp4");
    }, 300); // Delay for the fade-out effect
    setIsVideoChanging(false);
  };

  const handleMouseScroll = () => {
    console.log("Scroll Interaction", videoSrc);

    // Trigger the video change with a delay for smooth fade
    setIsVideoChanging(true);
    setTimeout(() => {
      // change this to intro later
      setVideoSrc("/videos/surafel-interaction.mp4");
    }, 300); // Delay for the fade-out effect
    setIsVideoChanging(false);
  };

  const autoScrollAbout = () => {
    console.log("Autoscrolling");
    const aboutContent = document.getElementById("aboutContent");
    if (aboutContent && aboutContent.scrollTop !== aboutContent.scrollHeight) {
      const targetScrollTop = aboutContent.scrollHeight;
      const currentScrollTop = aboutContent.scrollTop;
      const scrollDistance = targetScrollTop - currentScrollTop;

      // Set the scroll speed factor (larger values = slower scroll)
      const speed = 5000;

      const smoothScroll = () => {
        if (Math.abs(targetScrollTop - aboutContent.scrollTop) > 1) {
          aboutContent.scrollTop += scrollDistance / speed;
          requestAnimationFrame(smoothScroll);
        } else {
          aboutContent.scrollTop = targetScrollTop; // Ensure it reaches the exact position
        }
      };

      smoothScroll();
    }
  };

  useEffect(() => {
    if (activeSection == "start") {
      // Listen for user interaction
      window.addEventListener("mousemove", handleInteraction);
      window.addEventListener("mousedown", handleInteraction);
      window.addEventListener("touchstart", handleInteraction);

      // Clean up event listeners
      return () => {
        window.removeEventListener("mousemove", handleInteraction);
        window.removeEventListener("mousedown", handleInteraction);
        window.removeEventListener("touchstart", handleInteraction);
      };
    }

    if (activeSection === "about") {
      // Listen for mouse scroll in the about section
      // Trigger auto-scroll in the about section
      // if (!isUserScrolling) {
      autoScrollAbout();
      // }
      window.addEventListener("scroll", handleMouseScroll);

      // Set the initial video when switching to about section
      setIsVideoChanging(true);
      setTimeout(() => {
        // change this to intro later
        setVideoSrc("/videos/surafel-interaction.mp4");
      }, 300); // Delay for the fade-out effect
      setIsVideoChanging(false);

      // Clean up scroll event listener
      return () => {
        window.removeEventListener("scroll", handleMouseScroll);
      };
    }
  }, [activeSection, isUserScrolling, videoSrc, setVideoSrc]);

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div>
            <div className="h-full overflow-hidden" id="aboutContent">
              <p className="text-3xl font-thin text-justify mb-8">
                Hi, I’m Surafel Yimam, a Full Stack Software Engineer with over
                6 years of experience. I create exceptional digital solutions
                and have a deep passion for technology and innovation.
              </p>
            </div>
          </div>
        );
      case "projects":
        return (
          <div>
            <div className="h-full overflow-hidden " id="aboutContent">
              <>
                <div className="flex flex-wrap gap-1 space-around">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="project-card w-full md:w-[45%] lg:w-[48%] p-4 rounded-sm border-2 border-transparent"
                    >
                      <img
                        className="mb-4 w-full"
                        src={project.image}
                        alt={project.title}
                      />
                      <h4 className="mb-1 text-3xl font-bold text-center">
                        {project.title}
                      </h4>
                      <h4 className="mb-1 text-center">{project.subtitle}</h4>
                      {/* <div className="px-4 mb-3 flex justify-between">
                        {project?.tags.map(({ label, section, video }) => (
                          <button
                            key={section}
                            onClick={() => {
                              setActiveSection(section);
                              if (video) setVideoSrc(video);
                            }}
                            className="text-sm text-left font-mono relative group transition-all flicker"
                            style={{ fontFamily: "VCRMono" }}
                          >
                            <span className="absolute left-[-1rem] opacity-0 transition-opacity group-hover:opacity-100">
                              &gt;
                            </span>
                            {label}
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-4 justify-center mb-2">
                        {project.techIcons.map((icon, i) => (
                          <img
                            key={i}
                            className="h-[30px] mb-2"
                            src={icon}
                            alt="Tech Icon"
                          />
                        ))}
                      </div> */}

                      <p
                        className="mb-4 text-center"
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="flex w-full">
            <Experience />
          </div>
        );
      case "other":
        return (
          <div className="flex flex-col items-between justify-center">
            <p className="flex text-3xl text-white mb-4">
              when i'm not coding i'm;
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "learning to play guitar.",
                  video: "/videos/surafel-guitar.mp4",
                },
                { label: "taking care of my cat.",   video: "/videos/surafel-cat.mp4", },
                { label: "reading a book.",   video: "/videos/surafel-book.mp4", },
              ].map(({ label, section, video }) => (
                <button
                  key={section}
                  onMouseEnter={() => setVideoSrc(video)}
                  onMouseLeave={() => setVideoSrc("videos/surafel-interaction.mp4")}
                  data-text={label}
                  className="px-5 text-3xl text-left font-mono relative group transition-all flicker hover:glitch"
                  style={{
                    fontFamily: "VCRNeue",
                  }}
                >
                  <span className="pl-2 opacity-0 transition-opacity group-hover:opacity-100">
                    &gt;
                  </span>{" "}
                  {label}
                </button>
              ))}
            </div>
          </div>
        );
      case "contact":
        return (
          <div>
            <ContactMeForm />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="screen"
      className="bg-gray-800 flex min-h-screen w-screen relative overflow-hidden"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-[1000]">
          {/* Play Button */}
          {showPlayButton && (
            <button
              onClick={() => {
                startVideo();
              }}
              className="absolute z-[1000] text-white text-4xl font-mono group transition-all flicker"
              style={{
                fontFamily: "VCRMono",
              }}
            >
              <span className="absolute left-[-1.5rem] opacity-0 transition-opacity group-hover:opacity-100">
                &gt;
              </span>
              TAP TO PLAY
            </button>
          )}

          {/* Video (Initially Paused) */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            controls={false}
          >
            <source src="/videos/loader.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <audio ref={audioRef} loop>
        <source src="/audio/lofi-1.mp3" type="audio/mp3" />
      </audio>

      {/* Background Video */}
      <video
        key={videoSrc}
        className={`absolute top-0 left-0 w-full h-full object-cover z-[10] transition-opacity duration-1000 ${
          isVideoChanging ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Image */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-[20] pointer-events-none ${
          loading && "z-[1000]"
        }`}
      >
        <img
          src="/videos/vhs-overlay.gif"
          alt="Overlay"
          className="w-full h-full object-cover opacity-[20%]"
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 10,
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.7) 100%)",
        }}
      />

      <div className="w-full hidden  lg:w-[40%] text-gray-900 lg:flex flex-col justify-center items-start p-6 sm:p-10 lg:p-12 xl:p-16 overflow-hidden">
        {/* Content Goes Here */}
      </div>

      {activeSection == "start" ? (
        <div className="relative w-full lg:w-[60%] text-white flex flex-col justify-center items-start p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 z-[100]">
          <p
            className="text-2xl lg:text-4xl mb-2 glitch flicker"
            style={{ fontFamily: "VCRMono" }}
            data-text="Hi, I'm"
          >
            Hi, I'm
          </p>
          <h1
            onClick={() => setVideoSrc("/videos/surafel-introoduction.mp4")}
            className="text-5xl lg:text-8xl font-bold mb-1 glitch flicker"
            style={{ fontFamily: "VCRNeue" }}
            data-text="SURAFEL YIMAM"
          >
            SURAFEL YIMAM
          </h1>
          <p
            className="text-2xl lg:text-4xl mb-10 glitch flicker"
            style={{ fontFamily: "VCRMono" }}
            data-text="FULL STACK SOFTWARE ENGINEER"
          >
            FULL STACK SOFTWARE ENGINEER
          </p>
          <nav className="flex flex-col gap-2 pl-5">
            {[
              {
                label: "ABOUT",
                section: "about",
                video: "/videos/surafel-interaction.mp4",
              },
              { label: "PROJECTS", section: "projects" },
              { label: "EXPERIENCE", section: "experience" },
              { label: "OTHER", section: "other" },
              { label: "CONTACT", section: "contact" },
            ].map(({ label, section, video }) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  if (video) setVideoSrc(video);
                }}
                className="text-2xl text-left font-mono relative group transition-all flicker"
                style={{
                  fontFamily: "VCRMono",
                }}
              >
                <span className="absolute left-[-1.5rem] opacity-0 transition-opacity group-hover:opacity-100">
                  &gt;
                </span>
                {label}
              </button>
            ))}
          </nav>
          <div className="absolute bottom-10 right-20">
            <div className="flex items-center justify-center gap-8">
              <svg
                className="cursor-pointer flicker pt-2"
                height="45px"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="-5.0 -10.0 110.0 135.0"
                onClick={toggleMusic}
              >
                {/* If song is playing, show SVG, if stopped show an "X" */}
                {isPlaying ? (
                  <path
                    fill="#FFF"
                    d="m38.332 74.5h-10.832v8.832h-27.5v-19.164h10.109v-7.4453h16.281v-40.055h73.609v14.832h-16.277v43h-9.4453v8.832h-27.5v-19.164h10.113v-7.4453h14.887v-25.223h-33.445z"
                  />
                ) : (
                  // Show an X when the song is paused
                  <path
                    fill="#FFF"
                    d="M60 35l-25 25m0-25l25 25"
                    stroke="#FFF"
                    strokeWidth="6"
                  />
                )}
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full lg:w-[60%] text-white flex flex-col justify-center items-start p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 z-[100]">
          <nav className="w-full flex items-center justify-between mb-10 px-2">
            {/* Logo */}
            <h1
              onClick={() => setActiveSection("start")}
              data-text={"SRFL"}
              className="text-3xl font-bold glitch flicker cursor-pointer"
              style={{ fontFamily: "VCRNeue" }}
            >
              SRFL
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 xl:gap-10 items-center">
              {menuItems.map(({ label, section, video }) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
                    if (video) setVideoSrc(video);
                  }}
                  className="text-md font-mono relative group transition-all flicker"
                  style={{ fontFamily: "VCRMono" }}
                >
                  <span className="absolute left-[-1rem] opacity-0 transition-opacity group-hover:opacity-100">
                    &gt;
                  </span>
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ fontFamily: "VCRMono" }}
            >
              {isMenuOpen ? "X" : "O"}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-16 right-6 bg-black text-white  flex flex-col w-48 p-4 md:hidden z-[1000]">
                {menuItems.map(({ label, section, video }) => (
                  <button
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(!isMenuOpen);
                    }}
                    key={section}
                    className="pl-4 mb-1 text-md text-left font-mono relative group transition-all flicker"
                    style={{
                      fontFamily: "VCRMono",
                    }}
                  >
                    <span className="absolute left-[-.5rem] opacity-0 transition-opacity group-hover:opacity-100">
                      &gt;
                    </span>
                    {label}
                  </button>
                ))}
              </div>
            )}
          </nav>
          <div>
            <h1
              className="text-6xl lg:text-8xl font-bold mb-8 text-upper flicker glitch"
              data-text={renderTitle()}
              style={{ fontFamily: "VCRMono" }}
            >
              {renderTitle()}
            </h1>
          </div>
          <div
            className="h-full w-full overflow-hidden overflow-y-auto no-scrollbar"
            style={{ fontFamily: "VCRNeue" }}
            id="aboutContent"
          >
            {renderContent()}
          </div>
        </div>
      )}
    </div>
  );
}
