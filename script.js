
const startCountdown = ()=> {
  let seconds = 10;

  const updateCountdown = () => {
    document.getElementById("countdown").innerHTML = seconds;

    if (seconds > 0) {
      seconds--;
      setTimeout(updateCountdown, 1000);
    } else {
      document.getElementById("countdown").innerHTML = "";
      document.getElementById("independenceDay").innerHTML = "Happy Independence Day!";
    }
  }
  updateCountdown();

}



