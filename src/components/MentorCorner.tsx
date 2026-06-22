/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  Map, 
  Globe, 
  Cloud, 
  Terminal, 
  ChevronRight, 
  Sparkles, 
  CheckCircle, 
  AlertCircle,
  HelpCircle,
  FileText
} from 'lucide-react';

interface RouteSegment {
  step: string;
  title: string;
  description: string;
  tags: string[];
  tips: string;
  details: string[];
}

export default function MentorCorner() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const ROADMAP: RouteSegment[] = [
    {
      step: "BẮT ĐẦU",
      title: "Cá nhân hóa nội dung website trên máy tính",
      description: "Bước đầu tiên là định hình phong cách, sửa chữa tiểu sử cá nhân, nạp dự án đầu tay và dán thử lịch tập HTML của bạn lên website 'Trạm dừng chân' này đến khi hoàn chỉnh.",
      tags: ["Nội dung", "Thẩm mỹ", "Vọc vạch"],
      tips: "Bạn hãy nhấn vào nút 'Chỉnh sửa thông tin' ở tab Portfolio để đổi tên Lê Hoàng Nam thành tên thật của bạn nhé, dữ liệu sẽ tự động lưu lại!",
      details: [
        "Cập nhật thông tin: Đổi Avatar, Bio giới thiệu tính cách ngắn gọn bộc lộ cá tính.",
        "Xây dựng Danh mục Portfolio: Thêm 2-3 dự án nhỏ bạn đã từng viết hoặc muốn viết trong tương lai.",
        "Thiết lập Lịch tập Gym/Cardio: Thử nghiệm sửa đổi danh sách bài tập hằng ngày."
      ]
    },
    {
      step: "BƯỚC 1",
      title: "Đẩy mã nguồn trang web lên GitHub",
      description: "GitHub là nơi lưu trữ mã nguồn lớn nhất thế giới, đồng thời đóng vai trò làm cầu nối để website này được đồng bộ miễn phí lên internet.",
      tags: ["GitHub", "Git", "Lập trình"],
      tips: "Chưa cần học Git rườm rà qua Terminal, bạn có thể tải GitHub Desktop về máy, kéo thả thư mục dự án và nhấn 'Publish Repository' là xong!",
      details: [
        "Đăng ký một tài khoản GitHub hoàn toàn miễn phí tại github.com nếu chưa có.",
        "Bấm vào nút '+' ở góc phải màn hình chọn 'New Repository'.",
        "Đặt tên dự án là 'my-personal-hub' và chọn chế độ cá nhân (Private) hoặc công khai (Public).",
        "Upload toàn bộ mã nguồn của bạn lên repository này."
      ]
    },
    {
      step: "BƯỚC 2",
      title: "Đồng bộ tên miền & Deploy lên Vercel",
      description: "Vercel là nền tảng máy chủ đám mây thế hệ mới cực nhanh, miễn phí trọn đời cho các dự án cá nhân, hỗ trợ biên dịch dự án React/Vite này chỉ sau 1 lượt click.",
      tags: ["Đám mây", "Vercel", "Hosting"],
      tips: "Mỗi khi bạn sửa code trên GitHub, Vercel sẽ tự động phát hiện, tự động biên dịch lại và cập nhật website trực tiếp sau 3 giây. Không cần upload thủ công nữa!",
      details: [
        "Đăng ký tài khoản trên vercel.com bằng cách liên kết trực tiếp với tài khoản GitHub đã tạo ở Bước 1.",
        "Nhấn nút 'Add New Project' và chọn kho chứa 'my-personal-hub' vừa đẩy lên github.",
        "Vercel sẽ tự động nhận diện đây là dự án được cấu trúc bởi Vite. Bạn chỉ cần nhấn nút 'DEPLOY' mà không cần thay đổi bất cứ cài đặt mặc định nào.",
        "Đợi 30 giây, bạn sẽ nhận được một đường link miễn phí dạng: 'ten-ban.vercel.app' để truy cập toàn thế giới."
      ]
    },
    {
      step: "BƯỚC 3",
      title: "Áp tên miền cá nhân (Connecting Custom Domain)",
      description: "Đây là lúc biến 'Trạm dừng chân' thành thương hiệu cá nhân đích thực bằng cách gắn tên miền riêng mà bạn đang sở hữu vào địa chỉ website.",
      tags: ["Tên miền", "DNS", "Cá tính"],
      tips: "Dù bạn mua tên miền ở mắt bão, iNET, Nhân Hòa, GoDaddy hay Namecheap, giao diện quản trị có thể khác nhau nhưng quy trình cấu hình DNS vẫn giống nhau 100%!",
      details: [
        "Truy cập vào trang quản lý dự án trên Vercel, vào mục 'Settings' -> chọn 'Domains'.",
        "Nhập tên miền của bạn (Vd: levannam.com hoặc blog.levannam.com) và bấm 'Add'.",
        "Vercel sẽ hiển thị cho bạn 2 thông số bản ghi quan trọng: Bản ghi A (đối với tên miền gốc ví dụ: levannam.com) hoặc bản ghi CNAME (đối với tên miền phụ ví dụ: www.levannam.com).",
        "Đăng nhập vào trang quản trị nhà cung cấp tên miền của bạn, truy cập 'Cấu hình DNS' (DNS Settings) và thêm mới các hàng bản ghi Vercel yêu cầu: Type=A, Host=@, Value=76.76.21.21 (Địa chỉ máy chủ Vercel) HOẶC Type=CNAME, Host=www, Value=cname.vercel-dns.com.",
        "Đợi hệ thống truyền tải (khoảng 5-15 phút), trang web của bạn sẽ chính thức mở cửa chạy trực tiếp trên tên miền riêng!"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-4">
      
      {/* Left Navigation Steps column */}
      <div className="lg:col-span-4 space-y-4">
        <h3 className="font-mono font-bold text-[10px] uppercase tracking-widest text-[#1A1A1A] pl-1 mb-2 flex items-center gap-1.5">
          <Map className="w-4 h-4 text-black" /> Bản đồ hiện thực hoá (.domain)
        </h3>

        <div className="space-y-3">
          {ROADMAP.map((item, index) => {
            const isActive = activeStepIndex === index;
            return (
              <button
                key={index}
                onClick={() => setActiveStepIndex(index)}
                className={`w-full text-left p-5 border transition duration-300 cursor-pointer flex gap-4 relative ${
                  isActive 
                    ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]' 
                    : 'bg-white border-black hover:bg-neutral-50 text-black'
                }`}
              >
                {/* Visual marker label */}
                <div className="flex-shrink-0 text-center">
                  <span className={`block font-mono text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 border ${
                    isActive ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
                  }`}>
                    {item.step}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-sans font-black text-xs md:text-sm leading-snug uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className={`text-[10px] uppercase tracking-wide line-clamp-2 leading-relaxed ${
                    isActive ? 'text-gray-300' : 'text-gray-400'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right active details panel */}
      <div className="lg:col-span-8 bg-white border border-black p-6 md:p-8 flex flex-col justify-between space-y-6">
        
        {/* Detail Content section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black">
            <div className="space-y-1">
              <span className="font-mono text-[9px] font-bold tracking-widest bg-black text-white px-2.5 py-1 border border-black uppercase">
                HƯỚNG DẪN CHI TIẾT • {ROADMAP[activeStepIndex].step}
              </span>
              <h3 className="font-sans font-black text-black text-sm md:text-base uppercase tracking-tight mt-3">
                {ROADMAP[activeStepIndex].title}
              </h3>
            </div>
            
            <div className="flex gap-1.5">
              {ROADMAP[activeStepIndex].tags.map((tag, i) => (
                <span key={i} className="text-[9px] font-mono border border-black bg-neutral-50 text-black px-2 py-0.5 font-bold uppercase tracking-widest">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-gray-700 leading-relaxed font-sans bg-neutral-50 border border-[#E5E5E5] p-5">
            {ROADMAP[activeStepIndex].description}
          </p>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold font-mono text-black uppercase tracking-widest">// CÁC HÀNH ĐỘNG CẦN LÀM:</h4>
            
            <div className="space-y-3">
              {ROADMAP[activeStepIndex].details.map((action, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="p-1 min-w-[20px] h-[20px] border border-black bg-black text-white flex items-center justify-center font-mono text-[9px] font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xs text-gray-700 leading-relaxed font-sans">{action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advice and action row */}
        <div className="border-t border-black pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex gap-3.5 items-start max-w-lg">
            <div className="p-2 border border-black bg-neutral-50 text-black">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold text-black uppercase tracking-widest">Lời khuyên nhỏ từ Mentor:</p>
              <p className="text-xs text-gray-500 leading-relaxed">{ROADMAP[activeStepIndex].tips}</p>
            </div>
          </div>

          <button
            onClick={() => {
              const nextIndex = (activeStepIndex + 1) % ROADMAP.length;
              setActiveStepIndex(nextIndex);
            }}
            className="flex items-center gap-2 bg-black hover:bg-neutral-900 text-white px-5 py-3 text-[10px] font-bold transition uppercase tracking-widest self-stretch sm:self-auto justify-center cursor-pointer"
          >
            Bước tiếp theo <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
}
