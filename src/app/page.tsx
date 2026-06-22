import React from 'react'
import MiniQuiz from '../components/MiniQuiz'
import CharacterTabs from '../components/CharacterTabs'

export default function Home() {
  return (
    <main>
      <div className="hero-glow-bg"></div>
      <div className="container">
        
        {/* Header */}
        <header className="site-header">
          <a href="#" className="logo">
            <div className="mark">M4</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.02em' }}>Math4Money</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Học toán để hiểu tiền</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#" className="active">Trang chủ</a>
            <a href="#">Về chúng tôi</a>
            <a href="#">Chương trình học</a>
            <button className="btn ghost">Đăng nhập</button>
            <button className="btn primary">Bắt đầu miễn phí</button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <div className="eyebrow">Nền tảng giáo dục tài chính cá nhân cho trẻ 8–12 tuổi</div>
            <h1 className="title">
              <span>Toán học là công cụ.</span><br />
              <span>Tài chính là hành trình.</span><br />
              <em>Tương lai là phần thưởng.</em>
              <span className="quote-en">
                "Mathematics is the tool. Finance is the journey. The future is the reward."
              </span>
            </h1>
            <p className="lead">
              Math4Money là ứng dụng giáo dục tài chính dành cho học sinh tiểu học và trung học. 
              Thông qua các khảo sát tình huống thực tế và trò chơi tương tác, trẻ sẽ khám phá tính cách 
              tài chính của riêng mình, từ đó phát triển các kỹ năng tiết kiệm, chi tiêu, lập kế hoạch và sẻ chia.
            </p>
            <div className="ctas">
              <a href="#assessment-steps" className="btn primary">
                Bắt đầu khảo sát miễn phí
              </a>
              <button className="btn ghost">Xem lộ trình mẫu</button>
            </div>
            
            <div className="hero-features-list">
              <span>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                300+ học sinh đã tham gia
              </span>
              <span>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                An toàn — Không quảng cáo
              </span>
            </div>
          </div>

          <div className="hero-right">
            <MiniQuiz />
          </div>
        </section>

        {/* 4-Step Journey Section */}
        <section className="section-block" id="assessment-steps">
          <div className="section-title-area">
            <h2>Hành trình 4 bước khám phá tài chính</h2>
            <p>Quy trình học tập và rèn luyện kỹ năng tài chính được thiết kế khoa học, dễ tiếp thu và vui nhộn cho trẻ.</p>
          </div>

          <div className="steps-grid">
            
            <div className="step-card">
              <div className="step-num-glow">01</div>
              <div className="step-icon-wrap">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3>Làm bài đánh giá</h3>
              <p>Trả lời 20-25 câu hỏi vui nhộn về thói quen chi tiêu, tiết kiệm, lập kế hoạch và chia sẻ thực tế hàng ngày.</p>
            </div>

            <div className="step-card">
              <div className="step-num-glow">02</div>
              <div className="step-icon-wrap" style={{ color: 'var(--color-kien)', borderColor: 'rgba(0, 229, 255, 0.2)', backgroundColor: 'rgba(0, 229, 255, 0.08)' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3>AI phân tích tính cách</h3>
              <p>Trí tuệ nhân tạo (AI) sẽ phân tích thói quen để xác định linh vật tính cách tài chính nổi bật nhất của trẻ.</p>
            </div>

            <div className="step-card">
              <div className="step-num-glow">03</div>
              <div className="step-icon-wrap" style={{ color: 'var(--color-gau)', borderColor: 'rgba(255, 215, 0, 0.2)', backgroundColor: 'rgba(255, 215, 0, 0.08)' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.485V7.062a2 2 0 011.236-1.84l5.5-2.2a2 2 0 011.528 0l5.5 2.2a2 2 0 011.236 1.84v8.423a2 2 0 01-1.236 1.84L13 20a2 2 0 01-2 0z" />
                </svg>
              </div>
              <h3>Tạo lộ trình cá nhân</h3>
              <p>Hệ thống tự động thiết kế lộ trình học tập, trò chơi tài chính phù hợp với thế mạnh và kỹ năng cần cải thiện.</p>
            </div>

            <div className="step-card">
              <div className="step-num-glow">04</div>
              <div className="step-icon-wrap" style={{ color: 'var(--color-soc)', borderColor: 'rgba(57, 255, 20, 0.2)', backgroundColor: 'rgba(57, 255, 20, 0.08)' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Hình thành thói quen tốt</h3>
              <p>Đồng hành cùng trẻ qua các bài học nhỏ hàng ngày, tích lũy kiến thức thực tế và rèn luyện thói quen tự chủ.</p>
            </div>

          </div>
        </section>

        {/* 4 Financial Personalities Section */}
        <section className="section-block">
          <div className="section-title-area">
            <h2>Khám phá 4 tính cách tài chính</h2>
            <p>Mỗi đứa trẻ đều có phong cách quản lý tài chính riêng. Việc hiểu rõ tính cách giúp trẻ phát huy thế mạnh bản thân.</p>
          </div>

          <CharacterTabs />
        </section>

        {/* Stats Section */}
        <section className="section-block">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num-glow">1.200+</div>
              <p>Bài học đã hoàn thành</p>
            </div>
            <div className="stat-card">
              <div className="stat-num-glow">300+</div>
              <p>Học sinh trải nghiệm</p>
            </div>
            <div className="stat-card">
              <div className="stat-num-glow">92%</div>
              <p>Phụ huynh hài lòng</p>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="cta-band">
          <div className="cta-band-content">
            <h3>Mỗi đứa trẻ đều có một hành trình tài chính riêng.</h3>
            <p>Giúp con bạn xây dựng nền tảng vững chắc cho tương lai từ hôm nay!</p>
          </div>
          <div>
            <a href="#assessment-steps" className="btn primary">
              Bắt đầu khảo sát ngay
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo" style={{ marginBottom: '16px' }}>
                <div className="mark">M4</div>
                <div style={{ fontWeight: 800, fontSize: '18px' }}>Math4Money</div>
              </div>
              <p className="brand-desc">
                Nền tảng giáo dục tài chính thông minh cho trẻ em Việt Nam, kết hợp toán học tư duy và kỹ năng tài chính thực tế.
              </p>
            </div>

            <div className="footer-links-column">
              <h4>Khám phá</h4>
              <ul>
                <li><a href="#">Bài trắc nghiệm</a></li>
                <li><a href="#">Linh vật tài chính</a></li>
                <li><a href="#">Khóa học mẫu</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Về chúng tôi</h4>
              <ul>
                <li><a href="#">Giới thiệu dự án</a></li>
                <li><a href="#">Đội ngũ sáng lập</a></li>
                <li><a href="#">Chính sách bảo mật</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Liên hệ</h4>
              <ul>
                <li><a href="#">support@math4money.edu.vn</a></li>
                <li><a href="#">Hotline: 1900 xxxx</a></li>
                <li><a href="#">Hà Nội, Việt Nam</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Math4Money. Tất cả các quyền được bảo lưu.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  )
}
