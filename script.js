const btn = document.querySelector('#btn');
const title = document.querySelector('#advice');
const text = document.querySelector('#text');

btn.addEventListener('click', async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const advice = await res.json();
    text.innerHTML = advice.slip.advice;
    title.innerHTML = `ADVISE #${ advice.slip.id }`
})