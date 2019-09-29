const redCirc = new mojs.Shape({
        //isShowStart: true,
        left: 0,
        top: 0,
        stroke: 'red',
        fill: 'none',
        radius: 15,
        strokeWidth: 10,
        duration: 2000
    })
    .then({
        strokeWidth: 0,
        scale: {
            to: 2,
            easing: 'sin.in'
        },
        duration: 500
    });


const sparks = new mojs.Burst({
    top: 0,
    left: 0,
    radius: {
        0: 50
    },
    angle: {
        0: 90
    },
    count: 30,
    children: {
        shape: 'cross',
        points: 15,
        stroke: 'white',
        fill: 'none',
        duration: 300
    }
});



////-----------------

document.addEventListener('click', function (e) {
    redCirc
        .tune({
            x: e.pageX,
            y: e.pageY
        })
        .replay();

    sparks
        .tune({
            x: e.pageX,
            y: e.pageY
        })
        .replay();
});