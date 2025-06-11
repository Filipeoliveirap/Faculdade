import { Table, Button } from 'react-bootstrap';
import { useState } from 'react';

function Lista() {
    const ListaComDados = [
    {id: 1, nome : "João", sobrenome: "silva", cpf: 123123123123, Nascimento: "21/04/2025"},
    {id: 2, nome : "Maria", sobrenome: "pereira", cpf: 32132132133, Nascimento: "21/06/2003"},
    {id: 3, nome : "Pedro", sobrenome: "oliveira", cpf: 32132132133, Nascimento: "21/06/2004"}
  ]
  const [dados, setDados] = useState(ListaComDados);

  

  const handlerclick = (e) => {
    
  };

  const removerPessoa = (id) => {
    let listaAtualizada = dados.filter((pessoa) => {return pessoa.id == id ? false : true;});
    setDados(listaAtualizada)
  };
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>id</th>
                <th>nome</th>
                <th>sobrenome</th>
                <th>cpf</th>
                <th>Nascimento</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.sobrenome}</td>
                        <td>{item.cpf}</td>
                        <td>{item.Nascimento}</td>
                        <td><Button variant="primary">Editar</Button><Button variant="danger" onClick={(e) => {removerPessoa(item.id)}}>Remover</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        
    );
}

export default Lista;