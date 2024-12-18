import { XCircle } from 'lucide-react';

interface WordCardProps {
  word: string;
  alternative: string;
  explanation: string;
}

export function WordCard({ word, alternative, explanation }: WordCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-5 h-5 text-red-500" />
            <span className="text-xl font-semibold line-through text-red-500">{word}</span>
          </div>
          <div className="mb-3">
            <span className="text-green-600 font-medium">建议使用：</span>
            <span className="text-gray-800">{alternative}</span>
          </div>
          <p className="text-gray-600">{explanation}</p>
        </div>
      </div>
    </div>
  );
}