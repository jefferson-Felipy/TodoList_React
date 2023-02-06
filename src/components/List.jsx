import React from 'react';

export default function List({lista}){
    return(
        <div className='container m-3 mx-auto'>
            {
                lista.length < 1 
                ?
                    <p>Nao ha</p>
                :
                    lista.map((elements,ind) => {
                        <div className='ml-2 d-flex align-items-center justify-content-around my-2 border border-white'>
                            <input type="checkbox" className='p-3'/>
                            <span className='text-white'>{elements.text}</span>
                            <button className='btn btn-danger'>X</button>
                        </div>
                    })
            }
           
            {/* <div className='ml-2 d-flex align-items-center justify-content-around my-2 border border-danger'>
                <input type="checkbox" className='p-3'/>
                <span className='text-danger'>Lista de tarefa de numero 1</span>
                <button className='btn border border-danger text-danger'>X</button>
            </div> */}

            <button className='btn btn-danger my-3 ml-2'>Deletar Todos</button>
        </div>
    )
}