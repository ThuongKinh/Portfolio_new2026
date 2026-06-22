/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile, LearningMilestone, WorkoutDay } from './types';

export const INITIAL_PROFILE: UserProfile = {
  name: "[INSERT YOUR FULL NAME HERE]",
  title: "[INSERT YOUR PERSONAL TITLE - E.g. Financial Mathematics | Python & C++ Developer]",
  bio: "[INSERT YOUR BIO HERE - Giới thiệu về bản thân chuyên Toán Tài chính, có tư duy logic, thạo C++ & Python, và định hướng học tập/nghiên cứu]",
  email: "[INSERT YOUR EMAIL HERE - E.g. contact@yourdomain.com]",
  github: "https://github.com/[INSERT_GITHUB_USERNAME]",
  facebook: "https://facebook.com/[INSERT_FACEBOOK_USERNAME]",
  instagram: "@[INSERT_INSTAGRAM_NAME]",
  skills: [
    { name: "[INSERT SKILL 1 - E.g. Python (Data Analysis, Logic Models)]", level: 5, category: "backend" },
    { name: "[INSERT SKILL 2 - E.g. C++ (Algorithms, Math Modeling)]", level: 5, category: "backend" },
    { name: "[INSERT SKILL 3 - E.g. Financial Calculus & Statistics]", level: 4, category: "other" },
    { name: "[INSERT SKILL 4 - E.g. HTML5 & Tailwind CSS]", level: 3, category: "frontend" }
  ],
  projects: [
    {
      id: "placeholder_proj_1",
      title: "[INSERT PROJECT 1 TITLE - E.g. Option Pricing Sandbox]",
      description: "[INSERT PROJECT 1 DESCRIPTION HERE - Chi tiết dự án C++/Python về tính toán tài chính, định giá phái sinh, mô hình hóa toán học, v.v.]",
      techStack: ["C++", "Python", "QuantLib"],
      githubUrl: "https://github.com/[INSERT_GITHUB_USERNAME]/[PROJECT_REPO]",
      demoUrl: "#",
      icon: "Code"
    },
    {
      id: "placeholder_proj_2",
      title: "[INSERT PROJECT 2 TITLE - E.g. Lịch Tập Cá Nhân Integration]",
      description: "[INSERT PROJECT 2 DESCRIPTION HERE - Lưu trữ và kết nối ứng dụng web theo dõi lịch tập thể chất (đã có mã nguồn HTML sẵn) vào website cá nhân]",
      techStack: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/[INSERT_GITHUB_USERNAME]/[PROJECT_REPO]",
      demoUrl: "#",
      icon: "Layers"
    }
  ]
};

export const INITIAL_MILESTONES: LearningMilestone[] = [
  {
    id: "ms_1",
    title: "[INSERT MILESTONE 1 - E.g. Đặt chân vào Toán Tài chính & Học thuật]",
    date: "2025-10-15",
    category: "education",
    content: "[INSERT DETAILED CONTENT HERE - Cột mốc bắt đầu con đường Toán Tài Chính, tiếp xúc xác suất thống kê và mô hình định lượng]",
    isCompleted: true
  },
  {
    id: "ms_2",
    title: "[INSERT MILESTONE 2 - E.g. Làm chủ C++ và Cấu trúc dữ liệu giải mã thuật toán]",
    date: "2026-03-20",
    category: "coding",
    content: "[INSERT DETAILED CONTENT HERE - Cột mốc hoàn thành các bài toán logic phức tạp với C++, bồi dưỡng tư duy giải thuật tối ưu]",
    isCompleted: true
  },
  {
    id: "ms_3",
    title: "[INSERT MILESTONE 3 - E.g. Xây dựng Trạm dừng chân trực quan cá nhân]",
    date: "2026-06-22",
    category: "coding",
    content: "[INSERT DETAILED CONTENT HERE - Hoàn thành website cá nhân kiểu dáng tối giản hiện đại bằng HTML/CSS/JS sạch để lưu lại chặng đường học tập]",
    isCompleted: false
  }
];

export const INITIAL_WORKOUTS: WorkoutDay[] = [
  {
    id: "day_2",
    dayName: "Thứ Hai",
    workoutTitle: "Push Day (Ngực - Vai - Tay sau)",
    isRestDay: false,
    exercises: [
      { id: "ex_1", name: "Incline Dumbbell Press (Đẩy ngực trên)", sets: 4, reps: "8-12", notes: "Kích hoạt phần ngực trên đầy đặn" },
      { id: "ex_2", name: "Dumbbell Shoulder Press (Đẩy vai đứng)", sets: 3, reps: "10-12", notes: "Giữ thẳng lưng, không võng lưng" },
      { id: "ex_3", name: "Push-ups (Chống đẩy truyền thống)", sets: 3, reps: "Cận ngưỡng thất bại", notes: "Siết chặt bụng và mông" },
      { id: "ex_4", name: "Tricep Overhead Extension (Tập tay sau)", sets: 3, reps: "12-15", notes: "Khép chặt cùi chỏ vào mang tai" }
    ]
  },
  {
    id: "day_3",
    dayName: "Thứ Ba",
    workoutTitle: "Active Recovery (Khôi phục & Giãn cơ)",
    isRestDay: true,
    exercises: []
  },
  {
    id: "day_4",
    dayName: "Thứ Tư",
    workoutTitle: "Pull Day (Lưng xô - Tay trước)",
    isRestDay: false,
    exercises: [
      { id: "ex_5", name: "Pull-ups (Hít xà đơn)", sets: 4, reps: "6-10", notes: "Kéo vai xuống trước khi phát lực lên" },
      { id: "ex_6", name: "Dumbbell Row (Kéo tạ một tay)", sets: 3, reps: "10-12 / bên", notes: "Ép sát cơ xô vào mạn sườn" },
      { id: "ex_7", name: "Face Pulls (Kéo tạ vai sau)", sets: 3, reps: "15", notes: "Tập trung cảm nhận vai sau cô lập" },
      { id: "ex_8", name: "Bicep Dumbbell Curl (Cuộn tạ tay trước)", sets: 3, reps: "12", notes: "Xoay cổ tay ở đỉnh động tác" }
    ]
  },
  {
    id: "day_5",
    dayName: "Thứ Năm",
    workoutTitle: "Leg & Abs Day (Chân đùi - Bụng bụng)",
    isRestDay: false,
    exercises: [
      { id: "ex_9", name: "Goblet Squat (Gánh đùi trước)", sets: 4, reps: "10-12", notes: "Hạ mông xuống dưới song song" },
      { id: "ex_10", name: "Romanian Deadlift (Đùi sau & Mông)", sets: 3, reps: "12", notes: "Đẩy hông ra sau, lưng giữ thẳng" },
      { id: "ex_11", name: "Plank (Gồng bụng)", sets: 3, reps: "45-60 giây", notes: "Thở đều, không nín thở" },
      { id: "ex_12", name: "Hanging Leg Raise (Nhấc chân xà đơn)", sets: 3, reps: "10-12", notes: "Hạn chế đung đưa người tối đa" }
    ]
  },
  {
    id: "day_6",
    dayName: "Thứ Sáu",
    workoutTitle: "Nghỉ ngơi hồi phục cơ bắp",
    isRestDay: true,
    exercises: []
  },
  {
    id: "day_7",
    dayName: "Thứ Bảy",
    workoutTitle: "Fullbody HIIT / LISS Cardio",
    isRestDay: false,
    exercises: [
      { id: "ex_13", name: "Burpees (Chống đẩy nhảy cao)", sets: 4, reps: "10-12", notes: "Đẩy nhịp tim lên vùng đốt mỡ" },
      { id: "ex_14", name: "Jump Squats (Nhảy bật cao)", sets: 3, reps: "15", notes: "Hạ đất bằng mũi chân nhẹ nhàng" },
      { id: "ex_15", name: "Mountain Climbers (Leo núi gầm thấp)", sets: 3, reps: "30 giây", notes: "Giữ hông thăng bằng không lắc lư" }
    ]
  },
  {
    id: "day_8",
    dayName: "Chủ Nhật",
    workoutTitle: "Nghĩ ngơi & Gặp gỡ bạn bè",
    isRestDay: true,
    exercises: []
  }
];
