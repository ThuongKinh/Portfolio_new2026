/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  CheckCircle, 
  Circle, 
  Award, 
  Code, 
  GraduationCap, 
  Sparkles, 
  Filter, 
  Calendar,
  Compass,
  Check,
  PlusCircle,
  FileText
} from 'lucide-react';
import { LearningMilestone } from '../types';

interface LearningJourneyProps {
  milestones: LearningMilestone[];
  onUpdateMilestones: (updated: LearningMilestone[]) => void;
}

type CategoryFilter = 'all' | 'education' | 'coding' | 'life' | 'achievement';

export default function LearningJourney({ milestones, onUpdateMilestones }: LearningJourneyProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newCategory, setNewCategory] = useState<'education' | 'coding' | 'life' | 'achievement'>('coding');
  const [newContent, setNewContent] = useState('');
  const [newIsCompleted, setNewIsCompleted] = useState(true);

  const handleToggleComplete = (id: string) => {
    const updated = milestones.map(m => {
      if (m.id === id) {
        return { ...m, isCompleted: !m.isCompleted };
      }
      return m;
    });
    // Sort chronologically after edits if desired, but we'll sort them on display.
    onUpdateMilestones(updated);
  };

  const handleAddMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDate || !newContent.trim()) return;

    const newMs: LearningMilestone = {
      id: 'ms_' + Date.now(),
      title: newTitle.trim(),
      date: newDate,
      category: newCategory,
      content: newContent.trim(),
      isCompleted: newIsCompleted
    };

    onUpdateMilestones([newMs, ...milestones]);
    
    // Reset fields
    setNewTitle('');
    setNewDate('');
    setNewContent('');
    setNewIsCompleted(true);
    setShowAddForm(false);
  };

  const handleDeleteMilestone = (id: string) => {
    const updated = milestones.filter(m => m.id !== id);
    onUpdateMilestones(updated);
  };

  // Sort milestones by date descending (newest first)
  const sortedMilestones = [...milestones].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Filter based on selected category
  const filteredMilestones = sortedMilestones.filter(m => {
    if (filter === 'all') return true;
    return m.category === filter;
  });

  // Category renderer helpers
  const getCategoryDetails = (cat: string) => {
    switch (cat) {
      case 'education':
        return {
          label: 'Học tập',
          colorClass: 'border-black bg-white text-black',
          dotColor: 'bg-black border-black',
          icon: <GraduationCap className="w-3.5 h-3.5" />
        };
      case 'coding':
        return {
          label: 'Lập trình',
          colorClass: 'border-black bg-neutral-100 text-black',
          dotColor: 'bg-black border-black',
          icon: <Code className="w-3.5 h-3.5" />
        };
      case 'achievement':
        return {
          label: 'Thành tích',
          colorClass: 'border-black bg-black text-white',
          dotColor: 'bg-black border-black',
          icon: <Award className="w-3.5 h-3.5 text-white" />
        };
      default:
        return {
          label: 'Đời sống',
          colorClass: 'border-[#E5E5E5] bg-[#FAFAFA] text-black',
          dotColor: 'bg-black border-black',
          icon: <Compass className="w-3.5 h-3.5" />
        };
    }
  };

  return (
    <div className="space-y-12" id="learning-journey-container">
      {/* Introduction text in box minimalist style */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-8 border-4 border-black bg-white">
        <div className="space-y-2">
          <h2 className="font-sans font-black text-lg text-black flex items-center gap-2 uppercase tracking-wide">
            <Sparkles className="w-5 h-5 text-black" />
            Hành trình học tập & phát triển
          </h2>
          <p className="text-xs text-gray-500 max-w-xl uppercase tracking-wider">
            Lưu lại những cột mốc phát triển đáng nhớ từ THPT đến giảng đường đại học và thế giới công nghệ.
          </p>
        </div>

        <button 
          onClick={() => setShowAddForm(!showAddForm)} 
          className="inline-flex items-center gap-1.5 bg-black hover:bg-neutral-900 text-white font-bold px-5 py-3 text-xs uppercase tracking-widest transition cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" /> THÊM CỘT MỐC
        </button>
      </div>

      {/* Form to Add Milestone in Box style */}
      {showAddForm && (
        <div className="p-6 bg-white border border-black space-y-6 max-w-2xl mx-auto">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-black flex items-center gap-2 border-b border-black pb-3">
            <Sparkles className="w-4 h-4 text-black" />
            Giao nhận cột mốc mới của bạn
          </h3>
          
          <form onSubmit={handleAddMilestone} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">Tiêu đề mốc *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Vd: Nhận giấy báo trúng tuyển trường Đại Học"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">Ngày diễn ra *</label>
                <input 
                  type="date" 
                  required
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">Phân loại danh mục</label>
                <select 
                  value={newCategory}
                  onChange={(e: any) => setNewCategory(e.target.value)}
                  className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none cursor-pointer"
                >
                  <option value="coding">Lập trình (Coding)</option>
                  <option value="education">Học tập & Nhà trường (Education)</option>
                  <option value="achievement">Giải thưởng & Chứng chỉ (Achievement)</option>
                  <option value="life">Đời sống & Thể chất (Life)</option>
                </select>
              </div>

              <div className="flex items-center gap-3 pt-6 pl-1">
                <input 
                  type="checkbox" 
                  id="newIsCompleted" 
                  checked={newIsCompleted}
                  onChange={(e) => setNewIsCompleted(e.target.checked)}
                  className="w-4 h-4 text-black border-black tracking-wider focus:ring-black cursor-pointer"
                />
                <label htmlFor="newIsCompleted" className="text-xs font-bold text-black uppercase tracking-wider cursor-pointer">
                  Đã hoàn thành mốc?
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5 font-sans">Chi tiết / Suy nghĩ cá nhân *</label>
              <textarea 
                required
                rows={3}
                placeholder="Suy ngẫm ngắn của bạn về thành quả, bài học gặt hái được..."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4 border-t border-black">
              <button 
                type="button" 
                onClick={() => setShowAddForm(false)} 
                className="px-4 py-2 border border-black text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-50 cursor-pointer"
              >
                Hủy bỏ
              </button>
              <button 
                type="submit" 
                className="px-5 py-2 bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Đăng ký mốc
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filter and stats row in pure minimal inline layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-3 border-b-2 border-black" id="timeline-filters">
        <div className="flex flex-wrap items-center gap-1 pb-1 md:pb-0">
          <span className="text-gray-400 text-[10px] flex items-center gap-1 mr-3 font-mono font-bold uppercase tracking-widest">
            <Filter className="w-3.5 h-3.5" /> Bộ lọc //
          </span>
          {[
            { id: 'all', label: 'TẤT CẢ' },
            { id: 'coding', label: 'LẬP TRÌNH' },
            { id: 'education', label: 'HỌC TẬP' },
            { id: 'achievement', label: 'THÀNH TÍCH' },
            { id: 'life', label: 'CUỘC SỐNG' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as CategoryFilter)}
              className={`px-3.5 py-1.5 transition text-[10px] font-bold uppercase tracking-wider cursor-pointer border ${
                filter === btn.id 
                  ? 'bg-black border-black text-white font-bold' 
                  : 'bg-white border-transparent text-gray-500 hover:text-black hover:bg-gray-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Small metric tags */}
        <div className="flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest text-black">
          <span>Tích luỹ: <b className="text-black inline-block px-1.5 py-0.5 bg-neutral-100 border border-black">{milestones.length}</b></span>
          <span>Đã đạt: <b className="text-black inline-block px-1.5 py-0.5 bg-neutral-200 border border-black">{milestones.filter(m => m.isCompleted).length}</b></span>
        </div>
      </div>

      {/* TIMELINE DISPLAY AREA */}
      {filteredMilestones.length === 0 ? (
        <div className="border border-dashed border-black text-center py-16 bg-white flex flex-col items-center justify-center space-y-2">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A]">Hành trình trống!</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Không có mốc nào phù hợp bộ lọc.</p>
        </div>
      ) : (
        <div className="relative pl-8 md:pl-12 border-l-4 border-black my-8 space-y-12">
          {filteredMilestones.map((item, index) => {
            const details = getCategoryDetails(item.category);
            const dateObj = new Date(item.date);
            const formattedDate = dateObj.toLocaleDateString('vi-VN', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            });

            return (
              <div key={item.id} className="relative group">
                
                {/* Minimalist marker on temporal line */}
                <span className={`absolute -left-[43px] md:-left-[59px] top-1 w-6 h-6 flex items-center justify-center border-2 border-black ${
                  item.isCompleted ? 'bg-black text-white' : 'bg-white text-black'
                } z-10 transition-all duration-300`}>
                  <span className="w-2.5 h-2.5 bg-current inline-block"></span>
                </span>

                <div className="flex flex-col lg:flex-row gap-4 items-start">
                  
                  {/* Left Side (Meta data: Date & category) */}
                  <div className="lg:w-48 flex-shrink-0 space-y-2">
                    <div className="flex items-center gap-1.5 text-black font-mono text-[10px] font-bold uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formattedDate}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest border ${details.colorClass}`}>
                        {details.icon}
                        {details.label}
                      </span>
                      
                      {item.isCompleted ? (
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white bg-black border border-black px-2 py-1">Đã Đạt</span>
                      ) : (
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-black bg-white border border-black px-2 py-1">Dự Kiến</span>
                      )}
                    </div>
                  </div>

                  {/* Right Side (Card Content in Box Minimal styling) */}
                  <div className="flex-grow bg-white border border-black p-6 hover:bg-neutral-50 transition-all duration-300 relative w-full">
                    
                    {/* Action buttons embedded smoothly inside cards */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => handleToggleComplete(item.id)}
                        className={`p-1.5 border border-black transition cursor-pointer bg-white ${
                          item.isCompleted 
                            ? 'text-yellow-600 hover:bg-yellow-50' 
                            : 'text-emerald-600 hover:bg-emerald-50'
                        }`}
                        title={item.isCompleted ? "Đánh dấu chưa hoàn thành" : "Đánh dấu đã hoàn thành"}
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => handleDeleteMilestone(item.id)}
                        className="p-1.5 text-gray-400 hover:text-black hover:bg-neutral-100 border border-transparent hover:border-black transition cursor-pointer"
                        title="Xóa cột mốc"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h3 className="font-sans font-black text-black uppercase tracking-tight text-sm md:text-base pr-12">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-gray-700 leading-relaxed font-sans mt-3 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
