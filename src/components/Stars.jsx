import { useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import * as twinkleConfig from 'src/config/twinkle.json';

const getColorConfig = (colorCode) => ({
  ...twinkleConfig,
  particles: {
    ...twinkleConfig.particles,
    color: {
      value: colorCode,
    },
  },
});

const redConfig = getColorConfig('#eddca5');
const orangeConfig = getColorConfig('#fffde1');
const yellowConfig = getColorConfig('#fff28e');
const blueConfig = getColorConfig('#b2d3fd');

export default function Stars() {
  const particlesInit = useCallback(async (engine) => {
    console.log('init');
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log('loaded');
  }, []);

  return (
    <div className='relative w-full h-full'>
      <Particles
        id='white'
        init={particlesInit}
        loaded={particlesLoaded}
        options={twinkleConfig}
        className='absolute w-full h-full'
      />

      <Particles
        id='red'
        init={particlesInit}
        loaded={particlesLoaded}
        options={redConfig}
        className='absolute w-full h-full'
      />
      <Particles
        id='orange'
        init={particlesInit}
        loaded={particlesLoaded}
        options={orangeConfig}
        className='absolute w-full h-full'
      />
      <Particles
        id='yellow'
        init={particlesInit}
        loaded={particlesLoaded}
        options={yellowConfig}
        className='absolute w-full h-full'
      />
      <Particles
        id='blue'
        init={particlesInit}
        loaded={particlesLoaded}
        options={blueConfig}
        className='absolute w-full h-full'
      />
    </div>
  );
}
