function trocarSwitch() {
    const html = document.querySelector('html');
    const isLight = html.classList.toggle('light');

    const img = document.querySelector('#profile img');
    if (isLight) {
        img.src = 'assets/avatar-light.png';
    } else {
        img.src = 'assets/avatar.png';
    }
}
