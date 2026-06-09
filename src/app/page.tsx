import React from 'react'
import Carousel from '../components/Carousel'

export default function Home(){
  return (
    <main>
      <div className="container">
        <header className="site-header">
          <div className="logo">
            <div className="mark">M4</div>
            <div>
              <div style={{fontWeight:700}}>Math4Money</div>
              <div style={{fontSize:12,color:'#6b7280'}}>Học toán để hiểu tiền</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#" style={{color:'#6b7280'}}>Trang chủ</a>
            <a href="#" style={{color:'#6b7280'}}>Về chúng tôi</a>
            <a href="#" style={{color:'#6b7280'}}>Chương trình học</a>
            <button className="btn ghost">Đăng nhập</button>
            <button className="btn primary">Bắt đầu miễn phí</button>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-left">
            <div className="eyebrow">Nền tảng giáo dục tài chính cá nhân hóa cho trẻ 6–12 tuổi</div>
            <h1 className="title">Học Toán để hiểu tiền. <br/>Hiểu tiền để làm chủ tương lai.</h1>
            <p className="lead">Math4Money giúp trẻ khám phá tính cách tài chính và xây dựng thói quen thông minh thông qua các bài học, trò chơi và tình huống thực tế.</p>
            <div className="ctas">
              <button className="btn primary">Bắt đầu khảo sát miễn phí</button>
              <button className="btn">Xem lộ trình mẫu</button>
            </div>
            <div style={{display:'flex',gap:12,alignItems:'center',color:'var(--muted)'}}>
              <div>300+ học sinh đã tham gia</div>
              <div>•</div>
              <div>An toàn — Không quảng cáo</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="badge-card">
              <div className="badge-title">Trò chơi thú vị</div>
              <div className="badge-sub">+50 XP</div>
            </div>
            <div className="floating-coin coin-1">🪙</div>
            <div className="floating-coin coin-2">🪙</div>
            <Carousel />
            <div className="mascot" style={{position:'absolute',right:12,bottom:12,fontSize:72}}>🐿️</div>
          </div>
        </section>

        <section>
          <h3 style={{marginTop:12,marginBottom:12}}>Hành trình 4 bước khám phá tài chính</h3>
          <div className="steps">
            <div className="step"><strong>1.</strong> Làm bài đánh giá</div>
            <div className="step"><strong>2.</strong> AI phân tích tính cách</div>
            <div className="step"><strong>3.</strong> Tạo lộ trình cá nhân hóa</div>
            <div className="step"><strong>4.</strong> Hình thành thói quen tốt</div>
          </div>

          <h3 style={{marginTop:18,marginBottom:12}}>Khám phá 4 tính cách tài chính</h3>
          <div className="features">
            <div className="feature">Sóc Tiết Kiệm</div>
            <div className="feature">Sóc Kế Hoạch</div>
            <div className="feature">Sóc Chia Sẻ</div>
            <div className="feature">Sóc Khám Phá</div>
          </div>

          <div className="stats">
            <div className="stat"><div style={{fontSize:20,fontWeight:700}}>1.200+</div><div style={{color:'var(--muted)'}}>Bài học đã hoàn thành</div></div>
            <div className="stat"><div style={{fontSize:20,fontWeight:700}}>300+</div><div style={{color:'var(--muted)'}}>Học sinh trải nghiệm</div></div>
            <div className="stat"><div style={{fontSize:20,fontWeight:700}}>92%</div><div style={{color:'var(--muted)'}}>Phụ huynh hài lòng</div></div>
          </div>

          <div className="cta-band">
            <div>
              <div style={{fontSize:18,fontWeight:700}}>Mỗi đứa trẻ đều có một hành trình tài chính riêng.</div>
              <div style={{color:'rgba(255,255,255,0.9)'}}>Bắt đầu khám phá ngay hôm nay!</div>
            </div>
            <div>
              <button className="btn primary">Bắt đầu khảo sát miễn phí</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
