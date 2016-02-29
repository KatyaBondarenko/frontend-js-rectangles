

function areInterseсted (firstRec , secondRec){


    var firstRec = {
        top: undefined,
        left: undefined,
        width: undefined,
        height: undefined
    }

    var secondRec = {
        top: undefined,
        left: undefined,
        width: undefined,
        height: undefined
    }


    var firstBottom,
        firstRight,
        secondBottom,
        secondRight,
        result = true;


    firstBottom = firstRec.top  + firstRec.width;
    firstRight = firstRec.left  + secondRec.height;
    secondBottom = secondRec.top + firstRec.width;
    secondRight = secondRec.left  + secondRec.height;





    return result;

}


areInterseсted({
    left: 0,
    top: 0,
    width: 20,
    height: 20
}, {
    left: 10,
    top: 10,
    width: 25,
    height: 25
});

console.log(areInterseсted());






function filterVisible (){



    }