import create from "zustand";
// create function takes a function that returns state
const useStore = create((set)=>({
    people: ['John Doe', 'Jane Doe'],
    addPerson: (person) => set((state)=>({
        people: [...state.people, person]
    }))
}))

export default useStore;