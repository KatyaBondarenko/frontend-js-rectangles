

function areInterseсted (firstRec , secondRec){

    var firstRec,
        secondRec,
        firstBottom,
        firstRight,
        secondBottom,
        secondRight,
        result;


    firstBottom = firstRec.top  + firstRec.height;
    firstRight = firstRec.left  + firstRec.width;
    secondBottom = secondRec.top + secondRec.height;
    secondRight = secondRec.left  + secondRec.width;



    if ((firstRec.left > secondRec.left)&&(secondRight > firstRec.left)&&(firstRec.top > secondRec.top)&&(firstRec.top < secondBottom)){

        result = true;
    }
    else  if ((firstRec.left > secondRec.left)&&(secondRight > firstRec.left)&&(firstBottom > secondRec.top)&&(firstBottom < secondBottom) ){

        result = true;
    }
    else if ((firstRight > secondRec.left)&&(secondRight > firstRight)&&(firstRec.top > secondRec.top)&&(firstRec.top < secondBottom)){

        result = true;
    }
    else if ((firstRight > secondRec.left)&&(secondRight > firstRight)&&(firstBottom > secondRec.top)&&(firstBottom < secondBottom)){

        result = true;
    }

    else if ((firstRec.top === secondRec.top) && (firstRec.left === secondRec.left) && (firstRec.width === secondRec.width) && (firstRec.height === secondRec.height)){

        result = true;
    }
    else if ((firstRec.top < secondRec.top) && (firstRec.left < secondRec.left) && (firstRec.width > secondRec.width) && (firstRec.height > secondRec.height)){

        result = true;
    }

    else {

        result = false;
    }


    return result;

}


console.log(areInterseсted({
    left: 0,
    top: 0,
    width: 20,
    height: 20
}, {
    left: 5,
    top: 5,
    width: 10,
    height: 10
}));






function filterVisible (){



    }