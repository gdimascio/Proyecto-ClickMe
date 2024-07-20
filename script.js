
// --------------------------------------------------------------------------------------------//
// calculate the distance between the cursor and the button
function distCurs(buttonRect){
    return Math.sqrt(
        Math.pow(bttCntrX(buttonRect) - cursorX, 2) +
        Math.pow(bttCntrY(buttonRect) - cursorY, 2)
    );
}
// calculate the button center
function bttCntrX(buttonRect){return buttonRect.left + (buttonRect.width / 2);}
function bttCntrY(buttonRect){return buttonRect.top + (buttonRect.height / 2);}

// calculate the angle between the cursor and the button center
function bttAng(buttonRect){
    return Math.atan2(bttCntrY(buttonRect) - cursorY, bttCntrX(buttonRect) - cursorX);
}
// calculate the displacement values
function bttDispX(buttonRect, distance){
    return Math.cos(bttAng(buttonRect)) * distance;
}
function bttDispY(buttonRect, distance){
    return Math.sin(bttAng(buttonRect)) * distance;
}

