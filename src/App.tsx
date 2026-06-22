/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import LearningJourney from './components/LearningJourney';
import AppWarehouse from './components/AppWarehouse';
import MentorCorner from './components/MentorCorner';
import { INITIAL_PROFILE, INITIAL_MILESTONES } from './data';
import { UserProfile, LearningMilestone } from './types';
import { Terminal, Compass, Dumbbell, Map, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load and manage User Profile state
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('tram_canhan_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing profile", e);
      }
    }
    return INITIAL_PROFILE;
  });

  // Load and manage Milestones state
  const [milestones, setMilestones] = useState<LearningMilestone[]>(() => {
    const saved = localStorage.getItem('tram_canhan_milestones');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing milestones", e);
      }
    }
    return INITIAL_MILESTONES;
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('tram_canhan_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('tram_canhan_milestones', JSON.stringify(milestones));
  }, [milestones]);

  // Handle updates from children
  const handleUpdateProfile = (updated: UserProfile) => {
    setProfile(updated);
  };

  const handleUpdateMilestones = (updated: LearningMilestone[]) => {
    setMilestones(updated);
  };

  const isHome = currentHash === '' || currentHash === '#' || currentHash === '#/';

  return (
    <div id="app-container" className="min-h-screen bg-neutral-50 flex flex-col justify-between selection:bg-black selection:text-white font-sans antialiased text-black">
      
      {/* Sticky beautiful header navigation */}
      <Header currentHash={currentHash} />

      {/* Main viewport with slight side panel logic on desktop */}
      <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        
        {isHome ? (
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#1A1A1A] mb-4">Danh Mục Trạm</h2>
            
            <a href="#portfolio" className="group bg-white border-2 border-black p-5 flex items-center justify-between hover:bg-neutral-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black text-white border border-black group-hover:bg-white group-hover:text-black transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight">Portfolio</h3>
                  <p className="text-[11px] text-gray-500 font-mono tracking-wider">Hồ sơ cá nhân và dự án</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </a>

            <a href="#journey" className="group bg-white border-2 border-black p-5 flex items-center justify-between hover:bg-neutral-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black text-white border border-black group-hover:bg-white group-hover:text-black transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight">Hành Trình</h3>
                  <p className="text-[11px] text-gray-500 font-mono tracking-wider">Lộ trình học tập và cột mốc</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </a>

            <a href="#warehouse" className="group bg-white border-2 border-black p-5 flex items-center justify-between hover:bg-neutral-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black text-white border border-black group-hover:bg-white group-hover:text-black transition-colors">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight">Kho Ứng Dụng</h3>
                  <p className="text-[11px] text-gray-500 font-mono tracking-wider">Các module và widget thực hành</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </a>

            <a href="#mentor" className="group bg-white border-2 border-black p-5 flex items-center justify-between hover:bg-neutral-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black text-white border border-black group-hover:bg-white group-hover:text-black transition-colors">
                  <Map className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight">Góc Mentor</h3>
                  <p className="text-[11px] text-gray-500 font-mono tracking-wider">Bài viết và chia sẻ định hướng</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
            </a>
          </div>
        ) : (
          <div id="active-tab-viewport" className="transition-all duration-300">
            {currentHash === '#portfolio' && (
              <Portfolio profile={profile} onUpdateProfile={handleUpdateProfile} />
            )}

            {currentHash === '#journey' && (
              <LearningJourney milestones={milestones} onUpdateMilestones={handleUpdateMilestones} />
            )}

            {currentHash.startsWith('#warehouse') && (
              <AppWarehouse currentHash={currentHash} />
            )}

            {currentHash === '#mentor' && (
              <MentorCorner />
            )}
          </div>
        )}

      </main>

      {/* Styled responsive footer */}
      <Footer />

    </div>
  );
}

