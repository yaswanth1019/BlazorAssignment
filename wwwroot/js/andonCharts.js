window.andonCharts = {};

window.andonCharts.create = (id, labels, values) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (window.andonCharts[id]) window.andonCharts[id].destroy();

    window.andonCharts[id] = new Chart(ctx, {
        type: "bar",
        data: { labels, datasets: [{ data: values, backgroundColor: "#8bc34a" }] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: { legend: false }
        }
    });
};

window.andonCharts.update = (id, values) => {
    const chart = window.andonCharts[id];
    if (!chart) return;
    chart.data.datasets[0].data = values;
    chart.update("none");
};
