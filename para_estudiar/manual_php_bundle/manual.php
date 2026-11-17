<?php
/**
 * Manual de PHP - ejemplo opcional de backend.
 * Sirve el índice de temas como JSON si se ejecuta en un servidor PHP.
 * Para usar: php -S localhost:8000 y abrir http://localhost:8000/manual.php
 */
header('Content-Type: application/json; charset=utf-8');

$temas = [
    ['id' => 1, 'titulo' => 'Fundamentos de PHP'],
    ['id' => 2, 'titulo' => 'Operadores'],
    ['id' => 3, 'titulo' => 'Control de flujo y bucles'],
    ['id' => 4, 'titulo' => 'Arrays'],
    ['id' => 5, 'titulo' => 'Cadenas de texto y comprobaciones'],
    ['id' => 6, 'titulo' => 'Funciones'],
    ['id' => 7, 'titulo' => 'Programación orientada a objetos'],
    ['id' => 8, 'titulo' => 'Excepciones y gestión de errores'],
    ['id' => 9, 'titulo' => 'Inclusión de archivos'],
    ['id' => 10, 'titulo' => 'Repaso final']
];

echo json_encode($temas, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
