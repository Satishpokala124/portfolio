import { useEffect } from 'react';
import Header from 'src/components/Header';
import ScrollPrompt from './components/ScrollPrompt';

import useScrollPrompt from 'src/hooks/useScrollPrompt';

function App() {
  const { showScrollPrompt, scrollEventListner } = useScrollPrompt();

  useEffect(() => {
    scrollEventListner();
  }, []);

  return (
    <div>
      <div
        className={`fixed bottom-4 z-50 flex w-full items-center justify-center transition-opacity duration-500 ${
          showScrollPrompt ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ScrollPrompt />
      </div>
      <div
        className='perspective-100 h-screen w-full overflow-y-auto overflow-x-hidden'
        onScroll={scrollEventListner}
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
