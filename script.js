// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Ẩn tất cả các section và causes-menu khi trang web load
    const sections = document.querySelectorAll('.content-section');
    
    
    const causeMenus = document.querySelectorAll('.causes-menu');
    
    const leftpanel = document.querySelectorAll('.left-panel');
    
    leftpanel.forEach(leftpanel => leftpanel.style.display = 'none');
    
    sections.forEach(section => section.style.display = 'none');
    // leftpanel.forEach(leftpanel => leftpanel.style.display = 'none');
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
                const leftpanel = document.querySelector('.left-panel');
                const rightPanel = document.querySelector('.right-panel');
                // console.log(isVisible)

                // Đóng tab nếu nó đang mở
                if (isVisible) {
                    selectedSection.style.display = 'none';
                    thumbnail.style.display = 'block'; 
                    leftpanel.style.display = 'none';
                    rightPanel.style.display = 'none';
                    
                    // Ẩn tất cả causes menu trước
                    causeMenus.forEach(menu => menu.style.display = 'none');
                } else {
                    showContent(sectionId);         
                    
                    // Ẩn tất cả causes menu trước
                    causeMenus.forEach(menu => menu.style.display = 'none');
                    
                    // Nếu là facebook-issue hoặc youtube-issue, hiển thị causes menu tương ứng
                    if (['facebook-issue','connectwf-nointernet','no-connect','notseewifi-issue','wifi-bandwidth1','box-nopower1','box-nosignal1','box-nointernet1','device-information1','device-information2','device-information3'].includes(sectionId)) {
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
                    if (['wifi-slow', 'wifi-cant-use', 'wifi-bandwidth','box-nopower','box-nosignal','box-nointernet','device-information','user-guide','training-camera' ].includes(sectionId)) {
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
    const rightPanel = document.querySelector('.right-panel');
    const leftPanel = document.querySelector('.left-panel');
    
    sections.forEach(section => {
        if (section.id !== "wifi-slow") {
            section.style.display = 'none';
            
        }
        
    });
     
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        console.log('Section found:', sectionId);
        // selectedSection.style.display = 'block';
        const isVisible = selectedSection.style.display === 'block';

        const rightSections = document.querySelectorAll('.right-panel .content-section');
        rightSections.forEach(section => section.style.display = 'none');
    selectedSection.style.display = isVisible ? 'none' : 'block';
    // leftpanel.style.width = '30%'
    // leftpanel.style.display =  'block';
    // // if(sections.style.display === 'block')
        
    // rightPanel.style.width = '70%'
    // rightPanel.style.display = 'block';

    if (sectionId === 'cause1' && !isVisible) {
        leftPanel.style.width = '30%';
        rightPanel.style.width = '70%';
        rightPanel.style.display = 'block';
    } else {
        leftPanel.style.width = '100%'; // Mặc định khi không có cause1
        rightPanel.style.display = 'none';
    }
    leftPanel.style.display = 'block';
    } else {
        console.error('Section not found:', sectionId);
        
    }
    
    if (thumbnail) {
        thumbnail.style.display = 'none';
    }

    }
    // function showContent(sectionId) {
    //     const rightPanel = document.querySelector('.right-panel');
    //     const selectedSection = document.getElementById(sectionId);
    
    //     if (selectedSection) {
    //         // Kiểm tra trạng thái hiển thị hiện tại
    //         const isVisible = selectedSection.style.display === 'block';
    
    //         // Ẩn tất cả nội dung trước khi hiển thị mục mới
    //         const sections = document.querySelectorAll('.right-panel .content-section');
    //         sections.forEach(section => section.style.display = 'none');
    //         // Nếu nội dung đang hiển thị, ẩn nó. Ngược lại, hiển thị
            
    //         selectedSection.style.display = isVisible ? 'none' : 'block';
    
    //         // Đảm bảo right-panel luôn hiển thị
    //         rightPanel.style.display = 'block';
    //     }
    // }
    

