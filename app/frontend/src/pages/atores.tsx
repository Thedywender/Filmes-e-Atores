import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import play from "../assets/play.jpeg"
import Context from '../context/Context';
import { Ator } from '../../api/atoresApi';

function Atores() {
    const { atores, getAtores, addAtor, editAtor, removeAtor } = useContext(Context);
    const [atorNome, setAtorNome] = useState('');
    const [atorData, setAtorData] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');

    useEffect(() => {
        getAtores();
    }, []);

    const handleAddAtor = async (event: React.FormEvent) => {
        event.preventDefault();
        const newAtor: Omit<Ator, 'id'> = {
            nome: atorNome,
            data_nascimento: new Date(atorData),
            nacionalidade: nacionalidade,
        };
        await addAtor(newAtor);
        setAtorNome('');
        setAtorData('');
        setNacionalidade('');
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
            <form onSubmit={handleAddAtor}>
                <p>Adicione um ator</p>
                <input type="text" name="ator" id="ator" placeholder="digite o nome do ator" value={atorNome} onChange={(e) => setAtorNome(e.target.value)} />
                <button type="submit">ADICIONE</button>
            </form>
            <h1>Lista de Atores</h1>
            {atores.map(ator => (
                <div key={ator.id}>
                    <h2>{ator.nome}</h2>
                    <button onClick={() => removeAtor(ator)}>Deletar</button>
                    <button onClick={() => editAtor(ator)}>Editar</button>
                </div>
            ))}
        </>
    )
}

export default Atores;