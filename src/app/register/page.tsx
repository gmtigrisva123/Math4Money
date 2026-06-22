"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('Học sinh lớp 5');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already registered, redirect to dashboard
    const storedUser = localStorage.getItem('m4m_user');
    if (storedUser) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vui lòng nhập tên của em nhé!');
      return;
    }
    // Save temporary details before quiz
    localStorage.setItem('m4m_temp_user', JSON.stringify({ name, grade }));
    router.push('/assessment');
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="hero-glow-bg"></div>
      <div className="glass-card" style={{ maxWidth: '480px', margin: '0 auto', border: '1px solid rgba(155, 70, 255, 0.25)', boxShadow: '0 0 30px rgba(155, 70, 255, 0.15)' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="logo" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <div className="mark">M4</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 800, fontSize: '20px', letterSpacing: '-0.02em' }}>Math4Money</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Học toán để hiểu tiền</div>
            </div>
          </div>
          <h2 style={{ fontSize: '24px', color: 'white', marginBottom: '8px' }}>Bắt Đầu Khảo Sát</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            Hãy đăng ký tài khoản học sinh để bắt đầu bài trắc nghiệm tính cách tài chính và cá nhân hóa lộ trình học của em!
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'white', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Tên của em
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ví dụ: An, Minh Khang..."
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
            {error && <span style={{ color: 'var(--color-tho)', fontSize: '12px', marginTop: '6px', display: 'block' }}>{error}</span>}
          </div>

          <div>
            <label htmlFor="grade" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'white', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Khối lớp
            </label>
            <select
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                background: '#0b0f19',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'inherit',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="Học sinh lớp 1">Học sinh lớp 1 (6-7 tuổi)</option>
              <option value="Học sinh lớp 2">Học sinh lớp 2 (7-8 tuổi)</option>
              <option value="Học sinh lớp 3">Học sinh lớp 3 (8-9 tuổi)</option>
              <option value="Học sinh lớp 4">Học sinh lớp 4 (9-10 tuổi)</option>
              <option value="Học sinh lớp 5">Học sinh lớp 5 (10-11 tuổi)</option>
              <option value="Học sinh lớp 6">Học sinh lớp 6 (11-12 tuổi)</option>
            </select>
          </div>

          <button type="submit" className="btn primary" style={{ width: '100%', padding: '12px', marginTop: '8px' }}>
            Bắt đầu khảo sát ngay
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </main>
  );
}
