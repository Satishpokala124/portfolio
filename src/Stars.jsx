import { useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import * as twinkleConfig from 'src/config/twinkle.json';

export default function Stars() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles id='stars' init={particlesInit} loaded={particlesLoaded} options={twinkleConfig} />
  );
}
