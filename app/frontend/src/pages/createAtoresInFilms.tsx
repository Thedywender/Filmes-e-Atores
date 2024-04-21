import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Filme } from '../../api/filmesApi';


interface Ator {
    nome: string;
    data_nascimento: string;
    nacionalidade: string;
}

const CreateAtoresInFilms = () => {
    const { filmeId } = useParams();
    const { createAtorToFilme, getFilmeById } = useContext(Context);
    const [atorNome, setAtorNome] = useState('');
    const [atorDataNascimento, setAtorDataNascimento] = useState('');
    const [atorNacionalidade, setAtorNacionalidade] = useState('');
    const [atores, setAtores] = useState<Ator[]>([]);
    const [filme, setFilme] = useState<Filme | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAndSetFilme = async () => {
            try {
                const filme = await getFilmeById(Number(filmeId));
                setFilme(filme);
                setAtores(filme.atores);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
            finally {
                setLoading(false);
            }
        };

        fetchAndSetFilme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const newAtor = { 
            nome: atorNome, 
            data_nascimento: atorDataNascimento, 
            nacionalidade: atorNacionalidade, 
            filmes: [] 
        };
        setAtores((prevState) => ([
            ...prevState, newAtor
        ]))
        try {
            await createAtorToFilme(String(filmeId), newAtor);
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
                        <p className='p-add-element'>Nome do Ator</p>
                        <input type="text" value={atorNome} onChange={(e) => setAtorNome(e.target.value)} className='input-padrao-create' />
                    </label>
                    <label>
                        <p className='p-add-element'>Data de Nascimento do Ator</p>
                        <input type="date" value={atorDataNascimento} onChange={(e) => setAtorDataNascimento(e.target.value)}  className='input-padrao-create'/>
                    </label>
                    <label>
                        <p className='p-add-element'>Nacionalidade do Ator</p>
                        <input type="text" value={atorNacionalidade} onChange={(e) => setAtorNacionalidade(e.target.value)} className='input-padrao-create'/>
                    </label>
                    <button type="submit" className='button-create-finish'>Adicionar Ator ao Filme</button>
                </form>
                <div>
                    <h2>Atores do Filme: {filme?.titulo}</h2>
                    {atores.map((ator, index) => {
                        const dataNascimento = new Date(ator.data_nascimento);
                        const dataFormatada = dataNascimento.toLocaleDateString('pt-BR');
                        return (
                            <p key={index}>{ator.nome} - {dataFormatada} - {ator.nacionalidade}</p>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CreateAtoresInFilms;