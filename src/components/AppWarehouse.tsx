/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Dumbbell, 
  Trash2, 
  Trophy, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  Smartphone, 
  Laptop, 
  Sparkles, 
  Check, 
  Code, 
  HelpCircle, 
  RefreshCw, 
  Layers,
  CheckSquare,
  Square,
  Plus,
  PlusCircle,
  Eye,
  Settings,
  Folder,
  FileCode,
  Download,
  AlertCircle,
  Save,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const DEFAULT_EMBED_HTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xà Đơn Toàn Năng - Lịch Tập Cá Nhân</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #0b0f19;
        }
        /* Custom scrollbar for mobile tab bar */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
</head>
<body class="text-slate-100 min-h-screen flex flex-col pb-12">

    <!-- Header Section -->
    <header class="bg-slate-900/80 border-b border-slate-800 sticky top-0 z-40 backdrop-blur-md px-4 py-4">
        <div class="max-w-md mx-auto flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <!-- Icon Pull Up Bar -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 6a2 2 0 012-2h12a2 2 0 012 2M4 6v10l4 2 4-2 4 2 4-2V6" />
                    </svg>
                </div>
                <div>
                    <h1 class="font-extrabold text-base tracking-tight text-white">XÀ ĐƠN TOÀN NĂNG</h1>
                    <p class="text-xs text-slate-400">Lịch tập UL-PPL Hybrid (5 Buổi)</p>
                </div>
            </div>
            <button id="btn-info" class="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition" onclick="toggleInfoModal()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </header>

    <!-- Main App Container -->
    <main class="max-w-md mx-auto w-full px-4 flex-1 mt-4">

        <!-- Quick Overview Progress Card -->
        <div class="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/80 rounded-2xl p-4 mb-5 shadow-xl relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
            <div class="flex justify-between items-center mb-2">
                <span class="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Tiến trình tuần này</span>
                <span id="progress-percent" class="text-sm font-bold text-white">0%</span>
            </div>
            <div class="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div id="progress-bar" class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500" style="width: 0%"></div>
            </div>
            <div class="flex justify-between items-center mt-3 text-[11px] text-slate-400">
                <span>Chỉ cần xà đơn & Sàn nhà</span>
                <button onclick="resetWeeklyProgress()" class="text-red-400 hover:text-red-300 transition">Đặt lại tuần mới</button>
            </div>
        </div>

        <!-- Horizontal Scrollable Day Tab Bar -->
        <div class="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-4 -mx-4 px-4 snap-x">
            <button onclick="switchDay(0)" class="day-tab snap-center shrink-0 px-4 py-2.5 rounded-xl border font-bold text-xs transition duration-200" data-day="0">THỨ 2</button>
            <button onclick="switchDay(1)" class="day-tab snap-center shrink-0 px-4 py-2.5 rounded-xl border font-bold text-xs transition duration-200" data-day="1">THỨ 3</button>
            <button onclick="switchDay(2)" class="day-tab snap-center shrink-0 px-4 py-2.5 rounded-xl border font-bold text-xs transition duration-200" data-day="2">THỨ 4</button>
            <button onclick="switchDay(3)" class="day-tab snap-center shrink-0 px-4 py-2.5 rounded-xl border font-bold text-xs transition duration-200" data-day="3">THỨ 5</button>
            <button onclick="switchDay(4)" class="day-tab snap-center shrink-0 px-4 py-2.5 rounded-xl border font-bold text-xs transition duration-200" data-day="4">THỨ 6</button>
            <button onclick="switchDay(5)" class="day-tab snap-center shrink-0 px-4 py-2.5 rounded-xl border font-bold text-xs transition duration-200" data-day="5">THỨ 7</button>
            <button onclick="switchDay(6)" class="day-tab snap-center shrink-0 px-4 py-2.5 rounded-xl border font-bold text-xs transition duration-200" data-day="6">CN</button>
        </div>

        <!-- Session Title & Focus Tag -->
        <div class="flex justify-between items-end mb-4">
            <div>
                <span id="session-focus-badge" class="text-[10px] font-extrabold tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-md uppercase">FOCUS</span>
                <h2 id="session-title" class="text-xl font-extrabold text-white mt-1">Đang tải lịch tập...</h2>
            </div>
            <span id="session-status" class="text-xs font-semibold text-slate-400">0/0 Đã hoàn thành</span>
        </div>

        <!-- Exercise List -->
        <div id="exercise-list" class="space-y-3 mb-6">
            <!-- Dynamically injected via JS -->
        </div>

        <!-- Float Interactive Timer Box -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl mb-4">
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-xs font-bold text-slate-300">Đồng hồ đếm ngược nghỉ hiệp</span>
                </div>
                <span id="timer-display" class="text-2xl font-black font-mono text-emerald-400">01:30</span>
            </div>
            <div class="grid grid-cols-4 gap-2">
                <button onclick="startTimer(45)" class="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2 rounded-lg transition">Nghỉ 45s</button>
                <button onclick="startTimer(60)" class="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2 rounded-lg transition">Nghỉ 60s</button>
                <button onclick="startTimer(90)" class="bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 font-bold text-xs py-2 rounded-lg transition">Nghỉ 90s</button>
                <button id="timer-control-btn" onclick="toggleTimer()" class="bg-red-500/10 text-red-400 border border-red-500/20 font-bold text-xs py-2 rounded-lg hover:bg-red-500 hover:text-white transition">Dừng</button>
            </div>
        </div>

    </main>

    <!-- Info / Progressive Overload Tips Modal -->
    <div id="info-modal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
        <div class="bg-slate-900 border border-slate-800 w-full max-w-sm rounded-2xl p-5 shadow-2xl relative">
            <button onclick="toggleInfoModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                🔥 Bí quyết tăng tiến (Overload)
            </h3>
            <div class="space-y-4 text-xs text-slate-300 leading-relaxed overflow-y-auto max-h-[70vh]">
                <p>Vì bạn chỉ sử dụng <strong>xà đơn</strong> và <strong>trọng lượng cơ thể</strong>, việc tăng cơ phụ thuộc vào các kỹ thuật thay thế mức tạ:</p>
                <div class="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <span class="font-bold text-emerald-400 block mb-1">1. Tăng thời gian chịu áp lực (TUT)</span>
                    Thực hiện động tác thật chậm. Ví dụ: Hít xà lên nhanh 1 giây, giữ đỉnh 1 giây, hạ xuống chậm trong 3-4 giây.
                </div>
                <div class="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <span class="font-bold text-emerald-400 block mb-1">2. Tăng số Hiệp/Reps</span>
                    Khi đã đạt được mốc tối đa đề xuất (ví dụ 12 reps), hãy cố gắng hít thêm 1-2 reps ở buổi kế tiếp hoặc tăng thêm 1 hiệp tập.
                </div>
                <div class="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <span class="font-bold text-emerald-400 block mb-1">3. Giảm thời gian nghỉ</span>
                    Giảm thời gian nghỉ giữa các hiệp từ 90 giây xuống còn 60 giây hoặc 45 giây để ép cơ bắp chịu tải mỏi cao hơn.
                </div>
                <p class="text-[11px] text-slate-400 italic">Lưu ý: Luôn khởi động bả vai và khớp cổ tay tối thiểu 5 phút trước khi đu xà để phòng ngừa chấn thương.</p>
            </div>
        </div>
    </div>

    <!-- Script Section -->
    <script>
        // Database of exercises
        const workoutData = [
            {
                day: 0,
                name: "Thứ 2",
                focus: "Upper - Pull Focus (Cường độ cao, Volume thấp)",
                exercises: [
                    { id: "pull_1", name: "Pull-up (Hít xà sấp tay rộng)", target: "Xô lưng & Vai", detail: "3 hiệp x 6-10 reps", tips: "Kéo cằm vượt xà, hạ xuống kiểm soát. Bài chính nên dồn sức." },
                    { id: "pull_2", name: "Chin-up (Hít xà ngửa tay)", target: "Bắp tay trước", detail: "3 hiệp x 8-10 reps", tips: "Tập trung ép cùi chỏ sát sườn để tay trước làm việc tối đa." },
                    { id: "pull_3", name: "Commando Pull-up (Xà dọc)", target: "Độ dày lưng", detail: "2 hiệp x 6-8 reps/bên", tips: "Đứng dọc xà, đổi bên vai chạm xà xen kẽ." },
                    { id: "pull_4", name: "Dead Hang (Đu xà tĩnh)", target: "Sức nắm (Grip)", detail: "2 hiệp x Giữ tối đa", tips: "Thả lỏng lưng, gồng chặt bàn tay. Chốt sổ ngày kéo." }
                ]
            },
            {
                day: 1,
                name: "Thứ 3",
                focus: "Upper - Push Focus (Cường độ cao, Volume thấp)",
                exercises: [
                    { id: "push_1", name: "Straight Bar Dips (Đẩy xà đơn)", target: "Ngực dưới & Tay sau", detail: "3 hiệp x 5-8 reps", tips: "Bài rất nặng. Tì bụng lên xà rồi đẩy người lên thẳng tay." },
                    { id: "push_2", name: "Regular Push-up (Chống đẩy)", target: "Ngực toàn diện", detail: "3 hiệp x 10-15 reps", tips: "Xuống sâu chạm ngực, gồng chặt core không võng lưng." },
                    { id: "push_3", name: "Pike Push-up (Vai chữ V)", target: "Vai trước", detail: "3 hiệp x 8-10 reps", tips: "Đẩy mông cao lên trời, đầu chúi xuống đất trước tay." },
                    { id: "push_4", name: "Bench/Chair Dips (Đẩy tay sau)", target: "Cô lập tay sau", detail: "2 hiệp x 12-15 reps", tips: "Mở rộng ngực, đẩy căng bắp sau trên ghế/bậc thềm." }
                ]
            },
            {
                day: 2,
                name: "Thứ 4",
                focus: "Lower & Abs (Chân & Bụng Nhanh Gọn)",
                exercises: [
                    { id: "leg_1", name: "Bulgarian Split Squat", target: "Đùi & Mông", detail: "3 hiệp x 8-10 reps/bên", tips: "Gác một chân sau lên ghế/giường, dồn trọng tâm chân trước." },
                    { id: "leg_2", name: "Air Squat (Squat tay không)", target: "Bơm máu chân", detail: "3 hiệp x 15-20 reps", tips: "Squat nhịp điệu nhanh, xuống sâu quá song song." },
                    { id: "leg_3", name: "Hanging Leg Raises", target: "Bụng dưới", detail: "3 hiệp x 8-10 reps", tips: "Đu xà nâng thẳng chân (hoặc co gối nếu mỏi), không đung đưa." },
                    { id: "leg_4", name: "Plank (Đo ván sàn)", target: "Core", detail: "2 hiệp x 45-60 giây", tips: "Gồng chặt bụng. Xuống sàn tập để tay đỡ mỏi do bám xà." }
                ]
            },
            {
                day: 3,
                name: "Thứ 5",
                focus: "Nghỉ ngơi hồi phục",
                exercises: [
                    { id: "rest_1", name: "Nghỉ ngơi hoàn toàn", target: "Cơ bắp", detail: "Nghỉ", tips: "Nạp protein, ngủ đủ giấc để cơ bắp phát triển." }
                ]
            },
            {
                day: 4,
                name: "Thứ 6",
                focus: "Upper - Power/Volume (Kích thích lại)",
                exercises: [
                    { id: "pvol_1", name: "Close-grip Pull-up (Sấp tay hẹp)", target: "Lưng & Tay trước", detail: "3 hiệp x 6-8 reps", tips: "Hai tay hẹp hơn vai khoảng 1 gang, kéo dứt khoát." },
                    { id: "pvol_2", name: "Wide-grip Push-up (Chống đẩy rộng)", target: "Ngực ngoài", detail: "3 hiệp x 10-15 reps", tips: "Tay rộng gấp đôi vai để cô lập ngực ngoài." },
                    { id: "pvol_3", name: "L-Sit Chin-up (hoặc Chin-up)", target: "Tay trước & Bụng", detail: "2 hiệp x 6-8 reps", tips: "Giữ chân L nâng vuông góc hoặc co gối rồi hít lên." },
                    { id: "pvol_4", name: "Diamond Push-up (Kim cương)", target: "Rãnh ngực & Tay sau", detail: "2 hiệp x 8-10 reps", tips: "Chạm hai ngón trỏ cái tạo hình kim cương, hạ ngực sát tay." }
                ]
            },
            {
                day: 5,
                name: "Thứ 7",
                focus: "Circuit Mạch Toàn Thân (3 Vòng nhanh)",
                exercises: [
                    { id: "cond_1", name: "Circuit Training (Làm 3 Vòng)", target: "Tim mạch & Bền", detail: "Nghỉ 2 phút sau mỗi vòng", tips: "Làm liên tục 4 bài dưới đây không nghỉ giữa bài." },
                    { id: "cond_2", name: "1. Pull-up / Chin-up", target: "Lưng xô", detail: "5 reps", tips: "Chất lượng hơn số lượng." },
                    { id: "cond_3", name: "2. Push-up", target: "Ngực", detail: "10 reps", tips: "Form chuẩn." },
                    { id: "cond_4", name: "3. Lunges (Bước chùng chân)", target: "Đùi", detail: "10 bước/bên", tips: "Thân thẳng, gối vuông." },
                    { id: "cond_5", name: "4. Crunch (Gập bụng sàn)", target: "Bụng", detail: "15 reps", tips: "Ép chặt cơ bụng." }
                ]
            },
            {
                day: 6,
                name: "Chủ Nhật",
                focus: "Nghỉ ngơi hoàn toàn",
                exercises: [
                    { id: "sun_1", name: "Ngày xả hơi", target: "Thư giãn", detail: "Nghỉ", tips: "Lắng nghe cơ thể, dạo bộ nhẹ nhàng nếu thích." }
                ]
            }
        ];

        // State variables
        let currentActiveDay = 0; // default is Monday
        let timerSecondsLeft = 90;
        let timerInterval = null;
        let isTimerRunning = false;
        
        // Load progress states from localStorage
        let completedSetState = JSON.parse(localStorage.getItem('cali_workout_completed_sets')) || {};

        // Initialization
        window.onload = function() {
            // Get current day of week (0 is Sunday, 1 is Monday... in JS)
            const d = new Date();
            let dayIndex = d.getDay(); // 0 (Sun) - 6 (Sat)
            // Convert to our format: 0 (Mon) to 6 (Sun)
            let ourDayIndex = dayIndex === 0 ? 6 : dayIndex - 1;
            
            switchDay(ourDayIndex);
            updateWeeklyProgress();
        }

        // Switch active day
        function switchDay(dayIndex) {
            currentActiveDay = dayIndex;

            // Highlight active tab
            document.querySelectorAll('.day-tab').forEach((tab, index) => {
                if (index === dayIndex) {
                    tab.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');
                    tab.classList.add('bg-emerald-500', 'text-slate-950', 'border-emerald-400');
                } else {
                    tab.classList.remove('bg-emerald-500', 'text-slate-950', 'border-emerald-400');
                    tab.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800');
                }
            });

            // Update title and target
            const currentDayData = workoutData[dayIndex];
            document.getElementById('session-title').innerText = currentDayData.focus;
            document.getElementById('session-focus-badge').innerText = currentDayData.name;

            // Render exercises
            renderExercises(currentDayData.exercises);
            updateDayStatus();
        }

        // Render exercise elements
        function renderExercises(exercises) {
            const listContainer = document.getElementById('exercise-list');
            listContainer.innerHTML = '';

            exercises.forEach((ex) => {
                const isCompleted = completedSetState[ex.id] || false;
                const card = document.createElement('div');
                card.className = \`p-4 rounded-xl border transition-all duration-300 \\\${isCompleted ? 'bg-slate-900/40 border-slate-800/50 opacity-60' : 'bg-slate-900 border-slate-800/80 hover:border-slate-700'}\`;
                
                card.innerHTML = \`
                    <div class="flex items-start justify-between gap-3">
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                                <span class="text-[10px] bg-emerald-500/10 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/20">\\\${ex.target}</span>
                                <span class="text-[10px] bg-slate-800 text-slate-300 font-medium px-2 py-0.5 rounded border border-slate-700">\\\${ex.detail}</span>
                            </div>
                            <h4 class="font-extrabold text-sm text-white">\\\${ex.name}</h4>
                            <p class="text-xs text-slate-400 mt-1 leading-relaxed"><span class="text-slate-500 font-semibold">Mẹo:</span> \\\${ex.tips}</p>
                        </div>
                        <button onclick="toggleExercise('\\\${ex.id}')" class="w-7 h-7 rounded-lg flex items-center justify-center border transition-all shrink-0 \\\${isCompleted ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 hover:border-slate-500 text-transparent'}" id="chk-\\\${ex.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                \`;
                listContainer.appendChild(card);
            });
        }

        // Toggle Single exercise completion status
        function toggleExercise(id) {
            completedSetState[id] = !completedSetState[id];
            localStorage.setItem('cali_workout_completed_sets', JSON.stringify(completedSetState));
            
            // Re-render
            const currentDayData = workoutData[currentActiveDay];
            renderExercises(currentDayData.exercises);
            updateDayStatus();
            updateWeeklyProgress();

            // Simple micro-vibe if API available
            if (navigator.vibrate) {
                navigator.vibrate(40);
            }
        }

        // Update day count status
        function updateDayStatus() {
            const currentDayData = workoutData[currentActiveDay];
            const total = currentDayData.exercises.length;
            let completedCount = 0;
            currentDayData.exercises.forEach(ex => {
                if (completedSetState[ex.id]) completedCount++;
            });

            document.getElementById('session-status').innerText = \\\`\\\${completedCount}/\\\${total} Bài hoàn thành\\\`;
        }

        // Calculate and update weekly progress bar
        function updateWeeklyProgress() {
            let totalExercises = 0;
            let completedExercises = 0;

            workoutData.forEach(day => {
                day.exercises.forEach(ex => {
                    totalExercises++;
                    if (completedSetState[ex.id]) completedExercises++;
                });
            });

            const percent = totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
            document.getElementById('progress-percent').innerText = \\\`\\\${percent}%\\\`;
            document.getElementById('progress-bar').style.width = \\\`\\\${percent}%\\\`;
        }

        // Reset weekly progression data
        function resetWeeklyProgress() {
            if (confirm("Bạn có chắc chắn muốn xóa tiến trình tập luyện của tuần này để bắt đầu tuần mới không?")) {
                completedSetState = {};
                localStorage.removeItem('cali_workout_completed_sets');
                switchDay(currentActiveDay);
                updateWeeklyProgress();
            }
        }

        // Rest Timer Management
        function startTimer(seconds) {
            clearInterval(timerInterval);
            timerSecondsLeft = seconds;
            updateTimerDisplay();
            isTimerRunning = true;
            document.getElementById('timer-control-btn').innerText = "Dừng";
            document.getElementById('timer-control-btn').classList.replace('bg-emerald-500', 'bg-red-500/10');
            
            timerInterval = setInterval(() => {
                timerSecondsLeft--;
                if (timerSecondsLeft <= 0) {
                    clearInterval(timerInterval);
                    timerSecondsLeft = 0;
                    isTimerRunning = false;
                    // Flash screen or trigger a beep sound
                    triggerTimerAlert();
                }
                updateTimerDisplay();
            }, 1000);
        }

        function toggleTimer() {
            if (isTimerRunning) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                document.getElementById('timer-control-btn').innerText = "Tiếp tục";
                document.getElementById('timer-control-btn').classList.replace('bg-red-500/10', 'bg-emerald-500');
            } else {
                if (timerSecondsLeft > 0) {
                    startTimer(timerSecondsLeft);
                }
            }
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(timerSecondsLeft / 60);
            const seconds = timerSecondsLeft % 60;
            const displayStr = \\\`\\\${minutes.toString().padStart(2, '0')}:\\\${seconds.toString().padStart(2, '0')}\\\`;
            document.getElementById('timer-display').innerText = displayStr;
        }

        // Info Modal control
        function toggleInfoModal() {
            const modal = document.getElementById('info-modal');
            modal.classList.toggle('hidden');
        }
    </script>
</body>
</html>`;


const DEFAULT_BLANK_HTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sân chơi HTML</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white min-h-screen flex items-center justify-center p-4 text-center">
    <div>
        <h1 class="text-2xl font-black uppercase text-emerald-400 tracking-wider">Trang trắng thiết kế</h1>
        <p class="text-slate-400 mt-2 text-xs">Hãy tự biên soạn bất cứ thứ gì bạn muốn tại đây!</p>
    </div>
</body>
</html>`;

interface WebAppInfo {
  id: string;
  filename: string;
  title: string;
  description: string;
  code: string;
  category: 'fitness' | 'utility' | 'education' | 'other';
  icon: 'Dumbbell' | 'Clock' | 'Layers' | 'Code';
}

interface AppWarehouseProps {
  currentHash: string;
}

export default function AppWarehouse({ currentHash }: AppWarehouseProps) {
  
  // Custom HTML Sandbox & Portables management
  const [apps, setApps] = useState<WebAppInfo[]>(() => {
    const saved = localStorage.getItem('tram_canhan_sandbox_apps');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error loading apps", e);
      }
    }
    return [
      {
        id: 'app_lichtap',
        filename: 'LichTap.html',
        title: 'Xà Đơn Toàn Năng',
        description: 'Bản nâng cấp tối giản lịch tập UL-PPL với đồng hồ nghỉ hiệp, đếm ngược tiến trình và mẹo tăng cơ.',
        category: 'fitness',
        icon: 'Dumbbell',
        code: DEFAULT_EMBED_HTML,
      },
          ];
  });

  const isListView = currentHash === '#warehouse' || currentHash === '#warehouse/';
  const selectedAppId = isListView ? '' : currentHash.replace('#warehouse/', '');

  const activeApp = apps.find(a => a.id === selectedAppId) || apps[0] || {
    id: 'app_lichtap',
    filename: 'LichTap.html',
    title: 'Xà Đơn Toàn Năng',
    description: 'Bản nâng cấp tối giản lịch tập UL-PPL với đồng hồ nghỉ hiệp, đếm ngược tiến trình và mẹo tăng cơ.',
    category: 'fitness',
    icon: 'Dumbbell',
    code: DEFAULT_EMBED_HTML,
  };

  // Custom HTML Editor code
  const [htmlCode, setHtmlCode] = useState<string>(activeApp.code);
  const [renderedHtml, setRenderedHtml] = useState<string>(activeApp.code);
  const [sandboxDevice, setSandboxDevice] = useState<'mobile' | 'desktop'>('mobile');

  // Input fields for creation
  const [newFilename, setNewFilename] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newTemplateType, setNewTemplateType] = useState<'blank' | 'lichtap' | 'pomodoro' | 'finance'>('blank');

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('tram_canhan_sandbox_apps', JSON.stringify(apps));
  }, [apps]);

  useEffect(() => {
    // When changing active app, update editor content
    if (!isListView) {
      const selected = apps.find(a => a.id === selectedAppId);
      if (selected) {
        setHtmlCode(selected.code);
        setRenderedHtml(selected.code);
      }
    }
  }, [selectedAppId, apps, isListView]);

  // Sync edits to the active app
  const handleSaveHtml = () => {
    const updated = apps.map((app) => {
      if (app.id === selectedAppId) {
        return { ...app, code: htmlCode };
      }
      return app;
    });
    setApps(updated);
    setRenderedHtml(htmlCode);
  };

  const handleResetHtmlToDefault = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại mã nguồn của ứng dụng này về mẫu ban đầu không?')) {
      let defaultCode = DEFAULT_BLANK_HTML;
      if (activeApp.id === 'app_lichtap') defaultCode = DEFAULT_EMBED_HTML;
      else if (activeApp.id === 'app_pomodoro') defaultCode = DEFAULT_POMODORO_HTML;
      else if (activeApp.id === 'app_option_pricing') defaultCode = DEFAULT_FINANCE_HTML;

      setHtmlCode(defaultCode);
      setRenderedHtml(defaultCode);
      const updated = apps.map((app) => {
        if (app.id === selectedAppId) {
          return { ...app, code: defaultCode };
        }
        return app;
      });
      setApps(updated);
    }
  };

  // Adding novel portable app
  const handleCreateApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFilename.trim() || !newTitle.trim()) return;

    let sanitizedFn = newFilename.trim().replace(/\s+/g, '_');
    if (!sanitizedFn.endsWith('.html')) {
      sanitizedFn += '.html';
    }

    let defaultCode = DEFAULT_BLANK_HTML;
    let selectedIcon: 'Dumbbell' | 'Clock' | 'Layers' | 'Code' = 'Code';
    let selectedCategory: 'fitness' | 'utility' | 'education' | 'other' = 'other';

    if (newTemplateType === 'lichtap') {
      defaultCode = DEFAULT_EMBED_HTML;
      selectedIcon = 'Dumbbell';
      selectedCategory = 'fitness';
    } else if (newTemplateType === 'pomodoro') {
      defaultCode = DEFAULT_POMODORO_HTML;
      selectedIcon = 'Clock';
      selectedCategory = 'utility';
    } else if (newTemplateType === 'finance') {
      defaultCode = DEFAULT_FINANCE_HTML;
      selectedIcon = 'Layers';
      selectedCategory = 'education';
    }

    const newApp: WebAppInfo = {
      id: 'custom_' + Date.now(),
      filename: sanitizedFn,
      title: newTitle.trim(),
      description: newDescription.trim() || 'Ứng dụng thuần HTML/CSS tự đóng gói chế tạo.',
      category: selectedCategory,
      icon: selectedIcon,
      code: defaultCode
    };

    const updated = [...apps, newApp];
    setApps(updated);

    window.location.hash = `#warehouse/${newApp.id}`;

    // Clear form inputs
    setNewFilename('');
    setNewTitle('');
    setNewDescription('');
    setNewTemplateType('blank');
  };

  const handleDeleteApp = (appId: string) => {
    if (apps.length <= 1) {
      alert("Bạn phải giữ lại ít nhất 1 ứng dụng trong kho lưu trữ!");
      return;
    }
    if (window.confirm("Bạn có chắc muốn xóa ứng dụng này khỏi kho lưu trữ không?")) {
      const remaining = apps.filter(a => a.id !== appId);
      setApps(remaining);
      // Go back to the list
      window.location.hash = '#warehouse';
    }
  };

  // Helper trigger browser file download
  const handleDownloadAppHtml = (app: WebAppInfo) => {
    const blob = new Blob([app.code], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = app.filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12">
      
      {/* Intro block in high contrast style */}
      <div className="border-4 border-black bg-white p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative">
        <div className="absolute top-4 right-4 font-mono text-[9px] text-gray-400 uppercase tracking-widest font-bold">
          WAREHOUSE_SYS // ACC
        </div>
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1 bg-black text-white px-3 py-1 text-[9px] font-mono uppercase tracking-widest font-bold">
            🗃️ PORTABLE APPS OR WIDGETS
          </span>
          <h2 className="text-xl md:text-2xl font-sans font-black tracking-tight text-[#1A1A1A] uppercase">
            Kho Ứng Dụng Độc Bản
          </h2>
          <p className="text-gray-500 text-xs max-w-xl uppercase tracking-wider leading-relaxed">
            Các ứng dụng thu nhỏ được đóng gói trực tiếp bằng HTML nguyên bản. Ấn vào một ứng dụng để tiến vào trình biên tập và mô phỏng!
          </p>
        </div>
      </div>

      {isListView ? (
        <div className="space-y-8" id="sandbox-embed-tab">
          {/* Top Panel: Registry of Saved Apps in the Warehouse */}
            <div className="bg-white border-2 border-black p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 border-b border-black">
              <div>
                <h3 className="font-sans font-black text-xs uppercase tracking-[0.2em] text-[#1A1A1A] flex items-center gap-2">
                  <Folder className="w-4 h-4 text-black" /> 📂 ~/kho-ung-dung-ca-nhan
                </h3>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider mt-1">
                  Nhấp vào ứng dụng để mở trong Trình soạn thảo và chạy thử Sandbox.
                </p>
              </div>
              
              <span className="bg-neutral-100 border border-black px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#1A1A1A] self-start sm:self-auto">
                TỔNG: {apps.length} TỆP BẢN DỰNG (.HTML)
              </span>
            </div>

            {/* Line-based list of apps including inline creator form */}
            <div className="flex flex-col gap-4">
              
              {/* App Listing */}
              {apps.map((app) => {
                return (
                  <a 
                    href={`/${app.filename}`}
                    target="_blank"
                    key={app.id}
                    className="group bg-white border-2 border-black p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-none hover:translate-y-[2px] hover:translate-x-[2px]"
                  >
                    <div className="flex items-center gap-4 relative z-0">
                      <div className="p-3 bg-black text-white border border-black group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                        {app.icon === 'Dumbbell' && <Dumbbell className="w-5 h-5" />}
                        {app.icon === 'Clock' && <Clock className="w-5 h-5" />}
                        {app.icon === 'Layers' && <Layers className="w-5 h-5" />}
                        {app.icon === 'Code' && <Code className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="text-base font-black uppercase tracking-tight">{app.title}</h3>
                        <p className="text-[11px] text-gray-500 font-mono tracking-wider">📄 {app.filename}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 md:gap-4 relative z-10 self-end md:self-auto" onClick={(e) => e.preventDefault()}>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDownloadAppHtml(app);
                        }}
                        title="Tải tệp .html này về máy"
                        className="p-2 text-gray-500 hover:text-black hover:bg-neutral-200 transition border border-transparent hover:border-black cursor-pointer bg-white md:bg-transparent"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      {apps.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteApp(app.id);
                          }}
                          title="Xoá khỏi kho ứng dụng"
                          className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition border border-transparent hover:border-rose-600 cursor-pointer bg-white md:bg-transparent"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors ml-2 pointer-events-none hidden md:block" />
                    </div>
                  </a>
                );
              })}

              {/* Creator form for new portables */}
              <form onSubmit={handleCreateApp} className="mt-2 p-5 border-2 border-black bg-neutral-50 flex flex-col md:flex-row md:items-end gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]">
                <div className="flex-1 space-y-4 w-full">
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-tight text-black flex items-center gap-1.5">
                      <Plus className="w-4 h-4" /> THÊM ỨNG DỤNG MỚI
                    </h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Sáng tạo các widget độc bản qua html</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs w-full">
                    <div>
                      <label className="block text-[9px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Tên file</label>
                      <input 
                        type="text" 
                        required
                        placeholder="my_app.html"
                        value={newFilename}
                        onChange={(e) => setNewFilename(e.target.value)}
                        className="w-full bg-white border border-black px-3 py-2 text-[11px] focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Tiêu đề</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Vd: Đồng hồ lofi"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="w-full bg-white border border-black px-3 py-2 text-[11px] focus:ring-1 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Mẫu giao diện</label>
                      <select 
                        value={newTemplateType}
                        onChange={(e) => setNewTemplateType(e.target.value as any)}
                        className="w-full bg-white border border-black px-3 py-2 text-[11px] font-mono font-bold focus:ring-1 focus:ring-black"
                      >
                        <option value="blank">⚙️ Trang trắng</option>
                        <option value="lichtap">💪 Lịch xà đơn</option>
                        <option value="pomodoro">⏱️ Đồng hồ Pomodoro</option>
                        <option value="finance">📐 Mô hình Black-Scholes</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto shrink-0 mt-2 md:mt-0">
                  <button
                    type="submit"
                    className="w-full h-[38px] md:w-auto px-6 bg-black hover:bg-neutral-900 text-white font-mono font-bold text-[10px] uppercase tracking-widest transition cursor-pointer"
                  >
                    TẠO & BIÊN TẬP
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8" id="sandbox-embed-tab">
          {/* Back button */}
          <div>
            <a href="#warehouse" className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest uppercase text-black hover:text-gray-600 transition">
              <ArrowLeft className="w-4 h-4" /> Quay lại Kho Ứng Dụng
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Coding Textarea Panel (Left col) */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-4">
              <div className="bg-white border border-black p-6 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-black">
                  <h3 className="font-sans font-black text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">
                    TRÌNH SOẠN THẢO: {activeApp.filename}
                  </h3>
                  <span className="text-[9px] font-bold font-mono tracking-wider text-white bg-black px-2 py-0.5">
                    RAW HTML-JS EDITOR
                  </span>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
                  Chỉnh sửa trực tiếp HTML, CSS (Tailwind CDN) & Javascript của tệp <b>{activeApp.filename}</b> bên dưới, sau đó nhấn <b>LƯU & XEM TRỰC TIẾP</b> để tải lại trình giả lập bên phải!
                </p>

                <div>
                  <textarea
                    rows={18}
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-emerald-400 font-mono text-[11px] p-4 border border-black focus:outline-none focus:ring-1 focus:ring-black overflow-x-auto selection:bg-neutral-800 leading-relaxed rounded-none"
                    placeholder="<!DOCTYPE html>..."
                  />
                </div>

                <div className="flex justify-between gap-2 border-t border-black pt-4">
                  <button
                    type="button"
                    onClick={handleResetHtmlToDefault}
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-600 bg-white hover:bg-neutral-50 border border-black px-4 py-2 transition.5 cursor-pointer"
                    title="Đặt lại mã nguồn tệp tin này về mặc định"
                  >
                    Khôi phục mẫu
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveHtml}
                    className="bg-black hover:bg-neutral-900 text-white font-bold px-5 py-2.5 text-[10px] uppercase tracking-widest flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" /> LƯU & XEM TRỰC TIẾP
                  </button>
                </div>
              </div>

              <div className="border border-black p-5 text-xs text-black leading-relaxed flex gap-3 bg-neutral-50">
                <Sparkles className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                <div>
                  <b className="block text-black uppercase font-mono font-bold text-[10px] tracking-wider mb-1">Hướng dẫn của Mentor:</b>
                  Học qua thực hành viết file đơn lập HTML + Javascript vô cùng trực quan và hiệu quả. Bạn có thể nhấn biểu tượng <b><Download className="w-3 h-3 inline" /> Tải xuống</b> ở thẻ ứng dụng phía trên để lưu trực tiếp tệp tin về máy (chạy được ngay bằng cách click đúp trên hệ điều hành Linux Mint của bạn!).
                </div>
              </div>
            </div>

            {/* Simulated viewports framework (Right col) */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-4">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex border border-black bg-white p-1">
                  <button
                    onClick={() => setSandboxDevice('mobile')}
                    className={`px-4 py-2 text-[10px] uppercase font-bold tracking-wider transition flex items-center gap-1.5 cursor-pointer ${
                      sandboxDevice === 'mobile' ? 'bg-black text-white' : 'text-gray-500 hover:text-black bg-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" /> Giả lập di động
                  </button>
                  <button
                    onClick={() => setSandboxDevice('desktop')}
                    className={`px-4 py-2 text-[10px] uppercase font-bold tracking-wider transition flex items-center gap-1.5 cursor-pointer ${
                      sandboxDevice === 'desktop' ? 'bg-black text-white' : 'text-gray-500 hover:text-black bg-white'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" /> Giao diện toàn màn hình
                  </button>
                </div>

                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-emerald-600 animate-pulse">
                  ● LIVE VIEWPORT SIMULATOR
                </span>
              </div>

              {/* Simulating container wrap in wireframe style */}
              <div className="flex justify-center bg-white border-2 border-black p-4 md:p-8 min-h-[500px]">
                {sandboxDevice === 'mobile' ? (
                  /* SMARTPHONE GADGET CONTAINER / MINIMAL BLACK OUTLINE */
                  <div className="relative w-full max-w-[340px] h-[580px] bg-white border-[6px] border-black flex flex-col overflow-hidden shadow-md">
                    
                    {/* Small clean frame header indicator bar */}
                    <div className="h-8 bg-neutral-100 flex items-center justify-center border-b border-black text-[9px] font-mono tracking-wider font-bold">
                      <span>VIEWPORT // {activeApp.filename.toUpperCase()}</span>
                    </div>

                    {/* Sandboxed iframe */}
                    <iframe
                      id="sandbox-iframe-mobile"
                      title="Mock Phone Web Viewer"
                      srcDoc={renderedHtml}
                      sandbox="allow-scripts"
                      className="w-full flex-1 border-none bg-white"
                    />
                    
                    <div className="h-4 bg-neutral-100 border-t border-black"></div>
                  </div>
                ) : (
                  /* DESKTOP BROWSER PREVIEW GADGET */
                  <div className="w-full bg-white border-[3px] border-black flex flex-col overflow-hidden h-[580px]">
                    {/* Browser toolbar */}
                    <div className="bg-neutral-100 px-4 py-2 flex items-center justify-between border-b border-black">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 bg-black inline-block"></span>
                        <span className="w-2.5 h-2.5 bg-neutral-400 inline-block"></span>
                        <span className="w-2.5 h-2.5 bg-neutral-200 inline-block"></span>
                      </div>
                      <div className="flex-grow bg-white border border-black text-gray-500 font-mono text-[9px] px-3 py-1 text-left ml-4 truncate">
                        localhost/{activeApp.filename}
                      </div>
                    </div>

                    {/* Sandboxed iframe */}
                    <iframe
                      id="sandbox-iframe-desktop"
                      title="Mock Desktop Web Viewer"
                      srcDoc={renderedHtml}
                      sandbox="allow-scripts"
                      className="w-full flex-1 border-none bg-white"
                    />
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      )}
      
    </div>
  );
}
