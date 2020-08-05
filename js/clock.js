import time2 from '../data/time.js'

function renderClock(selector) {
    const DOM = document.querySelector(selector);
    let HTML ='';

    const time3 = time2();
    let time = [493, 9, 23, 34];
    
    time[0] = time3.days;
    time[1] = time3.hours;
    time[2] = time3.minutes;
    time[3] = time3.seconds;

    const label = ['days', 'hours', 'minutes', 'seconds'];

    for (let i = 0; i < time.length; i++) {
        HTML += `<div class="time">
                    <div class="value">${time[i]}</div>
                    <div class="label">${label[i]}</div>
                </div>`
    }
    return DOM.innerHTML = HTML;
}
export default renderClock;