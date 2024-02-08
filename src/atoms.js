import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    // here we have access to the id passed to the atom family and can return the todo with that id
    // TODOS is hardcoded here but in a real app this would be a call to a backend or something
    return TODOS.find(x => x.id === id)
  },
});