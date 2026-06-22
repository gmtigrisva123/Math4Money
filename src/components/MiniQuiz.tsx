"use client"
import React, { useState, useEffect } from 'react'

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: 'soc' | 'kien' | 'tho' | 'gau';
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Khi em nhận được 50.000đ tiền lì xì hoặc quà tặng từ ông bà, em sẽ làm gì đầu tiên?",
    options: [
      { text: "Bỏ ngay vào heo đất để tích lũy dài hạn.", type: "soc" },
      { text: "Lên kế hoạch chia nhỏ: mua sách, nuôi heo và quyên góp.", type: "kien" },
      { text: "Mua ngay món đồ chơi hoặc ly trà sữa mình thích.", type: "tho" },
      { text: "Mua một món quà nhỏ cho em hoặc mời bạn ăn kem.", type: "gau" }
    ]
  },
  {
    id: 2,
    text: "Khi đi siêu thị và được bố mẹ cho tự do chọn một món đồ yêu thích trong ngân sách:",
    options: [
      { text: "So sánh giá cả cẩn thận để chọn món rẻ và tiết kiệm nhất.", type: "soc" },
      { text: "Ghi chép sẵn danh sách từ nhà và chỉ mua đúng thứ cần dùng.", type: "kien" },
      { text: "Thấy món đồ chơi nào hot, đẹp mắt là muốn lấy ngay.", type: "tho" },
      { text: "Tìm mua món đồ chơi có thể chơi chung với cả nhóm bạn.", type: "gau" }
    ]
  },
  {
    id: 3,
    text: "Khi chú heo đất tiết kiệm của em đã đầy ắp tiền, cảm xúc của em là:",
    options: [
      { text: "Rất vui và muốn tiếp tục nuôi tiếp chứ chưa muốn tiêu.", type: "soc" },
      { text: "Lên bảng tính chi tiêu rõ ràng trước khi quyết định đập heo.", type: "kien" },
      { text: "Đập heo ngay để mua trọn bộ đồ chơi yêu thích bấy lâu.", type: "tho" },
      { text: "Dành một phần tiền để giúp đỡ những hoàn cảnh khó khăn.", type: "gau" }
    ]
  }
];

const characterData = {
  soc: {
    name: "Sóc Tiết Kiệm",
    title: "Người Giữ Hạt Thông Minh",
    desc: "Bạn có tài giữ tiền cực giỏi, luôn thích tích lũy và suy nghĩ kỹ trước khi tiêu. Rất tuyệt vời trong việc lập quỹ dự phòng!",
    color: "var(--color-soc)",
    glow: "var(--color-soc-glow)",
    badge: "Tiết kiệm xuất sắc",
    stat1: "95%",
    stat2: "Khá cao",
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    )
  },
  kien: {
    name: "Kiến Lập Kế Hoạch",
    title: "Kỹ Sư Tài Chính Tương Lai",
    desc: "Bạn rất ngăn nắp, thích lập danh sách và phân bổ nguồn tiền rõ ràng. Bạn luôn biết tiền của mình đi đâu!",
    color: "var(--color-kien)",
    glow: "var(--color-kien-glow)",
    badge: "Quản lý mục tiêu",
    stat1: "98%",
    stat2: "Hoàn hảo",
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  tho: {
    name: "Thỏ Mua Nhanh",
    title: "Nhà Trải Nghiệm Tốc Độ",
    desc: "Bạn yêu thích việc tận hưởng cuộc sống ngay lập tức, đôi khi quyết định mua sắm hơi nhanh. Hãy học cách dừng lại 3 giây nhé!",
    color: "var(--color-tho)",
    glow: "var(--color-tho-glow)",
    badge: "Người tiêu dùng năng động",
    stat1: "40%",
    stat2: "Cần cải thiện",
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  gau: {
    name: "Gấu Chia Sẻ",
    title: "Sứ Giả Yêu Thương",
    desc: "Bạn có trái tim ấm áp, luôn thích mang lại niềm vui cho người khác và sẵn lòng quyên góp cho các hoạt động ý nghĩa.",
    color: "var(--color-gau)",
    glow: "var(--color-gau-glow)",
    badge: "Trái tim nhân ái",
    stat1: "90%",
    stat2: "Đầy ý nghĩa",
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
};

export default function MiniQuiz() {
  const [currentStep, setCurrentStep] = useState(0); // 0, 1, 2 = questions, 3 = scanning, 4 = result
  const [answers, setAnswers] = useState<('soc' | 'kien' | 'tho' | 'gau')[]>([]);
  const [resultType, setResultType] = useState<'soc' | 'kien' | 'tho' | 'gau'>('soc');

  const handleAnswer = (type: 'soc' | 'kien' | 'tho' | 'gau') => {
    const nextAnswers = [...answers, type];
    setAnswers(nextAnswers);

    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate result
      setCurrentStep(3); // Go to scanning animation
    }
  };

  useEffect(() => {
    if (currentStep === 3) {
      // Analyze answers after 2s scanning animation
      const counts = answers.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Determine winning personality
      let winner: 'soc' | 'kien' | 'tho' | 'gau' = 'soc';
      let maxCount = 0;

      // Priority order if tied: kien > soc > gau > tho
      const priority: ('soc' | 'kien' | 'tho' | 'gau')[] = ['kien', 'soc', 'gau', 'tho'];
      
      for (const p of priority) {
        if ((counts[p] || 0) > maxCount) {
          maxCount = counts[p] || 0;
          winner = p;
        }
      }

      const timer = setTimeout(() => {
        setResultType(winner);
        setCurrentStep(4); // Show result screen
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentStep, answers]);

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
  };

  const progressPercent = currentStep <= 2 ? (currentStep / 3) * 100 : 100;

  return (
    <div className="glass-card quiz-widget">
      {currentStep <= 2 && (
        <>
          <div className="quiz-header">
            <span className="quiz-title">Trắc nghiệm Tính cách</span>
            <span className="quiz-progress-text">Câu {currentStep + 1} / 3</span>
          </div>
          <div className="quiz-progress-bar-bg">
            <div className="quiz-progress-bar-fill" style={{ width: `${progressPercent}%` }} />
          </div>
          <div className="quiz-question-container">
            <h3 className="quiz-question">{questions[currentStep].text}</h3>
            <div className="quiz-options">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  className="quiz-option"
                  onClick={() => handleAnswer(option.type)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <div className="quiz-scanner">
          <div className="scanner-box">
            <div className="scanner-line" />
            <svg className="scanner-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h3m-3.076-17.025a1 1 0 011.052.271l.813 1.016a1 1 0 00.782.375h1.638a1 1 0 00.782-.375l.813-1.016a1 1 0 011.052-.271l3.308 1.103a1 1 0 01.682.95v1.272a6 6 0 01-3.66 5.518l-1.016.407a2 2 0 00-1.218 1.83v2.247a2 2 0 01-1.218 1.83l-1.016.407a6 6 0 01-3.66-5.518V6.026a1 1 0 01.682-.95l3.308-1.103z" />
            </svg>
          </div>
          <div>
            <h3 style={{ color: 'white', textAlign: 'center', marginBottom: '8px' }}>AI Đang Phân Tích...</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', textAlign: 'center' }}>Đánh giá thói quen tài chính dựa trên dữ liệu...</p>
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="quiz-result">
          <span
            className="result-badge"
            style={{
              backgroundColor: `${characterData[resultType].glow}`,
              color: `${characterData[resultType].color}`,
              border: `1px solid ${characterData[resultType].color}`
            }}
          >
            {characterData[resultType].badge}
          </span>
          <div
            className="result-avatar"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: `2px solid ${characterData[resultType].color}`,
              boxShadow: `0 0 20px ${characterData[resultType].glow}`
            }}
          >
            <div style={{ color: characterData[resultType].color }}>
              {characterData[resultType].svg}
            </div>
          </div>
          <h3 className="result-character-name">{characterData[resultType].name}</h3>
          <span style={{ color: characterData[resultType].color, fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
            {characterData[resultType].title}
          </span>
          <p className="result-desc">{characterData[resultType].desc}</p>
          
          <div className="result-stat-row">
            <div className="result-stat-card">
              <div className="result-stat-val">{characterData[resultType].stat1}</div>
              <div className="result-stat-label">Chỉ số phù hợp</div>
            </div>
            <div className="result-stat-card">
              <div className="result-stat-val">{characterData[resultType].stat2}</div>
              <div className="result-stat-label">Tần suất xuất hiện</div>
            </div>
          </div>

          <div className="result-actions">
            <button className="btn primary" onClick={() => window.location.hash = '#personality-tabs'}>
              Xem lộ trình học
            </button>
            <button className="btn ghost" onClick={restartQuiz}>
              Làm lại
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
