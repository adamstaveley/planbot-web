var buttons = document.querySelectorAll('button');
var containers = [];

buttons.forEach(function(button) {
    containers.push(button.parentElement);
    button.addEventListener('click', function(event) {
        switch (true) {
            case event.target == buttons[0] || event.target == buttons[0].firstChild:
                showAnswer(buttons[0], 'Cheap instant coffee maybe');
                break;
            case event.target == buttons[1] || event.target == buttons[1].firstChild:
                showAnswer(buttons[1], 'Yes, Planbot is always hungry');
                break;
            case event.target == buttons[2] || event.target == buttons[2].firstChild:
                showAnswer(buttons[2], 'Content with just the one right now');
                break;
            case event.target == buttons[3] || event.target == buttons[3].firstChild:
                showAnswer(buttons[3], 'Absolutely!');
                break;
        }
    })
})

function showAnswer(button, answer) {
    var div = button.parentElement;
    resetAnswers();
    button.remove();
    var p = document.createElement('p');
    p.style.fontSize = '10pt';
    p.style.paddingTop = '18px';
    p.style.paddingBottom = '17px';
    p.style.margin = '0';
    p.append(answer);
    div.appendChild(p);
}

function resetAnswers() {
    containers.forEach(function(div, i) {
        if (div.firstChild.nodeName == 'P') {
            div.firstChild.remove();
            div.appendChild(buttons[i]);
        } else {}
    })
}