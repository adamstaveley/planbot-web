var form = document.querySelector('form');
form.preventDefault;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var params = [];
    for (var i = 0; i < 3; i++) {
        param = form.elements[i].value;
        param = param.replace(' ', '-');
        if (param) {
            params.push(param);
        } else {
          }
    }

    var url = 'https://api.planbot.co/' + params.join('/');

    var request = new XMLHttpRequest;
    request.open('GET', url, false);
    request.send(null);

    if (request.status == '200') {
        showOutput(request.responseText);
    } else {
        console.log('Failed with status code', request.status)
      }
})

function showOutput(text) {
    var placeholder = document.querySelector('span#placeholder');
    placeholder.removeChild(placeholder.children[0]);
    var p = document.createElement('p');
    p.classList.add('api');
    p.style.fontFamily='monospace';
    p.style.fontSize='10pt';
    p.append(text);
    placeholder.appendChild(p);
}