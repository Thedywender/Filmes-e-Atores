const URL = 'http://localhost:3001';

export type Ator = {
    nome: string,
    data_nascimento: Date,
    nacionalidade: string
};

export type Filme = {
    id: string,
    titulo: string,
    ano_lancamento: string,
    disponivel: boolean,
    atores: Ator[]
};

export type NovoFilme = Omit<Filme, 'id'>;

export async function fetchFilmes(): Promise<Filme[]> {
    try {
        const response = await fetch(`${URL}/filmes`);
        return response.json() as Promise<Filme[]>;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        alert('Serviço indisponível');
        return [];
    }
}

export async function postFilme(filme: NovoFilme) {
    const response = await fetch(`${URL}/filmes`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filme),
    });
    return response.json();
}

export async function putFilme(filme: Filme) {
    const response = await fetch(`${URL}/filmes/${filme.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filme),
    });
    return response.json();
}

export async function deleteFilme(filme: Filme) {
    const response = await fetch(`${URL}/filmes/${filme.id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filme),
    });
    return response.json();
}

export async function addAtorToFilme(filmeId: string, atorId: string) {
    const response = await fetch(`${URL}/filmes/${filmeId}/atores/${atorId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}