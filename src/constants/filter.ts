import { CollectionTypes } from "../types/api"

const collectionTypeOptions: Array<CollectionTypes> = [
  "all",
  "ftx",
  "sol",
  "eth",
]

const itemsPerPage = 25
const pageLimitNumber = 5

export { collectionTypeOptions, itemsPerPage, pageLimitNumber }
