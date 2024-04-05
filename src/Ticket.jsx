import "./Ticket.css";
import { v4 as uuidv4 } from 'uuid';
import GenNum from "./GenNum";

export default function Ticket({ticket }) {
    return (
        <div className="box">
            <h3>ticket</h3>
            {ticket.map((num) => (
                <GenNum num = {num} key={uuidv4()} />
            ))}
        </div> 
    );
}
