import create from "zustand";
import {devtools, persist} from 'zustand/middleware'
// create function takes a function that returns state
let settingsStore = (set)=>({
    dark: false,
    toggleDark: ()=>set((state=>({dark: !state.dark})))
})

let peopleStore = (set) =>({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) => set((state)=>({
        people: [...state.people, person]
    })),
})

settingsStore = devtools(settingsStore)
settingsStore = persist(settingsStore, {name: 'user_settings'})

peopleStore = (devtools(peopleStore))

export const useSettingsStore = create(settingsStore)
export const usePeoplesStore = create(peopleStore)


