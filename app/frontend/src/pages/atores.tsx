import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import play from "../assets/play.jpeg"
import Context from '../context/Context';
import '../App.css';
import Header from '../components/Header';
// import { Ator } from '../../api/filmesApi';

type Ator = {
    id: number;
    nome: string;
    data_nascimento: string;
    nacionalidade: string;
};


function Atores() {
    const { atores, getAtores, removeAtor, editAtor } = useContext(Context);
    const navigate = useNavigate();
    const [editingAtor, setEditingAtor] = useState<Ator | null>(null);

    useEffect(() => {
        getAtores();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCreateAtor = () => {
        navigate('/atores/createAtores');
    };

    const handleEditAtor = (ator: Ator) => {
        setEditingAtor(ator);
    };

    const handleUpdateAtor = () => {
        if (editingAtor) {
            editAtor(editingAtor);
            setEditingAtor(null);
        }
    };


    return (
        <>
            <Header/>
            <div className="main-content-atores">
            <button onClick={handleCreateAtor} className='button-create'>Clique aqui e crie seus Atores</button>
            <h1>Lista de Atores</h1>
            <div className='atores-container'>
    {atores.map(ator => (
        <div key={ator.id} className='ator'>
            {editingAtor && editingAtor.id === ator.id ? (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (editingAtor) {
                        handleUpdateAtor();
                        setEditingAtor(null);
                    }
                }}>
                    <input value={editingAtor.nome} onChange={(e) => setEditingAtor({...editingAtor, nome: e.target.value})} />
                    <input 
                        type="date" 
                        value={new Date(editingAtor.data_nascimento).toISOString().split('T')[0]} 
                        onChange={(e) => setEditingAtor({...editingAtor, data_nascimento: e.target.value})}
                    />
                    <input value={editingAtor.nacionalidade} onChange={(e) => setEditingAtor({...editingAtor, nacionalidade: e.target.value})} />
                    <button type="submit">Atualizar</button>
                </form>
            ) : (
                <div>
                    <h2>{ator.nome}</h2>
                    <p>Data de nascimento: {new Date(ator.data_nascimento).toLocaleDateString('pt-BR')}</p>
                    <p>Nacionalidade: {ator.nacionalidade}</p>
                    <div className="button-group">
                        <button onClick={() => handleEditAtor(ator)} className='button-create-init'>Editar</button>
                        <button onClick={() => removeAtor(ator)} className='button-create-init '>Deletar</button>
                    </div>
                </div>
            )}
        </div>
    ))}
</div>
</div>
        </>
    )
}

export default Atores;