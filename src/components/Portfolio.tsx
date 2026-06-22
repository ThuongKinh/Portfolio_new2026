/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Github, 
  Facebook, 
  Instagram, 
  Mail, 
  Plus, 
  Trash2, 
  Edit, 
  Save, 
  Sparkles, 
  Code, 
  ExternalLink,
  BookOpen,
  Timer,
  Layers,
  Heart,
  X,
  PlusCircle,
  FolderPlus
} from 'lucide-react';
import { UserProfile, Project, Skill } from '../types';

interface PortfolioProps {
  profile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
}

export default function Portfolio({ profile, onUpdateProfile }: PortfolioProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<UserProfile>({ ...profile });
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(4);
  const [newSkillCat, setNewSkillCat] = useState<'frontend' | 'backend' | 'design' | 'other'>('frontend');
  
  // State for adding a new project
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProj, setNewProj] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    techStack: [],
    githubUrl: '',
    demoUrl: '',
    icon: 'Layers'
  });
  const [techInput, setTechInput] = useState('');

  const handleStartEdit = () => {
    setEditedProfile({ ...profile });
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    onUpdateProfile(editedProfile);
    setIsEditing(false);
  };

  const handleSkillsChange = (index: number, value: number) => {
    const updatedSkills = [...editedProfile.skills];
    updatedSkills[index].level = value;
    setEditedProfile({ ...editedProfile, skills: updatedSkills });
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    const newSkill: Skill = {
      name: newSkillName.trim(),
      level: newSkillLevel,
      category: newSkillCat
    };
    const updatedSkills = [...editedProfile.skills, newSkill];
    setEditedProfile({ ...editedProfile, skills: updatedSkills });
    setNewSkillName('');
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = editedProfile.skills.filter((_, i) => i !== index);
    setEditedProfile({ ...editedProfile, skills: updatedSkills });
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProj.title.trim() || !newProj.description.trim()) return;
    
    const parsedTech = techInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const projectToAdd: Project = {
      ...newProj,
      id: 'proj_' + Date.now(),
      techStack: parsedTech.length > 0 ? parsedTech : ['HTML5', 'CSS3']
    };

    const updatedProjects = [...profile.projects, projectToAdd];
    onUpdateProfile({ ...profile, projects: updatedProjects });
    
    // Reset state
    setNewProj({
      title: '',
      description: '',
      techStack: [],
      githubUrl: '',
      demoUrl: '',
      icon: 'Layers'
    });
    setTechInput('');
    setShowAddProject(false);
  };

  const handleRemoveProject = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedProjects = profile.projects.filter(p => p.id !== id);
    onUpdateProfile({ ...profile, projects: updatedProjects });
  };

  // Helper to render Project icons dynamically
  const renderProjectIcon = (iconName: string = 'Layers') => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-500" />;
      case 'Timer':
        return <Timer className="w-5 h-5 text-amber-500" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-500" />;
      default:
        return <Layers className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <div className="space-y-16" id="portfolio-container">
      {/* Portfolio Hero Section in Clean Minimalism Style (High contrast black/white layout, with thin borders) */}
      <div className="border-4 border-black p-8 md:p-12 bg-white relative">
        <div className="absolute top-4 right-4 font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          SYS_PR_FILE // LM.HN
        </div>
        
        {isEditing ? (
          <div className="space-y-8 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b border-black gap-4">
              <h3 className="text-lg font-sans font-black text-black uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-black" />
                Cập nhật thông tin cá nhân
              </h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsEditing(false)} 
                  className="px-5 py-2.5 text-xs text-black border border-black hover:bg-gray-100 font-bold uppercase tracking-wider transition"
                >
                  Huỷ bỏ
                </button>
                <button 
                  onClick={handleSaveProfile} 
                  className="px-5 py-2.5 text-xs bg-black hover:bg-neutral-900 text-white font-bold uppercase tracking-wider transition flex items-center gap-2"
                >
                  <Save className="w-4 h-4" /> Lưu thông tin
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5 font-bold">Họ và tên</label>
                  <input 
                    type="text" 
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    className="w-full bg-white border border-black px-4 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5 font-bold">Tiêu đề cá nhân</label>
                  <input 
                    type="text" 
                    value={editedProfile.title}
                    onChange={(e) => setEditedProfile({ ...editedProfile, title: e.target.value })}
                    className="w-full bg-white border border-black px-4 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5 font-bold">Giới thiệu bản thân (Bio)</label>
                  <textarea 
                    rows={4}
                    value={editedProfile.bio}
                    onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                    className="w-full bg-white border border-black px-4 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition resize-none"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5 font-bold">Email</label>
                  <input 
                    type="email" 
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    className="w-full bg-white border border-black px-4 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5 font-bold">GitHub URL</label>
                  <input 
                    type="text" 
                    value={editedProfile.github}
                    onChange={(e) => setEditedProfile({ ...editedProfile, github: e.target.value })}
                    className="w-full bg-white border border-black px-4 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5 font-bold">Facebook</label>
                    <input 
                      type="text" 
                      value={editedProfile.facebook || ''}
                      onChange={(e) => setEditedProfile({ ...editedProfile, facebook: e.target.value })}
                      className="w-full bg-white border border-black px-4 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-1.5 font-bold">Instagram (@)</label>
                    <input 
                      type="text" 
                      value={editedProfile.instagram || ''}
                      onChange={(e) => setEditedProfile({ ...editedProfile, instagram: e.target.value })}
                      className="w-full bg-white border border-black px-4 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Edit skills sub-panel */}
            <div className="pt-6 border-t border-black">
              <h4 className="text-xs font-mono uppercase tracking-widest text-black font-bold mb-4">Quản lý Kỹ năng hiển thị</h4>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {editedProfile.skills.map((s, index) => (
                  <div key={index} className="flex items-center gap-2 bg-neutral-100 border border-black px-3 py-1.5 text-xs text-black font-bold">
                    <span>{s.name} ({s.level}/5)</span>
                    <button 
                      type="button" 
                      onClick={() => handleRemoveSkill(index)} 
                      className="text-red-600 hover:text-red-800 transition cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddSkill} className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-neutral-50 p-4 border border-black">
                <input 
                  type="text" 
                  placeholder="Kỹ năng mới (Vd: ReactJS, Figma, JS)"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="md:col-span-2 bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black"
                />
                <select 
                  value={newSkillCat}
                  onChange={(e: any) => setNewSkillCat(e.target.value)}
                  className="bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none cursor-pointer"
                >
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="design">Thiết kế (UI/UX)</option>
                  <option value="other">Kỹ năng khác</option>
                </select>
                <button 
                  type="submit" 
                  className="bg-black hover:bg-neutral-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Thêm kỹ năng
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col md:flex-row items-stretch justify-between gap-10">
            <div className="space-y-6 max-w-2xl flex-1 flex flex-col justify-center">
              <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 font-mono text-[9px] font-bold bg-black text-white uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-white" />
                PERSONAL STATION
              </span>
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-sans font-black tracking-tighter text-[#1A1A1A] uppercase">
                  {profile.name}
                </h1>
                <p className="text-lg font-mono tracking-widest uppercase text-gray-500 font-bold">
                  // {profile.title}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed font-sans text-sm md:text-base border-l-2 border-black pl-4">
                {profile.bio}
              </p>
              
              {/* Social Contacts */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a 
                  href={`mailto:${profile.email}`} 
                  className="flex items-center gap-2 text-xs hover:bg-neutral-100 transition border border-black px-4 py-2 font-mono text-black font-bold uppercase tracking-wider"
                >
                  <Mail className="w-3.5 h-3.5 text-black" />
                  <span>{profile.email}</span>
                </a>
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-xs hover:bg-neutral-100 transition border border-black px-4 py-2 font-mono text-black font-bold uppercase tracking-wider"
                >
                  <Github className="w-3.5 h-3.5 text-black" />
                  <span>GitHub</span>
                </a>
                {profile.facebook && (
                  <a 
                    href={profile.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-xs hover:bg-neutral-100 transition border border-black px-4 py-2 font-mono text-black font-bold uppercase tracking-wider"
                  >
                    <Facebook className="w-3.5 h-3.5 text-black" />
                    <span>Facebook</span>
                  </a>
                )}
                {profile.instagram && (
                  <a 
                    href="#" 
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2 text-xs hover:bg-neutral-100 transition border border-black px-4 py-2 font-mono text-black font-bold uppercase tracking-wider"
                  >
                    <Instagram className="w-3.5 h-3.5 text-black" />
                    <span>{profile.instagram}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Profile control area */}
            <div className="flex flex-col items-center justify-center p-6 bg-neutral-50 border border-black md:min-w-[240px] text-center relative">
              <div className="w-20 h-20 border-2 border-black bg-black text-white flex items-center justify-center text-3xl font-black mb-4">
                {profile.name[0]}
              </div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-black">TRẠNG THÁI</h4>
              <p className="text-[10px] text-gray-500 font-mono mt-1 uppercase tracking-wider">SÁNG TẠO ĐỘC BẢN 🇻🇳</p>
              
              <button 
                onClick={handleStartEdit} 
                className="mt-6 w-full py-2.5 bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider border border-black flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Edit className="w-3.5 h-3.5" /> CHỈNH SỬA THÔNG TIN
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Grid of Skills & Technologies */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" id="skills-and-projects-grid">
        
        {/* Left column: Skills list */}
        <div className="lg:col-span-1 border border-black p-6 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-black mb-6">
              <h3 className="font-sans font-black text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">Kỹ năng hiện có</h3>
              <span className="text-[10px] font-mono font-bold bg-black text-white px-2.5 py-0.5 tracking-wider">{profile.skills.length}</span>
            </div>
            
            <p className="text-xs text-gray-500 mb-6 font-sans leading-relaxed uppercase tracking-wide">
              Nhấp nút <b>Chỉnh sửa thông tin</b> phía trên để quản lý hoặc hiệu chỉnh thang độ thuần thục.
            </p>

            <div className="space-y-6">
              {profile.skills.map((s, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-black font-bold">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black"></span>
                      {s.name}
                    </span>
                    <span>{(s.level * 20)}%</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-2.5 border border-black overflow-hidden">
                    <div 
                      className="bg-black h-full transition-all duration-500" 
                      style={{ width: `${s.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
            <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-5 flex gap-4 items-start">
              <span className="p-2 border border-black bg-white text-black">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A]">Lời khuyên Mentor:</p>
                <p className="text-xs text-gray-500 leading-relaxed mt-2">
                  Tìm hiểu vững vàng cốt lõi JS, học Git thật bài bản và kiến thiết các mô hình lưu trữ logic đơn giản. Đây chính là tấm vé vững chãi để bạn bứt phá sắp tới!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Projects showcase & creator area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 pb-4 border-b border-black">
            <div>
              <h3 className="font-sans font-black text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">Dự án nhỏ đã phát triển</h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Kho tàng lưu động tích luỹ quá trình vọc vạch lập trình phần cứng & phần mềm.</p>
            </div>
            
            <button 
              onClick={() => setShowAddProject(!showAddProject)} 
              className="inline-flex items-center gap-1.5 bg-black hover:bg-neutral-900 text-white font-bold px-4 py-2 text-xs uppercase tracking-widest transition duration-200 self-start cursor-pointer"
            >
              <FolderPlus className="w-4 h-4" /> 
              {showAddProject ? 'Đóng bảng' : 'Thêm dự án'}
            </button>
          </div>

          {/* Form to add a new project */}
          {showAddProject && (
            <div className="bg-neutral-50 border border-black p-6 space-y-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-black flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-black" />
                Đăng ký một dự án mới
              </h4>
              
              <form onSubmit={handleAddProject} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">Tên dự án *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Vd: Sổ tay học lập trình, Trò chơi phản xạ..."
                    value={newProj.title}
                    onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                    className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">Mô tả tóm tắt *</label>
                  <textarea 
                    required
                    rows={2}
                    placeholder="Giới thiệu nhanh về tính năng chính và lý do bạn xây dựng nó."
                    value={newProj.description}
                    onChange={(e) => setNewProj({ ...newProj, description: e.target.value })}
                    className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">Công nghệ (cách nhau bằng dấu phẩy)</label>
                  <input 
                    type="text" 
                    placeholder="Vd: React, Tailwind, Lucide"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">Biểu tượng minh hoạ</label>
                  <select 
                    value={newProj.icon}
                    onChange={(e) => setNewProj({ ...newProj, icon: e.target.value })}
                    className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none cursor-pointer"
                  >
                    <option value="Layers">Tầng lớp (Layers)</option>
                    <option value="BookOpen">Sách vở (BookOpen)</option>
                    <option value="Timer">Đồng hồ (Timer)</option>
                    <option value="Code">Mã code (Code)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">GitHub Link (Tùy chọn)</label>
                  <input 
                    type="text" 
                    placeholder="https://github.com/..."
                    value={newProj.githubUrl}
                    onChange={(e) => setNewProj({ ...newProj, githubUrl: e.target.value })}
                    className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-black font-bold mb-1.5">Link Demo (Tùy chọn)</label>
                  <input 
                    type="text" 
                    placeholder="https://..."
                    value={newProj.demoUrl}
                    onChange={(e) => setNewProj({ ...newProj, demoUrl: e.target.value })}
                    className="w-full bg-white border border-black px-3 py-2 text-xs text-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div className="sm:col-span-2 pt-4 flex justify-end gap-2 border-t border-black">
                  <button 
                    type="button" 
                    onClick={() => setShowAddProject(false)} 
                    className="px-4 py-2 border border-black text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-neutral-50 cursor-pointer"
                  >
                    Huỷ bỏ
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Tạo dự án mới
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* List of projects cards wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.projects.length === 0 ? (
              <div className="col-span-2 border border-dashed border-black text-center py-12 bg-white">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">Trạm rỗng! Vui lòng ấn "Thêm dự án" để tạo dự án mới.</p>
              </div>
            ) : (
              profile.projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-white border border-black p-6 transition-all duration-200 hover:-translate-y-1 relative flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-2 border border-black bg-neutral-50">
                        {renderProjectIcon(project.icon)}
                      </div>
                      
                      <button 
                        onClick={(e) => handleRemoveProject(project.id, e)}
                        className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-black border border-transparent hover:border-black hover:bg-neutral-100 transition-all cursor-pointer"
                        title="Xoá dự án"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-sans font-black text-black uppercase tracking-tight text-sm">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#E5E5E5] space-y-4">
                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="font-mono text-[9px] font-bold border border-black bg-neutral-50 text-black px-2 py-0.5 uppercase tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 text-[10px] font-mono font-black uppercase tracking-wider text-black">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline flex items-center gap-1 transition"
                        >
                          <Github className="w-3.5 h-3.5" /> Source
                        </a>
                      )}
                      
                      <a 
                        href={project.demoUrl || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline flex items-center gap-1 transition"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
