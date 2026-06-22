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
import { INITIAL_PROFILE, INITIAL_MILESTONES, INITIAL_WORKOUTS } from './data';
import { UserProfile, LearningMilestone, WorkoutDay } from './types';
import { Sparkles, Quote, Star, Trophy, Target, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'journey' | 'warehouse' | 'mentor'>('portfolio');

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

  // Load and manage Workouts state
  const [workoutDays, setWorkoutDays] = useState<WorkoutDay[]>(() => {
    const saved = localStorage.getItem('tram_canhan_workouts');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing workouts", e);
      }
    }
    return INITIAL_WORKOUTS;
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('tram_canhan_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('tram_canhan_milestones', JSON.stringify(milestones));
  }, [milestones]);

  useEffect(() => {
    localStorage.setItem('tram_canhan_workouts', JSON.stringify(workoutDays));
  }, [workoutDays]);

  // Handle updates from children
  const handleUpdateProfile = (updated: UserProfile) => {
    setProfile(updated);
  };

  const handleUpdateMilestones = (updated: LearningMilestone[]) => {
    setMilestones(updated);
  };

  const handleUpdateWorkoutDays = (updated: WorkoutDay[]) => {
    setWorkoutDays(updated);
  };

  // Helper stats for side widgets
  const completedMilestonesCount = milestones.filter(m => m.isCompleted).length;
  const totalMilestonesCount = milestones.length;

  const totalExercises = workoutDays.reduce((acc, d) => acc + d.exercises.length, 0);
  const completedExercises = workoutDays.reduce((acc, d) => acc + d.exercises.filter(e => e.completed).length, 0);

  return (
    <div id="app-container" className="min-h-screen bg-neutral-50 flex flex-col justify-between selection:bg-black selection:text-white font-sans antialiased text-black">
      
      {/* Sticky beautiful header navigation */}
      <Header activeTab={activeTab} onChangeTab={setActiveTab} />

      {/* Main viewport with slight side panel logic on desktop */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        
        {/* Quick welcome panel with visual cards */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative p-6 bg-white border-2 border-black flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] overflow-hidden">
            <div className="space-y-1.5 z-10">
              <h4 className="text-[10px] font-mono font-bold uppercase text-black flex items-center gap-1.5 tracking-widest">
                <Sparkles className="w-3.5 h-3.5" /> Chào tân sinh viên!
              </h4>
              <p className="text-sm font-black text-black uppercase tracking-tight">
                Lên lộ trình tên miền cho {profile.name.split(' ').pop()}
              </p>
              <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                Hãy bắt đầu sửa đổi và vọc vạch ứng dụng theo ý thích.
              </p>
            </div>
            {/* Ambient decoration */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 text-neutral-100 pointer-events-none select-none">
              <Quote className="w-24 h-24 stroke-[1.5]" />
            </div>
          </div>

          <div className="p-6 bg-white border-2 border-black flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]">
            <div className="p-2.5 border border-black bg-neutral-50 text-black">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] font-bold font-mono uppercase tracking-widest text-gray-400">Cột mốc hoàn thành</p>
              <p className="text-lg font-black text-black font-mono">
                {completedMilestonesCount} <span className="text-xs text-gray-400 font-normal">/ {totalMilestonesCount}</span>
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border-2 border-black flex items-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]">
            <div className="p-2.5 border border-black bg-neutral-50 text-black">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[9px] font-bold font-mono uppercase tracking-widest text-gray-400">Động tác tuần này</p>
              <p className="text-lg font-black text-black font-mono">
                {completedExercises} <span className="text-xs text-gray-400 font-normal">/ {totalExercises}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tab view containers */}
        <div id="active-tab-viewport" className="transition-all duration-300">
          
          {activeTab === 'portfolio' && (
            <Portfolio profile={profile} onUpdateProfile={handleUpdateProfile} />
          )}

          {activeTab === 'journey' && (
            <LearningJourney milestones={milestones} onUpdateMilestones={handleUpdateMilestones} />
          )}

          {activeTab === 'warehouse' && (
            <AppWarehouse workoutDays={workoutDays} onUpdateWorkoutDays={handleUpdateWorkoutDays} />
          )}

          {activeTab === 'mentor' && (
            <MentorCorner />
          )}

        </div>

      </main>

      {/* Styled responsive footer */}
      <Footer />

    </div>
  );
}

