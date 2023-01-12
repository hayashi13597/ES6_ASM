let openMenuMobile = document.getElementById('menu_header_mobile');
        let menuMobile = document.getElementById('menu-header-mobile-select');
        let closeMenuMobile = document.getElementById('clear-menu-mobile');
        openMenuMobile.onclick = function(){
            menuMobile.style.display = 'block';
        }

        closeMenuMobile.onclick = function(){
            menuMobile.style.display = 'none';
        }