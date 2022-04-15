type Nullable<T> = T | null

type RichText = Nullable<{
  text?: string
  html?: string
}>

export type Asset = Nullable<{
  url: string
  ogp?: string
  urlFeatured?: string
  webp?: string
  webpFeatured?: string
}>

export type Itinerario = {
  time: string
  description: string
}

export interface Tour {
  id: string
  nombreDelTour: string
  slug: string
  destino: Destino
  image: Asset
  precioAproximado: string
  caracterDeTour: string
  sequence: number
}

export interface Destino {
  name: string
  description: string
  image?: Asset
  tours: Tour[]
}

export interface Blog {
  id: string
  title: string
  slug: string
  image?: Asset
  contenido: RichText
}
