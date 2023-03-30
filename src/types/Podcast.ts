export interface Podcast {
  'im:name': IMArtist
  'im:price': IMPrice
  'im:image': IMImage[]
  summary: IMArtist
  'im:artist': IMArtist
  title: IMArtist
  link: Link
  id: ID
  'im:contentType': IMContentType
  category: Category
  'im:releaseDate': IMReleaseDate
}

interface Category {
  attributes: CategoryAttributes
}

interface CategoryAttributes {
  'im:id': string
  term: string
  scheme: string
  label: string
}

interface ID {
  label: string
  attributes: IDAttributes
}

interface IDAttributes {
  'im:id': string
}

interface IMArtist {
  label: string
  attributes?: { href: string }
}

interface IMContentType {
  attributes: IMContentTypeAttributes
}

interface IMContentTypeAttributes {
  term: string
  label: string
}

interface IMImage {
  label: string
  attributes: IMImageAttributes
}

interface IMImageAttributes {
  height: string
}

interface IMPrice {
  label: string
  attributes: IMPriceAttributes
}

interface IMPriceAttributes {
  amount: string
  currency: string
}

interface IMReleaseDate {
  label: string
  attributes: IMArtist
}

interface Link {
  attributes: LinkAttributes
}

interface LinkAttributes {
  rel: string
  type: string
  href: string
}
