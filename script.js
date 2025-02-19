// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Ẩn tất cả các section và causes-menu khi trang web load
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    const sections1 = document.querySelectorAll('.content-section1');
    sections1.forEach(section => section.style.display = 'none');
    const causeMenus = document.querySelectorAll('.causes-menu');

    // const togglebtn = document.getElementById('toggle-btn');
    // togglebtn.style.display = 'block';

    
    
    
    causeMenus.forEach(menu => menu.style.display = 'none');
    
    // Ẩn tất cả submenu ban đầu
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => submenu.style.display = 'none');

    // Thêm event listener cho tất cả các menu items
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // e.preventDefault();
            
            const sectionId = this.getAttribute('data-section');
            
            
        

            // Xử lý click vào issues
            if (sectionId) {
                const selectedSection = document.getElementById(sectionId);
                const thumbnail = document.querySelector('.content .img');
                const isVisible = selectedSection && selectedSection.style.display === 'block';
                const sections1 = document.querySelectorAll('.content-section1');
    
                // console.log(isVisible)

                // Đóng tab nếu nó đang mở
                if (isVisible) {
                    selectedSection.style.display = 'none';
                    sections1.forEach(section => section.style.display = 'none');
                    thumbnail.style.display = 'block'; 
                    // Ẩn tất cả causes menu trước
                    causeMenus.forEach(menu => menu.style.display = 'none');
                } else {
                    showContent(sectionId);         
                    
                    // Ẩn tất cả causes menu trước
                    causeMenus.forEach(menu => menu.style.display = 'none');
                    
                    // Nếu là facebook-issue hoặc youtube-issue, hiển thị causes menu tương ứng
                    if (['facebook-issue','connectwf-nointernet','no-connect','notseewifi-issue','wifi-bandwidth1','box-nopower1','box-nosignal1','box-nointernet1','device-information1','device-information2','device-information3','multi-version1'].includes(sectionId)) {
                        // Ẩn tất cả causes menu trước
                        causeMenus.forEach(menu => menu.style.display = 'none');
                        
                        const parentLi = this.closest('li');
                        const causesMenu = parentLi.querySelector('.causes-menu');

                        // Hiển thị causes menu tương ứng nếu tồn tại
                        if (causesMenu) {
                            causesMenu.style.display = 'block';
                        }
                    } 
                }
                
                // Toggle submenu nếu có
                const submenu = this.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                    // Nếu là wifi-slow hoặc wifi-cant-use, chỉ toggle submenu
                    if (['wifi-slow', 'wifi-cant-use', 'wifi-bandwidth','box-nopower','box-nosignal','box-nointernet','device-information','user-guide','training-camera','multi-version' ].includes(sectionId)) {
                        // Ẩn tất cả submenu khác cùng cấp
                        const siblingSubmenus = this.closest('ul').querySelectorAll('.submenu');
                        siblingSubmenus.forEach(sub => {
                            if (sub !== submenu) sub.style.display = 'none';
                        });
                        // Toggle submenu hiện tại
                        submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
                    }
                }
            }
        });
    });
});

function showContent(sectionId) {
    const thumbnail = document.querySelector('.content .img');
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
         
    });
    const sections1 = document.querySelectorAll('.content-section1');
    sections1.forEach(section => section.style.display = 'none');

    
    

    const parentSelection = document.getElementById('wifi-slow');
    parentSelection.style.width = '100%';
    
    const selectedSection = document.getElementById(sectionId);

   

    if (selectedSection) {
        console.log('Section found:', sectionId);
        selectedSection.style.display = 'block';
    } else {
        console.error('Section not found:', sectionId);
    }
    
    if (thumbnail) {
        thumbnail.style.display = 'none';
    }
    }
    
function showError(sectionId) {
    const sections = document.querySelectorAll('.content-section1');
    sections.forEach(section => {
        section.style.display = 'none';
         
    }); 
    // const parentSelection = document.getElementById('wifi-slow');
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        // parentSelection.style.width = '30%';
        selectedSection.style.display = 'block';
        selectedSection.style.width = '70%';

}
}
function toggleExpand() {
    // Lấy tất cả content-section1 và content-section
    const allContent1 = document.querySelectorAll('.content-section1');
    const allContent = document.querySelectorAll('.content-section');
    const button = document.getElementById('toggle-btn');

    // Xác định phần đang hiển thị
    const visibleContent1 = Array.from(allContent1).find(el => el.style.display !== 'none');
    let visibleContent = Array.from(allContent).find(el => el.style.display !== 'none');

    if (!visibleContent1) {
        console.error("Không tìm thấy content-section1 đang hiển thị!");
        return;
    }

    // Kiểm tra trạng thái hiện tại để toggle
    if (visibleContent && visibleContent.style.display !== 'none') {
        // Ẩn content-section, mở rộng content-section1
        visibleContent.style.display = 'none';
        visibleContent1.style.width = '100%';
        button.textContent = '⇋'; 
        button.dataset.expanded = "true"; // Lưu trạng thái mở rộng
    } else {
        // Kiểm tra trạng thái trước đó
        if (button.dataset.expanded === "true") {
            console.log("Thu nhỏ content-section1 và hiển thị lại content-section");
        
            // Nếu visibleContent bị undefined, tìm lại phần content-section bị ẩn
            if (!visibleContent) {
                visibleContent = Array.from(allContent).find(el => el.style.display === 'none');
            }
        
            // Kiểm tra nếu tìm thấy visibleContent, thì hiển thị lại nó
            if (visibleContent) {
                visibleContent.style.display = 'block';
                visibleContent.style.width = '70%';
              
            } 
        
            // Thu nhỏ content-section1
            visibleContent1.style.width = '50%';
            button.textContent = '⇆'; 
            button.dataset.expanded = "false"; // Lưu trạng thái thu nhỏ
        }
        
    }
}

// Gắn sự kiện click cho nút toggle
document.getElementById('toggle-btn').addEventListener('click', toggleExpand);
mediumZoom('.zoomable');