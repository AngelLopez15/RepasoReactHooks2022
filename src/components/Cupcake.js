// desestructurar los hooks nativos de React
import { useState, useEffect, useRef } from "react"

// Componentes presentacionales "stateless" (Solo lectura)

export default function Cupcake(props) {

  // Los componentes funcionales antes de la version 16 no podian manejar el estado
  // era exclusivo de los componentes de clase. Ahora se usan los hooks para manejar
  // el estado dentro de los componentes funcionales.

  const {color, sabor, imagen} = props

  // UseState recibe como parametro el valor inicial, el valor por defecto
  // del componenete

  // Para usar los propiedades del useState debemos de hacer una desestructuracion de la funcion
  // El estado puede ser todo lo que nosotros necesitemos que sea, puede ser un numero, un objeto, string, bool cualquier cosa que queramos almacenar
  // useState recibe el valor por defecto del estado (el estado inicial)

  // Si necesitamos manejar varios estados podemos usar varios useStates como necesitemos
  const [vendido, setVendido] = useState(false)
  const [reservado, setReservado] = useState(false)

  // El Hook useRef nos permite crear referencias. Como React no trabaja con el DOM del navegador si no con el DOM virtual y este es el que React manipula
  // entonces si necesitamos manipular el elementos del DOM (en vanilla javascript usariamos el getElementById) podria funcionar tambien en react pero da problemas
  // para solucionar el problema React creo el concepto de referencias que nos permite atrapar elementos del "DOM" (sigue siendo el DOM virtual) y manipularlo como si fuera
  // el DOM real
  // useRef lo que nos va a permitir es acceder a UNO de los elementos del DOM a ese elemento debemos ponerle el atributo "ref"
  // y ponerle el nombre de queramos
  // const first = useRef(second)
  const fotoConFiltro = useRef();

  // El useEffect nos sirve para manejar efectos colaterales que susedar a partir del renderizado de nuestros componentes
  // Este hooks reemplaza todo el ciclo de vida del componente de los tipo clase

  // El useEffect recibe dos parametros (el segundo parametro es opcional) como primer parametro recibe una funcion
  // Esta funcion es la que se va a ejecutar cada vez que el componente se vaya a montar o actualizar
  // La funcion dentro del useEffect se va a ejecutar CADA VEZ que el componente necesite ser renderizado
  // Este hook sirve mucho para traer informacion osea cada ves que necesitemos hacer peticiones a las APIS
  // La gran ventaja de este hook tambien es se desventaja, como vemos el hook se ejecuta cada vez que el componente cambia
  // entonces ¿que debemos hacer cuando solo queremos que la funcion se ejecute una sola vez o cada que cambie algo muy particular?
  // para esp tenemos el segundo argumento del hook, que sera un array. 
  // Si le pasamos un array vacio [] el hook solo se ejecutara UNA SOLA VEZ
  // El array lo que puede recibir son los valores del state que pueden ir cambiando. En ese caso el useEffect se ejecutara cada que el valor
  // de ese state cambie.
  // NOTA: Debemos tener mucho cuidado con el arreglo, principalmente de SI ponerlo para no estar ejecutando la funcion en todo momento.
  // 
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  // Podemos evitarnos el uso del useEffect en este caso si pasamos el codigo que añade la clase a la funcion que vende el cupcake
  useEffect(() => {
    // console.log('El useEffect se ha ejecutado');
    // console.log(fotoConFiltro.current);
    if (vendido) {
      const elementoDelDOM = fotoConFiltro.current;
      elementoDelDOM.classList.add("vendido");
    }

  }, [vendido]);

  // Debemos crear una funcion que a su vez ejecutara la otra funcion setState que es la unica manera en la que se puede modificar el state
  const vender = () => {
    setVendido(true);
    setReservado(true);
    // Podemos aprovechar esta funcion para poner la clase y asi borrar el useEffect
    // const elementoDelDOM = fotoConFiltro.current;
    // elementoDelDOM.classList.add("vendido");
  }

  const reservar = () => setReservado(true);

  return (
    <div className="card-cupcake">
      <div className="imagen-container">
        <img ref={ fotoConFiltro } className="imagen-cupcake" src={ imagen } alt={ sabor } />
      </div>
      <h2 className="titulo-cupcake">{ color }</h2>
      <p className="sabor-cupcake"><span className="subsabor-cupcake">Sabor:</span> { sabor }</p>
      <p>Estado: { vendido ? "Vendido" : "A la venta" } </p>
      {
        !vendido
        &&
        <button onClick={ vender }>Vender</button>
      }
      <p>Reservado: { reservado ? "Reservado" : "Libre" } </p>
      {
        !reservado
        &&
        <button onClick={ reservar }>Reservar</button>
      }
    </div>
  )
}
