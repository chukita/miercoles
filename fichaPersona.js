/*var ndom:any = document.getElementById("fname");
ndom.value = "Juan";

var adom:any = document.getElementById("lname");
adom.value = "Lopez";*/
export class fichaPersona {
    //constructor
    constructor(nom, ape) {
        this._n = nom;
        this._a = ape;
    }
    //geters y setters
    //metodos
    completaFicha() {
        var ndom = document.getElementById("fname");
        ndom.value = this._n;
        var adom = document.getElementById("lname");
        adom.value = this._a;
    }
}
