import { } from './CardDestinos.css'
export default function CardDestinos({ title, text, img }) {
  return (
    <div className="card ml-2 mr-2">
      <img
        className="card-img-top"
        src={img}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}

        </p>
        <button type="button" className="btn btn-outline-secondary">
          Comprar
        </button>
      </div>
    </div>

  )
}