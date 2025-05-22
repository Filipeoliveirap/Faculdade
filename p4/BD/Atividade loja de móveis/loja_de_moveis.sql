create table Motorista(
codMot SERIAL PRIMARY KEY,
CPF CHAR(11),
CNH CHAR(10),
nome VARCHAR(50),
endereco VARCHAR(100)
);

create table veiculo (
id SERIAL PRIMARY KEY,
placa VARCHAR(7),
capacidade INT
);
ALTER TABLE veiculo ADD CONSTRAINT veiculo_placa_unique UNIQUE (placa);


create table vendedor(
codVdd SERIAL PRIMARY KEY,
CPF NUMERIC(11),
v_comissao NUMERIC(4,2),
nome VARCHAR(50),
endereco VARCHAR(100)
);

create table venda (
numVen SERIAL PRIMARY KEY,
valor_total NUMERIC(11,2),
codVdd INTEGER NOT NULL, FOREIGN KEY(codVdd) REFERENCES vendedor(codVdd)

);

create table entrega(
id SERIAL PRIMARY KEY,
hora TIME,
data DATE,
numVen INTEGER NOT NULL, FOREIGN KEY(numVen) REFERENCES venda(numVen) ,
placa CHAR(7) NOT NULL, FOREIGN KEY(placa) REFERENCES veiculo(placa),
codMot INTEGER NOT NULL, FOREIGN KEY(codMot) REFERENCES motorista(codMot)
);

ALTER TABLE venda
ADD COLUMN codCli INTEGER NOT NULL REFERENCES cliente(codCli);

create table cliente(
codCli SERIAL PRIMARY KEY,
nome VARCHAR(50),
tel CHAR(10),
endereco VARCHAR(100),
CPF NUMERIC(11),
email VARCHAR(50)
);

create table item_venda(
codPro INTEGER NOT NULL,FOREIGN KEY(codPro) REFERENCES produto(codPro),
numVen INTEGER NOT NULL,FOREIGN KEY(numVen) REFERENCES venda(numVen),
vUnitario NUMERIC(11,2),
qtd INTEGER
);

create table produto(
codPro SERIAL PRIMARY KEY,
custo NUMERIC(11,2),
descricao TEXT,
preco NUMERIC(11,2),
nome VARCHAR(50)
);

--dados

INSERT INTO produto (custo, descricao, preco, nome) VALUES
(10.00, 'Produto A', 15.00, 'Caneta'),
(20.00, 'Produto B', 35.00, 'Caderno'),
(5.00,  'Produto C', 9.50,  'Borracha');

INSERT INTO cliente (nome, tel, endereco, CPF, email) VALUES
('Maria Silva', '8391234567', 'Rua A, 123', 12345678901, 'maria@email.com'),
('João Souza',  '8399876543', 'Rua B, 456', 98765432100, 'joao@email.com');

INSERT INTO vendedor (CPF, v_comissao, nome, endereco) VALUES
(11122233344, 5.5, 'Carlos Lima', 'Rua das Flores, 111'),
(55566677788, 4.0, 'Ana Torres', 'Av. Brasil, 222');

INSERT INTO veiculo (placa, capacidade) VALUES
('ABC1234', 1000),
('XYZ5678', 1500);

INSERT INTO motorista (CPF, CNH, nome, endereco) VALUES
('12345678901', 'CNH1234567', 'Pedro Alves', 'Rua Caminho, 10'),
('98765432100', 'CNH7654321', 'Fernanda Costa', 'Av. Norte, 45');

INSERT INTO venda (valor_total, codVdd, codCli) VALUES
(150.00, 1, 1),
(75.50,  2, 2);

INSERT INTO item_venda (codPro, numVen, vUnitario, qtd) VALUES
(1, 1, 15.00, 5),
(2, 1, 35.00, 2),
(3, 2, 9.50, 3);

INSERT INTO entrega (hora, data, numVen, placa, codMot) VALUES
('08:30', '2025-05-21', 1, 'ABC1234', 1),
('14:00', '2025-05-21', 2, 'XYZ5678', 2);

--Buscas

--Lista todas as vendas com nome do cliente e vendedor
SELECT venda.numVen, cliente.nome AS cliente, vendedor.nome AS vendedor,
venda.valor_total FROM venda JOIN cliente ON venda.codCli = cliente.codCli
JOIN vendedor ON venda.codVdd = vendedor.codVdd;

--Lista os produtos vendidos em cada venda
SELECT venda.numVen, produto.nome AS produto, item_venda.qtd, item_venda.vUnitario
FROM item_venda JOIN venda ON item_venda.numVen = venda.numVen
JOIN produto ON item_venda.codPro = produto.codPro;

--Consulta entregas com nome do motorisa, data e placa
SELECT entrega.id, motorista.nome AS motorista, entrega.data, entrega.hora, entrega.placa
FROM entrega JOIN motorista ON entrega.codMot = motorista.codMot;

--Total de produtos vendidos por venda
SELECT numVen, SUM(qtd) AS total_itens FROM item_venda GROUP BY numVen;

