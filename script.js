const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        maxBarThickness: 10,
        backgroundColor: "#FE764B",
        label: "seen pokemons",
        data: [12, 9, 13, 15, 20, 31],
        borderWidth: 1,
      },
      {
        maxBarThickness: 10,
        backgroundColor: "#83BCBD",
        label: "caught pokemons",
        data: [3, 8, 2, 7, 8, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {},
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  },
});
