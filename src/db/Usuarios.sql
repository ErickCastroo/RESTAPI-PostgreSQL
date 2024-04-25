CREATE TABLE usuario (
    id serial PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuario (nombre, correo, password) VALUES
('Juan Pérez', 'juan@example.com', 'contraseña123'),
('María López', 'maria@example.com', 'password456'),
('Carlos García', 'carlos@example.com', 'secreto789'),
('Ana Martínez', 'ana@example.com', 'clave1234'),
('Pedro Ramírez', 'pedro@example.com', 'segura567'),
('Laura Rodríguez', 'laura@example.com', '123456abc');

select * from usuario;