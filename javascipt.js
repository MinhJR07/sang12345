 // Hàm cập nhật giao diện
 function updateUI(option) {
    // Xóa lớp 'selected' từ tất cả các tùy chọn
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    
    // Thêm lớp 'selected' cho tùy chọn đã chọn
    option.classList.add('selected');
    
    // Lấy tổng số tiền từ tùy chọn và cập nhật giao diện
    const totalAmount = option.querySelector('span').textContent;
    document.getElementById('total-amount').textContent = totalAmount;
    
    // Cập nhật phần tóm tắt trong modal
    document.querySelector('.modal .summary-info p:nth-child(2)').innerHTML = `<strong>Tổng cộng:</strong> ${totalAmount}`;
  }
  
  // Hiển thị modal
  function openModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  // Đóng modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  // Hiển thị thông báo xác nhận thanh toán bên trong modal
  function showPaymentConfirmation(paymentMethod) {
    const confirmationBox = document.getElementById('paymentConfirmation');
    confirmationBox.innerHTML = `<p>Thanh toán thành công bằng ${paymentMethod}!</p>`;
    confirmationBox.style.display = 'block';
    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        confirmationBox.style.display = 'none';
    }, 3000)
  }
  
  // Xử lý thanh toán
  function processPayment() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    
    // Kiểm tra nếu người dùng chưa chọn phương thức thanh toán
    if (!selectedPayment) {
      alert('Vui lòng chọn phương thức thanh toán!');
      return;
    }

// Giả lập quá trình thanh toán
setTimeout(() => {
    document.getElementById('loadingDots').style.display = 'none'; // Ẩn loading dots
    showPaymentConfirmation(selectedPayment.value); // Hiển thị thông báo thanh toán thành công
}, 2000); // Quá trình thanh toán giả lập trong 2 giây
}
  // Sự kiện cho các nút modal
  document.getElementById('openModal').addEventListener('click', openModal);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('confirmPayment').addEventListener('click', processPayment);
  // Sự kiện cho các tùy chọn nạp tiền
document.querySelectorAll('.recharge-options .option').forEach(option => {
    option.addEventListener('click', function() {
        updateUI(option);
    });
});
// Lắng nghe sự kiện nhấn nút
document.getElementById("confirmPayment").addEventListener("click", function() {
    const loadingWrapper = document.getElementById("loadingWrapper");
    // Hiển thị hiệu ứng loading khi nhấn nút
  loadingWrapper.style.display = "flex";  // Hiển thị vùng chứa các chấm
    // Thêm lớp "active" để bắt đầu hiệu ứng
    loadingWrapper.classList.add("active");
  
    // Sau khi hiệu ứng kết thúc (1s), có thể xóa lớp "active" nếu muốn dừng hiệu ứng
    setTimeout(() => {
      loadingWrapper.classList.remove("active");
    }, 2000);  // Tự động tắt sau 2s (hoặc có thể thay đổi theo yêu cầu)
  });