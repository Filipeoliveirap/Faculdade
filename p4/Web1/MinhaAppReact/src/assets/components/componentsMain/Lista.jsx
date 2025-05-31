import { Table, Button } from 'react-bootstrap';
import { useState } from 'react';

function Lista() {
    const ListaComDados = [
    {id: 1, nome : "João", idade: 30, cidade: "São Paulo"},
    {id: 2, nome : "Maria", idade: 25, cidade: "Rio de Janeiro"},
    {id: 3, nome : "Pedro", idade: 28, cidade: "Belo Horizonte"},
  ]
  const [dados, setDados] = useState(ListaComDados);

  const handlerAdicionar = () => {
    const novoDado = ("Adicionado")
    setDados([...dados, novoDado]);
  };

  const handlerRemover = () => {
    setDados(dados.slice(0, -1));
  };
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>id</th>
                <th>nome</th>
                <th>idade</th>
                <th>cidade</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.idade}</td>
                        <td>{item.cidade}</td>
                        <td><Button variant="primary" onClick={handlerAdicionar}>Adicionar</Button><Button variant="danger" onClick={handlerRemover}>Remover</Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
        
    );
}

export default Lista;