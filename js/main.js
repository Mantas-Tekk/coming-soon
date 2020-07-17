import socials from '../data/ /socials.js';
import renderIcons from './renderIcons.js';
import renderClock from './clock.js';
import renderProgressBars from './renderProgressBar.js';
import leftProgressBars from '../data/progresBarData.js';

renderIcons( '.icons-list', socials );
renderProgressBars('.column-left', leftProgressBars);

updateTime();

function updateTime ()
{
    renderClock( '.clock');
}
console.log("Hello console user");

// If you want to see clock is working
// setInterval (updateTime, 1000);


