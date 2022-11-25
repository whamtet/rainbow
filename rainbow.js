const piecewise_ = i => i < 768 ? Math.min(i, 255) : Math.max(0, 1024 - i);
const piecewise = x => piecewise_(x % 1536);

let c = 0;
const div = document.getElementById('rainbow');

setInterval(() => {
    c++;
    const r = piecewise(c);
    const g = piecewise(c + 512);
    const b = piecewise(c + 1024);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 50);
