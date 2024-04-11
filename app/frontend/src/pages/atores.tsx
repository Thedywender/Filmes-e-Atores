import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import play from "../assets/play.jpeg"
import Context from '../context/Context';

function Atores() {
    const { atores, getAtores, removeAtor } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        getAtores();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCreateAtor = () => {
        navigate('/atores/createAtores');
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/filmes">
                    <img src={play} style={{ width: '100px', height: '100px' }} />
                    <p>Filmes</p>
                </Link>
                <Link to="/inicio">
                    <img src={play} style={{ width: '100px', height: '100px' }} />
                    <p>Início</p>
                </Link>
            </div>
            <button onClick={handleCreateAtor}>Crie Atores</button>
            <h1>Lista de Atores</h1>
            {atores.map(ator => (
                <div key={ator.id}>
                    <h2>{ator.nome}</h2>
                    <p>Data de nascimento: {new Date(ator.data_nascimento).toLocaleDateString('pt-BR')}</p>
                    <p>Nacionalidade: {ator.nacionalidade}</p>
                    <button onClick={() => removeAtor(ator)}>Deletar</button>
                </div>
            ))}
        </>
    )
}

export default Atores;