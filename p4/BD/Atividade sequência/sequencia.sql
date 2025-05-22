CREATE TABLE cliente (
  codCli SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE produto (
  codPro SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco NUMERIC(10, 2) NOT NULL
);

CREATE TABLE venda (
  numVen SERIAL PRIMARY KEY,
  codCli INT REFERENCES cliente(codCli),
  codPro INT REFERENCES produto(codPro),
  data DATE NOT NULL,
  valor_total NUMERIC(10, 2) NOT NULL
);

INSERT INTO cliente (nome, email) VALUES
('Ana Oliveira', 'ana@email.com'),
('Carlos Souza', 'carlos@email.com');

INSERT INTO produto (nome, preco) VALUES
('Caneta', 2.50),
('Caderno', 15.00);

INSERT INTO venda (codCli, codPro, data, valor_total) VALUES
(1, 1, '2025-05-21', 5.00),
(2, 2, '2025-05-22', 30.00);

--sincroniza a sequência com o maior valor da coluna
SELECT setval(pg_get_serial_sequence('cliente', 'codCli'), (SELECT MAX(codCli) FROM cliente));

SELECT setval(pg_get_serial_sequence('produto', 'codPro'), (SELECT MAX(codPro) FROM produto));

SELECT setval(pg_get_serial_sequence('venda', 'numVen'), (SELECT MAX(numVen) FROM venda));

--Próximo valor da sequencia
SELECT nextval(pg_get_serial_sequence('cliente', 'codCli'));

SELECT nextval(pg_get_serial_sequence('produto', 'codPro'));

SELECT nextval(pg_get_serial_sequence('venda', 'numVen'));

--apaga as sequências
DROP SEQUENCE IF EXISTS cliente_codCli_seq;

DROP SEQUENCE IF EXISTS produto_codPro_seq;

DROP SEQUENCE IF EXISTS venda_numVen_seq;