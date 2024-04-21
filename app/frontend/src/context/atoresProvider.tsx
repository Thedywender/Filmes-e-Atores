// import { useState } from "react";
// import { AtoresContext } from "./Context";
// import { Ator, fetchAtores, postAtor, putAtor, deleteAtor, addFilmeToAtor, fetchAtorById, FilmeWithoutId } from "../../api/atoresApi";

// type ProviderProps = {
//     children: React.ReactNode
// }

// export type AtoresProviderValues = {
//     atores: Ator[],
//     getAtores: () => Promise<void>,
//     getAtorById: (id: number) => Promise<Ator>,
//     addAtor: (atorData: Omit<Ator, 'id'>) => Promise<void>,
//     editAtor: (atorData: Ator) => Promise<void>,
//     removeAtor: (atorData: Ator) => Promise<void>,
//     loading: boolean,
//     createFilmeToAtor: (atorId: string, filmeData: FilmeWithoutId) => Promise<void>,
//     filmes: FilmeWithoutId[],
// }

// function AtoresProvider({ children }: ProviderProps) {
//     const [atores, setAtores] = useState<Ator[]>([]);
//     const [loading, setLoading] = useState<boolean>(false);
//     const [filmes, setFilmes] = useState<FilmeWithoutId[]>([]);

//     const getAtores = async () => {
//         setLoading(true);
//         try {
//             const result = await fetchAtores();
//             setAtores(result);
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 console.log(error.message);
//             }
//         } finally {
//             setLoading(false);
//         }
//     }

//     const getAtorById = async (id: number): Promise<Ator> => {
//         try {
//             const ator = await fetchAtorById(id);
//             if (ator.id === undefined) {
//                 throw new Error('Ator id is undefined');
//             }
//             setAtores([ator]);
//             setFilmes(ator.filmes || []);
//             return ator;
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 console.log(error.message);
//             }
//             throw error;
//         }
//     }

//     const addAtor = async (atorData: Omit<Ator, 'id'>) => {
//         try {
//             await postAtor(atorData);
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 console.log(error.message);
//             }
//         }
//     }

//     const editAtor = async (atorData: Ator) => {
//         try {
//             const updatedAtor = await putAtor(atorData);
//             setAtores(atores.map(ator => ator.id === updatedAtor.id ? updatedAtor : ator));
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 console.log(error.message);
//             }
//         }
//     }

//     const removeAtor = async (atorData: Ator) => {
//         try {
//             await deleteAtor(atorData);
//             setAtores(atores.filter(ator => ator.id !== atorData.id));
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 console.log(error.message);
//             }
//         }
//     }

//     const createFilmeToAtor = async (atorId: string, filmeData: FilmeWithoutId) => {
//         try {
//             await addFilmeToAtor(atorId, filmeData);
//             getAtores();
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 console.log(error.message);
//             }
//         }
//     }

//     // ...defina as funções getAtores, getAtorById, addAtor, editAtor, removeAtor, createFilmeToAtor aqui...

//     const values: AtoresProviderValues = {
//         atores,
//         getAtores,
//         getAtorById,
//         addAtor,
//         editAtor,
//         removeAtor,
//         loading,
//         createFilmeToAtor,
//         filmes,
//     }

//     return (
//         <AtoresContext.Provider value={values}>
//             {children}
//         </AtoresContext.Provider>
//     )
// }

// export default AtoresProvider;