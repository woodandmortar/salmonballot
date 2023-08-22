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

let status = 0; // Set the initial status level
let increaseAmount = .01; // Population increase amount for status 0
let decreaseAmounts = [2000, 40000, 60000, 80000, 100000, 500000]; // Population decrease amounts for different statuses

function updatePopulations() {
  let totalPopulation = 0;

  for (let nation in populations) {
    const nationSpan = document.getElementById(nation);

    if (status === 0) {
      populations[nation] += increaseAmount;
    } else {
      populations[nation] -= decreaseAmounts[status];
    }

    if (populations[nation] < 1000) {
      window.location.reload();
      alert("Population dropped below 1000! Resetting window...");
      break;
    }

    nationSpan.textContent = Math.round(populations[nation]);

    totalPopulation += populations[nation];
    const popSpan = document.getElementById('population');
    popSpan.textContent = Math.round(totalPopulation);
  }

  const avgPopulation = totalPopulation / Object.keys(populations).length;
  const avgSpan = document.getElementById('average');
  avgSpan.textContent = Math.round(avgPopulation);

  const statusSpan = document.getElementById('status');
  statusSpan.textContent = status;
}

let interval;

function startUpdating() {
  interval = setInterval(updatePopulations, 1000); // Update every second
}

startUpdating();
