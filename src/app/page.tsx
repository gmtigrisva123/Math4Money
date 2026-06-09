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
            <h1 className="title">
              <p>Toán học là công cụ</p>
              <p>Tài chính là hành trình</p>
              <p>Tương lai là phần thưởng</p>
              <em style={{display:'block',marginTop:12,fontSize:18,color:'var(--muted)'}}>
                "Mathematics is the tool. Finance is the journey. The future is the reward."
              </em>
            </h1>
            <p className="lead">Math4Money là ứng dụng giáo dục tài chính dành cho học sinh 8-12 tuổi. Thông qua các khảo sát, tình huống thực tế và trò chơi tương tác, trẻ khám phá tính cách tài chính của mình, phát triển kỹ năng tiết kiệm, chi tiêu, lập kế hoạch và sẻ chia để chuẩn bị cho tương lai.</p>
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
            {/* badge removed per request */}
            {/* floating coins removed per request */}
            <Carousel />
            <img className="hero-image" src="/assets/pictures/0265a5a0-b67b-4edd-8ca7-34efaa882636.png" alt="hero squirrel" style={{width:220,height:220,objectFit:'contain'}} />
            {/* mascot removed per request */}
          </div>
        </section>

        <section>
          <h3 style={{marginTop:12,marginBottom:12}}>Hành trình 4 bước khám phá tài chính</h3>
          <div className="steps">
            <div className="step">
              <strong>1.</strong> Làm bài đánh giá
              <ul>
                <li>Trả lời 20-25 câu hỏi vui nhộn về thói quen chi tiêu, tiết kiệm, lập kế hoạch và chia sẻ.</li>
              </ul>
              <img src="/assets/pictures/assessmentlogo.png" alt="assessment logo" style={{width:20,height:20,objectFit:'contain',marginTop:12}} />
            </div>
            <div className="step">
              <strong>2.</strong> AI phân tích tính cách
              <ul>
                <li>AI sẽ phân tích kết quả bài đánh giá để xác định tính cách tài chính nổi bật của trẻ.</li>
              </ul>
              <img src="/assets/pictures/ailogo.png" alt="AI logo" style={{width:20,height:20,objectFit:'contain',marginTop:12}} />
            </div>
            <div className="step">
              <strong>3.</strong> Tạo lộ trình cá nhân hóa
              <ul>
                <li>Dựa trên kết quả phân tích, chúng tôi sẽ tạo ra một lộ trình học tập cá nhân hóa phù hợp với từng trẻ.</li>
              </ul>
            </div>
            <div className="step">
              <strong>4.</strong> Hình thành thói quen tốt
              <ul>
                <li>Thông qua các bài học và trò chơi tương tác, trẻ sẽ dần hình thành những thói quen tài chính tích cực.</li>
              </ul>
            </div>
          </div>

          <h3 style={{marginTop:18,marginBottom:12}}>Khám phá 4 tính cách tài chính</h3>
          <div className="features">
            <div className="feature">
              Sóc Tiết Kiệm
            </div>
            <div className="feature">
              Thỏ mua nhanh
            </div>
            <div className="feature">
              Kiến Lập Kế Hoạch
            </div>
            <div className="feature">
              Gấu Chia sẻ
            </div>
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
