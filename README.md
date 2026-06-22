# Math4Money

**Math4Money** is a data-driven platform designed to model and improve the financial decision-making habits of children ages 6–12 through applied mathematics, behavioural economics, and modern web technology. By quantifying behavioural patterns and personalizing educational pathways, Math4Money helps young learners develop balanced financial capabilities while giving parents and teachers actionable insights.

## 📌 Project Overview

Modern children grow up in an environment saturated with games, advertisements, and online shopping. Many are exposed to money early—through allowances, digital purchases, or gift money—but have limited understanding of its value, minimal appreciation for their parents’ efforts, and little habit of saving or responsible spending. Traditional curricula weave financial topics into civics or mathematics but rarely provide systematic training, nor tools for parents and educators to identify and shape financial behaviours early.

Math4Money addresses this gap by modeling each child's financial behaviour as a mathematical vector and using classification algorithms to personalize financial literacy instruction. This interdisciplinary approach combines applied mathematics, behavioural economics, data science, and educational technology to deliver scalable, evidence-based financial education for children.

## 🚀 Key Features

### Behavioral Assessment & Classification

Students complete a 20-question financial decision-making assessment. Each response is converted into quantitative data and mapped into a four-dimensional behavioural vector:

| Component | Meaning | Example Behaviour |
|-----------|---------|-------------------|
| **SC** | Spending Control | Resisting impulse buys |
| **SB** | Saving Behaviour | Regularly setting aside money |
| **GM** | Giving Mindset | Willingness to donate/share |
| **PA** | Planning Ability | Budgeting and long-term planning |

The system identifies behavioural tendencies and generates a personalized financial profile. Instead of rigid labels, Math4Money visualizes tendencies through intuitive personas like **Saving Squirrel**, **Quick-Spend Rabbit**, **Planning Ant**, and **Sharing Bear**.

### Personalized Learning Path

The platform recommends lessons based on each student's financial profile. Features include:

- **Free assessment and introductory course**
- **AI-assisted lesson recommendation**
- **Adaptive learning pathways**
- **Personalized feedback reports**
- **Parent and teacher guidance**

### Research-Driven Framework

Math4Money is designed not only as an educational platform but also as a research framework for studying financial behaviour in children. It leverages behavioural modeling, clustering analysis, decision probability estimation, and optimization algorithms to derive insights and improve instruction.

## 🧠 Mathematical & Research Framework

1. **Behavioural Vector Model** – Each student is represented as

   $$
   V = (SC, SB, GM, PA)
   $$

   a quantitative profile of financial habits.

2. **Clustering Analysis** – Students are grouped using algorithms like K-Means or hierarchical clustering. Potential clusters include *Impulsive Spender*, *Balanced Saver*, *Strategic Planner*, and *Community-Oriented Giver*.

3. **Decision Probability Models** – Estimating

   $$
   P(\mathrm{Spend} \mid \mathrm{Personality})
   $$

   and

   $$
   P(\mathrm{Save} \mid \mathrm{Personality})
   $$

   for prediction.

4. **Learning Path Optimization** – Recommends lessons by solving an optimization problem subject to time, attention span, and curriculum constraints.

5. **Financial Growth Simulation** – Uses

   $$
   A = P(1 + r)^t
   $$

   to illustrate compound growth.

### Research Pipeline

```text
Survey Data
     ↓
Behavioural Vector Construction
     ↓
Financial Personality Clustering
     ↓
Behaviour Prediction
     ↓
Personalized Learning Optimization
     ↓
Educational Intervention
```

## 🛠 Technology Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend / API:** Node.js (Express), Python (Flask for research), PostgreSQL / SQLite
- **Data Science:** Python, NumPy, Pandas, Scikit-Learn, Jupyter
- **Infrastructure:** GitHub Actions, Docker, Vercel or similar hosting

## 📸 Demo & Screenshots

To appreciate Math4Money’s user experience, include screenshots or animated GIFs demonstrating key flows:

- **Quiz Interface:** Children answer scenario-based questions.
- **Financial Profile Report:** Visualize SC, SB, GM, PA scores and persona mapping.
- **Lesson Dashboard:** Personalized curriculum recommendation and progress tracking.

*Add images by placing them in the `public/img/` directory and referencing them here. Example:* `![Quiz Interface](/public/img/quiz-demo.gif)`

## 📐 Architecture Diagram

A simplified architecture:

```text
Browser (React/Next.js)
    ↕ REST/GraphQL API
Backend (Node/Express + Python Flask)
    ↕
Data Layer (PostgreSQL) + Research Models (Python)
    ↕
Analytics & Reporting
```

- The **frontend** handles the user interface, quiz forms, and visualizations.
- The **backend** exposes API endpoints for quiz submission, profile generation, and lesson retrieval.
- The **data layer** stores survey responses, lesson metadata, and user progress.
- The **research models** run offline/periodically to update clustering and recommendation algorithms.

## 📥 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/Math4Money.git
cd Math4Money
```

2. **Install frontend dependencies:**

```bash
npm install
```

3. **Install backend dependencies (optional):**

For Python services:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

4. **Initialize the database:**

```bash
# Using a simple SQLite example
python scripts/init_db.py
```

5. **Run the development server:**

```bash
npm run dev
# Visit http://localhost:3000
```

6. **Run backend services (if applicable):**

```bash
python app.py  # Flask API
```

## 📡 API Documentation

| Endpoint | Description | Method | Payload | Response |
|---------|-------------|--------|---------|---------|
| `/api/quiz` | Submit quiz responses and generate behavioural vector | POST | `{ answers: [...] }` | `{ vector: { SC:…, SB:…, GM:…, PA:… }, persona: "Saving Squirrel" }` |
| `/api/lessons` | Retrieve personalized lesson plan | GET | `user_id` param | `{ lessons: [...] }` |
| `/api/report` | Get progress report and recommendations | GET | `user_id` param | `{ profile:…, progress:…, recommendations:… }` |

**Authentication:** The API uses token-based authentication. See `docs/auth.md` for details.

## 📊 Dataset Description

Math4Money uses survey data collected from the platform’s quiz. Each record includes:

- Timestamp
- Student ID (hashed)
- Answers to 20 questions (categorical values)
- Derived SC, SB, GM, PA scores
- Personas and cluster assignment

Data is anonymized and stored according to privacy regulations. For research, aggregated statistics are used to improve models without exposing individual identities.

## 📈 Model Evaluation

Key metrics for evaluating clustering and prediction models:

- **Clustering Silhouette Score:** Measures intra-cluster cohesion vs. inter-cluster separation.
- **Prediction Accuracy:** Accuracy of

  $$
  P(\mathrm{Spend} \mid \mathrm{Personality})
  $$

  and

  $$
  P(\mathrm{Save} \mid \mathrm{Personality})
  $$

  estimations.

- **Recommendation Success:** Percentage of students who improve lower scores after following recommended lessons.

Evaluation scripts are provided in `notebooks/evaluation.ipynb`.

## 📆 Project Status

Math4Money is currently in **alpha development** with initial features implemented:

- Behavioural assessment quiz
- Basic recommendation engine
- Preliminary research models

Upcoming milestones:

1. Full library of 50 lessons
2. Teacher & parent dashboards
3. Longitudinal research study on learning outcomes
4. Platform internationalization and mobile app

## ⚙️ Benchmarks

Prototype performance (examples, not final values):

- **Quiz processing latency:** < 200 ms per request
- **Vector generation throughput:** 1k assessments per second on a single server
- **Clustering runtime:** ~2 seconds for 10k profiles using K-Means
- **Prediction accuracy:** 85% correct classification of save/spend decisions on test data

Real benchmarks will evolve as data volume grows and models are refined.

## 📚 Research References

- Nguyen, H.V. *“Modeling Financial Behavior in Students Using Behavioral Vectors and Clustering Algorithms.”* (Whitepaper, 2026)
- Thaler, R., Sunstein, C. **“Nudge: Improving Decisions About Health, Wealth, and Happiness.”** (2008)
- Mankiw, N. G. **“Principles of Economics.”** (2017)

## 🧑‍💻 Contributors

- **Hồ Việt Anh** – Founder & Lead Researcher
- **Jane Doe** – Data Scientist
- **John Smith** – Backend Developer
- **Alex Nguyen** – Frontend Developer
- **Prof. Lê Tuấn** – Academic Advisor

## 📜 Citation

If you use Math4Money in your research, please cite it as:

```bibtex
@misc{vietanh2026math4money,
  title        = {Math4Money: A Data-Driven Platform for Children's Financial Literacy},
  author       = {Hồ Việt Anh and collaborators},
  year         = {2026},
  howpublished = {GitHub},
  note         = {\url{https://github.com/yourusername/Math4Money}}
}
```

---

*This README draws on the original Math4Money project brief and research notes provided in the accompanying documentation.*
