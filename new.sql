-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2023 a las 16:53:54
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `new`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `campos`
--

CREATE TABLE `campos` (
  `IdCampo` int(11) NOT NULL,
  `NombreCampo` varchar(45) NOT NULL,
  `Tipo` int(11) NOT NULL,
  `Obligatorio` varchar(22) NOT NULL,
  `Descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `camposetapas`
--

CREATE TABLE `camposetapas` (
  `idEtapa` int(11) NOT NULL,
  `IdCampo` int(11) NOT NULL,
  `Orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dependencias`
--

CREATE TABLE `dependencias` (
  `idDependencia` int(11) NOT NULL,
  `Nombre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etapas`
--

CREATE TABLE `etapas` (
  `IdEtapa` int(11) NOT NULL,
  `NombreEtapa` varchar(45) NOT NULL,
  `IdTramite` int(11) NOT NULL,
  `DuracionEtapa` int(11) NOT NULL,
  `InicialEtapa` varchar(99) NOT NULL,
  `FinalEtapa` varchar(99) NOT NULL DEFAULT 'false',
  `Decision` int(11) NOT NULL,
  `TituloDesicion` varchar(45) NOT NULL,
  `DescripcionDesicion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `etapas`
--

INSERT INTO `etapas` (`IdEtapa`, `NombreEtapa`, `IdTramite`, `DuracionEtapa`, `InicialEtapa`, `FinalEtapa`, `Decision`, `TituloDesicion`, `DescripcionDesicion`) VALUES
(1, 'Etapa Inicial', 1, 23, 'true', 'false', 0, '0', '0'),
(2, 'Etapa Intermedia 1', 1, 23, '0', 'false', 0, '0', '0'),
(3, 'Etapa Final', 1, 24, '0', 'true', 0, '0', '0'),
(4, 'Etapa Intermedia 2', 1, 23, '0', 'false', 0, '0', '0'),
(5, 'Etapa Inicial', 2, 12, 'true', 'false', 0, '-', '-'),
(6, 'Etapa Siguiente', 2, 12, 'false', 'false', 0, '-', '-'),
(7, 'Etapa Final', 2, 12, 'false', 'true', 0, '-', '-');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `flujo`
--

CREATE TABLE `flujo` (
  `Etapas_IdEtapa` int(11) NOT NULL,
  `EtapaSiguiente` int(11) NOT NULL,
  `IdDesicion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `flujo`
--

INSERT INTO `flujo` (`Etapas_IdEtapa`, `EtapaSiguiente`, `IdDesicion`) VALUES
(1, 4, NULL),
(2, 3, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcionesdesicion`
--

CREATE TABLE `opcionesdesicion` (
  `IdDesicion` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Comentario` text NOT NULL,
  `IdEtapa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `responsablesetapas`
--

CREATE TABLE `responsablesetapas` (
  `IdUsuario` int(11) NOT NULL,
  `IdEtapa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `selectorescampos`
--

CREATE TABLE `selectorescampos` (
  `IdSelector` int(11) NOT NULL,
  `IdCampo` int(11) NOT NULL,
  `Nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tramites`
--

CREATE TABLE `tramites` (
  `IdTramite` int(11) NOT NULL,
  `NombreTramite` varchar(45) NOT NULL,
  `IdDependencia` int(11) NOT NULL,
  `DescripcionTramite` text NOT NULL,
  `RequisitosTramite` text NOT NULL,
  `PlazoTramite` int(11) NOT NULL,
  `FechaCreacionTramite` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tramites`
--

INSERT INTO `tramites` (`IdTramite`, `NombreTramite`, `IdDependencia`, `DescripcionTramite`, `RequisitosTramite`, `PlazoTramite`, `FechaCreacionTramite`) VALUES
(1, 'Nuevo Tramite', 0, '', '', 0, '2023-02-14 20:46:56'),
(2, 'Nuevo tramite', 0, 'Requisitos del tramite', 'Atencion', 15, '2023-02-26 16:47:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IdUsuario` int(11) NOT NULL,
  `NumeroDocumento` varchar(45) NOT NULL,
  `TipoDocumento` varchar(45) NOT NULL,
  `Nombres` varchar(45) NOT NULL,
  `Apellidos` varchar(45) NOT NULL,
  `Correo` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`IdUsuario`, `NumeroDocumento`, `TipoDocumento`, `Nombres`, `Apellidos`, `Correo`, `Password`) VALUES
(1, '5345345', '434234', 'fsdfdsf', 'fsdfsd', 'fsdfsdf', 'sdfsdfsd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `campos`
--
ALTER TABLE `campos`
  ADD PRIMARY KEY (`IdCampo`);

--
-- Indices de la tabla `dependencias`
--
ALTER TABLE `dependencias`
  ADD PRIMARY KEY (`idDependencia`);

--
-- Indices de la tabla `etapas`
--
ALTER TABLE `etapas`
  ADD PRIMARY KEY (`IdEtapa`);

--
-- Indices de la tabla `flujo`
--
ALTER TABLE `flujo`
  ADD PRIMARY KEY (`Etapas_IdEtapa`);

--
-- Indices de la tabla `opcionesdesicion`
--
ALTER TABLE `opcionesdesicion`
  ADD PRIMARY KEY (`IdDesicion`);

--
-- Indices de la tabla `selectorescampos`
--
ALTER TABLE `selectorescampos`
  ADD PRIMARY KEY (`IdSelector`);

--
-- Indices de la tabla `tramites`
--
ALTER TABLE `tramites`
  ADD PRIMARY KEY (`IdTramite`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IdUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `campos`
--
ALTER TABLE `campos`
  MODIFY `IdCampo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `dependencias`
--
ALTER TABLE `dependencias`
  MODIFY `idDependencia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `etapas`
--
ALTER TABLE `etapas`
  MODIFY `IdEtapa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `opcionesdesicion`
--
ALTER TABLE `opcionesdesicion`
  MODIFY `IdDesicion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `selectorescampos`
--
ALTER TABLE `selectorescampos`
  MODIFY `IdSelector` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tramites`
--
ALTER TABLE `tramites`
  MODIFY `IdTramite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `IdUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
