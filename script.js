document.addEventListener("DOMContentLoaded", (e) => {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("min");
  const second = document.getElementById("sec");
  const getFinalTime = () => {
    const currentDate = new Date(Date.now());
    const [hours, minutes, seconds] = [
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds(),
    ];
    console.log(hours, minutes, seconds);
    hour.innerText=hours;
    min.innerText=minutes;
    sec.innerText=seconds;


  };
  setInterval((e) => {
    getFinalTime();
  }, 1000);
});
