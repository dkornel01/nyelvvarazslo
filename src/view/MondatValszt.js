export default function MondatSelect(props){
    const mondaLista=props.mondatObj.mondat.split("");
    let pont=0;
    function kitolt(event){

    }
    function kovetkezo(){

    }
    return(
        <p><b>{props.mondatObj.index-1}. </b>
        {MondatLista.map((elem,i)=>{
            
        })}
        </p>
    )
}