
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


// move the button away from the cursor
document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;

    // get the bounding rect of the button
    let buttonRect = button.getBoundingClientRect();

    // calculate the distance between the cursor and the button
    let distance = distCurs(buttonRect);

    // check if the cursor is within 300px of the button's center
    if (distance <= 200 && distance <= 350) {
        button.style.transform = `translate(
            ${bttDispX(buttonRect, 200)}px, 
            ${bttDispY(buttonRect, 200)}px
        )`;
    } else {
        if(distance >= 400){
            button.style.transform = 'translate(0, 0)';
        }
        // move the button back to its original position
    }

});

