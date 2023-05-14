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
    <div className='absolute'>
      <Particles id='white' init={particlesInit} loaded={particlesLoaded} options={twinkleConfig} />
      <Particles id='red' init={particlesInit} loaded={particlesLoaded} options={redConfig} />
      <Particles id='orange' init={particlesInit} loaded={particlesLoaded} options={orangeConfig} />
      <Particles id='yellow' init={particlesInit} loaded={particlesLoaded} options={yellowConfig} />
      <Particles id='blue' init={particlesInit} loaded={particlesLoaded} options={blueConfig} />
    </div>
  );
}
