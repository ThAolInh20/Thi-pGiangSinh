// tốc độ đổi màu 
const time_of_Merry=1500; 
const time_of_Christ=1500;
const time_of_year=1500;
const time_of_nameMusic=2000;

const numberOfFlakes = 2; // Tăng số lượng hạt tuyết

const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        });

        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach((p) => {
            p.addEventListener('mouseenter', () => {
               
                cursor.style.transform = 'scale(2)'; // Thay đổi kích thước khi hover vào phần tử <p>
            });

            p.addEventListener('mouseleave', () => {
                cursor.style.backgroundColor = 'antiquewhite'; // Reset màu nền khi rời khỏi phần tử <p>
                cursor.style.transform = 'translate(-50%, -50%)'; // Reset kích thước khi rời khỏi phần tử <p>
            });
        });
function getRandomColor() {
    const colors = ['#00FFFF','#00EEEE','#BFEFFF','#87CEFA','#FFFF00','# FFFFF0','# EEE9BF','#FFC1C1','#FFC0CB','#FF00FF'];
    return colors[Math.floor(Math.random() * colors.length)];
    }
    // merry-christmas
    // Hàm thay đổi màu sắc của text-stroke
function changeStrokeColor(className) {
    const elements = document.getElementsByClassName(className);
    const newColor = getRandomColor();
    
    
    // Lặp qua tất cả các phần tử có class name tương ứng
    for (let i = 0; i < elements.length; i++) {
        const changingText = elements[i];
        // Thay đổi màu chữ và text-stroke
        changingText.style.color = newColor;
        changingText.style.webkitTextStroke = `1px ${newColor}`;
    }
    
}
    setInterval(() => changeStrokeColor('m0'),time_of_Merry);
    setInterval(() => changeStrokeColor('ggg'), time_of_Christ);
    setInterval(() => changeStrokeColor('e1'), time_of_Christ);
    setInterval(() => changeStrokeColor('nameMusic'), time_of_nameMusic);
    setInterval(() => changeStrokeColor('year12'), time_of_year);
    
    document.addEventListener('mousemove',  createSnowMouse);
   // Function để tạo ra hạt tuyết trên con troi chuột
function  createSnowMouse(event) {
      
      const flakesContainer = document.createElement('div');
      flakesContainer.className = 'flakes-container';
    
      for (let i = 0; i < numberOfFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snow-of-mouse';
        flakesContainer.appendChild(snowflake);
        // const snowflakes = document.getElementsByClassName('snow-of-mouse');

        // for (const snowflake of snowflakes) {
        //   snowflake.style.backgroundColor = getRandomColor();
        // }
        const x = event.clientX + getRandomInt(-10, 20); // Đặt ngẫu nhiên xung quanh chuột
        const y = event.clientY + getRandomInt(-10, 20);
    
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

      document.addEventListener("DOMContentLoaded", function () {
        // Danh sách các đường dẫn âm thanh
        const audioSources = [
            "../../music/y2mate.com - Crazy Frog  We Wish You A Merry Christmas MV.mp3",
            "../../music/y2mate.com - Jingle Bells with Lyrics  Christmas Songs HD  Christmas Songs and Carols.mp3"
            // Thêm các đường dẫn âm thanh khác tại đây
        ];
        const nameData = [
            'We Wish You A Merry Christmas',
            'Jingle Bells',
        ];
        // Chọn ngẫu nhiên một đường dẫn âm thanh
        const sonhac = Math.floor(Math.random() * audioSources.length);
    
        // Đặt đường dẫn âm thanh vào thuộc tính src
        document.getElementById("audioSource").src = audioSources[sonhac];
        // Load lại âm thanh sau khi đã đặt src mới
        document.getElementById("myAudio").load();
        nameMusic.textContent=nameData[sonhac]
    });
    
//phat nhac
    //   document.addEventListener("DOMContentLoaded", function () {
    //     const audio = document.getElementById("myAudio");
    //     const lyricsDisplay = document.getElementById("lyricsDisplay");
        
    //     // Dữ liệu lời bài hát
    //     const lyricsData = [
    //         { time: 0, text: "We wish you a Merry Christmas" },
    //         { time: 0.02, text: "We wish you a Merry Christmas and a Happy New Year  " },
    //         // { time: 0.1, text: "We wish you a Merry Christmas " },

    //         // { time: 10, text: "We wish you a Merry Christmas and a Happy New Year  " },
    //         // { time: 10, text: "Good tidings to you and all of your kin  " },
    //         // { time: 10, text: "Good tidings for Christmas and a Happy New Year " },
    //         // { time: 10, text: "Good tidings to you wherever you are  " },
    //         // { time: 10, text: "Good tidings for Christmas and a Happy New Year  " },
    //         // { time: 0, text: "We wish you a Merry Christmas" },
    //         // { time: 10, text: "We wish you a Merry Christmas " },
    //         // { time: 10, text: "We wish you a Merry Christmas and a Happy New Year  " },
    //         // { time: 10, text: "Good tidings to you and all of your kin  " },
    //         // { time: 10, text: "Good tidings for Christmas and a Happy New Year " },
    //         // { time: 10, text: "Good tidings to you wherever you are  " },
    //         // { time: 10, text: "Good tidings for Christmas and a Happy New Year  " },
    //         // { time: 0, text: "We wish you a Merry Christmas" },
    //         // { time: 10, text: "We wish you a Merry Christmas " },
    //         // { time: 10, text: "We wish you a Merry Christmas and a Happy New Year  " },
    //         // { time: 0, text: "We wish you a Merry Christmas" },
    //         // { time: 10, text: "We wish you a Merry Christmas " },
    //         // { time: 10, text: "We wish you a Merry Christmas and a Happy New Year  " },
    //         // Thêm các đoạn lời khác với thời điểm tương ứng
    //     ];
    
    //     // Cập nhật lời bài hát khi âm thanh được phát
    //     audio.addEventListener("timeupdate", function () {
    //         updateLyrics();
    //     });
    
    //     function updateLyrics() {
    //         const currentTime = audio.currentTime;
    
    //         // Tìm đoạn lời tương ứng với thời điểm hiện tại
    //         const currentLyrics = lyricsData.find(lyrics => currentTime >= lyrics.time);
    
    //         // Hiển thị lời bài hát
    //         lyricsDisplay.textContent = currentLyrics ? currentLyrics.text : "";
    //     }
    // });
    