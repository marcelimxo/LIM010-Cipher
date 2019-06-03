const checkLogin = document.getElementById('checkLogin')

/*aprender esta funcion*/
function check(form)   /*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
                             
 if(form.pswrd.value == "mmm")
  {
    window.open('target.html')
  /*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}
