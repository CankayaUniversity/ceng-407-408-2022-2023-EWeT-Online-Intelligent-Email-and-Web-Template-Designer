﻿function dragAndDrop(className) {
    const position = { x: 0, y: 0 }

    interact(className).draggable({
        listeners: {
            start(event) {
                console.log(event.type, event.target)
            },
            move(event) {
                position.x += event.dx
                position.y += event.dy

                event.target.style.transform =
                    `translate(${position.x}px, ${position.y}px)`
            },
        }, modifiers: [
            interact.modifiers.restrictRect({
                restriction: '.main',
                endOnly: true
            })]
    })
    
};
function dropZone(dropTarget) {
    interact(dropTarget)
        .dropzone({
            ondrop: function (event) {
                alert(event.relatedTarget.id
                    + 'was dropped into'
                    + event.target.id)
            }
        })
        .on('dropactivate', function (event) {
            event.target.classList.add('drop-activated')
        })

};

function container(dropTarget_1) {
    interact(dropTarget_1)
        .on('dropactivate', function (event) {
            event.target.classList.add('drop-activated')
        })

}
    