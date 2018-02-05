import { SEARCH } from '.'

export default function search (searchTerm) {
  return {
    type: SEARCH,
    payload: searchTerm
  }
}
