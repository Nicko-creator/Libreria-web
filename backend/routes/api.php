<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Rutas de la librería

Route::get('/libros', function () {
    return response()->json([
        'libros' => \App\Models\Libro::all([
            'id',
            'frontend_id',
            'title',
            'price',
            'cat',
            'image',
            'collection',
        ]),
    ]);
});

Route::post('/registro', function (Request $request) {
    $datos = $request->validate([
        'nombre' => 'required|string|max:255',
        'apellido' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:8|confirmed',
    ]);

    $usuario = \App\Models\User::create([
        'name' => $datos['nombre'],
        'apellido' => $datos['apellido'],
        'email' => $datos['email'],
        'password' => $datos['password'],
    ]);

    return response()->json([
        'mensaje' => 'Usuario registrado correctamente',
        'usuario' => [
            'id' => $usuario->id,
            'nombre' => $usuario->name,
            'apellido' => $usuario->apellido,
            'email' => $usuario->email,
        ],
    ], 201);
});

Route::post('/login', function (Request $request) {
    $datos = $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
    ]);

    $usuario = \App\Models\User::where('email', $datos['email'])->first();

    if (!$usuario || !\Illuminate\Support\Facades\Hash::check($datos['password'], $usuario->password)) {
        return response()->json([
            'mensaje' => 'Correo electrónico o contraseña incorrectos',
        ], 401);
    }

    $token = $usuario->createToken('token-libreria')->plainTextToken;

    return response()->json([
        'mensaje' => 'Inicio de sesión exitoso',
        'token' => $token,
        'usuario' => [
            'id' => $usuario->id,
            'nombre' => $usuario->name,
            'apellido' => $usuario->apellido,
            'email' => $usuario->email,
        ],
    ]);
});

Route::post('/contacto', function (Request $request) {
    $datos = $request->validate([
        'nombre' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'asunto' => 'required|string|max:255',
        'mensaje' => 'required|string|max:5000',
    ]);

    $contacto = \App\Models\MensajeContacto::create($datos);

    return response()->json([
        'mensaje' => 'Mensaje enviado correctamente',
        'contacto' => [
            'id' => $contacto->id,
            'nombre' => $contacto->nombre,
            'email' => $contacto->email,
            'asunto' => $contacto->asunto,
        ],
    ], 201);
});

Route::post('/pedidos', function (Request $request) {
    $datos = $request->validate([
        'items' => 'required|array|min:1',
        'items.*.id' => 'required|integer|exists:libros,id',
        'items.*.cantidad' => 'required|integer|min:1',
    ]);

    $pedido = \Illuminate\Support\Facades\DB::transaction(function () use ($datos) {
        $total = 0;
        $detalles = [];

        foreach ($datos['items'] as $item) {
            $libro = \App\Models\Libro::findOrFail($item['id']);

            $precio = (float) $libro->price;
            $cantidad = (int) $item['cantidad'];

            $total += $precio * $cantidad;

            $detalles[] = [
                'libro_id' => $libro->id,
                'cantidad' => $cantidad,
                'precio' => $precio,
            ];
        }

        $pedido = \App\Models\Pedido::create([
            'numero_pedido' => 'PED-' . strtoupper(
                \Illuminate\Support\Str::random(12)
            ),
            'total' => $total,
            'estado' => 'pendiente',
        ]);

        foreach ($detalles as $detalle) {
            \App\Models\DetallePedido::create([
                'pedido_id' => $pedido->id,
                'libro_id' => $detalle['libro_id'],
                'cantidad' => $detalle['cantidad'],
                'precio' => $detalle['precio'],
            ]);
        }

        return $pedido;
    });

    return response()->json([
        'mensaje' => 'Pedido realizado correctamente',
        'numero_pedido' => $pedido->numero_pedido,
        'pedido_id' => $pedido->id,
        'total' => $pedido->total,
        'estado' => $pedido->estado,
    ], 201);
});