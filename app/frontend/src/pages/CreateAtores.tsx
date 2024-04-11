import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { Ator } from '../../api/atoresApi';

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
            data_nascimento: dataNascimentoDate,
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
        <form onSubmit={handleAddAtor}>
            <p>Adicione um ator</p>
            <input type="text" name="ator" id="ator" placeholder="digite o nome do ator" value={atorNome} onChange={(e) => setAtorNome(e.target.value)} />
            <input type="text" name="data_nascimento" id="data_nascimento" placeholder="digite a data de nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            <input type="text" name="nacionalidade" id="nacionalidade" placeholder="digite a nacionalidade" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} />
            <button type="submit">Criar Ator</button>
            {erro && <p>{erro}</p>}
        </form>
    )
}

export default CreateAtores;