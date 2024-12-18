import React from 'react';
import { Header } from './components/Header';
import { WordCard } from './components/WordCard';
import { PledgeSection } from './components/PledgeSection';

const words = [
  {
    word: "剩女",
    alternative: "单身女性",
    explanation: "每个人都有选择自己生活方式的权利，不应该用带有贬义的词语来形容。"
  },
  {
    word: "女司机",
    alternative: "司机",
    explanation: "驾驶能力与性别无关，不应该带有性别歧视的标签。"
  },
  {
    word: "女强人",
    alternative: "专业人士/成功人士",
    explanation: "成功不应该与性别挂钩，每个人都值得因自己的能力受到尊重。"
  },
  {
    word: "更年期",
    alternative: "生理调节期",
    explanation: "这是一个正常的生理现象，不应该被用作贬义词。"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            语言的力量，从改变开始
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            让我们一起创造一个更加平等、相互尊重的语言环境
          </p>
        </div>
      </section>

      {/* Words Section */}
      <section id="examples" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">常见的不当用语</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {words.map((item, index) => (
              <WordCard
                key={index}
                word={item.word}
                alternative={item.alternative}
                explanation={item.explanation}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">为什么这很重要？</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              语言不仅仅是交流的工具，更是思维方式的反映。当我们使用带有性别歧视的语言时，
              我们无形中强化了社会中的性别刻板印象和偏见。通过改变我们的用语习惯，
              我们可以共同创造一个更加包容、平等的社会环境。
            </p>
          </div>
        </div>
      </section>

      <PledgeSection />
    </div>
  );
}

export default App;