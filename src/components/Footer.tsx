/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Heart, 
  Terminal, 
  Coffee, 
  Code
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E5E5] mt-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Info Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-[#E5E5E5]">
          <div className="space-y-2">
            <h4 className="font-sans font-black text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">
              TRẠM CÁ NHÂN // GRADUATE PORTFOLIO
            </h4>
            <p className="text-[11px] text-gray-500 uppercase tracking-wider">
              Thiết lập không gian số độc lập và bộc lộ hành trình cá nhân.
            </p>
          </div>

          {/* Inspirational quote */}
          <div className="max-w-md text-left md:text-right">
            <p className="text-xs font-sans text-gray-500 leading-relaxed italic">
              "Trang web này là bệ phóng đầu tiên của bạn. Hãy liên tục học tập, rèn luyện cả thể chất lẫn trí tuệ để chinh phục đỉnh cao công nghệ tiếp theo!"
            </p>
            <span className="block text-[9px] font-mono font-bold uppercase text-black tracking-widest mt-1.5">
              — YOUR TECH MENTOR 💻
            </span>
          </div>
        </div>

        {/* Bottom Bar — Copyright & Tools Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 text-[10px] font-medium tracking-widest text-gray-400 uppercase">
          <div className="flex items-center gap-2">
            <span>© {currentYear} GRADUATE PORTFOLIO</span>
            <span>/</span>
            <span>CURATED BY YOUR TECH MENTOR</span>
          </div>
          
          <div className="flex gap-4 items-center">
            <span className="text-black font-bold">STATUS: READY TO BUILD</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
