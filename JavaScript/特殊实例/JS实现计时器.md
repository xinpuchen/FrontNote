# JS 实现计时器

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS实现定时器</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .center {
        height: 500px;
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .clock {
        height: 400px;
        width: 400px;
        background-color: white;
        border: black solid 2px;
        border-radius: 50%;
        position: relative;
      }
      .hand {
        width: 180px;
        height: 10px;
        left: 20px;
        position: absolute;
        background-color: black;
        top: 50%;
        transform-origin: 100%;
        transform: rotate(90deg);
      }
      .btn-group {
        margin-top: 10px;
      }
      .btn-group button {
        padding: 20px;
      }
    </style>
  </head>

  <body>
    <div class="center">
      <div class="clock">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand sec-hand"></div>
      </div>
      <div class="btn-group">
        <button id="start">开始</button>
        <button id="stop">暂停</button>
        <button id="reset">重置</button>
      </div>
    </div>

    <script>
      const hourHand = document.querySelector('.hour-hand');
      const minHand = document.querySelector('.min-hand');
      const secHand = document.querySelector('.sec-hand');

      const startBtn = document.querySelector('#start');
      const stopBtn = document.querySelector('#stop');
      const resetBtn = document.querySelector('#reset');

      let state = false;
      let clockId;
      let deg = 90;

      function startRecord() {
        clockId = setInterval(function() {
          deg += 6;
          secHand.style.transform = `rotate(${deg}deg)`;
          minHand.style.transform = `rotate(${Math.floor((deg - 90) / 360) * 6 +
            90}deg)`;
          hourHand.style.transform = `rotate(${Math.floor(
            (deg - 90) / 360 / 60,
          ) *
            6 +
            90}deg)`;
        }, 1000);
        state = true;
      }

      function handleStart() {
        if (state) {
          return;
        } else {
          startRecord();
        }
      }

      function handleStop() {
        if (!state) {
          return;
        } else {
          clearInterval(clockId);
          state = false;
        }
      }
      function handleReset() {
        if (state) {
          return;
        } else {
          console.log('reset');
          clearInterval(clockId);
          deg = 90;
          hourHand.style.transform = 'rotate(90deg)';
          minHand.style.transform = 'rotate(90deg)';
          secHand.style.transform = 'rotate(90deg)';
          state = false;
        }
      }

      startBtn.addEventListener('click', handleStart);
      stopBtn.addEventListener('click', handleStop);
      resetBtn.addEventListener('click', handleReset);
    </script>
  </body>
</html>
```
