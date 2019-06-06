window.cipher = {
  encode: (offset, string) => {

    let solved = '';

    const stringArr = string.split('');
    
    stringArr.forEach((letra) => {
      const asciiNum = letra.charCodeAt();
      if(asciiNum >= 65 && asciiNum <= 90){
        const code = (asciiNum - 65 + parseInt(offset)) % 26 + 65;
        solved += String.fromCharCode(code)
      }else if(asciiNum >= 97 && asciiNum <= 122){
        const code = (asciiNum - 97 + parseInt(offset)) % 26 + 97;
        solved += String.fromCharCode(code)        
      }
    })

    return solved;


    /* 
    for(let i = 0; i < string.length; i++){
      const asciiNum = string[i].charCodeAt();
      const code = asciiNum + offset % 26
      solved += String.fromCharCode(code)
    }
    */
  },
  decode: (offset, string) => {
    /*desplazamiento hacia la izquierda*/
    /* Acá va tu código */
  }
};
