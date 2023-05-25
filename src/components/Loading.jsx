export default function Loading() {
  return (
    <div className='flex animate-pulse gap-2 text-3xl text-cyan-100 md:text-4xl'>
      <div>Loading</div>
      <div className='animate-bounce'>.</div>
      <div className='animate-bounce' style={{ animationDelay: '0.2s' }}>
        .
      </div>
      <div className='animate-bounce' style={{ animationDelay: '0.4s' }}>
        .
      </div>
    </div>
  );
}
