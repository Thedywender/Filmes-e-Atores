import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import play from "../assets/play.jpeg"
import Context from '../context/Context';
import { Filme } from '../../api/filmesApi';
import '../App.css'
import Header from '../components/Header';


function Filmes() {
    const { filmes, getFilmes, removeFilme, editFilme } = useContext(Context);
    const navigate = useNavigate();
    const [editingFilmeState, setEditingFilmeState] = useState<Filme | null>(null);


    useEffect(() => {
        getFilmes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleCreateFilme = () => {
        navigate('/filmes/createFilms');
    };

    const handleEditFilme = (filme: Filme) => {
        setEditingFilmeState(filme);
    };

    return (
        <>
            <Header/>
            <div className="main-content-filmes">
            <button onClick={handleCreateFilme} className='button-create'>Clique aqui e crie seus Filmes</button>
            <h1>Lista de Filmes</h1>
            <div className='filmes-container'>
                {filmes.map(filme => (
                    <div key={filme.id} className='filme'>
                        {editingFilmeState && editingFilmeState.id === filme.id ? (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                if (editingFilmeState) {
                                    editFilme(editingFilmeState);
                                    setEditingFilmeState(null);
                                }
                            }}>
                                <label>
                                    Título:
                                    <input 
                                        type="text" 
                                        value={editingFilmeState.titulo} 
                                        onChange={(e) => setEditingFilmeState({...editingFilmeState, titulo: e.target.value})}
                                    />
                                </label>
                                <label>
                                    Ano de lançamento:
                                    <input 
                                        type="number" 
                                        value={editingFilmeState.ano_lancamento} 
                                        onChange={(e) => setEditingFilmeState({...editingFilmeState, ano_lancamento: parseInt(e.target.value, 10)})}
                                    />
                                </label>
                                <label>
                                    Disponível:
                                    <input 
                                        type="checkbox" 
                                        checked={editingFilmeState.disponivel} 
                                        onChange={(e) => setEditingFilmeState({...editingFilmeState, disponivel: e.target.checked})}
                                    />
                                </label>
                                <button type="submit">Atualizar Filme</button>
                            </form>
                        ) : (
                            <>
                                <h2>{filme.titulo}</h2>
                                <p>Ano de lançamento: {filme.ano_lancamento}</p>
                                <p className={filme.disponivel ? 'disponivel' : 'indisponivel'}>
                                    Disponível: {filme.disponivel ? 'Yes' : 'No'}
                                </p>
                                <p>Atores: {filme.atores?.map(ator => ator.nome).join(', ')}</p>
                                <div className="button-group">
                                    <button onClick={() => handleEditFilme(filme)} className='button-create-init'>Editar</button>
                                    <button onClick={() => removeFilme(filme)} className='button-create-init'>Deletar</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Filmes;