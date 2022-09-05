let word = `Im Sherif Anwar A Front End Developer Based in Egypt `;
let count = 0;
let x = setInterval(() => {
    if (count >= word.length) {
        clearInterval(x);
    } else {
        document.querySelector('.info p').innerHTML += word[count];
        count++;
    }
}, 100);