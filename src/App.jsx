import React from 'react';
import Form from './components/Form';
import List from './components/List';

export default function App(){
  return(
      <div className="container-sm">
          <h2 className="text-center my-4 text-white">TodoList React</h2>
          <Form/>
      </div>
  )
}