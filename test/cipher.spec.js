describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=> {
      assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG')
    })

    it('Debe retornar " " cuando ingrese " " con el offset 26',()=>{
      assert.equal(cipher.encode(26,' '),' ')
    })

    it('Debe retornar "Bb" si ingresa "A.a" con offset 1',()=>{
      assert.equal(cipher.encode(1,'A.a'),'Bb')
    })

    it('deberia retornar "Ovsh Sbsb" para "Hola Lulu" con offset 33',()=>{
      assert.equal(cipher.encode(33,'Hola Lulu'),'Ovsh Sbsb')
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode(33,'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });

    it('Debe retornar " " cuando ingrese " " con el offset 26',()=>{
      assert.equal(cipher.decode(26,' '),' ')
    })

    it('deberia retornar "Hola Lulu" para "Ovsh Sbsb" con offset 33',()=>{
      assert.equal(cipher.decode(33,'Ovsh Sbsb'),'Hola Lulu')
  });

})})