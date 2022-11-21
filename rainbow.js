const piecewise_ = i => i < 512 ? Math.min(i, 255) : Math.max(0, 768 - i);
const mod = (a, b) => a > 0 ? a % b : (a % b) + b;
const piecewise = x => piecewise_(mod(x, 1024));

let c = 0;
const div = document.getElementById('rainbow');

setInterval(() => {
    c++;
    const r = piecewise(c);
    const g = piecewise(c - 256);
    const b = piecewise(c - 512);

    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 50);
