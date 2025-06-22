
export interface IBook {
  title: string,
  author: string,
  genre: Genre,
  isbn: string,
  description?: string,
  copies: number,
  available: boolean,
  updateAvailability(): void,
}

export type Genre = 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY'