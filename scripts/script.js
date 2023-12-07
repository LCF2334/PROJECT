function menu() {
    let menu = document.getElementById('navbar');

    if(menu.classList.contains('remove-nav')) {
        menu.classList.remove('remove-nav');
    } else {
        menu.classList.add('remove-nav');
    }
}