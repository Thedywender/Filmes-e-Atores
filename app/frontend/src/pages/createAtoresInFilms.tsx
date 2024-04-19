import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

interface Ator {
    nome: string;
  }

interface ResponseType {
    status: string;
    data: {
      atores: Ator[];
    };
  }

const CreateAtoresInFilms = () => {
    const { filmeId } = useParams();
    const { createAtorToFilme } = useContext(Context);
    const [atorNome, setAtorNome] = useState('');
    const [atorDataNascimento, setAtorDataNascimento] = useState('');
    const [atorNacionalidade, setAtorNacionalidade] = useState('');
    const [atores, setAtores] = useState<Ator[]>([]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response: ResponseType | unknown = await createAtorToFilme(String(filmeId), { nome: atorNome, data_nascimento: atorDataNascimento, nacionalidade: atorNacionalidade });
            if ((response as ResponseType).status === 'SUCCESS') {
                setAtores((response as ResponseType).data.atores);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
        <Header/>
        <div className="main-content-create">
            <form onSubmit={handleSubmit} className="form-container">
                <label>
                    Nome do Ator:
                    <input type="text" value={atorNome} onChange={(e) => setAtorNome(e.target.value)} className='input-padrao-create' />
                </label>
                <label>
                    Data de Nascimento do Ator:
                    <input type="date" value={atorDataNascimento} onChange={(e) => setAtorDataNascimento(e.target.value)}  className='input-padrao-create'/>
                </label>
                <label>
                    Nacionalidade do Ator:
                    <input type="text" value={atorNacionalidade} onChange={(e) => setAtorNacionalidade(e.target.value)} className='input-padrao-create'/>
                </label>
                <button type="submit" className='button-create-finish'>Adicionar Ator ao Filme</button>
            </form>
            <div>
                <h2>Atores do Filme:</h2>
                {atores.map((ator, index) => (
                    <p key={index}>{ator.nome}</p>
                ))}
            </div>
        </div>
    </>
    );
};

export default CreateAtoresInFilms;