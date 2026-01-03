IncuBrix – Creator Performance Dashboard (Track B)

---

Track Chosen + Why
I choose Track B – Creator Performance Dashboard because it represents a real-world analytics use case where creators need quick, clear insights to understand performance across platforms. This track allowed me to demonstrate backend API design, data aggregation, and dashboard visualization while keeping the scope production-minded within a short time window.

---

Features Implemented
-  REST API to serve creator performance data  
-  Platform-based filtering (YouTube / Instagram)  
-  KPI metrics: Total Views, Engagement Rate, Followers Gained  
-  Line chart showing views trend over time  
-  Bar chart comparing views by platform  
-  Doughnut chart showing engagement split (likes vs comments)  
-  Clean UI layout with readable dashboard structure  
-  Basic validation and empty-state handling  
-  Clear folder structure and documentation  

---

Tech Stack
- Backend: Node.js, Express  
- Frontend: HTML, CSS, Vanilla JavaScript  
- Charts & Visualization: Chart.js  
- Data Storage: Mock JSON (simulating analytics data)  
- Tools: VS Code, Git, GitHub  

---

How to Run Locally

Backend
```bash
cd backend
npm install
node server.js

Backend will start at:
http://localhost:3000

Frontend:
Open the following file directly in a browser:
frontend/index.html

---

API Endpoints List:

GET /metrics
Fetch all creator performance records

GET /metrics?platform=YouTube
Fetch creator performance records filtered by platform

GET /metrics/summary
Returns aggregated KPI metrics:
  1.Total Views
  2.Engagement Rate
  3.Followers Gained

---

Data Model (Tables / Fields)
CreatorMetrics

id – unique identifier

platform – content platform (YouTube / Instagram)

date – activity date

views – total views

likes – total likes

comments – total comments

followers_gained – new followers gained

Derived Metric:
  Engagement Rate = (likes + comments) / views

---

AI Usage Log

AI Tools Used:
ChatGPT

How AI Helped:
-Suggested initial REST API structure

-Assisted with aggregation logic for KPI metrics

-Helped refine Chart.js configurations

-Assisted in improving README clarity and structure

Example Prompt:
"Create a simple Express REST API to serve analytics data from a JSON file."

Example Correction / Refinement:
AI initially suggested adding multiple filters and advanced UI libraries. I intentionally reduced the scope to a single platform filter and three core charts to maintain clarity, reliability, and timely delivery within the 4–5 hour constraint.

---

Trade-offs + Next Improvements

Trade-offs:
-Used mock JSON instead of a real database to optimize development speed

-Authentication and user roles were kept out of scope

-Limited filtering to one dimension (platform) to avoid overengineering

Next Improvements:
-Add date-range filtering for deeper analysis

-Replace JSON with PostgreSQL for persistence

-Add caching for performance optimization

-Improve UI responsiveness and accessibility