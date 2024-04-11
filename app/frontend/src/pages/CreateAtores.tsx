import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { Ator } from '../../api/atoresApi';
import Header from '../components/Header';

function CreateAtores() {
    const { addAtor } = useContext(Context);
    const [atorNome, setAtorNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleAddAtor = async (event: React.FormEvent) => {
        event.preventDefault();
        if (atorNome.length < 3) {
            setErro('O nome do ator deve ter pelo menos 3 caracteres');
            return;
        }
        if (!/^(\d{2})-(\d{2})-(\d{4})$/.test(dataNascimento)) {
            setErro('A data de nascimento deve estar no formato dd-mm-aaaa');
            return;
        }
        const dataNascimentoDate = new Date(dataNascimento.split('-').reverse().join('-'));
        const newAtor: Omit<Ator, 'id'> = {
            nome: atorNome,
            data_nascimento: dataNascimentoDate.toISOString(),
            nacionalidade: nacionalidade,
        };
        try {
            await addAtor(newAtor);
            setAtorNome('');
            setDataNascimento('');
            setNacionalidade('');
            navigate('/atores');
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErro(error.message);
            }
        }
    };

    return (
        <>
        <Header/>
            <div className="main-content-create">
                <form onSubmit={handleAddAtor} className="form-container">
                    <p>Adicione um ator</p>
                    <input type="text" name="ator" id="ator" placeholder="digite o nome do ator" value={atorNome} onChange={(e) => setAtorNome(e.target.value)} className='input-padrao-create'/>
                    <input type="text" name="data_nascimento" id="data_nascimento" placeholder="digite a data de nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className='input-padrao-create'/>
                    <input type="text" name="nacionalidade" id="nacionalidade" placeholder="digite a nacionalidade" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} className='input-padrao-create'/>
                    <button type="submit" className='button-create-finish'>Criar Ator</button>
                    {erro && <p>{erro}</p>}
                </form>
            </div>
        </>
    )
}

export default CreateAtores;