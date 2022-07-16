import { atom } from 'jotai'

export const AxieTeamAtom = atom([])
export const selectedAxieAtom = atom([])
export const modalStatusAtom = atom(false)
export const formStatusAtom = atom(false)
// export const axieModalAtom = atom(get => get(modalStatusAtom),
// (get, set, newStatus) => {
//   set(modalStatusAtom, newStatus)
// })