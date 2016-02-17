function helloWorld(lang){
  if (lang === 'cn'){
    console.log("世界好！！！");
  }
  else if (lang === "jp"){
    console.log("こんにちは世界!!!");
  }
  else if (lang === "hindi"){
    console.log("नमस्ते दुनिय!!!");
  }
  else{
    console.log("pick another language");
  }
}

helloWorld("cn");
helloWorld("jp");
helloWorld("hindi");
