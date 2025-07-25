import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from 'react-bootstrap';
import instituicoesEnsino from '../datasets/censoescolar';
import './InstituicaoEnsino.css';
import SelectUFRegiao from '../components/SelectFormulario';

const InstituicaoEnsino = () => {
  const [instituicaoEnsino, setInstituicaoEnsino] = useState({
    codigo: '',
    nome: '',
    uf: '',
    municipio: '',
    regiao: '',
  });

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submeteu os dados!', instituicaoEnsino);
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInstituicaoEnsino((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col sm={8}>Buscar</Col>
        <Col sm={4}>
          <Button
            variant="primary"
            style={{ float: 'right' }}
            onClick={handleShow}
          >
            +
          </Button>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>UF</th>
                <th>Município</th>
                <th>Região</th>
                <th>Mat. Básico</th>
                <th>Mat. da Educação Profissional</th>
                <th>Mat. da Educação de Jovens e Adultos (EJA)</th>
                <th>Mat. da Educação Especial</th>
              </tr>
            </thead>
            <tbody>
              {instituicoesEnsino.map((item, i) => (
                <tr key={i}>
                  <td>{item.codigo}</td>
                  <td>{item.nome}</td>
                  <td>{item.no_uf}</td>
                  <td>{item.no_municipio}</td>
                  <td>{item.no_regiao}</td>
                  <td>{item.qt_mat_bas}</td>
                  <td>{item.qt_mat_prof}</td>
                  <td>{item.qt_mat_eja}</td>
                  <td>{item.qt_mat_esp}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={show} onHide={handleShow} dialogClassName="modal-80w">
        <Modal.Header closeButton>
          <Modal.Title>Instituição de Ensino</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col sm={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Código</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Código"
                    name="codigo"
                    value={instituicaoEnsino.codigo}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={9}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={instituicaoEnsino.nome}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <SelectUFRegiao
                uf={instituicaoEnsino.uf}
                regiao={instituicaoEnsino.regiao}
                municipio={instituicaoEnsino.municipio}
                onUFChange={(values) =>
                  setInstituicaoEnsino((prev) => ({
                    ...prev,
                    uf: values.uf,
                    regiao: values.regiao,
                    municipio: '', // limpa município ao trocar UF
                  }))
                }
                onMunicipioChange={(municipio) =>
                  setInstituicaoEnsino((prev) => ({
                    ...prev,
                    municipio,
                  }))
                }
              />
            </Row>

            <Button
              variant="warning"
              onClick={() => console.log(instituicaoEnsino)}
            >
              Exibir
            </Button>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Fechar
            </Button>
            <Button variant="danger" type="button">
              Apagar
            </Button>
            <Button type="submit" variant="primary">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default InstituicaoEnsino;
