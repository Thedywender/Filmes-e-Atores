import { createContext } from "react";
import { ProviderValues } from './provider';

const Context = createContext({} as ProviderValues);

export default Context;