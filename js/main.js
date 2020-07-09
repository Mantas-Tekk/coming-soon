import socials from '../data/socials.js';
import renderIcons from './renderIcons.js';
import renderClock from './clock.js';

renderIcons( '.icons-list', socials );

// updateTime();

function updateTime ()
{
    renderClock( '.clock');
}

setInterval (updateTime, 1000);
