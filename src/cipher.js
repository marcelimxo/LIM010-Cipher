window.cipher = {
  encode: (offset,string) => {

    let solved = '';

    for(let i=0; i<string.length; i++){

      const asciiNum = string[i].charCodeAt();
      if(asciiNum >= 65 && asciiNum <= 90){
        solved+= String.fromCharCode(asciiNum + offset)
      }

    } return solved;

    /*desplazamiento hacia la derecha*/
    /* Acá va tu código */
  },
  decode: (offset,string) => {
    /*desplazamiento hacia la izquierda*/
    /* Acá va tu código */
  }
};
