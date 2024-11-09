"use strict";
{
    function calculateShapeArea(shape) {
        if ("radius" in shape) {
            return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
        }
        else {
            return shape.width * shape.height;
        }
    }
    //circle
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    //rectangle
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
