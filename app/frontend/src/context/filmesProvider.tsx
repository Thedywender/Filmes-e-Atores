// import { useState } from "react";
// import { FilmesContext } from "./Context";
// import { Filme, fetchFilmeById, fetchFilmes, postFilme, putFilme, deleteFilme, addAtorToFilme } from "../../api/filmesApi";
// import { Ator, AtorWithoutId } from "../../api/atoresApi";

// type ProviderProps = {
//     children: React.ReactNode
// }

// export type FilmesProviderValues = {
//     filmes: Filme[],
//     getFilmes: () => Promise<void>,
//     getFilmeById: (id: number) => Promise<Filme>,
//     addFilme: (filmeData: Omit<Filme, 'id' |'atores'>) => Promise<void>, 
//     editFilme: (filmeData: Filme) => Promise<void>,
//     removeFilme: (filmeData: Filme) => Promise<void>,
//     createAtorToFilme: (filmeId: string, atorData: Omit<Ator, 'id'>) => Promise<void>,
//     loading: boolean,
//     atores: Ator[],
// }

// function FilmesProvider({ children }: ProviderProps) {
//     const [filmes, setFilmes] = useState<Filme[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [atores, setAtores] = useState<Ator[]>([]);
    
//         const getFilmes = async () => {
//             setLoading(true);
//             try {
//                 const result = await fetchFilmes();
//                 setFilmes(result);
//             } catch (error: unknown) {
//                 if (error instanceof Error) {
//                     console.log(error.message);
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         }
    
//         const getFilmeById = async (id: number): Promise<Filme> => {
//             try {
//                 const filme = await fetchFilmeById(id);
//                 setFilmes([filme]);
//                 setAtores(filme.atores);
//                 return filme;
//             } catch (error: unknown) {
//                 if (error instanceof Error) {
//                     console.log(error.message);
//                 }
//                 throw error;
//             }
//         }
    
//         const addFilme = async (filmeData: Omit<Filme, 'id' |'atores'>) => {
//             try {
//                 await postFilme(filmeData);
//             } catch (error: unknown) {
//                 if (error instanceof Error) {
//                     console.log(error.message);
//                 }
//             }
//         }
    
//         const editFilme = async (filmeData: Filme) => {
//             try {
//                 const updatedFilme = await putFilme(filmeData);
//                 console.log(filmes)
//                 setFilmes(filmes.map(filme => filme.id === updatedFilme.id ? updatedFilme : filme));
//             } catch (error: unknown) {
//                 if (error instanceof Error) {
//                     console.log(error.message);
//                 }
//             }
//         }
    
//         const removeFilme = async (filmeData: Filme) => {
//             try {
//                 await deleteFilme(filmeData);
//                 setFilmes(filmes.filter(filme => filme.id !== filmeData.id));
//             } catch (error: unknown) {
//                 if (error instanceof Error) {
//                     console.log(error.message);
//                 }
//             }
//         }
    
//         const createAtorToFilme = async (filmeId: string, atorData: AtorWithoutId) => {
//             try {
//                 const response = await addAtorToFilme(filmeId, atorData);
//                 getFilmes();
//                 return response;
//             } catch (error: unknown) {
//                 if (error instanceof Error) {
//                     console.log(error.message);
//                 }
//             }
//         }
    

//     // ...defina as funções getFilmes, getFilmeById, addFilme, editFilme, removeFilme, createAtorToFilme aqui...

//     const values: FilmesProviderValues = {
//         filmes,
//         getFilmes,
//         getFilmeById,
//         addFilme,
//         editFilme,
//         removeFilme,
//         createAtorToFilme,
//         loading,
//         atores,
//     }

//     return (
//         <FilmesContext.Provider value={values}>
//             {children}
//         </FilmesContext.Provider>
//     )
// }


// export default FilmesProvider;