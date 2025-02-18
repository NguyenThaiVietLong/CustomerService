// document.addEventListener('DOMContentLoaded', function() {
//     // Hiển thị left panel ngay từ đầu
//     document.querySelector('.left-panel').style.display = 'block';
    
//     // Ẩn tất cả các section trong right panel ban đầu
//     const sections = document.querySelectorAll('.right-panel .content-section');
//     sections.forEach(section => section.style.display = 'none');

//     // Bắt sự kiện click trên menu để hiển thị nội dung tương ứng
//     const menuItems = document.querySelectorAll('.menu a');
//     menuItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const sectionId = this.getAttribute('data-section');
//             if (sectionId) {
//                 showContent(sectionId);
//             }
//         });
//     });
// });

function showContent(sectionId) {
    const rightPanel = document.querySelector('.right-panel');
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        // Kiểm tra trạng thái hiển thị hiện tại
        const isVisible = selectedSection.style.display === 'block';

        // Ẩn tất cả nội dung trước khi hiển thị mục mới
        const sections = document.querySelectorAll('.right-panel .content-section');
        sections.forEach(section => section.style.display = 'none');
        // Nếu nội dung đang hiển thị, ẩn nó. Ngược lại, hiển thị
        
        selectedSection.style.display = isVisible ? 'none' : 'block';

        // Đảm bảo right-panel luôn hiển thị
        rightPanel.style.display = 'block';
    }
}
