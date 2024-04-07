import { Link } from 'react-router-dom';
import play from "../assets/play.jpeg"

function Inicio(){
    return (
        <>
            <h1>Escolha sua lista!</h1>
            <h2>Filmes ou Atores!</h2>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Link to="/filmes">
                    <img src={play} style={{width: '100px', height: '100px'}}/>
                    <p>Filmes</p>
                </Link>
                <Link to="/atores">
                    <img src={play} style={{width: '100px', height: '100px'}}/>
                    <p>Atores</p>
                </Link>
            </div>
        </>
    )
}

export default Inicio;