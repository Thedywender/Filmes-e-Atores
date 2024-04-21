const URL = 'http://localhost:3001';
import { Ator } from "./atoresApi";

export type Filme = {
    id: number,
    titulo: string,
    ano_lancamento: number,
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

export async function fetchFilmeById(id: number): Promise<Filme> {
    try {
        const response = await fetch(`${URL}/filmes/${id}`);
        if (!response.ok) {
            throw new Error('Serviço indisponível');
        }
        const data = await response.json();
        // console.log(data);
        return data as Filme;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        throw e;
    }
}

export async function postFilme(filme: Omit<Filme, 'id' |'atores'>) {
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
    try {
        const response = await fetch(`${URL}/filmes/${filmeId}/atores`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ator)
        });
        const data = await response.json();
        console.log(data); // Adicione esta linha
        return data;
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}