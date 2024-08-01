const time = document.querySelector(".time");
const date = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const TIME = new Date();

const showDate = (myTime) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const currentDate = myTime.toLocaleDateString("lt-LT", options);
  date.textContent = currentDate;
};

const showTime = (myTime) => {
  const currentTime = myTime.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(() => {
    showTime(TIME);
    showDate(TIME);
  }, 1000);
};

showTime(TIME);
