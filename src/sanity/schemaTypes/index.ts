import { type SchemaTypeDefinition } from 'sanity'
import page from './page'
import post from './post'
import settings from './settings'
import navigation from './navigation'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, post, settings, navigation],
}
