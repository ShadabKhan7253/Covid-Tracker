// https://data.covid19india.org/data.json
// alert('Hello');
// https://api.covid19api.com/summary
// https://disease.sh/v3/covid-19/countries

// async function fetchExample() {
//   const res = await fetch('https://disease.sh/v3/covid-19/countries');
//   const data = await res.json();
//   // render(data);
//   console.log(data[111]);
// }
// fetchExample();

const parentElement = document.querySelector('.renderData');
async function fetchData() {
  const res = await fetch('https://disease.sh/v3/covid-19/countries');
  const data = await res.json();
  // console.log(data);
  render(data);
}
fetchData();

function render(data) {
  // const statewise = data.Countries;
  // console.log(statewise);
  console.log(data);
  data.forEach((state) => {
    // console.log(state);
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const td7 = document.createElement('td');
    const td8 = document.createElement('td');
    const td9 = document.createElement('td');

    td1.innerHTML = state.country;
    td2.innerHTML = state.cases;
    td3.innerHTML = state.todayCases == 0 ? ' ' : '+' + state.todayCases;
    td4.innerHTML = state.deaths;
    td5.innerHTML = state.todayDeaths == 0 ? ' ' : '+' + state.todayDeaths;
    td6.innerHTML = state.recovered;
    td7.innerHTML = state.todayRecovered == 0 ? '' : '+' + state.todayRecovered;
    td8.innerHTML = state.active;
    td9.innerHTML = state.population;

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    parentElement.appendChild(tr);
  });
}
