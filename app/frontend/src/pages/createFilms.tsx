import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { Filme } from '../../api/filmesApi';
import '../App.css';

function CreateFilmes() {
    const { addFilme } = useContext(Context);
    const [filmeNome, setFilmeNome] = useState('');
    const [dataFilme, setDataFilme] = useState('');
    const [disponivel, setDisponivel] = useState(true);
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    const handleAddFilme = async (event: React.FormEvent) => {
        event.preventDefault();
        if (filmeNome.length < 3) {
            setErro('O título do filme deve ter pelo menos 3 caracteres');
            return;
        }

        if (typeof disponivel !== 'boolean') {
            setErro('Disponível deve ser verdadeiro ou falso');
            return;
        }
        const newFilme: Omit<Filme, 'id' |'atores'> = {
            titulo: filmeNome,
            ano_lancamento: Number(dataFilme),
            disponivel: disponivel,
        };
        try {
            await addFilme(newFilme);
            setFilmeNome('');
            setDataFilme('');
            setDisponivel(true);
            navigate('/filmes');
        } catch (error: unknown) {
            if (error instanceof Error) {
                setErro(error.message);
            }
        }
    };

    return (
        <form onSubmit={handleAddFilme}>
            <p>Adicione um filme</p>
            <input type="text" name="filme" id="filme" placeholder="digite o nome do filme" value={filmeNome} onChange={(e) => setFilmeNome(e.target.value)} />
            <input type="text" name="ano_lancamento" id="ano_lancamento" placeholder="digite o ano de lançamento" value={dataFilme} onChange={(e) => setDataFilme(e.target.value)} />
            <label>
                <input type="checkbox" name="disponivel" id="disponivel" checked={disponivel} onChange={(e) => setDisponivel(e.target.checked)} />
                Disponível
            </label>
            <button type="submit">Criar Filme</button>
            {erro && <p>{erro}</p>}
        </form>
    )
}

export default CreateFilmes;