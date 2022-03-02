import Particles from 'react-tsparticles'

const ParticlesBackground = () => {
  const particlesInit = (main) => {
    console.log(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        fullScreen: {
          zIndex: 0,
        },
        interactivity: {
          events: {
            onClick: {
              mode: 'push',
            },
            onHover: {
              mode: 'repulse',
              parallax: {
                force: 60,
              },
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: {
              distance: 400,
            },
          },
        },
        particles: {
          color: {
            value: '#000',
          },
          links: {
            color: {
              value: '#000',
            },
            distance: 150,
            enable: true,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              bottom: 'out',
              left: 'out',
            },
          },
          number: {
            value: 0,
          },
          opacity: {
            value: 0.5,
            animation: {
              speed: 1,
              minimumValue: 0.1,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 5,
            },
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
        },
        absorbers: {
          color: {
            value: '#000',
          },
          draggable: false,
          opacity: 1,
          destroy: true,
          orbits: false,
          size: {
            random: {
              enable: true,
              minimumValue: 40,
            },
            value: {
              min: 30,
              max: 50,
            },
            density: 110,
            limit: {
              radius: 110,
              mass: 0,
            },
          },
          position: {
            x: 30,
            y: 40,
          },
        },
        emitters: [
          {
            autoPlay: true,
            fill: true,
            life: {
              wait: true,
            },
            rate: {
              quantity: 1,
              delay: 0.1,
            },
            shape: 'square',
            startCount: 0,
            direction: 'bottom-left',
            particles: {
              shape: {
                type: 'circle',
              },
              color: {
                value: '#000',
              },
              lineLinked: {
                enable: false,
              },
              opacity: {
                value: 1,
              },
              rotate: {
                value: 0,
                random: true,
                direction: 'counter-clockwise',
                animation: {
                  enable: true,
                  speed: 15,
                  sync: true,
                },
              },
              size: {
                value: 10,
                random: {
                  enable: true,
                  minimumValue: 5,
                },
              },
              move: {
                speed: 3,
                random: false,
                outMode: 'repulse',
              },
            },
            position: {
              x: 100,
              y: 0,
            },
          },
          {
            autoPlay: true,
            fill: true,
            life: {
              wait: true,
            },
            rate: {
              quantity: 1,
              delay: 0.1,
            },
            shape: 'square',
            startCount: 0,
            direction: 'bottom-left',
            particles: {
              shape: {
                type: 'circle',
              },
              color: {
                value: '#000',
              },
              lineLinked: {
                enable: false,
              },
              opacity: {
                value: 1,
              },
              rotate: {
                value: 0,
                random: true,
                direction: 'counter-clockwise',
                animation: {
                  enable: true,
                  speed: 15,
                  sync: true,
                },
              },
              size: {
                value: 10,
                random: {
                  enable: true,
                  minimumValue: 5,
                },
              },
              move: {
                speed: 3,
                random: false,
                outMode: 'repulse',
              },
            },
            position: {
              x: 0,
              y: 0,
            },
          },
        ],
      }}
    />
  )
}

export default ParticlesBackground
