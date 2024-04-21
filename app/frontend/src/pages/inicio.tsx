// import { Link } from 'react-router-dom';
// import play from "../assets/play.jpeg"
import Header from '../components/Header';

function Inicio(){
    return (
        <>
            <div className="main-content-inicio">
                <h1 className='h1-page-init'>Escolha sua lista!</h1>
                <h2 className='h2-page-init'>Filmes ou Atores!</h2>
                <Header/>
            </div>
        </>
    )
}

export default Inicio;