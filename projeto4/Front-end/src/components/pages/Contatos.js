export default function Contatos() {
  return (


    <div className="container">
      <form className="text-center mb-5">
        <label className="text-center mb-3"
        >Nome &nbsp;&nbsp;
          <input
            type="text"

            placeholder="escreva seu nome"
          /></label >

        <label className="text-center mb-3"
        >Telefone
          <input type="tel" placeholder="escreva seu telefone"
          /></label>

        <label className="text-center mb-3"
        >e-mail &nbsp;&nbsp;
          <input type="text" placeholder="escreva seu email"
          /></label>

        <label  >Mensagem</label>
        <textarea className="text-center mb-3"

          placeholder="escreva..."
        ></textarea
        ><br /><br />
        <input type="submit" value="Enviar" />
      </form>
      <div className="img">
        <img src="./imagensagencia/contatos.png" width="25%" />
      </div>
    </div>

  )


}