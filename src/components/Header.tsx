/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Terminal, BookOpen, Compass, Dumbbell, Map } from 'lucide-react';

interface HeaderProps {
  activeTab: 'portfolio' | 'journey' | 'warehouse' | 'mentor';
  onChangeTab: (tab: 'portfolio' | 'journey' | 'warehouse' | 'mentor') => void;
}

export default function Header({ activeTab, onChangeTab }: HeaderProps) {
  const NAV_LINKS = [
    { id: 'portfolio', label: 'Portfolio', icon: <Terminal className="w-4 h-4" /> },
    { id: 'journey', label: 'Hành Trình', icon: <Compass className="w-4 h-4" /> },
    { id: 'warehouse', label: 'Kho Ứng Dụng', icon: <Dumbbell className="w-4 h-4" /> },
    { id: 'mentor', label: 'Góc Mentor', icon: <Map className="w-4 h-4" /> }
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Signature */}
          <div 
            onClick={() => onChangeTab('portfolio')} 
            className="flex items-center gap-3 cursor-pointer group"
            id="header-brand-logo"
          >
            <div className="w-10 h-10 border border-black bg-black text-white flex items-center justify-center font-bold tracking-tight text-sm">
              T.CN
            </div>
            <div>
              <span className="font-sans font-black tracking-tighter text-[#1A1A1A] block text-sm sm:text-base uppercase">
                TRẠM CÁ NHÂN
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest block">
                STUDENT.LAB
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => onChangeTab(link.id)}
                  className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-2 transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive 
                      ? 'bg-black text-white' 
                      : 'text-gray-500 hover:text-black hover:bg-gray-100 border border-transparent'
                  }`}
                >
                  {link.icon}
                  <span className="hidden md:inline">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Special High School Graduate Highlight Badge */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-bold border border-black text-black bg-white select-none">
              🎓 TỐT NGHIỆP THPT
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}
