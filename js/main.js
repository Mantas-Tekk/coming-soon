import socials from '../data/socials.js';
import renderIcons from './rendericons.js';
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

setInterval (updateTime, 1000);


