<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Libro;
use Illuminate\Support\Facades\DB;
use RuntimeException;

class CatalogoSeeder extends Seeder
{
    public function run(): void
    {
        $ruta = base_path('../js/script.js');

        if (!file_exists($ruta)) {
            throw new RuntimeException(
                "No se encontró el catálogo de Nico en: {$ruta}"
            );
        }

        $contenido = file_get_contents($ruta);

        preg_match('/const\s+BOOKS\s*=\s*\[(.*?)\];/s', $contenido, $resultado);

        if (empty($resultado[1])) {
            throw new RuntimeException(
                'No se pudo encontrar la lista BOOKS en script.js'
            );
        }

        preg_match_all('/\{([^{}]*)\}/s', $resultado[1], $productos);

        $extraer = function (string $bloque, string $campo): ?string {
            $patron = '/\b' . preg_quote($campo, '/') .
                '\s*:\s*([\'"])(.*?)\1/s';

            if (preg_match($patron, $bloque, $coincidencia)) {
                return $coincidencia[2];
            }

            return null;
        };

        $cantidad = 0;

        DB::transaction(function () use (
            $productos,
            $extraer,
            &$cantidad
        ) {
            foreach ($productos[1] as $bloque) {
                $id = $extraer($bloque, 'id');
                $titulo = $extraer($bloque, 'title');
                $categoria = $extraer($bloque, 'cat');
                $imagen = $extraer($bloque, 'image');
                $coleccion = $extraer($bloque, 'collection');

                if (
                    $id === null ||
                    $titulo === null ||
                    $categoria === null ||
                    $imagen === null ||
                    !preg_match(
                        '/\bprice\s*:\s*(\d+(?:\.\d+)?)/',
                        $bloque,
                        $precio
                    )
                ) {
                    continue;
                }

                Libro::updateOrCreate(
                    ['frontend_id' => $id],
                    [
                        'title' => $titulo,
                        'price' => $precio[1],
                        'cat' => $categoria,
                        'image' => $imagen,
                        'collection' => $coleccion,
                    ]
                );

                $cantidad++;
            }
        });

        $this->command->info(
            "Productos procesados desde el catálogo: {$cantidad}"
        );
    }
}