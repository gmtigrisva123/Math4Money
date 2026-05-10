import React from "react";
import "./Intro.css";

export default function Math4MoneyLandingPage() {
  const dashboard = [
    { label: "Needs vs Wants", value: 82 },
    { label: "Saving Patience", value: 71 },
    { label: "Risk Awareness", value: 64 },
    { label: "Budget Planning", value: 76 }
  ];

  const features = [
    {
      icon: "🧠",
      title: "Financial Personality Map",
      text: "Analyze children’s money choices to identify learning patterns and financial behavior profiles."
    },
    {
      icon: "📊",
      title: "Behavioral Data Dashboard",
      text: "Track decision-making metrics before and after lessons, games, and classroom activities."
    },
    {
      icon: "🧭",
      title: "Personalized Learning Path",
      text: "Recommend suitable financial literacy missions based on each child’s strengths and gaps."
    },
    {
      icon: "🛡️",
      title: "Safe & Ethical by Design",
      text: "Use anonymized, age-appropriate data with clear teacher and parent supervision."
    }
  ];

  const metrics = [
    ["4", "Core behavioral vectors"],
    ["6–12", "Target learner age"],
    ["30+", "Scenario-based missions"],
    ["1 month", "Before/after pilot cycle"]
  ];

  const pilotSteps = [
    "Pre-assessment: scenario-based financial choices",
    "Learning missions: games, stories, classroom challenges",
    "Post-assessment: same vectors, new scenarios",
    "Impact report: charts, insights, and next iteration"
  ];

  return (
    <div className="math-page">
      <section className="hero-section">
        <div className="hero-glow-orange"></div>
        <div className="hero-glow-green"></div>

        <nav className="navbar">
          <div className="brand">
            <div className="brand-icon">💰</div>

            <div>
              <p className="brand-name">Math4Money</p>
              <p className="brand-tagline">Applied Math × Financial Literacy</p>
            </div>
          </div>

          <div className="nav-links">
            <a href="#problem">Problem</a>
            <a href="#method">Method</a>
            <a href="#impact">Impact</a>
            <a href="#pilot">Pilot</a>
          </div>

          <button className="btn-orange">View Demo</button>
        </nav>

        <div className="hero-grid">
          <div>
            <div className="badge">
              <span>✨</span>
              <span className="badge-text">
                A youth-led research & education project
              </span>
            </div>

            <h1 className="hero-title">
              Helping kids learn money through math, data, and real choices.
            </h1>

            <p className="hero-description">
              Math4Money is a tablet/web learning system that uses behavioral
              data from children’s financial decisions to personalize financial
              literacy education for ages 6–12.
            </p>

            <div className="hero-actions">
              <button className="btn-green">Explore the Project →</button>
              <button className="btn-outline">Read Research Brief</button>
            </div>
          </div>

          <div className="dashboard-card-outer">
            <div className="dashboard-shell">
              <div className="dashboard-card">
                <div className="dashboard-header">
                  <div>
                    <p className="kicker">Student Dashboard</p>
                    <h3 className="dashboard-title">Money Decision Profile</h3>
                  </div>

                  <div className="avatar">👧</div>
                </div>

                <div className="score-grid">
                  {dashboard.map((item) => (
                    <div key={item.label} className="score-card">
                      <p className="score-label">{item.label}</p>
                      <p className="score-value">{item.value}%</p>

                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{ width: `${item.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mission-card">
                  <p className="mission-title">Recommended Mission</p>
                  <p className="mission-text">
                    “Plan a 100,000 VND birthday budget and explain 3 trade-offs.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section-white">
        <div className="section-container problem-grid">
          <div>
            <p className="section-label-green">The Problem</p>
            <h2 className="section-title">
              Children make money decisions before they understand money.
            </h2>
          </div>

          <div className="problem-cards">
            {[
              "Impulsive spending",
              "Low saving motivation",
              "Weak risk awareness"
            ].map((text) => (
              <div key={text} className="problem-card">
                <p className="problem-icon">🌱</p>
                <h3 className="card-title">{text}</h3>
                <p className="card-text">
                  Traditional lessons often explain concepts, but do not always
                  capture how children actually choose in realistic situations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="method" className="section-soft">
        <div className="section-container">
          <div className="method-heading">
            <p className="section-label-orange">Our Method</p>
            <h2 className="section-title">
              A learning engine built from scenarios, vectors, and reflection.
            </h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="section-impact">
        <div className="section-container">
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div key={metric[1]} className="metric-card">
                <p className="metric-number">{metric[0]}</p>
                <p className="metric-text">{metric[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pilot" className="section-white">
        <div className="section-container pilot-grid">
          <div>
            <p className="section-label-green">Pilot Plan</p>
            <h2 className="section-title">
              Measure growth, not just participation.
            </h2>
            <p className="section-text">
              A strong pilot compares before/after metrics across decision
              quality, saving patience, risk recognition, and financial
              reflection.
            </p>
          </div>

          <div className="pilot-steps">
            {pilotSteps.map((step, index) => (
              <div key={step} className="pilot-step">
                <div className="step-number">{index + 1}</div>
                <p className="step-text">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div>
            <p className="footer-title">Math4Money</p>
            <p className="footer-text">
              Building financial literacy through applied mathematics and
              human-centered data.
            </p>
          </div>

          <button className="btn-orange">Contact / Collaborate</button>
        </div>
      </footer>
    </div>
  );
}
