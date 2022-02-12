const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click",()=>{
    let resultado, mensaje;
    try {
      prevRes = parseInt(document.getElementById('nota').value);
      if(isNaN(prevRes)){
          throw "El dato no es un numero";
      }
      mensaje = definirMensaje(prevRes);
      resultado = verificarAProvacion(8,5,prevRes);
    } catch (e){
        resultado = "Error en la aprobacion";    
        mensaje = "Error al introducir la nota";
    }
    abrirModal(resultado,mensaje);
});

const definirMensaje = (pr)=>{
    let resultado
    switch (pr){
        case 1: resultado = "Muy Mal";
        break;
        case 2: resultado = "Muy Mal";
        break;
        case 3: resultado = "Mal";
        break;
        case 4: resultado = "Mal";
        break;
        case 5: resultado = "Mediocre";
        break;
        case 6: resultado = "Decente";
        break;
        case 7: resultado = "Bien";
        break;
        case 8: resultado = "Bien";
        break;
        case 9: resultado = "Muy bien";
        break;
        case 10: resultado = "Excelente";
        break;
        default: resultado = null;

    }
    return resultado;
};

const verificarAProvacion= (nota1,nota2,prevRes)=>{
    prom = (nota1 + nota2 + prevRes)/3;
    if(prom >=7){
        return "<span class='green'>APROBADO</span>";
    }
    return "<span class='red'>DESAPROBADO</span>"
}
const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
};