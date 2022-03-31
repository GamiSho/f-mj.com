type Nullable<T> = T | null

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
  sequence: number
}

export interface Destino {
  name: string
  description: string
  image?: Asset
  tours: Tour[]
}
