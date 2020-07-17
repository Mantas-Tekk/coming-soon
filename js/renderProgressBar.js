import progressBarAnimation from '../js/ProgressBarAnimation.js';

function renderProgressBars(selector, data) {

    progressBarAnimation();

    // console.log("Hello?", data);
    if (typeof selector !== "string" || selector.length < 1) {
        return console.error("ERROR: Have to pass not empty string as a selector value");
    }

    const DOM = document.querySelector(selector);

    if (!DOM) {
        return console.error("ERROR: Selector does not exist");
    }

    if (typeof data !== "object") {
        return console.error("ERROR: data has to be an object type");
    }

    if (!Array.isArray(data)) {
        data = [data];
    }

    const size = data.length;
    let HTML = ``;

    for (let i = 0; i < size; i++) {
        const progrseBar = data[i];

        HTML += `<div class="progress-bar">
                    <div class="top">
                        <div class="label">${progrseBar.title}</div>
                        <div id="value${i}" class="value"></div>
                    </div>
                    <div class="bar">
                        <div class="fill" style="width: ${progrseBar.value}%;">
                            <div class="loader"></div>
                        </div>
                    </div>
                </div>`;
        progressBarAnimation(i, progrseBar.value, );
    }

    return DOM.insertAdjacentHTML('beforeEnd', HTML);
}

export default renderProgressBars;