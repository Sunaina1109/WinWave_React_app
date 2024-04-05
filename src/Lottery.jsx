import { useState } from "react";
import { getTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery({n, winningSum}) {
    let [ticket, setTicket ] = useState (getTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket= ()=>{
      setTicket(getTicket(n));
    }

    return (

         <div>
            <h2>Lottery Game!</h2>
            <Ticket ticket={ticket} />
                <hr></hr>         
            <button onClick={buyTicket}>Buy ticket</button>
           <h3>{isWinning && "Congrats you win!"}</h3>
         </div>
        )
}


