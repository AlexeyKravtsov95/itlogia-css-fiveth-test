document.getElementById('burger').onclick = () => {
    document.getElementById('menu').classList.add('open');
    console.log("Open menu")
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})