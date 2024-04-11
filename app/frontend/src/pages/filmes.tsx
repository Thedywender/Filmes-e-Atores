import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import play from "../assets/play.jpeg"
import Context from '../context/Context';
import '../App.css'

function Filmes() {
    const { filmes, getFilmes, removeFilme } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        getFilmes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCreateFilme = () => {
        navigate('/filmes/createFilms');
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/atores">
                    <img src={play} style={{ width: '100px', height: '100px' }} />
                    <p>Atores</p>
                </Link>
                <Link to="/inicio">
                    <img src={play} style={{ width: '100px', height: '100px' }} />
                    <p>Início</p>
                </Link>
            </div>
            <button onClick={handleCreateFilme}>Crie Filmes</button>
            <h1>Lista de Filmes</h1>
            {console.log(filmes)}
            {filmes.map(filme => (
                <div key={filme.id}>
                    <h2>{filme.titulo}</h2>
                    <p>Ano de lançamento: {filme.ano_lancamento}</p>
                    <p className={filme.disponivel ? 'disponivel' : 'indisponivel'}>
                        Disponível: {filme.disponivel ? 'Yes' : 'No'}
                    </p>
                    <p>Atores: {filme.atores.map(ator => ator.nome).join(', ')}</p>
                    <button onClick={() => removeFilme(filme)}>Deletar</button>
                </div>
            ))}
        </>
    )
}

export default Filmes;