import type { ICard } from "../interfaces/ICard"

export const Cards = ({img, nome, PV, ATQ, PD, Raridade, }: ICard) => {
    return(
        <section className= "Card">
            <p className="cardName">{nome}</p>
            <img className="img"
             src={img}
             alt=" "
             height={150}/>
            <div className="stats">
                    <span>PV: <b id="PV-card">{PV}  </b></span>
                    <span>ATQ: <b id="ATQ-card">{ATQ}  </b></span>
                    <span>PD: <b id="PD-card">{PD}  </b></span>
                    <span>Raridade: <b id="Raridade-Card">{Raridade}</b></span>
                </div>
        </section>
    )
}