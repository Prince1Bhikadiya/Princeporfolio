import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React,  { useCallback } from 'react';

const ParticlesContainer = () => {
   // init
   const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
  <Particles 
    className='w-full h-full absolute translate-z-0'
    id='tsparticles' 
    init={particlesInit} 
    loaded={particlesLoaded}
    options={{
      fullScreen: { enable: false },
      background: {
        color: {
          value: ' ',
        },
      },
      fpsLimit: 300,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize:  true,
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 140,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ff0000'
        },
        links: {
          color: '#ffffff',
          distance: 200,
          enable: true,
          opacity: 0.22,
          width: 0.15
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: {min: 1, max: 6 },
        },
      },
      detectRetina: true,
    }}
 />
 );
};
export default ParticlesContainer;
