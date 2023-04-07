const styleSheet = document.styleSheets.item(0);
const total = document.getElementById("total");

const renderData = (data) => {
  const maxAmount = Math.max(...data.map((item) => item.amount)) + 20;
  const weekday = new Date().getDay() - 1;
  const todayBar = document.getElementById(`${data[weekday].day}`);
  todayBar.classList.add("today");

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const graphBar = document.getElementById(`${item.day}`);
    const barHeight = Math.max(1, (item.amount / maxAmount) * 100);
    const popup = graphBar.children.item(0);

    popup.textContent = `$${item.amount}`;
    popup.style.bottom = `${barHeight + 18}%`;
    graphBar.onmouseover = () => popup.classList.toggle("show");
    graphBar.onmouseout = () => popup.classList.toggle("show");
    styleSheet.insertRule(`#${item.day}:after { height: ${barHeight}% }`, 1);

    new CountUp(total, 0, 478.33, 2).start();
  }
};

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    renderData(data);
  });
