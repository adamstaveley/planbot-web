function cascade(cnt) {
    var content = document.getElementById(cnt);
    if (!content.style.display || content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
