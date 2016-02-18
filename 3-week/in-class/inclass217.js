function helloWorld(lang){
  if (lang === 'cn' || lang === '中文'){
    console.log("世界好！！！");
  }
  else if (lang === "jp"){
    console.log("こんにちは世界!!!");
  }
  else if (lang === "hindi"){
    console.log("नमस्ते दुनिय!!!");
  }
  else if (lang === "kr"){
    console.log("안녕하세요 세계!!!");
  }
  else if (lang === "ru"){
    console.log("Привет мир!!!");
  }
  else if (lang === "en"){
    console.log("Hello world, english is boring");
  }
  else{
    console.log("pick another language");
  }
}

helloWorld("cn");
helloWorld("jp");
helloWorld("hindi");
helloWorld("kr");
helloWorld("ru");
helloWorld("en");
helloWorld("fr");
