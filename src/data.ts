/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile, LearningMilestone, WorkoutDay } from './types';

export const INITIAL_PROFILE: UserProfile = {
  name: "Hồ Xuân Phúc",
  title: "Financial Mathematics Student",
  bio: "Financial Mathematics Student at UEH | Aspiring Quantitative Analyst | Ex-Competitive Programmer (Provincial Award in C++) | Proficient in Python & C++",
  email: "kinhhthuongg@gmail.com",
  github: "https://github.com/ThuongKinh",
  facebook: "https://www.facebook.com/thuong.kinh.37",
  instagram: "@hxp.kt.bb",
  skills: [
    { name: "C++ - Proficient", level: 3, category: "Competitive Programming" },
    { name: "Python - Beginner", level: 1, category: "other" },
    { name: "Financial - Beginner", level: 1, category: "other" }
  ],
  projects: [
   
  ]
};

export const INITIAL_MILESTONES: LearningMilestone[] = [
  {
    id: "ms_1",
    title: "Provincial Merit Award in Informatics (C++)",
    date: "2025-12-15",
    category: "achievement",
    content: "Achieved the Provincial Prize in the Competitive Programming Track, building a strong logical foundation and mastery over algorithmic problem-solving using C++.",
    isCompleted: true
  },
  {
    id: "ms_2",
    title: "Standardized Academic Qualifications (IELTS 7.0/9.0)",
    date: "2025-12-22", 
    category: "education",
    content: "Certified upper-intermediate English proficiency, establishing strong communication and structural language skills essential for global financial literature.",
    isCompleted: true
  },
  {
    id: "ms_3",
    title: "SAT Standardized Test (1450/1600)",
    date: "2026-03-14", 
    category: "education",
    content: "Demonstrated advanced quantitative aptitude, critical reading, and analytical reasoning skills through the global standardized college readiness assessment.",
    isCompleted: true
  },
  {
    id: "ms_4",
    title: "VNU-HCM Entrance Proficiency Test (V-ACT) (940/1200)",
    date: "2026-05-", 
    category: "education",
    content: "Achieved a high percentile in the generalized competency assessment, validating core analytical, logical, and problem-solving capabilities.",
    isCompleted: true
  },
  {
    id: "ms_5",
    title: "Finance Foundations & Computational Python",
    date: "2026-06-20",
    category: "coding",
    content: "Acquiring core corporate finance theories (PV, NPV, Capital Budgeting) alongside foundational Python scripting for data handling and future computational modeling.",
    isCompleted: false // Đang học, chưa hoàn thành
  },
  {
    id: "ms_6",
    title: "Microsoft Certified: Power BI Data Analyst (PL-300)",
    date: "2026-06-22",
    category: "education",
    content: "Currently preparing for the PL-300 certification to master data ingestion, modeling, visualization, and asset deployment for business intelligence solutions.",
    isCompleted: false // Đang học, chưa hoàn thành
  }
];
// Phần lịch tập đã xóa trắng cấu trúc bài tập, chỉ giữ lại khung mảng trống để bạn tự định nghĩa sau mà không bị crash code
export const INITIAL_WORKOUTS: WorkoutDay[] = [
  { id: "day_2", dayName: "Thứ Hai", workoutTitle: "Chưa cấu hình", isRestDay: true, exercises: [] },
  { id: "day_3", dayName: "Thứ Ba", workoutTitle: "Chưa cấu hình", isRestDay: true, exercises: [] },
  { id: "day_4", dayName: "Thứ Tư", workoutTitle: "Chưa cấu hình", isRestDay: true, exercises: [] },
  { id: "day_5", dayName: "Thứ Năm", workoutTitle: "Chưa cấu hình", isRestDay: true, exercises: [] },
  { id: "day_6", dayName: "Thứ Sáu", workoutTitle: "Chưa cấu hình", isRestDay: true, exercises: [] },
  { id: "day_7", dayName: "Thứ Bảy", workoutTitle: "Chưa cấu hình", isRestDay: true, exercises: [] },
  { id: "day_8", dayName: "Chủ Nhật", workoutTitle: "Chưa cấu hình", isRestDay: true, exercises: [] }
];
