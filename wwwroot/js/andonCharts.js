window.andonCharts = {};
window.andonCharts.create = (id, labels, values) => {
    const canvas = document.getElementById(id);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // EXACT vertical gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#a6cf6a");
    gradient.addColorStop(0.45, "#7fbf6a");
    gradient.addColorStop(1, "#2f8f7a");

    if (window.andonCharts[id])
        window.andonCharts[id].destroy();

    window.andonCharts[id] = new Chart(ctx, {
        type: "bar",
        data: {
            labels,
            datasets: [{
                data: values,
                backgroundColor: gradient,
                borderRadius: 6,
                borderSkipped: false,

                /* 🔥 FIX BAR WIDTH */
                barThickness: 30,        // FIXED WIDTH (px)
                maxBarThickness: 30      // SAFETY
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: {
                legend: false
            },
            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

window.andonCharts.update = (id, values) => {
    const chart = window.andonCharts[id];
    if (!chart) return;
    chart.data.datasets[0].data = values;
    chart.update("none");
};
