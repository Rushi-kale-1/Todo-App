import {RecoilRoot, useRecoilStateLoadable, useRecoilValue, useRecoilValueLoadable} from "recoil";
import {todoFamily} from "./Recoil/atomfamily/TodoAtomFamily.jsx";

function App(){

    return <div>
    <RecoilRoot>
        <Todos id={1}/>
        <Todos id={4}/>
        <Todos id={5}/>
    </RecoilRoot>
    </div>
}

function Todos({id}){
    const todo = useRecoilValueLoadable(todoFamily(id))
 if (todo.state === "loading") { return <>Loading...</>}
 else { return <div>
     {todo.contents.title}
     {todo.contents.description}
 </div>}

}

export default App