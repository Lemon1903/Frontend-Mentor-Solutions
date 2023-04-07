const periodOptions = document.querySelector(".period-options");
const currentHours = document.querySelectorAll(".current-hrs");
const previousHours = document.querySelectorAll(".previous-hrs");

const periodTexts = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

let previousPeriod = weekly;

const changeState = (element) => {
  if (previousPeriod) previousPeriod.classList.toggle("active");
  element.classList.toggle("active");
  previousPeriod = element;
};

const resetAnimation = () => {
  for (let i = 0; i < currentHours.length; i++) {
    currentHours[i].classList.remove("fade");
    previousHours[i].classList.remove("fade");
  }
};

const animateFade = (elements) => {
  elements.forEach((element) => {
    element.classList.add("fade");
    element.onanimationend = () => element.classList.remove("fade");
  });
};

const changeTimeValues = (data, period) => {
  for (let i = 0; i < currentHours.length; i++) {
    const current = data[i].timeframes[period].current;
    const previous = data[i].timeframes[period].previous;

    currentHours[i].textContent = `${current}${current > 1 ? "hrs" : "hr"}`;
    previousHours[i].textContent = `${periodTexts[period]} - ${previous}${previous > 1 ? "hrs" : "hr"}`;
    animateFade([currentHours[i], previousHours[i]]);
  }
};

for (let i = 0; i < periodOptions.children.length; i++) {
  const periodButton = periodOptions.children.item(i);
  periodButton.onclick = () => {
    if (previousPeriod == periodButton) return;
    resetAnimation();
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        changeTimeValues(data, periodButton.textContent.toLowerCase());
        changeState(periodButton);
      });
  };
}
