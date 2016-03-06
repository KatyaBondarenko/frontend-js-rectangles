

function areInterseсted (firstRec , secondRec) {

    var firstRec,
        secondRec,
        firstRecBottom,
        firstRecRight,
        secondRecBottom,
        secondRecRight,
        result,
        horizontal,
        vertical;


    firstRecBottom = firstRec.top + firstRec.height;
    firstRecRight = firstRec.left + firstRec.width;
    secondRecBottom = secondRec.top + secondRec.height;
    secondRecRight = secondRec.left + secondRec.width;

    if (firstRec.left < secondRec.left) {
        horizontal = firstRecRight > secondRec.left;
    }
    else {
        horizontal = firstRec.left < secondRecRight;
    }

    if (firstRec.top < secondRec.top) {
        vertical = firstRecBottom > secondRec.top;
    }
    else {
        vertical = firstRec.top < secondRecBottom;
    }

    result = horizontal && vertical;

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

function filterVisible (parentRectangle, arrayRec) {

    function newRectangles(rectangle) {

        if (   rectangle.width
            && rectangle.height
            && areInterseсted(parentRectangle, rectangle)
        ) {
            return true;
        }
        else {
            return false;
        }
    }

    var intersectedRectangls = arrayRec.filter(newRectangles);

    return intersectedRectangls;

}

console.log(filterVisible({
    left: 0, top: 0,
    width: 20, height: 20
}, [
    {
        left: 10, top: 10,
        width: 25,  height: 25
    },
    {
        left: 15, top: 10,
        width: 20,  height: 20
    },
    {
        left: 10, top: 10,
        width: 0,  height: 25
    },
    {
        left: 100, top: 10,
        width: 5,  height: 5
    }
]));

















