import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { Ator } from '../../api/atoresApi';
import '../App.css';
import Header from '../components/Header';

function Atores() {
    const { atores, getAtores, removeAtor, editAtor } = useContext(Context);
    const navigate = useNavigate();
    const [editingAtorState, setEditingAtorState] = useState<Ator | null>(null);

    useEffect(() => {
        getAtores();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const createAtor = () => {
        navigate('/atores/createAtores');
    };

    const setEditAtor = (ator: Ator) => {
        setEditingAtorState(ator);
    };

    const addFilmeToAtor = (atorId: string) => {
        navigate(`/atores/addFilmeInAtores/${atorId}`);
    };

    return (
        <>
            <Header/>
            <div className="main-content-atores">
                <button onClick={createAtor} className='button-create'>Clique aqui e crie seus Atores</button>
                <h1 className='h1-list-entytie'>Lista de Atores</h1>
                <div className='atores-container'>
                    {atores.map(ator => (
                        <div key={ator.id} className='ator'>
                            {editingAtorState && editingAtorState.id === ator.id ? (
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    if (editingAtorState) {
                                        editAtor(editingAtorState);
                                        setEditingAtorState(null);
                                    }
                                }}>
                                    <input value={editingAtorState.nome} onChange={(e) => setEditingAtorState({...editingAtorState, nome: e.target.value})} />
                                    <input 
                                        type="date" 
                                        value={new Date(editingAtorState.data_nascimento).toISOString().split('T')[0]} 
                                        onChange={(e) => setEditingAtorState({...editingAtorState, data_nascimento: e.target.value})}
                                    />
                                    <input value={editingAtorState.nacionalidade} onChange={(e) => setEditingAtorState({...editingAtorState, nacionalidade: e.target.value})} />
                                    <button type="submit">Atualizar</button>
                                </form>
                            ) : (
                                <div className='container-map-items'>
                                    <h2>{ator.nome}</h2>
                                    <p>Data de nascimento: {new Date(ator.data_nascimento).toLocaleDateString('pt-BR')}</p>
                                    <p>Nacionalidade: {ator.nacionalidade}</p>
                                    <div className="button-group">
                                        <button onClick={() => setEditAtor(ator)} className='button-create-init'>Editar</button>
                                        <button onClick={() => removeAtor(ator)} className='button-create-init '>Deletar</button>
                                        <button onClick={() => addFilmeToAtor(String(ator.id))} className='button-add-element'>Adicionar Filme</button>
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