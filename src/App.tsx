import { useState } from 'react'
import './App.css'

import { Header } from './components/Header'
import { Cards } from './components/Cards'
import type { ICard } from './interfaces/ICard'


const cartas: ICard [] = [
  {
    nome:'Dara Venturini',
    img: 'https://i.pinimg.com/736x/1a/33/18/1a331815f325414b931abd43426fd557.jpg',
    PV: 41,
    ATQ: 7,
    PD: 55,
    Raridade:'Comum'
  },
  {
    nome:'Barbará Lima',
    img: 'https://i.pinimg.com/736x/5e/cf/8a/5ecf8a786ccbdb734b0d36905aba9abd.jpg',
    PV: 23,
    ATQ: 9,
    PD: 10,
    Raridade:'Comum'
  },
  {
    nome: 'Elizabeth Webber',
    img: 'https://i.pinimg.com/736x/98/b6/bb/98b6bb351f2d65c1745ab97afc674935.jpg',
    PV: 62,
    ATQ: 28,
    PD: 58,
    Raridade: 'Raro'
  },
  {
    nome:'Cesar Kaiser Cohen ',
    img: 'https://i.pinimg.com/474x/ab/5f/3e/ab5f3e04940517be476cb972dfaf041f.jpg',
    PV: 76,
    ATQ: 25,
    PD: 60,
    Raridade:'Raro'
  },
  {
    nome:'Sr. Veríssimo',
    img: 'https://i.pinimg.com/736x/b0/24/61/b024615ebc64549bdac34aa9b74063a0.jpg',
    PV: 142,
    ATQ: 51,
    PD: 116,
    Raridade:'Lendario'
  },
  {
    nome: 'Zumbi de Sangue',
    img: 'https://i.pinimg.com/474x/e3/1e/da/e31edaa715009cb9edd008bf67e047bd.jpg',
    PV: 45,
    ATQ: 11,
    PD: 15,
    Raridade: 'Comum'
  },
  {
    nome:'Zumbi Bestial ',
    img: 'https://i.pinimg.com/736x/99/fa/39/99fa390ea0371d1eead485f2039ffeb7.jpg',
    PV: 200,
    ATQ: 15,
    PD: 25,
    Raridade:'Raro'
  },
  {
    nome: 'Nidere',
    img: 'https://i.pinimg.com/control1/736x/af/3d/13/af3d13db5b761ad3fdcc604b2ee26292.jpg',
    PV: 800,
    ATQ: 24,
    PD: 55,
    Raridade: 'Raro'
  },
  {
    nome: 'Espreitator',
    img: 'https://i.pinimg.com/736x/5f/76/b9/5f76b9c95d4f1a699afa9f4c459fe7fe.jpg',
    PV: 500,
    ATQ: 30,
    PD: 45,
    Raridade: 'Raro'
  },
  {
    nome: 'Tempestuoso',
    img: 'https://i.pinimg.com/1200x/36/ef/95/36ef95d6ee56fc4aeed0f099f3729e45.jpg',
    PV: 950,
    ATQ: 60,
    PD: 75,
    Raridade: 'Lendario'
  }
  
]

function App() {

  const [mostrarAgentes, setMostrarAgentes] = useState(false)
const [mostrarCriaturas, setMostrarCriaturas] = useState(false)
  
  
const agentes = cartas.slice(0, 5)
const criaturas = cartas.slice(5, 10)

const [cartaAgente, setCartaAgente] = useState<ICard | null>(null)
const [cartaCriatura, setCartaCriatura] = useState<ICard | null>(null)

function sortearCartas() {
  const ag = agentes[Math.floor(Math.random() * agentes.length)]
  const ct = criaturas[Math.floor(Math.random() * criaturas.length)]

  setCartaAgente(ag)
  setCartaCriatura(ct)
}
const [resultado, setResultado] = useState("")

function batalhar() {
  if (!cartaAgente || !cartaCriatura) return

  if ((cartaAgente.ATQ + cartaAgente.PD)/cartaCriatura.PV > (cartaCriatura.ATQ + cartaCriatura.PV)/(cartaAgente.PV * cartaAgente.ATQ)) {
    setResultado("Agente venceu!")  
  } else if ((cartaAgente.ATQ + cartaAgente.PD)/cartaCriatura.PV  < (cartaCriatura.ATQ + cartaCriatura.PV)/(cartaAgente.PV * cartaAgente.ATQ)) {
    setResultado("Criatura venceu!")
  } else {
    setResultado("Empate!")
  }
}
  
  return (
    <div className="Container">
      <Header/>

      <div className="battleArea">
  {cartaAgente && cartaCriatura && (
    <>
        <div className="cardGrande">
            <Cards {...cartaAgente} />
        </div>

        <h1 className="vs">VS</h1>

        <div className="cardGrande">
            <Cards {...cartaCriatura} />
        </div>
    </>
  )}

      </div>
    <h2>{resultado}</h2>

      <button onClick={sortearCartas}>Sortear Cartas</button>
<button onClick={batalhar}>Batalhar</button>

      <button onClick={() => setMostrarAgentes(!mostrarAgentes)}>
        {mostrarAgentes ? 'Esconder Agentes' : 'Mostrar Agentes'}
      </button>

      <button onClick={() => setMostrarCriaturas(!mostrarCriaturas)}>
        {mostrarCriaturas ? 'Esconder Criaturas' : 'Mostrar Criaturas'}
      </button>

      <section className="cardsPlacement">
        {mostrarAgentes && (
          <section className="AgntP">
            {agentes.map((carta) => (
              <Cards key={carta.nome} {...carta} />
            ))}
          </section>
        )}

        {mostrarCriaturas && (
          <section className="CtP">
            {criaturas.map((carta) => (
              <Cards key={carta.nome} {...carta} />
            ))}
          </section>
        )}
      </section>
    </div>
  )
}

export default App

