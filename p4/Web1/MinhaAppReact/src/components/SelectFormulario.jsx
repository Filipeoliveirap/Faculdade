import { Form, Row, Col } from 'react-bootstrap';
import ufs from '../datasets/Ufs';
import cidadesDataset from '../datasets/cidade';

const SelectUFRegiao = ({ uf, regiao, municipio, onUFChange, onMunicipioChange }) => {
  const handleUFChange = (e) => {
    const ufSelecionada = e.target.value;
    const ufObj = ufs.find((uf) => uf.sigla === ufSelecionada);

    onUFChange({
      uf: ufSelecionada,
      regiao: ufObj?.regiao || '',
    });
  };

  const cidadesFiltradas = uf
    ? cidadesDataset.filter((cidade) => cidade.estado.sigla === uf).map((c) => c.nome)
    : [];

  return (
    <Row>
      <Col sm={4}>
        <Form.Group>
          <Form.Label>UF</Form.Label>
          <Form.Select value={uf} onChange={handleUFChange} required>
            <option value="">Selecione a UF</option>
            {ufs.map((estado) => (
              <option key={estado.sigla} value={estado.sigla}>
                {estado.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Col>

      <Col sm={4}>
        <Form.Group>
          <Form.Label>Município</Form.Label>
          <Form.Select
            value={municipio}
            onChange={(e) => onMunicipioChange(e.target.value)}
            disabled={!uf}
            required
          >
            <option value="">Selecione o município</option>
            {cidadesFiltradas.map((cidade, idx) => (
              <option key={idx} value={cidade}>
                {cidade}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Col>

      <Col sm={4}>
        <Form.Group>
          <Form.Label>Região</Form.Label>
          <Form.Control type="text" value={regiao} readOnly />
        </Form.Group>
      </Col>
    </Row>
  );
};

export default SelectUFRegiao;
