import { Form, Row, Col } from 'react-bootstrap';
import ufs from '../datasets/Ufs';
const SelectUFRegiao = ({ uf, regiao, onUFChange }) => {
  const handleUFChange = (e) => {
    const ufSelecionada = e.target.value;
    const ufObj = ufs.find((uf) => uf.sigla === ufSelecionada);

    onUFChange({
      uf: ufSelecionada,
      regiao: ufObj?.regiao || '',
    });
  };

  return (
    <>
      <Row>
        <Col sm={6}>
          <Form.Group>
            <Form.Label>UF</Form.Label>
            <Form.Select
              name="uf"
              value={uf}
              onChange={handleUFChange}
              required
            >
              <option value="">Selecione a UF</option>
              {ufs.map((uf) => (
                <option key={uf.sigla} value={uf.sigla}>
                  {uf.nome}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group>
            <Form.Label>Região</Form.Label>
            <Form.Control type="text" name="regiao" value={regiao} readOnly />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default SelectUFRegiao;
