
window.dataList = [
    'test1',
    'test2',
    'test3',
];

function findData() {
    var test = document.getElementById('test');
    var input = document.getElementById('findInput');
    var dataList = document.getElementById('dataUl');

    // test.innerText = input.value;
    // alert(input.value);
    var data = input.value;
    var html = '';
    var reg = new RegExp(data, 'i');

    window.dataList.forEach(function (value){
        // 不区分大小写
        if (value.toLocaleLowerCase().match(data.toLocaleLowerCase())) {
            html += __createRow(value);
        }
    });

    dataList.innerHTML = html;
}

function __createRow(data) {
    var row = '<li>' + data + '</li>';
    return row;
}

function matchDatas(data) {
    dataList.forEach(element => {
        
    });
}