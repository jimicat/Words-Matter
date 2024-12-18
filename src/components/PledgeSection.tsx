import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function PledgeSection() {
  const [hasPledged, setHasPledged] = useState(false);

  return (
    <section id="pledge" className="bg-purple-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">做出改变的承诺</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-6">
            我承诺：
            <br />• 在日常交流中避免使用带有性别歧视的语言
            <br />• 当听到他人使用不当用语时，友善地提出建议
            <br />• 持续学习并提高性别平等意识
          </p>
          <button
            onClick={() => setHasPledged(true)}
            className={`${
              hasPledged 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-purple-600 hover:bg-purple-700'
            } text-white font-semibold py-3 px-8 rounded-full transition-colors`}
            disabled={hasPledged}
          >
            {hasPledged ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                已承诺
              </span>
            ) : '我承诺'}
          </button>
        </div>
      </div>
    </section>
  );
}