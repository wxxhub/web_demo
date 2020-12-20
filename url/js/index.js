window.onload=function(){
    var url = location.href;
    var str = url.split("?")[1];
    var items = str.split("&");
    var map = new Map();
    items.forEach(function(value) {
        var param = value.split("=");
        var paramName = param[0].toLocaleLowerCase();
        var paramValue = param[1].toLocaleLowerCase();
        map.set(paramName, paramValue);
    }) 

    if (map.get('service')) {
        window.location.href = '../find/index.html?' + str;
    }
}