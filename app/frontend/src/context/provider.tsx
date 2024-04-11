import { useState } from "react";
import Context from "./Context";
import { Filme, fetchFilmes, postFilme, putFilme, deleteFilme } from "../../api/filmesApi";
import { Ator, fetchAtores, postAtor, putAtor, deleteAtor } from "../../api/atoresApi";

type ProviderProps = {
    children: React.ReactNode
}

export type ProviderValues = {
    filmes: Filme[],
    getFilmes: () => Promise<void>,
    addFilme: (filmeData: Omit<Filme, 'id' |'atores'>) => Promise<void>, 
    editFilme: (filmeData: Filme) => Promise<void>,
    removeFilme: (filmeData: Filme) => Promise<void>,
    addAtorToFilme: (filmeId: string, atorData: Omit<Ator, 'id'>) => Promise<void>,
    atores: Ator[],
    getAtores: () => Promise<void>,
    addAtor: (atorData: Omit<Ator, 'id'>) => Promise<void>,
    editAtor: (atorData: Ator) => Promise<void>,
    removeAtor: (atorData: Ator) => Promise<void>,
    loading: boolean
}

function Provider({ children }: ProviderProps) {

    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [atores, setAtores] = useState<Ator[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getFilmes = async () => {
        setLoading(true);
        try {
            const result = await fetchFilmes();
            setFilmes(result);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    const addFilme = async (filmeData: Omit<Filme, 'id' |'atores'>) => {
        try {
            await postFilme(filmeData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    const editFilme = async (filmeData: Filme) => {
        try {
            const updatedFilme = await putFilme(filmeData);
            setFilmes(filmes.map(filme => filme.id === updatedFilme.id ? updatedFilme : filme));
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    const removeFilme = async (filmeData: Filme) => {
        try {
            await deleteFilme(filmeData);
            setFilmes(filmes.filter(filme => filme.id !== filmeData.id));
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    const addAtorToFilme = async (filmeId: string, atorData: Omit<Ator, 'id'>) => {
        try {
            await addAtorToFilme(filmeId, atorData);
            getFilmes();
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    const getAtores = async () => {
        setLoading(true);
        try {
            const result = await fetchAtores();
            setAtores(result);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    const addAtor = async (atorData: Omit<Ator, 'id'>) => {
        try {
            await postAtor(atorData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    const editAtor = async (atorData: Ator) => {
        try {
            const updatedAtor = await putAtor(atorData);
            setAtores(atores.map(ator => ator.id === updatedAtor.id ? updatedAtor : ator));
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    const removeAtor = async (atorData: Ator) => {
        try {
            await deleteAtor(atorData);
            setAtores(atores.filter(ator => ator.id !== atorData.id));
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    const values: ProviderValues = {
        filmes,
        getFilmes,
        addFilme,
        editFilme,
        removeFilme,
        addAtorToFilme,
        atores,
        getAtores,
        addAtor,
        editAtor,
        removeAtor,
        loading
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export default Provider;