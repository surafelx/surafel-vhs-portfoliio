"use client";
import { useEffect, useRef, useState } from "react";
import AudioMotionAnalyzer from "audiomotion-analyzer";
import meData from "./me.json"; // Import the JSON file

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
          {meData[0].socialLinks.map((social, index) => (
            <button
              key={index}
              onClick={() => copyToClipboard(social.link)}
              className="w-[40px] h-[40px] px-2 border border-white flex items-center justify-center text-gray-800 transition "
            >
              {social.name == "Email" ? (
                <svg
                  height="30px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    d="M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z"
                    fill="#FFF"
                  />{" "}
                </svg>
              ) : social.name == "LinkedIn" ? (
                <span className="text-xl text-white">in</span>
              ) : social.name == "Telegram" ? (
                <svg
                  height="40px"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  viewBox="0 0 32 32"
                >
                  <rect width="12" height="2" x="10" y="4" fill="#FFF"></rect>
                  <rect
                    width="12"
                    height="2"
                    x="21"
                    y="15"
                    fill="#FFF"
                    transform="rotate(90 27 16)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    x="22"
                    y="6"
                    fill="#FFF"
                    transform="rotate(-180 23 7)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    x="24"
                    y="8"
                    fill="#FFF"
                    transform="rotate(-180 25 9)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    x="22"
                    y="24"
                    fill="#FFF"
                    transform="rotate(-180 23 25)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    x="24"
                    y="22"
                    fill="#FFF"
                    transform="rotate(-180 25 23)"
                  ></rect>
                  <rect
                    width="12"
                    height="2"
                    x="10"
                    y="26"
                    fill="#FFF"
                    transform="rotate(-180 16 27)"
                  ></rect>
                  <rect
                    width="12"
                    height="2"
                    x="-1"
                    y="15"
                    fill="#FFF"
                    transform="rotate(-90 5 16)"
                  ></rect>
                  <rect width="2" height="2" x="8" y="24" fill="#FFF"></rect>
                  <rect width="2" height="2" x="6" y="22" fill="#FFF"></rect>
                  <rect
                    width="2"
                    height="2"
                    x="8"
                    y="6"
                    fill="#FFF"
                    transform="rotate(-90 9 7)"
                  ></rect>
                  <rect
                    width="2"
                    height="2"
                    x="6"
                    y="8"
                    fill="#FFF"
                    transform="rotate(-90 7 9)"
                  ></rect>
                  <rect width="3" height="2" x="8" y="15" fill="#FFF"></rect>
                  <rect width="2" height="2" x="11" y="13" fill="#FFF"></rect>
                  <rect width="4" height="2" x="13" y="11" fill="#FFF"></rect>
                  <polygon
                    fill="#FFF"
                    points="17,9 17,11 19,11 19,19 15,19 15,21 19,21 19,23 21,23 21,9"
                  ></polygon>
                  <polygon
                    fill="#FFF"
                    points="13,15 13,17 11,17 11,21 13,21 13,19 15,19 15,15"
                  ></polygon>
                </svg>
              ) : social.name == "GitHub" ? (
                <svg
                  height="40px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    fill="#FFF"
                    d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
                  />{" "}
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
            className="w-full p-3 border bg-transparent border-gray-300 focus:outline-none focus:ring focus:ring-white placeholder-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border bg-transparent border-gray-300 focus:outline-none focus:ring focus:ring-white placeholder-white"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border bg-transparent border-gray-300 focus:outline-none focus:ring focus:ring-white placeholder-white"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [selectedProject, setSelectedProjects] = useState("");
  const [loading, setLoading] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const videoRef = useRef();
  const audioRef = useRef();

  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Random song on load
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25); // Volume starts at 25%
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isAudioPlayerOpen, setIsAudioPlayerOpen] = useState(false);
  const currentSong = meData[0].songs[currentSongIndex]; // Ensure `songs` is the correct list variable
  const visualizerRef = useRef(null);

  const [visitorCount, setVisitorCount] = useState(0);

  // State management for shuffle and repeat
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setCurrentSongIndex(Math.floor(Math.random() * meData[0].songs.length));
  }, []);
  useEffect(() => {
    const audioMotion = new AudioMotionAnalyzer(visualizerRef.current, {
      source: audioRef.current,
      mode: 6,
      bgAlpha: 0,
      fillAlpha: 0,
      lineWidth: 1,
      lumiBars: false,
      maxFreq: 16000,
      radial: false,
      reflexAlpha: 1,
      reflexBright: 1,
      reflexRatio: 0.5,
      showBgColor: false,
      showPeaks: false,
      overlay: true,
      frequencyScale: null,
      frequencyScale: null,
      showScaleX: false,
      showScaleY: false,
      barSpace: 1,
    });
    audioMotion.registerGradient("whiteGradient", {
      colorStops: [
        { pos: 0, color: "#FFFFFF" },
        { pos: 0.5, color: "#FFFFFF" },
        { pos: 1, color: "#FFFFFF" },
      ],
    });
    audioMotion.setOptions({ gradient: "whiteGradient" });
  }, [currentSongIndex]);
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setProgress(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleNext = () => {
    let nextIndex;

    setAnimationKey((prev) => prev + 1); // Restart animation

    if (isShuffle) {
      // Get a random song index if shuffle is enabled
      nextIndex = Math.floor(Math.random() * meData[0].songs.length);
    } else {
      // Otherwise, just go to the next song
      nextIndex = (currentSongIndex + 1) % meData[0].songs.length;
    }

    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
    if (audioRef.current) {
      (audioRef.current.src = meData[0]).songs[nextIndex].src;
      audioRef.current.play();
    }
  };

  const handlePrevious = () => {
    setAnimationKey((prev) => prev + 1); // Restart animation
    const prevIndex =
      (currentSongIndex - 1 + meData[0].songs.length) % meData[0].songs.length; // Fix for previous button to avoid negative index
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = meData[0].songs[prevIndex].src;
      audioRef.current.play();
    }
  };

  // Shuffle Function (toggle shuffle on/off)
  const handleShuffleToggle = () => {
    setIsShuffle(!isShuffle);
  };

  // Repeat Function (toggle repeat on/off)
  const handleRepeatToggle = () => {
    setIsRepeat(!isRepeat);
    if (isRepeat) {
      // Set to play again when the song finishes
      audioRef.current.onended = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
      };
    } else {
      // Remove repeat behavior
      audioRef.current.onended = null;
    }
  };

  // Listen for when the song ends and apply repeat functionality if enabled
  useEffect(() => {
    if (audioRef.current && isRepeat) {
      audioRef.current.onended = () => {
        handleRepeat(); // Will repeat the current song
      };
    }
  }, [isRepeat]);

  const preloadFonts = () => {
    console.log("🔄 Preloading fonts...");
    document.fonts.load("1em 'vcr-osd-mono.ttf'");
    document.fonts.load("1em 'vcr-osd-neue.ttf'");
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = meData[0].songs[currentSongIndex].src;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex, isPlaying]);
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    // if (hasVisited) {
    //   setLoading(false); // Skip the video if user has visited before
    // }

    fetch("https://api.countapi.xyz/hit/surafel.work/visits")
      .then((res) => res.json())
      .then((data) => setVisitorCount(data.value));

    setTimeout(() => {
      preloadFonts();
      setShowPlayButton(true);
      console.log("✅ Fonts preloaded (3s mark)");
    }, 3000);
  }, []);

  const preloadVideos = () => {
    console.log("🔄 Preloading videos...");
    meData[0].videoSources.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
    });
  };

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setShowPlayButton(false);
    preloadVideos();
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 4000);

    setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 10000);
  };

  const Experience = () => {
    return (
      <div className="flex flex-col items-center w-[100%]">
        {meData[0].experiences.map((exp, index) => (
          <div key={index} className="flex flex-col items-start w-full mb-2">
            <h3 className="bg-white w-[280px] text-black pl-2 text-lg mb-2 uppercase">
              {exp.date}
            </h3>
            <div className="border-l-2 border-white pl-4 pt-2 mb-2">
              <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
              <p className="text-md mb-4">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTitle = () => meData[0].sectionTitles[activeSection] || null;

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div>
            <div className="h-full overflow-hidden" id="aboutContent">
              <p className="text-3xl font-thin text-justify mb-8">
                Hi, I’m Surafel Yimam, a Full Stack Software Engineer, I've been
                coding since I was a kid basically. With over
                <span className="glitch"> 9 Years </span> of experience, I love
                to create exceptional and creative digital solutions.
              </p>
              <img
                src={"/images/about.jpeg"}
                alt={"Visul Basic + ASP.Net + SQL Project in 2016"}
                className="w-full mb-4 rounded-lg flicker"
              />
              <p>
                <span className="absolute left-[-1rem] opacity-0 transition-opacity group-hover:opacity-100">
                  &gt;
                </span>
                A screenshot a Visul Basic + ASP.Net + SQL Project from 2014 -
                2016
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
                  {meData[0].projects.map((project, index) => (
                    <div
                      onClick={() => {
                        setActiveSection("project-details");
                        setSelectedProjects(project);
                      }}
                      key={index}
                      className="project-card w-full md:w-[45%] lg:w-[48%] p-4 rounded-sm border-2 border-transparent"
                    >
                      <img
                        className="mb-4 w-full flicker"
                        src={project.image}
                        alt={project.title}
                      />
                      <h4 className="mb-1 text-3xl font-bold text-center">
                        {project.title}
                      </h4>
                      <h4 className="mb-1 text-center">{project.subtitle}</h4>
                      <div className="px-4 mb-3 flex justify-between">
                        {project?.tags.map(({ label, section, video }) => (
                          <button
                            key={section}
                            onClick={() => {
                              setActiveSection(section);
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
                            className="h-[30px] mb-2 flicker"
                            src={icon}
                            alt="Tech Icon"
                          />
                        ))}
                      </div>

                      <p
                        className="mb-4 text-center"
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                      />
                      {/* <div className="px-4 mb-4 flex gap-2 justify-center">
                        {project.actions.map(({ label, section, video }) => (
                          <button
                            key={section}
                            className="text-sm text-left font-mono relative group transition-all flicker border-2 px-2 py-1"
                            style={{ fontFamily: "VCRMono" }}
                          >
                            {label}
                          </button>
                        ))}
                      </div> */}
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
        );
      case "project-details":
        if (!selectedProject) {
          setActiveSection("projects");
        }
        return (
          <>
            <div
              className="h-full w-full overflow-hidden overflow-y-auto no-scrollbar"
              style={{ fontFamily: "VCRNeue" }}
            >
              <div className="mt-2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full mb-4"
                />
                <h3 className="text-3xl font-semibold mt-4">WHAT IS IT?</h3>
                {selectedProject.longDescription?.map((desc, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-lg mb-4">{desc.firstParagraph}</p>
                    <p className="text-lg">{desc.secondParagraph}</p>
                  </div>
                ))}
                <h3 className="text-3xl font-semibold mt-4">WHAT I DID?</h3>
                <ul className="list-disc pl-6">
                  {selectedProject.whatIDid?.map((item, index) => (
                    <li key={index} className="text-lg mb-2">
                      <span className="capitalize font-bold">
                        {item.title}:
                      </span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
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
              {meData[0].otherItems.map(({ label, videoIndex }) => (
                <button
                  key={videoIndex}
                  onMouseEnter={() => setActiveVideoIndex(videoIndex)}
                  onMouseLeave={() => setActiveVideoIndex(0)}
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
      className="bg-gray-800 flex h-screen w-screen relative overflow-hidden"
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-[1000]">
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
              <span className="absolute left-[-2rem] opacity-0 transition-opacity group-hover:opacity-100">
                &gt;
              </span>
              TAP TO PLAY
            </button>
          )}

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

      {/* <audio ref={audioRef} loop>
        <source src={currentSong.src} type="audio/mp3" />
      </audio> */}

      {meData[0].videoSources.map((src, index) => (
        <video
          key={src}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activeVideoIndex === index
              ? "opacity-100 z-[10]"
              : "opacity-0 z-[0]"
          }`}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

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

      <div className="w-full hidden  lg:w-[40%] text-gray-900 lg:flex flex-col justify-center items-start p-6 sm:p-10 lg:p-12 xl:p-16 overflow-hidden"></div>

      <div className="relative w-full lg:w-[60%] text-white flex flex-col justify-center items-start p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 z-[100]">
        {activeSection == "start" ? (
          <>
            <p
              className="text-2xl lg:text-4xl mb-2 glitch flicker"
              style={{ fontFamily: "VCRMono" }}
              data-text="Hi, I'm"
            >
              Hi, I'm
            </p>
            <h1
              className="text-5xl sm:text-3xl lg:text-8xl font-bold mb-1 glitch flicker"
              style={{ fontFamily: "VCRNeue" }}
              data-text="SURAFEL YIMAM"
            >
              SURAFEL YIMAM
            </h1>
            <p
              className="text-2xl sm:text-lg  lg:text-4xl mb-10 glitch flicker"
              style={{ fontFamily: "VCRMono" }}
              data-text="FULL STACK SOFTWARE ENGINEER"
            >
              FULL STACK SOFTWARE ENGINEER
            </p>
            <nav className="flex flex-col gap-2 pl-5">
              {meData[0].menuItems.map(({ label, section, video }) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section);
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
          </>
        ) : (
          <>
            <nav className="w-full flex items-center justify-between mb-4 px-2">
              <h1
                onClick={() => setActiveSection("start")}
                data-text={"SRFL"}
                className="text-3xl font-bold glitch flicker cursor-pointer"
                style={{ fontFamily: "VCRNeue" }}
              >
                SRFL
              </h1>

              <div className="hidden md:flex gap-6 xl:gap-10 items-center">
                {meData[0].menuItems.map(({ label, section, video }) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
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

              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{ fontFamily: "VCRMono" }}
              >
                {isMenuOpen ? (
                  <svg
                    height="40px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"
                      fill="#FFF"
                    />{" "}
                  </svg>
                ) : (
                  <svg
                    height="40px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                      fill="#FFF"
                    />{" "}
                  </svg>
                )}
              </button>

              {isMenuOpen && (
                <div className="absolute top-16 right-6 bg-black text-white  flex flex-col w-48 p-4 md:hidden z-[1000]">
                  {meData[0].menuItems.map(({ label, section, video }) => (
                    <button
                      onClick={() => {
                        setActiveSection(section);
                        setIsMenuOpen(!isMenuOpen);
                      }}
                      key={section}
                      className="pl-4 mb-1 text-lg text-left font-mono relative group transition-all flicker"
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
            <div className=" w-full mb-3 items-center py-1 ">
              <h1
                className="text-6xl lg:text-8xl font-bold text-upper flicker glitch"
                data-text={renderTitle()}
                style={{ fontFamily: "VCRMono" }}
              >
                {renderTitle()}
              </h1>
              {activeSection == "project-details" && selectedProject && (
                <div className="w-full">
                  <button
                    className="mb-4 p-2 border border-white"
                    onClick={() => setActiveSection("projects")}
                    style={{ fontFamily: "VCRMono" }}
                  >
                    ← BACK TO PROJECTS
                  </button>
                  <h2
                    className="text-4xl font-bold"
                    style={{ fontFamily: "VCRMono" }}
                  >
                    {selectedProject.title}
                  </h2>
                  <h4
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "VCRMono" }}
                  >
                    {selectedProject.subtitle}
                  </h4>
                  <div className="flex w-full justify-between gap-4 mb-2">
                    <div className="flex gap-4 ">
                      {selectedProject.techIcons.map((icon, i) => (
                        <img
                          key={i}
                          className="h-[30px] mb-2 flicker"
                          src={icon}
                          alt="Tech Icon"
                        />
                      ))}
                    </div>
                    {/* <div className="px-4 mb-4 flex gap-2 justify-center">
                      {selectedProject.actions.map(
                        ({ label, section, video }) => (
                          <a
                            // href={}
                            key={section}
                            className="text-sm text-left font-mono relative group transition-all flicker border-2 px-2 py-1"
                            style={{ fontFamily: "VCRMono" }}
                          >
                            {label}
                          </a>
                        )
                      )}
                    </div> */}
                  </div>
                </div>
              )}
            </div>
            <div
              className="h-full w-full overflow-hidden overflow-y-auto no-scrollbar pb-10"
              style={{ fontFamily: "VCRNeue" }}
              id="aboutContent"
            >
              {renderContent()}
            </div>
          </>
        )}
        <div
          className={`absolute bottom-[120px] lg:bottom-20  shadow-lg w-[80%] px-8  `}
        >
          <div className="flex items-center justify-between gap-8">
            <div className={`flex-start   `}>
              {/* <div
                className="capitalize text-xs"
                style={{
                  lineHeight: "100%",
                  fontFamily: "VCRMono",
                }}
              >
                WELCOME
              </div>
              <div
                className="capitalize text-2xl"
                style={{
                  lineHeight: "100%",
                  fontFamily: "VCRMono",
                }}
              >
                #
                {visitorCount > 0
                  ? String(visitorCount).padStart(3, "0")
                  : "000"}
              </div> */}
            </div>
            <div
              style={{
                background: "rgba(0, 0, 0, 0.8)",
              }}
              className={`absolute bottom-10 right-5 max-w-[250px] p-3  border border-white text-white flicker ${
                !isAudioPlayerOpen ? "hidden" : "visible"
              }`}
            >
              <div
                className="absolute left-1 top-2 cursor-pointer"
                onClick={() => setIsAudioPlayerOpen(false)}
              >
                <svg
                  height="20px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-8 4H9V7H7v2h2v2h2v2H9v2H7v2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2v-2h2V9h2V7h-2v2h-2v2h-2V9z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="flex gap-4 items-center ml-4  pl-8 w-[200px] overflow-hidden">
                <div className="relative w-full">
                  <h2
                    style={{ fontFamily: "VCRMono" }}
                    key={animationKey}
                    className="text-md font-bold marquee-wrapper"
                  >
                    <span className="marquee-text">
                      {currentSong.title || ""}
                    </span>
                  </h2>
                  <p
                    style={{ fontFamily: "VCRMono" }}
                    className="text-xs text-white"
                  >
                    <span className="">{currentSong.seller || ""}</span>
                  </p>
                </div>
              </div>

              <audio
                key={currentSong.src}
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                style={{
                  fontFamily: "VCRMono",
                }}
              >
                <source src={currentSong.src} type="audio/mpeg" />
              </audio>
              <input
                type="range"
                className="w-full seek-slider"
                min="0"
                max={duration || 0}
                value={progress}
                onChange={handleProgressChange}
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span
                  style={{
                    fontFamily: "VCRMono",
                  }}
                >
                  {Math.floor(progress)}s
                </span>
                <span
                  style={{
                    fontFamily: "VCRMono",
                  }}
                >
                  {Math.floor(duration)}s
                </span>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-1">
                <button onClick={handlePrevious} className="">
                  <svg
                    height={"25px"}
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M6 4h2v16H6V4zm12 0h-2v2h-2v3h-2v2h-2v2h2v3h2v2h2v2h2V4z"
                      fill="#FFF"
                    />{" "}
                  </svg>
                </button>
                <button onClick={togglePlay} className="">
                  {!isPlaying ? (
                    <svg
                      height={"25px"}
                      fill="#FFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z"
                        fill="#FFF"
                      />{" "}
                    </svg>
                  ) : (
                    <svg
                      height={"25px"}
                      fill="#FFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        d="M10 4H5v16h5V4zm9 0h-5v16h5V4z"
                        fill="#FFF"
                      />{" "}
                    </svg>
                  )}
                </button>
                <button onClick={handleNext} className="">
                  <svg
                    height={"25px"}
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M6 4h2v2h2v2h2v2h2v4h-2v2h-2v2H8v2H6V4zm12 0h-2v16h2V4z"
                      fill="#FFF"
                    />{" "}
                  </svg>
                </button>
                <button
                  onClick={handleRepeatToggle}
                  style={{
                    opacity: isRepeat ? 1 : 0.5,
                    transition: "opacity 0.3s",
                  }}
                >
                  <svg
                    height="25px"
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11 1H9v2h2v2H5v2H3v10h2v2h2v-2H5V7h6v2H9v2h2V9h2V7h2V5h-2V3h-2V1zm8 4h-2v2h2v10h-6v-2h2v-2h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2V5z"
                      fill="#FFF"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleShuffleToggle}
                  style={{
                    opacity: isShuffle ? 1 : 0.5,
                    transition: "opacity 0.3s",
                  }}
                >
                  <svg
                    height="25px"
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18 5h-2v2h2v2h-6v2h-2v6H2v2h8v-2h2v-6h6v2h-2v2h2v-2h2v-2h2V9h-2V7h-2V5zM2 9h6v2H2V9zm20 10v-2h-8v2h8z"
                      fill="#FFF"
                    />
                  </svg>
                </button>
              </div>
              <audio
                crossOrigin="anonymous"
                loop
                src="https://mysaqemvwxduynavbong.supabase.co/storage/v1/object/public/test/Ek%20Pal%20Ka%20Jeena.mp3"
              ></audio>
              <div className="flex items-center mt-2">
                {volume > 0 ? (
                  <svg
                    height={"25px"}
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M11 2H9v2H7v2H5v2H1v8h4v2h2v2h2v2h2V2zM7 18v-2H5v-2H3v-4h2V8h2V6h2v12H7zm6-8h2v4h-2v-4zm8-6h-2V2h-6v2h6v2h2v12h-2v2h-6v2h6v-2h2v-2h2V6h-2V4zm-2 4h-2V6h-4v2h4v8h-4v2h4v-2h2V8z"
                      fill="currentColor"
                    />{" "}
                  </svg>
                ) : (
                  <svg
                    height={"25px"}
                    fill="#FFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      d="M15 2h2v20h-2v-2h-2v-2h2V6h-2V4h2V2zm-4 6V6h2v2h-2zm-2 2h2V8H7v8h4v2h2v-2h-2v-2H9v-4z"
                      fill="#FFF"
                    />{" "}
                  </svg>
                )}
                <input
                  type="range"
                  className="slider ml-2 w-full"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>

            <div className={`flex gap-2 items-center `}>
              <div
                key={currentSongIndex}
                className="container"
                id="container"
                ref={visualizerRef}
              ></div>
              <svg
                className="cursor-pointer flicker pt-2"
                height="45px"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="-5.0 -10.0 110.0 135.0"
                onClick={() => setIsAudioPlayerOpen(!isAudioPlayerOpen)}
              >
                <path
                  fill="#FFF"
                  d="m38.332 74.5h-10.832v8.832h-27.5v-19.164h10.109v-7.4453h16.281v-40.055h73.609v14.832h-16.277v43h-9.4453v8.832h-27.5v-19.164h10.113v-7.4453h14.887v-25.223h-33.445z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
