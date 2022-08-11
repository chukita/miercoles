/*var ndom:any = document.getElementById("fname");
ndom.value = "Juan";

var adom:any = document.getElementById("lname");
adom.value = "Lopez";*/

export class fichaPersona{

        //propiedades

            protected _n:string;
            protected _a:string;


        //constructor

            constructor(nom:string,ape:string){
                this._n = nom;
                this._a = ape;
            }


        //geters y setters


        //metodos

        completaFicha(){
            var ndom:any = document.getElementById("fname");
            ndom.value = this._n;

            var adom:any = document.getElementById("lname");
            adom.value = this._a;
        }


}








