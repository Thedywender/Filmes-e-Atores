import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

interface Filme {
    titulo: string;
    ano_lancamento: number;
    disponivel: boolean;
}

interface Ator {
    nome: string;
    data_nascimento: string;
    nacionalidade: string;
    filmes: Filme[];
}

const CreateFilmesInAtores = () => {
    const { atorId } = useParams();
    const { createFilmeToAtor, getAtorById } = useContext(Context);
    const [filmeTitulo, setFilmeTitulo] = useState('');
    const [filmeAnoLancamento, setFilmeAnoLancamento] = useState('');
    const [filmeDisponivel, setFilmeDisponivel] = useState(false);
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [ator, setAtor] = useState<Ator>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAndSetAtor = async () => {
            try {
                const ator = await getAtorById(Number(atorId));
                setAtor(ator);
                setFilmes(ator.filmes);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log(error.message);
                    return; // Adicionado return para interromper a execução em caso de erro
                }
            }
            finally {
                setLoading(false);
            }
        };
        fetchAndSetAtor();
    }, []);
    console.log(ator);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const newFilme = { 
            titulo: filmeTitulo, 
            ano_lancamento: Number(filmeAnoLancamento), 
            disponivel: filmeDisponivel,
            atores: []
        };
        setFilmes((prevState) => ([
            ...prevState, newFilme
        ]))
        try {
            await createFilmeToAtor(String(atorId), newFilme);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Loading ...</h1>
    }
    return (
        <>
            <Header/>
            <div className="main-content-create">
                <form onSubmit={handleSubmit} className="form-container">
                    <label>
                        <p className='p-add-element'>Título do Filme</p>
                        <input type="text" value={filmeTitulo} onChange={(e) => setFilmeTitulo(e.target.value)} className='input-padrao-create' />
                    </label>
                    <label>
                        <p className='p-add-element'>Ano de Lançamento do Filme</p>
                        <input type="number" value={filmeAnoLancamento} onChange={(e) => setFilmeAnoLancamento(e.target.value)}  className='input-padrao-create'/>
                    </label>
                    <label>
                        <p>clique caso o filme esteja disponivel</p>
                        <input type="checkbox" checked={filmeDisponivel} onChange={(e) => setFilmeDisponivel(e.target.checked)} className='input-checkbox'/>
                    </label>
                    <button type="submit" className='button-create-finish'>Adicionar Filme ao Ator</button>
                </form>
                <div>
                    <h2>Filmes do Ator: {ator?.nome}</h2>
                    {filmes.map((filme, index) => {
                        return (
                            <p key={index}>{filme.titulo} - {filme.ano_lancamento} - {filme.disponivel ? 'Disponível' : 'Indisponível'}</p>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CreateFilmesInAtores;