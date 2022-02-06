import CardDestinos from "../AnunciosDestinos/CardDestinos";

export default function Destinos() {
  return (
    <div className="row justify-content-between px-5">
      <CardDestinos title="Argentina" text="valor apenas para viagem de ida ou volta de R$: 10.000,00" img="/imagensagencia/argentina.jpg" />


      <CardDestinos title="Australia" text=" valor apenas para viagem de ida ou volta de R$: 30.000,00." img="/imagensagencia/australia.jpg" />

      <CardDestinos title="Dubai" text="valor apenas para viagem de ida ou volta de R$: 50.000,00" img="/imagensagencia/dubai.jpg" />
    </div>
  


  )
}