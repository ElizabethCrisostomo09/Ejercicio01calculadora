
  function sumar(){
    let Numero1 = Number(document.getElementById('Numero1').value);
    let Numero2 = Number(document.getElementById('Numero2').value);  
    let resultado = Numero1 + Numero2
    document.getElementById('resultado').value = resultado
    }


  function restar(){
    let Numero1 = Number(document.getElementById("Numero1").value);
    let Numero2 = Number(document.getElementById("Numero2").value);
    let resultado = Numero1 - Numero2
     document.getElementById("resultado").value = resultado
    }

  function multiplicar(){
     let Numero1 = Number(document.getElementById("Numero1").value);
     let Numero2 = Number(document.getElementById("Numero2").value);
     let resultado = Numero1 * Numero2
      document.getElementById("resultado").value = resultado
    }

        
    function dividir(){
      let Numero1 = Number(document.getElementById("Numero1").value);
      let Numero2 = Number(document.getElementById("Numero2").value);
      let resultado = Numero1 / Numero2
        document.getElementById("resultado").value = resultado
     }
    

