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

    it('Debe retornar "H" cuando ingrese la letra "A" con el offset 33',()=>{
      assert.equal(cipher.encode(33,'A'),'H')
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

    it('deberia retornar "Hola Lulu" para "Ovsh Sbsb" con offset 33',()=>{
      assert.equal(cipher.decode(33,'Ovsh Sbsb'),'Hola Lulu')
  });

})})