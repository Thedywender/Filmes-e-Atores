const URL = 'http://localhost:3001';
import { Filme } from './filmesApi'

export type Ator = {
    id: number,
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

export async function postAtor(ator: Partial<Ator>) {
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

export async function putAtor(ator: Ator) {
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

export async function deleteAtor(ator: Ator) {
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

export async function addFilmeToAtor(atorId: string, filme: Partial<Filme>) {
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