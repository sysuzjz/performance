var tr = null;
$(document).on('click', '#btn-dom-submit', function() {
    $(this).addClass('disabled');
    var times = $('#dom-times').val() || 0;
    $('#dom-container').replaceWith('<ul id="dom-container"></ul>');
    tr = $('<tr><td>' + times + '</td></tr>').appendTo('#record');
    appendDomNotOptim(times);
});

function appendDomNotOptim(times) {
    var domContainer = document.querySelector('#dom-container'),
        i = 0;
    domContainer.innerHTML = "";
    var startTime = Date.now();
    for (i = 0; i < times; i++) {
        var li = document.createElement('li'),
            randNum = Math.random(),
            text = document.createTextNode('测试测试测试');
        li.appendChild(text);
        domContainer.appendChild(li);
    }
    setTimeout(function() {
        var endTime = Date.now(),
            time = endTime - startTime;
        var td = $('<td>' + time + '</td>');
        tr.append(td);
        appendDomOptim1(times);
    }, 1);
}

function appendDomOptim1(times) {
    var domContainer = document.querySelector('#dom-container'),
        i = 0;
    domContainer.innerHTML = "";
    var startTime = Date.now();
    var htmlArr = [];
    for (i = 0; i < times; i++) {
        htmlArr.push('<li>');
        htmlArr.push(Math.random());
        htmlArr.push('</li>');
    }
    domContainer.innerHTML = htmlArr.join('');
    setTimeout(function() {
        var endTime = Date.now(),
            time = endTime - startTime;
        tr.append($('<td>' + time + '</td>'));
        appendDomOptim2(times);
    }, 1);
}

function appendDomOptim2(times) {
    var domContainer = document.querySelector('#dom-container'),
        i = 0;
    domContainer.innerHTML = "";
    var startTime = Date.now();
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'dom-container');
    for (i = 0; i < times; i++) {
        var li = document.createElement('li'),
            randNum = Math.random(),
            text = document.createTextNode('测试测试测试');
        li.appendChild(text);
        ul.appendChild(li);
    }
    domContainer.parentNode.replaceChild(ul, domContainer);
    setTimeout(function() {
        var endTime = Date.now(),
            time = endTime - startTime;
        tr.append($('<td>' + time + '</td>'));
        $('#btn-dom-submit').removeClass('disabled');
    }, 1);
}