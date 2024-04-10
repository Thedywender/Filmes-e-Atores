import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import play from "../assets/play.jpeg"
import Context from '../context/Context';
import { Filme } from '../../api/filmesApi';

function Filmes() {
    const { filmes, getFilmes, addFilme, editFilme, removeFilme } = useContext(Context);
    const [filmeNome, setFilmeNome] = useState('');
    const [dataFilme, setdataFilme] = useState('');

    useEffect(() => {
        getFilmes();
    }, []);

    const handleAddFilme = async (event: React.FormEvent) => {
        event.preventDefault();
        const newFilme: Omit<Filme, 'id'> = {
            titulo: filmeNome,
            ano_lancamento: dataFilme,
            disponivel: true,
            atores: []
        };
        await addFilme(newFilme);
        setFilmeNome('');
        setdataFilme('');
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
            <form onSubmit={handleAddFilme}>
                <p>Adicione um filme</p>
                <input type="text" name="filme" id="filme" placeholder="digite o nome do filme" value={filmeNome} onChange={(e) => setFilmeNome(e.target.value)} />
                <button type="submit">ADICIONE</button>
            </form>
            <h1>Lista de Filmes</h1>
            {filmes.map(filme => (
                <div key={filme.id}>
                    <h2>{filme.titulo}</h2>
                    <button onClick={() => removeFilme(filme)}>Deletar</button>
                    <button onClick={() => editFilme(filme)}>Editar</button>
                </div>
            ))}
        </>
    )
}

export default Filmes;