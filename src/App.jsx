import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from 'src/components/Header';
import ScrollPrompt from './components/ScrollPrompt';

import Loading from 'src/components/Loading';
import useScrollPrompt from 'src/hooks/useScrollPrompt';
import { STATUS } from './utils';

function App() {
  const { showScrollPrompt, schedulePrompt } = useScrollPrompt();
  const starsStatus = useSelector((state) => state.stars.status);

  useEffect(() => {
    schedulePrompt();
  }, []);

  return (
    <div>
      {starsStatus !== STATUS.SUCCESS && (
        <div className='absolute z-50 flex h-screen w-full items-center justify-center bg-black'>
          <Loading />
        </div>
      )}
      {showScrollPrompt && (
        <div className='pointer-events-none fixed bottom-4 z-20 flex w-full items-center justify-center transition-opacity duration-500'>
          <ScrollPrompt />
        </div>
      )}
      <div
        className='perspective-100 h-screen w-full overflow-y-auto overflow-x-hidden'
        onScroll={schedulePrompt}
      >
        <Header />
        <div className='flex h-screen w-full items-center justify-center bg-black text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl'>
          <p className='bg-pan cursor-default transition-all'>{`I'm a Fullstack developer`}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
