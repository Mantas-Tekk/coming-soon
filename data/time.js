function time() {

    let seconds = 1000;
    let minutes = 1000 * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d1 = new Date('2021-1-1 00:00:00');
    let t1 = d1.getTime();

    let d2 = new Date();
    let t2 = d2.getTime();
    let s = t1 - t2;

    // days
    let y1 = Math.floor((s / days));
    let y2 = Math.floor((s % days) / hours);
    let y3 = Math.floor((s % hours) / minutes);
    let y4 = Math.floor((s % minutes) / seconds);

    // console.log("Days:" + y1 + " | ");

    let timeObj = {
        days: y1,
        hours: y2,
        minutes: y3,
        seconds: y4, 
    };


    // console.log(s);

    return timeObj;
}

export default time;