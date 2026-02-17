import Link from 'next/link';
import React from 'react';

const Navber = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop:blur-sm border-b border-white/5 bg-[#050509]/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={'/'} className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-black rounded-[1px]"></div>
          </div>
          <span className='text-sm font-medium tracking-tight text-white/90'>OneMinute Support</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navber;
