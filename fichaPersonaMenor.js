import { fichaPersona } from "./fichaPersona.js";
export class fichaPersonaMenor extends fichaPersona {
    constructor(nom, ape, nomr, aper) {
        super(nom, ape);
        this._nr = nomr;
        this._ar = aper;
    }
    completaFicha() {
        var ndom = document.getElementById("fname");
        ndom.value = this._n;
        var adom = document.getElementById("lname");
        adom.value = this._a;
        var ndom = document.getElementById("fnamer");
        ndom.value = this._nr;
        var adom = document.getElementById("lnamer");
        adom.value = this._ar;
    }
}
var Persona = new fichaPersonaMenor("Leonel", "Messi", "Roberto", "Messi");
Persona.completaFicha();
