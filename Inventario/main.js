import Movimiento from "./Inventario.js"
import Registro from "./Listado.js"

class Main{
    constructor(){
    let moveLista = new Registro(
    document.querySelector("#agenda"), 
    document.querySelector("#info"));
    document.querySelector("#btnAdd").addEventListener("click", () => {
        //se hace para la validacion del "form"
        let form = document.querySelector("#forms");

        if (form.checkValidity() === true) {

        let name = document.querySelector("#name").value;
        let clave = document.querySelector("#clave").value;
        let tipoMovimiento = document.querySelector("#select").value;
        let cantidad = Number(document.querySelector("#cantidad").value);
        let costo = Number(document.querySelector("#costo").value);
        
        let objInven = {
            name: name,
            clave: clave,
            tipoMovimiento: tipoMovimiento,
            cantidad: cantidad,
            costo: costo,
        };
        let l = new Movimiento(objInven);
        //se agrega addmovimiento a la "Lista"
        moveList.addMovimiento(l)
        ;}
    form.classList.add("was-validated");
    });
    }   
}

let m = new Main();