window.cipher = {
  encode: (offset, string) => {

    let solved = '';

    const stringArr = string.split('');
    
    stringArr.forEach((letra) => {
      const asciiNum = letra.charCodeAt();
      if(asciiNum >= 65 && asciiNum <= 90){
        const code = (asciiNum - 65 + parseInt(offset)) % 26 + 65;
        solved += String.fromCharCode(code)
      }
      
      
      
      /*  console.log('este es code ' + code)
        console.log('este es nCode ' + nCode)  */
      
      else if(asciiNum >= 97 && asciiNum <= 122){
        const code = (asciiNum - 97 + parseInt(offset)) % 26 + 97;
        solved += String.fromCharCode(code)        
      }else{ /* 
      
        //QUIERO QUE ME DEVUELVA EL ESPACIO TAL CUAL

      solved+=   */}
    }) 


    return solved;
  },
  decode: (offset, string) => { 
    
    let solved = '';

    const stringArr = string.split('');
    
    stringArr.forEach((letra) => {
      const asciiNum = letra.charCodeAt();
      if(asciiNum >= 65 && asciiNum <= 90){
        const code = (asciiNum + 65 - parseInt(offset)) % 26 + 65;
        const nCode =- code;
        
        solved += String.fromCharCode(code);
        console.log('este es code ' + code)
        console.log('este es nCode ' + nCode) 

        console.log('ESTE ES CODE: ' + code,'ESTE ES nCODE: ' + nCode)
      }/* else if(asciiNum >= 97 && asciiNum <= 122){
        const code = (asciiNum + 97 + parseInt(offset)) % 0 - 97;
        solved += String.fromCharCode(code)  */      
      }
    )

    return solved;

  }

}
