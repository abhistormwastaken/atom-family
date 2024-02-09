import './App.css'
import { RecoilRoot, useSetRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';


// simple:
// you don't know kitne atoms banane hain, use atom-family
function App() {
  // lets check something

  return <RecoilRoot>
    <UpdateYourTodo/>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function UpdateYourTodo() {
  // get todo with id 2
  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  // update it after 3 seconds to check if all with id 2 update or not, this would show that only one atom with id 2 is created and all are using the same atom
  useEffect(()=>{
    setTimeout(()=>{
      updateTodo({
        id: 2,
        title: "Updated Title",
        description: "Updated Description"
      })
    }, 3000)
  }, [])

  return <div></div>
}

// what do we do if we need to make atoms dynamically based on id? atom family coems in if we don't know how many atoms we need to create and dont't want to use an array.
// atom family is a function that returns an atom based on the parameter passed to it.
function Todo({id}) {
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
