function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('zh-CN');
    document.getElementById('datetime').textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 1000); 