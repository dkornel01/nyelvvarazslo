import MondatokModel from "../model/MondatokModel";

export default function Valszto(){
  const mondatokModel = new MondatokModel();
  let cím = mondatokModel.cím;
  let sugoSzoveg= MondatokModel.sugoSzoveg;
  const [mondat,setMondat]=useState(mondatokModel.aktMondatOsszeallit())
  function kovetkezo(index){
    let i=mondatokModel.kovElem(index)
    setMondat(mondatokModel.aktMondatOsszeallit(i))
  }
  function pontozas(ponton){

  }
  function sugoMutat(){

  }
    return (
        <div className="App">
          <header className="App-header">
            <h1>Valaszto</h1>
          </header>
          <article>
            <section className="mondat">
              <MondatokModel mondatObj={mondat} kovetkezo={kovetkezo} pontozas={pontozas}/>
            </section>
          </article>
          <footer>Dobrocsi Kornél</footer>
      </div>
    )
}