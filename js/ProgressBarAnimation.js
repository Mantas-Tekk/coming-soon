

function progressBarAnimation(index, progresValue, )
{
    let a = progresValue/100;
    let value = 0;
    let cssRule = `@keyframes label${index} {`;
    for(let i = 1; i < 101; i++ )
    {
        value = a + value;  
        cssRule += `${i}% {content: "${Math.floor(value)}"}`;
    }
    cssRule += `}`;

    var style = document.createElement('style');
    style.innerHTML = `#value${index}:before {
                                content: "${progresValue}";
                                animation: label${index} 2s;
                                }
                        ${cssRule}
                                `;
    document.body.appendChild(style);
}
export default progressBarAnimation;

