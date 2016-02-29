

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
        result;


    firstBottom = firstRec.top  + firstRec.width;
    firstRight = firstRec.left  + secondRec.height;
    secondBottom = secondRec.top + firstRec.width;
    secondRight = secondRec.left  + secondRec.height;



    if ((firstRec.left>secondRec.left)&&(secondRight>firstRec.left)&&(firstRec.top>secondRec.top)&&(firstRec.top<secondBottom)){

        result = true;
    }
    else  if ((firstRec.left>secondRec.left)&&(secondRight>firstRec.left)&&(firstBottom>secondRec.top)&&(firstBottom<secondBottom) ){

        result = true;
    }
    else if ((firstRight>secondRec.left)&&(secondRight>firstRight)&&(firstRec.top>secondRec.top)&&(firstRec.top<secondBottom)){

        result = true;
    }
    else if ((firstRight>secondRec.left)&&(secondRight>firstRight)&&(firstBottom>secondRec.top)&&(firstBottom<secondBottom)){

        result = true;
    }

    else {

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

console.log(areInterseсted());






function filterVisible (){



    }