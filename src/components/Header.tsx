import React from 'react';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-purple-700 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6" />
          <span className="text-xl font-bold">Words Matter</span>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-purple-200">关于</a></li>
            <li><a href="#examples" className="hover:text-purple-200">示例</a></li>
            <li><a href="#pledge" className="hover:text-purple-200">承诺</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}