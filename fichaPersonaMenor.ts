import { fichaPersona } from "./fichaPersona.js";

export class fichaPersonaMenor extends fichaPersona {

    private _nr:string;
    private _ar:string;

    constructor(nom:string,ape:string,nomr:string,aper:string){
        
        super(nom,ape)
        this._nr = nomr;
        this._ar = aper;
    }

    completaFicha(){
        var ndom:any = document.getElementById("fname");
        ndom.value = this._n;

        var adom:any = document.getElementById("lname");
        adom.value = this._a;

        var ndom:any = document.getElementById("fnamer");
        ndom.value = this._nr;

        var adom:any = document.getElementById("lnamer");
        adom.value = this._ar;
    }


}

var Persona = new fichaPersonaMenor("Leonel","Messi","Roberto","Messi");
Persona.completaFicha();