var result = ''
for (var i = 1; i <= 9; i++){
    for (var j = 1; j <= i; j++){
        result = result + `${i}*${j}=` + i * j + ' ';
    }
    console.log(result);
    result = '';
}