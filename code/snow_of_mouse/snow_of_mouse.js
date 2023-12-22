const numberOfFlakes = 2; // Tăng số lượng hạt tuyết
document.addEventListener('mousemove',  createSnowMouse);

function  createSnowMouse(event) {
  
  const flakesContainer = document.createElement('div');
  flakesContainer.className = 'flakes-container';

  for (let i = 0; i < numberOfFlakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snow-of-mouse';
    flakesContainer.appendChild(snowflake);

    const x = event.clientX + getRandomInt(-20, 20); // Đặt ngẫu nhiên xung quanh chuột
    const y = event.clientY + getRandomInt(-20, 20);

    snowflake.style.left = x + 'px';
    snowflake.style.top = y + 'px';

    setTimeout(() => {
      snowflake.remove();
    }, 50000); // Remove snowflake after 5 seconds
  }

  document.body.appendChild(flakesContainer);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  