const container = document.getElementById('container');
const overlaycon = document.getElementById('overlaycontainer');
const overlaybutton = document.getElementById('overlaybuttn');

overlaybutton.addEventListener('click', () => {
    container.classList.toggle('rightpanel-active');
});

