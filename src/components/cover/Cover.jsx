import React from 'react';
import "./Cover.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon="fa-solid fa-circle-arrow-down" />
// import coverVideo from "../../media/coverVideo.mp4";


const Cover = () => {
    const toAbout = () => {
        window.scrollTo({ top:550, left:0, behavior: "smooth"});
    }

  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
};

const particlesLoaded =  (container) => {
    console.log(container);
};
  return (

    <div className='cover-container'> 
        <Particles 
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.8,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 100,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }
            }
        />
        <div className='text-center'>
          {/* <video className='video' src={coverVideo} autoPlay loop muted /> */}
          <h1>Andres Dalla Pozza</h1>
          <p>Developer | Designer | Content Creator </p>
        </div>
        <div className='icon d-flex flex-column '>
            <h3>ABOUT ME</h3>
            <FontAwesomeIcon onClick={toAbout} icon={faCircleArrowDown} />
        </div>
    </div>
  )
}

export default Cover