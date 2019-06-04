const checkLogin = document.getElementById('checkLogin');
const pswrd = document.getElementById('pswrd');
const form = document.getElementById('form');

const correct_pswrd = 'LABORATORIA';

//contador de errores
let fails = 0;

const check = (e) => {
  //con preventDefault evito que el form haga cosas por defecto en el submit, como por ejemplo, agregar los valores en la url
  e.preventDefault()

  if (pswrd.value.length > 0) {
    if (pswrd.value === correct_pswrd) {
      const loginContainer = document.getElementById('loginContainer')
      loginContainer.remove();

      const description = document.getElementById('description')
      description.classList.add('hide')

      const opt = document.getElementById('op')

      opt.classList.replace('hide', 'show')

    } else {

      pswrd.classList.add('error')

      if (fails < 2) {
        // si tiene menos de 3 intentos entra aqui
        
        const error_pswrd = document.getElementById('error_pswrd');
            error_pswrd.classList.replace('hide', 'show');

        // borramos la data del input
        pswrd.value = ''

        // sumamos +1 al contador de errores
        fails++

      } else {
        // al tercer fallo entra aqui
        const modal = document.getElementById('error')
        const overlay = document.getElementById('overlay')

        modal.classList.replace('hide', 'show')
        overlay.classList.replace('hide', 'show')
      }
    }
  } else { 
}
}

form.addEventListener('submit', check);

//opciones

const options = document.getElementById('options');

options.addEventListener('change', (e) => {
   if(e.target.value === 'Cifrar'){
     console.log('hola');
   } else {
     console.log('gracias =)');}
})


const range = document.querySelector('#myRange');
const field = document.getElementById('num1');

range.addEventListener('input', (e) => {
  field.value = e.target.value;
});
field.addEventListener('input', (e) => {
  range.value = e.target.value;
});