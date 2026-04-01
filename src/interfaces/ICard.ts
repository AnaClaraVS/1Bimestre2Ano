export interface ICard {
    img: string;
    nome: string;
    PV: number;
    ATQ: number;
    PD: number;
    Raridade: 'Comum' | 'Raro' | 'Lendario'
}