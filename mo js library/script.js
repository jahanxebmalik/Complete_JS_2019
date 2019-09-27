const redCirc = new mojs.Shape({
        //isShowStart: true,
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
    }).play();