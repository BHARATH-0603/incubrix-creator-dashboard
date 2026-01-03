# IncuBrix – Creator Performance Dashboard (Track B)

## Track Chosen + Why
Track B (Creator Performance Dashboard) was chosen to demonstrate a production-minded analytics MVP focused on creators. This track allowed me to combine backend API design, data aggregation logic, and a clean dashboard UI while keeping scope realistic within a short time frame.

---

## Problem Statement
Creators need quick, clear visibility into their performance across platforms. Raw metrics alone are not useful unless they are aggregated, visualized, and easy to filter for decision-making.

---

## Features Implemented
- REST API to serve creator performance metrics
- Platform-level filtering (YouTube / Instagram)
- KPI metrics: Total Views, Engagement Rate, Followers Gained
- Line chart showing views over time
- Bar chart showing views by platform
- Doughnut chart showing engagement split (likes vs comments)
- Clean UI with empty state handling
- Clear project structure and run instructions

---

## Tech Stack
- Backend: Node.js, Express
- Frontend: HTML, CSS, Vanilla JavaScript
- Charts: Chart.js
- Data Storage: Mock JSON
- Tools: VS Code

---

## How to Run Locally

### Backend
```bash
cd backend
npm install
node server.js
