//const checkLogin = document.getElementById('checkLogin');
const pswrd = document.getElementById("pswrd");
const form = document.getElementById("form");
const correctPswrd = "LABORATORIA";

const opt = document.getElementById("op");
const encodeSection = document.getElementById("cifrando");
const decodeSection = document.getElementById("descifrando");
const final = document.getElementById("final");

//contador de errores
let fails = 0;
const check = e => {
  //con preventDefault evito que el form haga cosas por defecto en el submit, como por ejemplo, agregar los valores en la url
  e.preventDefault();
  if (pswrd.value.length > 0) {
    if (pswrd.value === correctPswrd) {
      const loginContainer = document.getElementById("loginContainer");
      loginContainer.remove();
      const description = document.getElementById("description");
      description.classList.add("hide");
      opt.classList.replace("hide", "show");
    } else {
      pswrd.classList.add("error");

      if (fails < 2) {
        // si tiene menos de 3 intentos entra aqui

        const errorPswrd = document.getElementById("error-pswrd");
        errorPswrd.classList.replace("hide", "show");

        // borramos la data del input
        pswrd.value = "";

        // sumamos +1 al contador de errores
        fails++;
      } else {
        // al tercer fallo entra aqui
        const modal = document.getElementById("error");
        const overlay = document.getElementById("overlay");

        modal.classList.replace("hide", "show");
        overlay.classList.replace("hide", "show");
      }
    }
  }
};

form.addEventListener("submit", check);

// mostrar y ocultar contraseña

const eye = document.getElementById("eye");

const togglePswrd = () => {
  eye.classList.toggle("eyeAct");

  pswrd.type === "password" ? (pswrd.type = "text") : (pswrd.type = "password");
};

eye.addEventListener("click", togglePswrd);

//opciones
const options = document.getElementById("options");
options.addEventListener("change", e => {
  if (e.target.value === "Cifrar") {
    encodeSection.classList.replace("hide", "show");
    decodeSection.classList.replace("show", "hide");
    textoCifrar.value = "";
    textoResultadoCifrar.value = "";
    rangeCifrar.value = 1;
    fieldCifrar.value = 1;
  } else if (e.target.value === "Descifrar") {
    decodeSection.classList.replace("hide", "show");
    encodeSection.classList.replace("show", "hide");
    textoDescifrar.value = "";
    textoResultadoDescifrar.value = "";
    rangeDescifrar.value = 1;
    fieldDescifrar.value = 1;
  }
});

// sección cifrar

/* slider */

const rangeCifrar = document.querySelector("#rangeCifrar");
const fieldCifrar = document.getElementById("numCifrar");

rangeCifrar.addEventListener("input", e => {
  fieldCifrar.value = e.target.value;
});
fieldCifrar.addEventListener("input", e => {
  rangeCifrar.value = e.target.value;
});

/* Cifrando y mostrando */

const textoCifrar = document.getElementById("textoCifrar");
const textoResultadoCifrar = document.getElementById("textoResultadoCifrar");

const btnCifrar = document.getElementById("cifrar");
btnCifrar.addEventListener("click", () => {
  const textoCifrado = window.cipher.encode(
    fieldCifrar.value,
    textoCifrar.value
  );
  textoResultadoCifrar.value = textoCifrado;
});

/* reset en cifrar */

const btnResetCifrar = document.getElementById("resetCifrar");
btnResetCifrar.addEventListener("click", () => {
  textoCifrar.value = "";
  rangeCifrar.value = 1;
  fieldCifrar.value = 1;
});

/* copiar en cifrar */

const btnCopiarCifrado = document.getElementById("copiarCifrado");
btnCopiarCifrado.addEventListener("click", () => {
  textoResultadoCifrar.select();
  document.execCommand("Copy");

  const copiar = document.getElementById("copiarCifrado-span");
  copiar.classList.toggle("hide");
});

/* boton salir en cifrar */

const salirCifrar = document.getElementById("salirCifrar");
salirCifrar.addEventListener("click", () => {
  encodeSection.classList.replace("show", "hide");
  opt.classList.replace("show", "hide");
  final.classList.replace("hide", "show");
});

// sección descifrar

/* slider */

const rangeDescifrar = document.querySelector("#rangeDescifrar");
const fieldDescifrar = document.getElementById("numDescifrar");

rangeDescifrar.addEventListener("input", e => {
  fieldDescifrar.value = e.target.value;
});
fieldDescifrar.addEventListener("input", e => {
  rangeDescifrar.value = e.target.value;
});

/* Descifrando y mostrando */

const textoDescifrar = document.getElementById("textoDescifrar");
const textoResultadoDescifrar = document.getElementById(
  "textoResultadoDescifrar"
);

const btnDescifrar = document.getElementById("descifrar");
btnDescifrar.addEventListener("click", () => {
  const textoDescifrado = window.cipher.decode(
    fieldDescifrar.value,
    textoDescifrar.value
  );

  textoResultadoDescifrar.value = textoDescifrado;
});

/* reset en descifrar */

const btnResetDescifrar = document.getElementById("resetDescifrar");
btnResetDescifrar.addEventListener("click", () => {
  textoDescifrar.value = "";
  rangeDescifrar.value = 1;
  fieldDescifrar.value = 1;
});

/* copiar en descifrar */

const btnCopiarDescifrado = document.getElementById("copiarDescifrado");
btnCopiarDescifrado.addEventListener("click", () => {
  textoResultadoDescifrar.select();
  document.execCommand("Copy");

  const copiar = document.getElementById("copiarDescifrado-span");
  copiar.classList.toggle("hide");
});

/* boton salir en descifrar */

const salirDescifrar = document.getElementById("salirDescifrar");
salirDescifrar.addEventListener("click", () => {
  decodeSection.classList.replace("show", "hide");
  opt.classList.replace("show", "hide");
  final.classList.replace("hide", "show");
});
