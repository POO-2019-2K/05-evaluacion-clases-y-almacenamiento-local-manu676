import Movimiento from "./Inventario.js"

export default class Registro {
  constructor(tableInventario, tableInfo){
      this._tableInventario= tableInventario;
      this._tableInfo = tableInfo;

      //Vector del localstorage 
      this._movimientos = [];
    
      this._numEntrada = 0;
      this._totalEntrada = 0;
      this._numRetiro = 0;
      this._totalRetiro = 0;
      this._numMovimientos = 0;
      this._productoTotal = 0;

      // inician las tablas
      this._initTables();
      //localStorage.removeItem("Movimiento");
    }
    _initTables() 
    {
      //localStorage.removeItem("Movimiento");
      //lsInventory = lista de inventario, donde nos dice que si no hay nada retorna
      let lsInventory = JSON.parse(localStorage.getItem("Movimiento"));
      if (lsInventory === null) {
        return;
      }
      lsInventory.forEach((e, index) => {
        this._addToTable(new Movimiento(e));
      });
    }
    //agregar a la tabla
    _addToTable(moveI)
    {
        //Se agrega en la tabla grande 
        let row = this._tableInventario.insertRow(-1);
        let cellName = row.insertCell(0); 
        let cellclave = row.insertCell(1);
        let cellTipoMovimiento = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellCosto = row.insertCell(4);

        cellName.innerHTML = moveI.name;
        cellclave.innerHTML = moveI.clave;
        cellTipoMovimiento.innerHTML = moveI.tipoMovimiento;
        cellCantidad.innerHTML = moveI.cantidad;
        cellCosto.innerHTML = moveI.costo;

        //Se agrega en la tabla pequeña

        //Se saca el total de $ que lleva y cuantos movimientos de entrada y salida se han hecho  
        if(moveI.tipoMovimiento === "Entrada")
        {
          this._numEntrada++;
          this._tableInfo.rows[1].cells[1].innerHTML = this._numEntrada; 
          ///
          this._totalEntrada += moveI.costo;
          this._tableInfo.rows[2].cells[1].innerHTML = this._totalEntrada;
        }
        if(moveI.tipoMovimiento === "Retiro")
        {
          this._numRetiro++;
          this._tableInfo.rows[3].cells[1].innerHTML = this._numRetiro;
          this._totalRetiro += moveI.costo;
          this._tableInfo.rows[4].cells[1].innerHTML = this._totalRetiro;
        }
        
        
        this._numMovimientos++;        
        this._tableInfo.rows[5].cells[1].innerHTML = this._numMovimientos;
        this._tableInfo.rows[6].cells[1].innerHTML = this._totalEntrada - this._totalRetiro;
        //sacar el total de las sillas restantes
        if(moveI.tipoMovimiento === "Entrada")
        {
          this._productoTotal += moveI.cantidad;
          this._tableInfo.rows[7].cells[1].innerHTML = this._productoTotal;
        }
        if(moveI.tipoMovimiento === "Retiro")
        {
          this._productoTotal -= moveI.cantidad;
          this._tableInfo.rows[7].cells[1].innerHTML = this._productoTotal;
        }
        this._tableInfo.rows[7].cells[1].innerHTML = this._productoTotal;
            
        let objBanco ={
          name: moveI.name,
          clave: moveI.clave,
          tipoMovimiento: moveI.tipoMovimiento,
          cantidad: moveI.cantidad,
          costo: moveI.costo
        };
        //se agrega a "Movimientos"
      this._movimientos.push(objBanco);
      } 
      addMovimiento(moveI){
        this._addToTable(moveI);
        localStorage.setItem("Movimientos", JSON.stringify(this._movimiento));
      }

}
