"use client"
import React, { useState } from 'react'

interface Character {
  id: 'soc' | 'tho' | 'kien' | 'gau';
  name: string;
  title: string;
  badges: string[];
  desc: string;
  scenario: string;
  solution: string;
  color: string;
  glow: string;
  svg: React.ReactNode;
}

const characters: Character[] = [
  {
    id: 'soc',
    name: "Sóc Tiết Kiệm",
    title: "Người tích lũy chăm chỉ",
    badges: ["Tích lũy", "Dự phòng", "An toàn"],
    desc: "Sóc luôn gom góp hạt thông để lưu trữ cho mùa đông. Sóc thích bỏ ống heo và cảm thấy hạnh phúc khi thấy số dư tăng lên. Sóc rất thận trọng và ít khi tiêu tiền hoang phí.",
    scenario: "Mẹ cho Sóc 20.000đ tiêu vặt mỗi tuần.",
    solution: "Sóc quyết định cất ngay 15.000đ vào heo đất (tiết kiệm 75%) và chỉ giữ lại 5.000đ đề phòng khi cần dùng. Bài toán của Sóc: Nếu tiết kiệm đều đặn, sau 10 tuần Sóc sẽ có bao nhiêu? Giải: 15.000đ x 10 = 150.000đ, đủ để mua cuốn sách khoa học yêu thích!",
    color: "var(--color-soc)",
    glow: "var(--color-soc-glow)",
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    )
  },
  {
    id: 'tho',
    name: "Thỏ Mua Nhanh",
    title: "Nhà trải nghiệm tốc độ",
    badges: ["Mua sắm", "Trải nghiệm", "Nhanh nhẹn"],
    desc: "Thỏ thích mua sắm những thứ đẹp đẽ, đồ chơi hot-trend hoặc đồ ăn ngon ngay lập tức. Thỏ mang lại năng lượng vui vẻ nhưng dễ rơi vào cảnh hết sạch tiền trước khi tuần kết thúc.",
    scenario: "Thỏ nhìn thấy một bộ bút màu lấp lánh trị giá 50.000đ đang giảm giá tại nhà sách.",
    solution: "Thỏ mua ngay lập tức mà không suy nghĩ xem mình đã có bút màu chưa. Cuối tuần, khi cần mua vé đi xem phim, Thỏ phát hiện ví mình trống rỗng. Giải pháp cho Thỏ: Áp dụng quy tắc 'Chờ 3 ngày'—nếu sau 3 ngày vẫn thực sự muốn mua, Thỏ mới dùng quỹ chi tiêu của mình.",
    color: "var(--color-tho)",
    glow: "var(--color-tho-glow)",
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    id: 'kien',
    name: "Kiến Lập Kế Hoạch",
    title: "Kỹ sư phân bổ ngân sách",
    badges: ["Kế hoạch", "Chi tiết", "Mục tiêu"],
    desc: "Kiến luôn có sổ tay ghi chép. Kiến không chỉ tiết kiệm mà còn biết phân chia tiền thành các quỹ nhỏ cho từng mục đích: học tập, ăn uống, giải trí, quyên góp.",
    scenario: "Kiến muốn mua một bộ lắp ráp Lego trị giá 200.000đ sau 2 tháng nữa.",
    solution: "Kiến tính toán: 2 tháng = 8 tuần. Mỗi tuần Kiến cần tích lũy: 200.000đ / 8 = 25.000đ. Với 40.000đ mẹ cho hàng tuần, Kiến lập ngân sách: 25.000đ (quỹ Lego), 10.000đ (chi tiêu ăn sáng), 5.000đ (quỹ sẻ chia). Kiến thực hiện chính xác và sở hữu Lego đúng hạn.",
    color: "var(--color-kien)",
    glow: "var(--color-kien-glow)",
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 'gau',
    name: "Gấu Chia Sẻ",
    title: "Sứ giả lan tỏa yêu thương",
    badges: ["Sẻ chia", "Tặng quà", "Ấm áp"],
    desc: "Gấu có tấm lòng rộng lượng. Gấu thấy vui nhất khi dùng tiền của mình để mua quà tặng sinh nhật bạn, quyên góp ủng hộ hoàn cảnh khó khăn hoặc chăm sóc gia đình.",
    scenario: "Trường Gấu phát động phong trào quyên góp sách vở cho các bạn vùng lũ lụt.",
    solution: "Gấu đập heo đất lấy ra 50.000đ tích lũy để mua 10 cuốn tập trắng và bút chì gửi tặng. Gấu cảm thấy vô cùng hạnh phúc. Bài toán của Gấu: Chia sẻ thế nào là hợp lý? Giải: Gấu dành riêng 10% thu nhập cho quỹ Chia Sẻ, giúp vừa làm việc tốt vừa giữ an toàn cho ví tiền cá nhân.",
    color: "var(--color-gau)",
    glow: "var(--color-gau-glow)",
    svg: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function CharacterTabs() {
  const [activeTab, setActiveTab] = useState<'soc' | 'tho' | 'kien' | 'gau'>('soc');

  const activeChar = characters.find(c => c.id === activeTab) || characters[0];

  return (
    <div className="character-section" id="personality-tabs">
      <div className="character-tabs-header">
        {characters.map(char => (
          <button
            key={char.id}
            className={`char-tab-btn tab-${char.id} ${activeTab === char.id ? 'active' : ''}`}
            onClick={() => setActiveTab(char.id)}
          >
            <span style={{ width: '20px', height: '20px', display: 'flex', color: activeTab === char.id ? char.color : 'inherit' }}>
              {char.svg}
            </span>
            {char.name}
          </button>
        ))}
      </div>

      <div className="character-panel">
        <div
          className="char-visual-card"
          style={{
            borderColor: activeChar.color,
            boxShadow: `0 10px 30px ${activeChar.glow}`,
            background: 'rgba(255, 255, 255, 0.01)'
          }}
        >
          <div style={{ color: activeChar.color }}>
            {activeChar.svg}
          </div>
          <h3 style={{ color: 'white', fontSize: '22px', marginBottom: '6px' }}>{activeChar.name}</h3>
          <span style={{ color: activeChar.color, fontSize: '13px', fontWeight: 600 }}>{activeChar.title}</span>
        </div>

        <div className="char-info-area">
          <div className="char-badge-row">
            {activeChar.badges.map((badge, idx) => (
              <span
                key={idx}
                className="char-trait-badge"
                style={{
                  color: activeChar.color,
                  border: `1px solid ${activeChar.color}`,
                  backgroundColor: activeChar.glow
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="char-title-desc">
            <h3>Hiểu về {activeChar.name}</h3>
            <p className="subtitle">{activeChar.desc}</p>
          </div>

          <div className="char-scenario-card">
            <h4>
              <svg style={{ width: '16px', height: '16px', color: activeChar.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Tình huống thực tế:
            </h4>
            <p>{activeChar.scenario}</p>
          </div>

          <div
            className="char-solution-card"
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, ${activeChar.glow} 100%)`,
              border: `1px solid rgba(255,255,255,0.05)`
            }}
          >
            <h4 style={{ color: activeChar.color }}>Cách giải quyết vấn đề toán/tiền:</h4>
            <p>{activeChar.solution}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
