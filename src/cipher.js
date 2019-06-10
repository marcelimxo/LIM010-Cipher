window.cipher = {
  encode: (offset, string) => {
    let solved = '';
    const stringArr = string.split('');
    stringArr.forEach((letra) => {
      const asciiNum = letra.charCodeAt();
      switch (true) {
        case (asciiNum >= 65 && asciiNum <= 90):
          {
            const code = (asciiNum - 65 + parseInt(offset)) % 26 + 65;
            solved += String.fromCharCode(code);
            break;
          }
        case (asciiNum >= 97 && asciiNum <= 122):
          {
            const code = (asciiNum - 97 + parseInt(offset)) % 26 + 97;
            solved += String.fromCharCode(code);
            break;
          }
        case (asciiNum === 32):
          {
            solved += ' '
            break;
          }
        default:
          solved;
      } 
    });
    return solved;
  },
  decode: (offset, string) => {
    let solved = '';
    const stringArr = string.split('');
    stringArr.forEach((letra) => {
      const asciiNum = letra.charCodeAt();
      if (asciiNum >= 65 && asciiNum <= 90) {
        const code = (asciiNum + 65 - parseInt(offset)) % 26 + 65;
        solved += String.fromCharCode(code);

        console.log('Este es el solved ' + solved,'este es el code' code)
      } else if (asciiNum >= 97 && asciiNum <= 122) {
        const code = (asciiNum + 97 - parseInt(offset)) % 26 + 97 + 14;
        solved += String.fromCharCode(code)
      } else if (asciiNum === 32) {

        solved += ' '
      }
    });
    return solved;
  }
}