// https://data.covid19india.org/data.json
// alert('Hello');

// https://disease.sh/v3/covid-19/countries
const parentElement = document.querySelector('.renderData');
async function fetchData() {
  const res = await fetch('https://api.covid19api.com/summary');
  const data = await res.json();
  render(data);
  //   console.log(data);
}
fetchData();

function render(data) {
  const statewise = data.Countries;
  console.log(statewise);

  statewise.forEach((state) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');
    const td7 = document.createElement('td');
    const td8 = document.createElement('td');

    td1.innerHTML = state.Country;
    td2.innerHTML = state.TotalConfirmed;
    td3.innerHTML = state.NewConfirmed;
    td4.innerHTML = state.TotalDeaths;
    td5.innerHTML = state.NewDeaths;
    td6.innerHTML = state.CountryCode;
    td7.innerHTML = state.Date;

    tr.append(td1, td2, td3, td4, td5, td6, td7);
    parentElement.appendChild(tr);
  });
}
