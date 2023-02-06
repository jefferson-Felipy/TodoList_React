import React,{useState} from 'react';
import List from './List';

export default function Form(){

    const [lista,setLista] = useState([]);
    const [novoItem,setNovoItem] = useState('');

    function adicionaItem(e){
        e.preventDefault();

        if(!novoItem) return;

        setLista([...novoItem, {text:novoItem,isCompleted:false}]);
        setNovoItem('');
        document.querySelector("#field").focus();
    }

    return(
        <div className="container">
            <form action="" className="text-center" onSubmit={adicionaItem}>
                <input 
                    id="field"
                    type="text" 
                    className="w-75 p-2 m-2 border border-none fs-3" 
                    placeholder="Inserir Tarefa" 
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                />
                <button className="btn btn-success text-white p-2">Add</button>
            </form>
            <List lista={lista}/>
        </div>
    )
}