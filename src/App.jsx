import Header from 'src/Header';
import Stars from 'src/Stars';

function App() {
  return (
    <div className='relative flex items-center justify-center w-full h-screen gap-4 bg-gradient-to-b from-slate-950 to-sky-900 text-slate-100'>
      <Stars />
      <Header />
    </div>
  );
}

export default App;
