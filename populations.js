let populations = {
  progressive: 100000000,
  socialist: 9000000,
  idealist: 100000009,
  globalist: 100000000,
  conservative: 100009000,
  economist: 100000000,
  realist: 100000000,
  nationalist: 100090000,
  populist: 100000090
};

let decreaseAmount = 98000; // You can adjust this value

function updatePopulations() {
  let totalPopulation = 0;

  for (let nation in populations) {
    const nationSpan = document.getElementById(nation);

    const currentValue = parseFloat(nationSpan.textContent);
    const populationChangeFactor = currentValue > decreaseAmount ? 0.999 : 1;

    populations[nation] *= populationChangeFactor;
    nationSpan.textContent = Math.round(populations[nation]);

    totalPopulation += populations[nation];
    const popSpan = document.getElementById('population');
    popSpan.textContent = Math.round(totalPopulation);
  }

  const avgPopulation = totalPopulation / Object.keys(populations).length;
  const avgSpan = document.getElementById('average');
  avgSpan.textContent = Math.round(avgPopulation);

  const statusSpan = document.getElementById('status');
  statusSpan.textContent = avgPopulation > 1 ? "Above 1" : "Under 1";
}

let interval;

function startUpdating() {
  interval = setInterval(updatePopulations, 1000); // Update every second
}

startUpdating();
