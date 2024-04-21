const URL = 'http://localhost:3001';
import { Filme } from './filmesApi'

export type FilmeWithoutId = {
    titulo: string,
    ano_lancamento: number,
    disponivel: boolean
};

export type Ator = {
    id: number,
    nome: string,
    data_nascimento: string,
    nacionalidade: string
    filmes: Filme[]
};

export type atorWithoutFilmes = {
    id: number,
    nome: string,
    data_nascimento: string,
    nacionalidade: string
};

export type AtorWithoutId = {
    nome: string,
    data_nascimento: string,
    nacionalidade: string
};

export async function fetchAtores(): Promise<Ator[]> {
    try {
        const response = await fetch(`${URL}/atores`);
        return response.json() as Promise<Ator[]>;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        alert('Serviço indisponível');
        return [];
    }
}

export async function fetchAtorById(id: number): Promise<Ator>{
    try {
        const response = await fetch(`${URL}/atores/${id}`);
        if (!response.ok) {
            throw new Error('Serviço indisponível');
        }
        const data = await response.json();
        console.log(data);
        return data as Ator;
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        throw e;
    }
}

export async function postAtor(ator: AtorWithoutId) {
    const response = await fetch(`${URL}/atores`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ator),
    });
    return response.json();
}

export async function putAtor(ator: Partial<Ator>) {
    const response = await fetch(`${URL}/atores/${ator.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ator),
    });
    return response.json();
}

export async function deleteAtor(ator: atorWithoutFilmes) {
    const response = await fetch(`${URL}/atores/${ator.id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ator),
    });
    return response.json();
}

export async function addFilmeToAtor(atorId: string, filme: FilmeWithoutId) {
    const response = await fetch(`${URL}/atores/${atorId}/filmes`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(filme)
    });
    return response.json();
}