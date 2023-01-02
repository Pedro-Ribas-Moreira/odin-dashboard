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
    maintainAspectRatio: false,
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

// HANDLING POKEMON API
let tableBody = document.querySelector("#tbody");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => response.json())
  .then((data) => {
    tableBody.innerHTML = "";
    data.results.map((values) => {
      fetchPokemonData(values.url);
    });
  })
  .catch((err) => {
    console.log(err);
  });

function fetchPokemonData(url) {
  // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.types[0].type.name);
      var row = tableBody.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      cell1.innerHTML = `${data.id}`;
      cell2.innerHTML = `<img src=${data.sprites.front_default}>`;
      cell3.innerHTML = `${data.name}`;
      cell4.innerHTML = `${data.types[0].type.name}`;
      cell5.innerHTML = data.name.length >= 7 ? "YES" : "NO";
    })
    .catch((error) => {
      console.log(error);
    });
}
