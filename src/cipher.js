window.cipher = {
  encode: (offset, string) => {
    let solved = '';
    const stringArr = string.split('');
    stringArr.forEach(letra => {
      const asciiNum = letra.charCodeAt();
      switch (true) {
        case asciiNum >= 65 && asciiNum <= 90: {
          const code = ((asciiNum - 65 + parseInt(offset)) % 26) + 65;
          solved += String.fromCharCode(code);
          break;
        }
        case asciiNum >= 97 && asciiNum <= 122: {
          const code = ((asciiNum - 97 + parseInt(offset)) % 26) + 97;
          solved += String.fromCharCode(code);
          break;
        }
        case asciiNum === 32: {
          solved += ' ';
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
    stringArr.forEach(letra => {
      let isLower = false;

      const checkLetter = letra.charCodeAt();

      if (checkLetter >= 97 && checkLetter <= 122) {
        isLower = true;
      }

      const asciiNum = letra.toUpperCase().charCodeAt();

      const code = ((asciiNum + 65 - parseInt(offset)) % 26) + 65;

      if (isLower) {
        solved += String.fromCharCode(code).toLowerCase();
      } else if (checkLetter === 32) {
        solved += ' ';
      } else {
        solved += String.fromCharCode(code);
      }
    });
    return solved;
  }
};
