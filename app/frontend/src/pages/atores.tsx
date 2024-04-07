import { Link } from 'react-router-dom';
import play from "../assets/play.jpeg"


function Atores(){
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Link to="/filmes">
                    <img src={play} style={{width: '100px', height: '100px'}}/>
                    <p>Filmes</p>
                </Link>
                <Link to="/inicio">
                    <img src={play} style={{width: '100px', height: '100px'}}/>
                    <p>Início</p>
                </Link>
            </div>
            <h1>Aqui está sua lista de Atores!</h1>
        </>
    )
}

export default Atores;