const formGroup = document.querySelector(".form-group");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const dayGap = document.getElementById("day-gap");
const monthGap = document.getElementById("month-gap");
const yearGap = document.getElementById("year-gap");

const errorTexts = document.querySelectorAll(".error-text");
const calculateButton = document.getElementById("calculate-button");

const output = document.querySelector(".output");

let today = new Date();

const isValidYear = (input) => {
  const yearError = errorTexts.item(2);
  let isValid = true;

  if (!input) {
    yearError.textContent = "This field is required";
    isValid = false;
  } else if (input < 100) {
    yearError.textContent = "Must be a valid year";
    isValid = false;
  } else if (input > today.getFullYear()) {
    yearError.textContent = "Must be in the past";
    isValid = false;
  }

  if (!isValid) yearError.classList.remove("hide");
  return isValid;
};

const isValidMonth = (input, year) => {
  const monthError = errorTexts.item(1);
  let isValid = true;

  if (!input) {
    monthError.textContent = "This field is required";
    isValid = false;
  } else if (input <= 0 || input > 12) {
    monthError.textContent = "Must be a valid month";
    isValid = false;
  } else if (new Date(year, input - 1) > today) {
    monthError.textContent = "Must be in the past";
    isValid = false;
  }

  if (!isValid) monthError.classList.remove("hide");
  return isValid;
};

const isValidDay = (input, month, year) => {
  const dayError = errorTexts.item(0);
  let isValid = true;

  if (!input) {
    dayError.textContent = "This field is required";
    isValid = false;
  } else if (input <= 0 || input > 31) {
    dayError.textContent = "Must be a valid day";
    isValid = false;
  } else if (input > new Date(today.getFullYear(), month, 0).getDate()) {
    dayError.textContent = "Must be a valid date";
    isValid = false;
  } else if (new Date(year, month - 1, input) > today) {
    dayError.textContent = "Must be in the past";
    isValid = false;
  }

  if (!isValid) dayError.classList.remove("hide");
  return isValid;
};

const resetState = () => {
  formGroup.classList.remove("error");
  errorTexts.forEach((text) => text.classList.add("hide"));
  yearGap.textContent = "--";
  monthGap.textContent = "--";
  dayGap.textContent = "--";
};

const clampedBuilder = (minWidth, minFontSize, maxWidth, maxFontSize) => {
  const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minFontSize;
  return `clamp(${minFontSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${maxFontSize}rem)`;
};

output.style.fontSize = clampedBuilder(20, 2.5, 56, 6.5);

addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    calculateButton.click();
  }
});

calculateButton.onclick = () => {
  today = new Date();
  resetState();

  const isValidInput =
    isValidYear(yearInput.value) &
    isValidMonth(monthInput.value, yearInput.value) &
    isValidDay(dayInput.value, monthInput.value, yearInput.value);

  if (!isValidInput) {
    formGroup.classList.add("error");
    return;
  }

  const birthdate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
  const gap = new Date(today - birthdate);

  new CountUp(yearGap, 0, gap.getFullYear() - 1970).start();
  new CountUp(monthGap, 0, gap.getMonth()).start();
  new CountUp(dayGap, 0, gap.getDate() - 1).start();
};
