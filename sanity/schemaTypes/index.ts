import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import portfolioProjectType from './portfolioProjectType' // <-- Lisasin selle

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    portfolioProjectType, // <-- Lisasin selle skeemide nimekirja
  ],
}
