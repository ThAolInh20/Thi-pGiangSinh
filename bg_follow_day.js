document.addEventListener("DOMContentLoaded", function() {
      // Lấy ngày hiện tại
      var currentDate = new Date();

      // Tạo một mảng chứa đường dẫn đến các ảnh theo thứ tự các tháng
      var images = [
        "anh4.jpg",
        "anh5.jpg",
        "anh1.webp",
        "anh2.webp",
        "anh3.webp",
        // Thêm đường dẫn cho các tháng khác ở đây
      ];

      // Lấy tháng hiện tại (đánh số từ 0 đến 11)
      var currentMonth = currentDate.getDay();

      // Lấy đường dẫn ảnh tương ứng với tháng hiện tại
      var imagePath = images[currentMonth];

      // Đặt background image của body
      document.body.style.backgroundImage = "url('image/background/" + imagePath + "')";
    });