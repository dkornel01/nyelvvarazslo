import { szenvedoMondatok } from "./angol";
export default class MondatokModel{

#mondatokLista=[];
#cim="";
#hossz=0;
#sugoSzoveg="";
#aktObj={};
#aktElem=2;
constructor(){
    this.#mondatokLista=szenvedoMondatok;
    this.#cim=this.#mondatokLista[0];
    this.#sugoSzoveg=this.#mondatokLista[1];
    this.#hossz=this.#mondatokLista.length-2;
    this.aktMondatOsszeallit(2);
}
kevElem(index){

}
aktMondatOsszeallit(index){
    let obj=this.#mondatokLista[index];
    const kv = [...obj.valasztas];
    kv.sort((a,b)=>{
        return Math.random()- 0.5;
    });
    kv.unshift("válassz!");
    const tm= obj.mondat.split(" ");
this.#aktObj={
    magyar:Obj.magyar,
    index:this.#aktElem,
    mondat: obj.mondat,
    alap: obj.alap,
    helyes: obj.valasztott[0],
    kevertValasztott: kv,
    teljesMondat: tm,
    kevertMondat: km,
    };

    return this.#aktobj
}
get cim(){
    return this.#cim;
}
get sugoszoveg(){
    return this.#sugoszoveg;
}
get hossz(){
    return this.#hossz;
}}