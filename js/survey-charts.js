document.addEventListener('DOMContentLoaded', () => {
  const palette = {
    cinnabar: '#A8202B',
    gold: '#D4AF37',
    cream: '#F8F5F0',
    charcoal: '#2C2C2C',
    lightRed: 'rgba(168, 32, 43, 0.7)',
    lightGold: 'rgba(212, 175, 55, 0.7)',
    softGray: 'rgba(44, 44, 44, 0.25)',
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: { family: "'Noto Sans SC', sans-serif", size: 13 },
          color: palette.charcoal,
        },
      },
      tooltip: {
        backgroundColor: palette.charcoal,
        titleFont: { family: "'Noto Sans SC', sans-serif" },
        bodyFont: { family: "'Noto Sans SC', sans-serif" },
        padding: 12,
        cornerRadius: 8,
      },
    },
  };

  const channelCtx = document.getElementById('channelChart');
  if (channelCtx) {
    new Chart(channelCtx, {
      type: 'doughnut',
      data: {
        labels: ['短视频/社交媒体', '学校教育', '实地参观', '影视作品', '其他'],
        datasets: [{
          data: [76, 52, 48, 41, 12],
          backgroundColor: [palette.cinnabar, palette.gold, palette.lightRed, palette.lightGold, palette.softGray],
          borderWidth: 2,
          borderColor: palette.cream,
        }],
      },
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          title: {
            display: false,
          },
        },
      },
    });
  }

  const interestCtx = document.getElementById('interestChart');
  if (interestCtx) {
    new Chart(interestCtx, {
      type: 'bar',
      data: {
        labels: ['实地参观', '互动体验', '短视频', '线上展馆', '讲座报告'],
        datasets: [{
          label: '吸引力评分',
          data: [88, 82, 75, 68, 45],
          backgroundColor: [palette.cinnabar, palette.gold, palette.lightRed, palette.lightGold, palette.softGray],
          borderRadius: 6,
          barPercentage: 0.6,
        }],
      },
      options: {
        ...commonOptions,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { color: 'rgba(44,44,44,0.08)' },
            ticks: { color: palette.charcoal, font: { family: "'Noto Sans SC', sans-serif" } },
          },
          x: {
            grid: { display: false },
            ticks: { color: palette.charcoal, font: { family: "'Noto Sans SC', sans-serif" } },
          },
        },
      },
    });
  }

  const visitCtx = document.getElementById('visitChart');
  if (visitCtx) {
    new Chart(visitCtx, {
      type: 'doughnut',
      data: {
        labels: ['参观过3处及以上', '参观过1-2处', '未曾参观'],
        datasets: [{
          data: [23, 54, 31],
          backgroundColor: [palette.cinnabar, palette.gold, palette.softGray],
          borderWidth: 2,
          borderColor: palette.cream,
        }],
      },
      options: commonOptions,
    });
  }

  const formatCtx = document.getElementById('formatChart');
  if (formatCtx) {
    new Chart(formatCtx, {
      type: 'bar',
      data: {
        labels: ['纪录片/短视频', '图文故事', '互动H5/小游戏', '线上展厅', '直播讲解'],
        datasets: [{
          label: '偏好占比',
          data: [82, 61, 57, 49, 38],
          backgroundColor: [palette.cinnabar, palette.gold, palette.lightRed, palette.lightGold, palette.softGray],
          borderRadius: 6,
          barPercentage: 0.6,
        }],
      },
      options: {
        ...commonOptions,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: { color: 'rgba(44,44,44,0.08)' },
            ticks: { color: palette.charcoal, font: { family: "'Noto Sans SC', sans-serif" } },
          },
          x: {
            grid: { display: false },
            ticks: { color: palette.charcoal, font: { family: "'Noto Sans SC', sans-serif" } },
          },
        },
      },
    });
  }
});
