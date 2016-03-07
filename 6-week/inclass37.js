function letterCapitalize(str){
    var strArr = str.split(' ');
    for (var i=0; i < strArr.length; i++){
    console.log(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
    }

  }

letterCapitalize('hello how are you')
