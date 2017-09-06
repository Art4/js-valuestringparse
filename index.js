exports.valuestringparse = function(input) {
    var input = input.replace(/^\//, '').replace(/\/$/, '');
    var parts = input.split('/');
    if (parts.length%2 !== 0) {
        parts.pop();
    }
    var data = {};
    for (var i = 0; i < parts.length; i = i+2) {
        var key = parts[i];
        var value = parts[i+1];
        data[key] = value;
    }
    return data;
}
