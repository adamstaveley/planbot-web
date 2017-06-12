var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    param = form.elements[0].value;
    param = param.replace(' ', '-');

    var url = 'https://api.planbot.co/lp/' + param;

    var request = new XMLHttpRequest;
    request.open('GET', url, false);
    request.send(null);

    if (request.status == '200') {
        showOutput(request.responseText);
    } else {
        console.log('Failed with status code', request.status);
      }
})

function showOutput(text) {
    var old = document.querySelector('span#index-form-output');
    if (old.hasChildNodes()) {
        old.removeChild(old.children[0]);
    } else {
    }

    var p = document.createElement('p');
    p.classList.add('index-lp-json');
    p.style.fontFamily='monospace';
    p.style.fontSize='10pt';
    p.append(text);
    old.appendChild(p);
}