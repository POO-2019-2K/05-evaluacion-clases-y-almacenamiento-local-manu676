export default class Movimiento{
    constructor(movimiento){
        this._name = movimiento.name;
        this._clave= movimiento.clave;
        this._tipoMovimiento = movimiento.tipoMovimiento;
        this._cantidad = movimiento.cantidad;
        this._costo = movimiento.costo;
    }
    get name(){
        return this._name;
    }
    get clave(){
        return this._clave;
    }
    get cantidad(){
        return this._cantidad;
    }
    get tipoMovimiento(){
        return this._tipoMovimiento;
    }
    get costo(){
        return this._costo;
    }
}