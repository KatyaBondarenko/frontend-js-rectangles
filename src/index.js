

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
        secondRight
        result = true;


    firstBottom = firstRec.top + firstRec.width + firstRec.height;
    firstRight = firstRec.left + firstRec.height + firstRec.width;
    secondBottom = secondRec.top + secondRec.width + secondRec.height;
    secondRight = secondRec.left + secondRec.height + secondRec.width;



    if (firstRec.left < secondRight || firstRight > secondRec.left || firstBottom < secondRec.top || firstRec.top > secondBottom) {



        result = false;

    }

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

console.log(result);

    function filterVisible (){



    }