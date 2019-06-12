window.cipher = {
	encode: (offset, string) => {
		let solved = '';
		const stringArr = string.split('');
		stringArr.forEach((letra) => {
			const asciiNum = letra.charCodeAt();
			switch (true) {
				case asciiNum >= 65 && asciiNum <= 90: {
					const code = (asciiNum - 65 + parseInt(offset)) % 26 + 65;
					solved += String.fromCharCode(code);
					break;
				}
				case asciiNum >= 97 && asciiNum <= 122: {
					const code = (asciiNum - 97 + parseInt(offset)) % 26 + 97;
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
	decodeDeprecated: (offset, string) => {
		let solved = '';
		const stringArr = string.split('');
		stringArr.forEach((letra) => {
			const asciiNum = letra.charCodeAt();
			if (asciiNum >= 65 && asciiNum <= 90) {
				const code = (asciiNum + 65 - parseInt(offset)) % 26 + 65;
				solved += String.fromCharCode(code);
			} else if (asciiNum >= 97 && asciiNum <= 111) {
				const code = (asciiNum + 97 - parseInt(offset)) % 26 + 97 - 12;
				solved += String.fromCharCode(code);
			} else if (asciiNum >= 111 && asciiNum <= 122) {
				const code = (asciiNum + 97 - parseInt(offset)) % 26 + 97 - 12 + 26;
				// eslint-disable-next-line no-console
				console.log('este es el numero ascii ' + asciiNum, 'y ese es el numero de la formula ' + code);
				solved += String.fromCharCode(code);
			} else if (asciiNum === 32) {
				solved += ' ';
			}
		});
		return solved;
	},
	decode: (offset, string) => {
		let solved = '';
		const stringArr = string.split('');
		stringArr.forEach((letra) => {
			let isLower = false

			const check_letter = letra.charCodeAt()
			
			if (check_letter >= 97 && check_letter <= 122) {
				isLower = true
			}
			
			const asciiNum = letra.toUpperCase().charCodeAt();

			const code = (asciiNum + 65 - parseInt(offset)) % 26 + 65;

			if(isLower){
				solved += String.fromCharCode(code).toLowerCase()
			}else if(check_letter === 32){
				solved += ' ';
			}else{
				solved += String.fromCharCode(code)
			}
		});
		return solved;
	}
};
