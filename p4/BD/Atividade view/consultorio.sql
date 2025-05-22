create table ambulatorio(
nroa SERIAL PRIMARY key,
andar INT,
capacidade INT
);

create table medicos(
codm SERIAL PRIMARY key,
cpf VARCHAR(11) NOT NULL,
nome VARCHAR(100),
idade INT,
cidade VARCHAR(100),
nroa int,
 CONSTRAINT fk_nroa FOREIGN key (nroa) REFERENCES ambulatorio(nroa)
);

create table pacientes(
codp SERIAL PRIMARY KEY,
cpf VARCHAR(11) NOT NULL,
nome VARCHAR(100),
idade INT,
cidade VARCHAR(100),
doença VARCHAR(100)
);

create table consultas(
codm INT,
codp INT,
data DATE,
hora TIME,
PRIMARY KEY(codm, codp),
CONSTRAINT fk_codm FOREIGN KEY (codm) REFERENCES medicos(codm),
CONSTRAINT fk_codp FOREIGN KEY (codp) REFERENCES pacientes(codp)
);

--dados

INSERT INTO ambulatorio (andar, capacidade) VALUES
(1, 10),
(2, 8),
(3, 6);

INSERT INTO medicos (cpf, nome, idade, cidade, nroa) VALUES
('11111111111', 'Dra. Ana Souza', 45, 'João Pessoa', 1),
('22222222222', 'Dr. Carlos Lima', 50, 'Campina Grande', 2),
('33333333333', 'Dra. Marina Dias', 38, 'Patos', 3);

INSERT INTO pacientes (cpf, nome, idade, cidade, doença) VALUES
('44444444444', 'José Silva', 60, 'João Pessoa', 'Hipertensão'),
('55555555555', 'Maria Oliveira', 35, 'Sousa', 'Diabetes'),
('66666666666', 'João Mendes', 28, 'Cajazeiras', 'Gripe');

INSERT INTO consultas (codm, codp, data, hora) VALUES
(1, 1, '2025-05-25', '09:00'),
(2, 2, '2025-05-26', '10:30'),
(3, 3, '2025-05-27', '14:00');

SELECT * FROM vw_consultas4;

--views

CREATE view vw_consultas AS SELECT m.nome AS nome_medico, p.nome AS nome_paciente, c.hora FROM consultas c JOIN medicos m ON c.codm = m.codm JOIN pacientes p ON c.codp = p.codp;
SELECT * FROM vw_consultas;

CREATE view vw_consultas2 AS SELECT c.hora, a.andar, m.codm FROM consultas c JOIN medicos m ON c.codm = m.codm JOIN ambulatorio a ON m.nroa = a.nroa;
SELECT * FROM vw_consultas2;

CREATE view vw_consultas3 AS SELECT m.nome, c.data, c.hora FROM medicos m LEFT JOIN consultas c ON m.codm = c.codm;
SELECT * FROM vw_consultas3;

CREATE view vw_consultas4 AS SELECT p.idade, p.doença, m.nome, m.nroa FROM consultas c JOIN pacientes p ON c.codp = p.codp JOIN medicos m ON c.codm = m.codm;

