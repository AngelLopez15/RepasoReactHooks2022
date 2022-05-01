import { useState } from "react"

// Componentes presentacionales "stateless" (Solo lectura)

export default function Cupcake(props) {

  const {color, sabor, imagen} = props

  // UseState recibe como parametro el valor inicial, el valor por defecto
  // del componenete

  const [vendido, setVendido] = useState(false)

  const vender = () => setVendido(true)

  return (
    <div className="card-cupcake">
      <div className="imagen-container">
        <img className="imagen-cupcake" src={ imagen } alt={ sabor } />
      </div>
      <h2 className="titulo-cupcake">{ color }</h2>
      <p className="sabor-cupcake"><span className="subsabor-cupcake">Sabor:</span> { sabor }</p>
      <p>Estado: { vendido ? "Vendido" : "A la venta" } </p>
      {
        !vendido
        &&
        <button onClick={vender}>Vender</button>
      }
    </div>
  )
}
