const platformSelect = document.getElementById("platform");
const totalViewsEl = document.getElementById("totalViews");
const engagementRateEl = document.getElementById("engagementRate");
const followersGainedEl = document.getElementById("followersGained");

let viewsChart, platformChart, engagementChart;

async function fetchData(platform = "") {
  const url = platform
    ? `http://localhost:3000/metrics?platform=${platform}`
    : `http://localhost:3000/metrics`;

  const res = await fetch(url);
  return res.json();
}

async function loadSummary(platform = "") {
  const url = platform
    ? `http://localhost:3000/metrics/summary?platform=${platform}`
    : `http://localhost:3000/metrics/summary`;

  const res = await fetch(url);
  const data = await res.json();

  totalViewsEl.innerText = data.totalViews;
  engagementRateEl.innerText = data.engagementRate;
  followersGainedEl.innerText = data.followersGained;
}

function renderCharts(data) {
  const dates = [...new Set(data.map(d => d.date))];
  const viewsByDate = dates.map(date =>
    data.filter(d => d.date === date).reduce((s, d) => s + d.views, 0)
  );

  const platformViews = {};
  let totalLikes = 0, totalComments = 0;

  data.forEach(d => {
    platformViews[d.platform] = (platformViews[d.platform] || 0) + d.views;
    totalLikes += d.likes;
    totalComments += d.comments;
  });

  viewsChart?.destroy();
  platformChart?.destroy();
  engagementChart?.destroy();

  viewsChart = new Chart(document.getElementById("viewsChart"), {
  type: "line",
  data: {
    labels: dates,
    datasets: [{
      label: "Views",
      data: viewsByDate,
      borderColor: "blue",
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

  platformChart = new Chart(document.getElementById("platformChart"), {
  type: "bar",
  data: {
    labels: Object.keys(platformViews),
    datasets: [{
      label: "Views by Platform",
      data: Object.values(platformViews),
      backgroundColor: "green"
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});


 engagementChart = new Chart(document.getElementById("engagementChart"), {
  type: "doughnut",
  data: {
    labels: ["Likes", "Comments"],
    datasets: [{
      data: [totalLikes, totalComments],
      backgroundColor: ["orange", "purple"]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

}

async function refreshDashboard() {
  const platform = platformSelect.value;
  const data = await fetchData(platform);
  await loadSummary(platform);
  renderCharts(data);
}

platformSelect.addEventListener("change", refreshDashboard);
refreshDashboard();
