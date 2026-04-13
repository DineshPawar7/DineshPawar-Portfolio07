const GithubCalendar = () => {
  return (
    <div className="px-2 w-full mx-auto">
      {/* Heading */}
     
<h2 className="text-[clamp(2.2rem,8vw,60px)] font-bold mb-6 md:mb-16 text-white leading-tight text-center md:text-left uppercase">
       Github <span className="text-primary">Contributions</span>
      </h2>
      {/* Container */}
      <div className="w-full bg-[#1a1a1a] border border-white/10 p-2 md:p-4 rounded-lg md:rounded-3xl">
        
       <img
  src="https://ghchart.rshah.org/00ff00/DineshPawar7"
  alt="GitHub Contributions"
  className="w-full rounded-xl"
/>

      </div>
    </div>
  );
};

export default GithubCalendar;