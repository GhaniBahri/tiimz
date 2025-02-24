import React from 'react';

interface SwitcherProps {
    setTheme: ()=> void;
}

const Switcher : React.FC<SwitcherProps> = ({setTheme}) => {
  return (
    <div className="w-32 h-16 aspect-video rounded-xl dark:has-[:checked]:bg-EclipsePurple dark:bg-EclipsePurple bg-GhostWhite border-4 border-DodgerBlue dark:border-GoldenYellow ">
      <div className="flex h-full w-full px-2 items-center gap-x-2">
        <div className="w-4 h-4 flex-shrink-0 rounded-full border-4 border-DodgerBlue dark:border-GoldenYellow" />
        <label htmlFor="switch" className="has-[:checked]:scale-x-[-1] w-full h-7 border-4 border-[#121331] rounded cursor-pointer">
          <input type="checkbox" id="switch" className="hidden" onClick={setTheme}/>
          <div className="w-full h-full bg-Coralred relative">
            <div className="w-0 h-0 z-20 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] border-t-[#121331] relative">
              <div className="w-0 h-0 absolute border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[6px] border-t-Coralred -top-2.5 -left-[8px]" />
            </div>
            <div className="w-[12px] h-5 z-10 absolute top-[9px] left-0 bg-Coralred border-r-2 border-b-4 border-[#121331] transform skew-y-[39deg]" />
            <div className="w-[13px] h-5 z-10 absolute top-[9px] left-[12px] bg-Coralred border-r-4 border-l-2 border-b-4 border-[#121331] transform skew-y-[-39deg]" />
          </div>
        </label>
        <div className="w-4 h-1 flex-shrink-0 bg-DodgerBlue dark:bg-GoldenYellow rounded-full" />
      </div>
    </div>
  );
}

export default Switcher;
