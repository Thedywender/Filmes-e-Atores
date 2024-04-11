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

export async function postFilme(filme: Omit<Filme, 'id' |'atores'>) {
    // type Filmedd = Omit<Filme, 'Atores' | 'id'>;
    // const filmeAdd: Filmedd = filme;
    // delete filmeAdd.atores;
    console.log(JSON.stringify(filme))
    const response = await fetch(`${URL}/filmes`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
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

export async function addAtorToFilme(filmeId: string, ator: { nome: string, data_nascimento: string, nacionalidade: string }) {
    const response = await fetch(`${URL}/filmes/${filmeId}/atores`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ator)
    });
    return response.json();
}