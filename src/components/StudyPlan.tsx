import React from 'react';

export default function StudyPlan() {
    return (
        <div className="bg-slate-50 text-slate-800 antialiased py-12 px-4 sm:px-6 lg:px-8 min-h-screen font-sans">
            <div className="max-w-6xl mx-auto space-y-16">
                
                {/* HEADER SECTION */}
                <header className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-2">
                        <span className="text-4xl">🚀</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Chiến Dịch Ép Xung 90 Ngày
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Tập trung chuyên sâu Python for Finance. Bổ trợ Business Intelligence & Office.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-sm">
                            🐢 T1: Xây Gốc Từ Từ
                        </span>
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-rose-50 text-rose-700 border border-rose-200 shadow-sm">
                            ⚡ T2 & T3: Tăng Tốc Tối Đa
                        </span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* LEFT COLUMN: DAILY TIMETABLE */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sticky top-6">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                <span className="text-2xl">⏰</span>
                                <h2 className="text-xl font-bold text-slate-800">Thời Khóa Biểu (Mùa Hè)</h2>
                            </div>
                            <p className="text-xs text-slate-500 italic mb-6">Mô phỏng lịch học tín chỉ. Áp dụng cố định hàng ngày để tạo thói quen (Routine).</p>
                            
                            <div className="space-y-0">
                                
                                {/* Tiết 1 */}
                                <div className="flex gap-4 relative group">
                                    <div className="w-16 flex-shrink-0 text-right pt-1">
                                        <div className="text-sm font-bold text-slate-700">08:30</div>
                                        <div className="text-xs text-slate-400">10:00</div>
                                        <div className="text-[10px] font-semibold text-rose-500 mt-1 uppercase">90 Phút</div>
                                    </div>
                                    <div className="relative border-l-2 border-rose-200 pl-4 pb-6 group-last:border-l-0 group-last:pb-0">
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white bg-rose-500 shadow-sm"></div>
                                        <div className="bg-rose-50 rounded-lg p-3 border border-rose-100">
                                            <h3 className="font-bold text-rose-700 text-sm">Tiết 1: Chuyên ngành Core</h3>
                                            <p className="text-xs font-semibold text-slate-800 mt-1">Python for Finance</p>
                                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">Học bám sát theo <strong>Lộ trình 12 tuần</strong>. Mở Jupyter Notebook, gõ code, fix bug. Không cần vội.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Giờ ra chơi */}
                                <div className="flex gap-4 relative group">
                                    <div className="w-16 flex-shrink-0 text-right pt-2">
                                        <div className="text-xs text-slate-400">10:00</div>
                                    </div>
                                    <div className="relative border-l-2 border-dashed border-slate-200 pl-4 pb-4">
                                        <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-slate-300"></div>
                                        <p className="text-xs italic text-slate-500 pt-2 flex items-center gap-2">☕ Giờ ra chơi / Pha Matcha (15')</p>
                                    </div>
                                </div>

                                {/* Tiết 2 */}
                                <div className="flex gap-4 relative group">
                                    <div className="w-16 flex-shrink-0 text-right pt-1">
                                        <div className="text-sm font-bold text-slate-700">10:15</div>
                                        <div className="text-xs text-slate-400">11:00</div>
                                        <div className="text-[10px] font-semibold text-blue-500 mt-1 uppercase">45 Phút</div>
                                    </div>
                                    <div className="relative border-l-2 border-blue-200 pl-4 pb-6 group-last:border-l-0 group-last:pb-0">
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white bg-blue-500 shadow-sm"></div>
                                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                                            <h3 className="font-bold text-blue-700 text-sm">Tiết 2: Kỹ năng BI</h3>
                                            <p className="text-xs font-semibold text-slate-800 mt-1">Power BI (PL-300)</p>
                                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">Tự cày lý thuyết & practice theo plan cá nhân. (Tập trung Data Modeling & DAX).</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tiết 3 */}
                                <div className="flex gap-4 relative group">
                                    <div className="w-16 flex-shrink-0 text-right pt-1">
                                        <div className="text-sm font-bold text-slate-700">11:00</div>
                                        <div className="text-xs text-slate-400">11:45</div>
                                        <div className="text-[10px] font-semibold text-emerald-500 mt-1 uppercase">45 Phút</div>
                                    </div>
                                    <div className="relative border-l-2 border-emerald-200 pl-4 pb-6 group-last:border-l-0 group-last:pb-0">
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white bg-emerald-500 shadow-sm"></div>
                                        <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                                            <h3 className="font-bold text-emerald-700 text-sm">Tiết 3: Tin học VP</h3>
                                            <p className="text-xs font-semibold text-slate-800 mt-1">MOS Excel</p>
                                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">Luyện phần mềm GMetrix theo lộ trình tự định sẵn để dứt điểm chuẩn đầu ra.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Nghỉ trưa */}
                                <div className="flex gap-4 relative group">
                                    <div className="w-16 flex-shrink-0 text-right pt-2">
                                        <div className="text-xs text-slate-400">11:45</div>
                                    </div>
                                    <div className="relative border-l-2 border-dashed border-slate-200 pl-4 pb-4">
                                        <div className="absolute -left-[5px] top-3 w-2 h-2 rounded-full bg-slate-300"></div>
                                        <p className="text-xs italic text-slate-500 pt-2 flex items-center gap-2">🍱 Nghỉ trưa & Ngủ một giấc</p>
                                    </div>
                                </div>

                                {/* Tiết 4 */}
                                <div className="flex gap-4 relative group">
                                    <div className="w-16 flex-shrink-0 text-right pt-1">
                                        <div className="text-sm font-bold text-slate-700">14:00</div>
                                        <div className="text-xs text-slate-400">14:30</div>
                                        <div className="text-[10px] font-semibold text-amber-500 mt-1 uppercase">30 Phút</div>
                                    </div>
                                    <div className="relative border-l-0 border-transparent pl-4 pb-0">
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-white bg-amber-500 shadow-sm"></div>
                                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                                            <h3 className="font-bold text-amber-700 text-sm">Tiết 4: Tự học / Đọc tài liệu</h3>
                                            <p className="text-xs font-semibold text-slate-800 mt-1">Lý thuyết bổ trợ</p>
                                            <p className="text-xs text-slate-600 mt-1 leading-relaxed">Đọc sách "Fin Theory w/ Python" hoặc "AI in Finance" bổ trợ cho Tiết 1.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: 12-WEEK STUDY PLAN */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl">📅</span>
                            <h2 className="text-2xl font-bold text-slate-800">Lộ Trình Python for Finance (12 Tuần)</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            
                            {/* MONTH 1: SLOW PACE */}
                            <div className="sm:col-span-2 mt-2 mb-2">
                                <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 border-b border-slate-200 pb-2">Tháng 1: Asset Management (Chậm & Chắc)</h3>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Tuần 1</span>
                                    <span className="text-xs font-semibold text-emerald-600">Nền Tảng</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 6:</strong> Finance with Python 01-03</li>
                                    <li><strong className="text-slate-900">Sách:</strong> Fin Theory with Python Ch 01-03</li>
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Tuần 2</span>
                                    <span className="text-xs font-semibold text-emerald-600">Nền Tảng</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 6:</strong> Finance with Python 04-06</li>
                                    <li><strong className="text-slate-900">Sách:</strong> Fin Theory with Python Ch 04-06</li>
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Tuần 3</span>
                                    <span className="text-xs font-semibold text-indigo-600">Core Code</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 8:</strong> Python for Asset Mgt 01-03</li>
                                    <li><strong className="text-slate-900">Toán:</strong> Math Basics & PFF Basics (Tùy chọn)</li>
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">Tuần 4</span>
                                    <span className="text-xs font-semibold text-indigo-600">Core Code</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 8:</strong> Python for Asset Mgt 04-06</li>
                                    <li><strong className="text-slate-900">Tổng kết:</strong> Review T1 & Tutorial</li>
                                </ul>
                            </div>

                            {/* MONTH 2: FAST PACE */}
                            <div className="sm:col-span-2 mt-6 mb-2">
                                <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 border-b border-slate-200 pb-2">Tháng 2: Algo Trading (Ép Xung Tốc Độ)</h3>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-rose-200 shadow-sm hover:border-rose-400 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-rose-50 text-rose-700 text-xs font-bold px-2 py-1 rounded">Tuần 5</span>
                                    <span className="text-xs font-semibold text-rose-600">Nặng</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 9, 10:</strong> Vectorized & Event-based Backtesting</li>
                                    <li><strong className="text-slate-900">Data:</strong> Python for Data Science (Numpy/Pandas)</li>
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-rose-200 shadow-sm hover:border-rose-400 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-rose-50 text-rose-700 text-xs font-bold px-2 py-1 rounded">Tuần 6</span>
                                    <span className="text-xs font-semibold text-rose-600">API</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 11:</strong> Oanda, FXCM & IBKR API Platforms</li>
                                    <li><strong className="text-slate-900">ML:</strong> Predicting Market Movements</li>
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-rose-200 shadow-sm hover:border-rose-400 transition-colors sm:col-span-2">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-rose-50 text-rose-700 text-xs font-bold px-2 py-1 rounded">Tuần 7</span>
                                    <span className="text-xs font-semibold text-rose-600">Mở Rộng</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 18:</strong> AI in Finance (Book Chapters)</li>
                                    <li><strong className="text-slate-900">Folder 4:</strong> Crypto Basics (Tùy chọn nếu làm bot Crypto)</li>
                                </ul>
                            </div>

                            {/* MONTH 3: FAST PACE & PROJECT */}
                            <div className="sm:col-span-2 mt-6 mb-2">
                                <h3 className="text-sm font-bold tracking-widest uppercase text-slate-400 border-b border-slate-200 pb-2">Tháng 3: Comp Fin & Final Project</h3>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm hover:border-amber-400 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-amber-50 text-amber-700 text-xs font-bold px-2 py-1 rounded">Tuần 8</span>
                                    <span className="text-xs font-semibold text-amber-600">Toán Nặng</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 13, 14:</strong> DX Analytics (Risk-Neutral Val, Fourier)</li>
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm hover:border-amber-400 transition-colors">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-amber-50 text-amber-700 text-xs font-bold px-2 py-1 rounded">Tuần 9</span>
                                    <span className="text-xs font-semibold text-amber-600">Mô Phỏng</span>
                                </div>
                                <ul className="text-sm text-slate-700 space-y-2">
                                    <li><strong className="text-slate-900">Folder 14:</strong> Monte Carlo Simulation & Calibration</li>
                                </ul>
                            </div>

                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-md sm:col-span-2">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">Tuần 10-12: THE FINAL PROJECT</span>
                                    <span className="text-xs font-semibold text-amber-400">Graduation</span>
                                </div>
                                <p className="text-sm text-slate-300 mb-3 italic">Dẹp hết bài mới. Chỉ tập trung làm báo cáo White Paper chuẩn PEP 8.</p>
                                <ul className="text-sm text-slate-200 space-y-2">
                                    <li className="flex items-start gap-2"><span className="text-emerald-400">✓</span> Submit Proposal & Chuẩn bị Static Data.</li>
                                    <li className="flex items-start gap-2"><span className="text-emerald-400">✓</span> Code Jupyter Notebook, giải thích bằng Markdown.</li>
                                    <li className="flex items-start gap-2"><span className="text-emerald-400">✓</span> Upload GitHub & Check chạy trực tiếp trên Google Colab.</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

