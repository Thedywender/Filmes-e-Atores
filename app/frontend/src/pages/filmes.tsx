import { Link } from 'react-router-dom';
import play from "../assets/play.jpeg"

function Filmes(){
    return (
        <>
       <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Link to="/atores">
                    <img src={play} style={{width: '100px', height: '100px'}}/>
                    <p>Atores</p>
                </Link>
                <Link to="/inicio">
                    <img src={play} style={{width: '100px', height: '100px'}}/>
                    <p>Início</p>
                </Link>
            </div>
        <form>
            <p>Adicione um ator ao filme</p>
            <input type="text" name="filmes and atores" id="filmes and atores" 
            placeholder="digite o nome do filme e do ator" />
            <button>ADICIONE</button>
        </form>
        <h1>Lista de Filmes</h1>
        </>
    )
}

export default Filmes;