(function () {
  let clockFace = document.querySelector('.clock_face');
  for (let i = 1; i <= 12; i++) {
    let content = ''
    let newLi = document.createElement('LI');
    content += `
    <div class="hour">
      <span class="tw_time">${i}</span>
      <span class="line"></span>
      <span class="tf_time">${i+12}</span>
    </div>
    <div class="minute">
      <span></span>
      <span></span>
      <span class="middle_star"></span>
      <span class="middle_star_two"></span>
      <span></span>
      <span></span>
    </div>`
    newLi.innerHTML = content;
    clockFace.appendChild(newLi);

  }
  let hour,
    minute,
    second;

  function getTime() {
    let date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
  }

  function handControl(hour, minute, second) {
    let shortHand = document.querySelector('.short_hand');
    let longHand = document.querySelector('.long_hand');
    let secondHand = document.querySelector('.second_hand');

    hour === 0 || hour === 12 ?
      shortHand.style.transform = `rotate(${0}deg)` :
      shortHand.style.transform = `rotate(${(Math.abs(hour-12)* 30)+(minute* 0.5)}deg)`
    second === 60 ?
      secondHand.style.transform = `rotate(${0}deg)` :
      secondHand.style.transform = `rotate(${second * 6}deg)`;
    if (minute === 60) {
      minute = 0
      longHand.style.transform = `rotate(${0}deg)`
    } else
      longHand.style.transform = `rotate(${minute * 6}deg)`
  }

  let timeStart = window.setInterval(() => {
    getTime()
    handControl(hour, minute, second)
  }, 1000)
})();