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
        selectedSection.style.width = '100%';

}
}
// 

function toggleExpand() {
    const allContent1 = document.querySelectorAll('.content-section1');
    const allContent = document.querySelectorAll('.content-section');
    const button = document.getElementById('toggle-btn');

    const visibleContent1 = Array.from(allContent1).find(el => el.style.display !== 'none');
    let visibleContent = Array.from(allContent).find(el => el.style.display !== 'none');

    if (!visibleContent1) {
        console.error("Không tìm thấy content-section1 đang hiển thị!");
        return;
    }

    if (button.dataset.expanded === "false" || !button.dataset.expanded) {
        // Ẩn phần đang hiển thị và lưu lại ID của nó
        if (visibleContent) {
            visibleContent.style.display = 'none';
            button.dataset.lastHidden = visibleContent.id; // Lưu ID của phần bị ẩn
        }

        visibleContent1.style.width = '100%';
        button.textContent = '⇋';
        button.dataset.expanded = "true";
    } else {
        // Lấy lại phần content-section đã bị ẩn trước đó
        let lastHiddenId = button.dataset.lastHidden;
        let lastHiddenContent = document.getElementById(lastHiddenId);

        if (lastHiddenContent) {
            lastHiddenContent.style.display = 'block';
            lastHiddenContent.style.width = '50%';
        }

        visibleContent1.style.width = '50%';
        button.textContent = '⇆';
        button.dataset.expanded = "false";
    }
}

document.getElementById('toggle-btn').addEventListener('click', toggleExpand);

mediumZoom('.zoomable');

// Add responsive handling
