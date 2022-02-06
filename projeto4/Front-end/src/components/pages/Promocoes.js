export default function Promocoes() {
  return (
    <div className="container w-75">


      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Destinos</th>
            <th scope="col">Pacotes</th>
            <th scope="col">Valores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Dubai</td>
            <td>Ida e volta</td>
            <td>R$ 40.000,00</td>
            <td><button type="button" className="btn btn-outline-secondary">Comprar</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Austrália</td>
            <td>Ida e Volta</td>
            <td>R$ 20.000,00</td>
            <td><button type="button" className="btn btn-outline-secondary">Comprar</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Argentina</td>
            <td>Ida e volta</td>
            <td>R$ 10.000,00</td>
            <td><button type="button" className="btn btn-outline-secondary">Comprar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}