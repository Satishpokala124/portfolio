import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import * as twinkleConfig from 'src/config/twinkle.json';
import { setStarsStatus } from 'src/redux/starsSlice';
import { STATUS } from 'src/utils';

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
  const dispatch = useDispatch();

  const particlesInit = useCallback(async (engine) => {
    dispatch(setStarsStatus(STATUS.LOADING));
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    dispatch(setStarsStatus(STATUS.SUCCESS));
  }, []);

  return (
    <div className='relative h-full w-full'>
      <Particles
        id='white'
        init={particlesInit}
        loaded={particlesLoaded}
        options={twinkleConfig}
        className='absolute h-full w-full'
      />

      <Particles
        id='red'
        init={particlesInit}
        loaded={particlesLoaded}
        options={redConfig}
        className='absolute h-full w-full'
      />
      <Particles
        id='orange'
        init={particlesInit}
        loaded={particlesLoaded}
        options={orangeConfig}
        className='absolute h-full w-full'
      />
      <Particles
        id='yellow'
        init={particlesInit}
        loaded={particlesLoaded}
        options={yellowConfig}
        className='absolute h-full w-full'
      />
      <Particles
        id='blue'
        init={particlesInit}
        loaded={particlesLoaded}
        options={blueConfig}
        className='absolute h-full w-full'
      />
    </div>
  );
}
