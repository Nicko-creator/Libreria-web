<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        'user_id',
        'numero_pedido',
        'total',
        'estado',
    ];

    public function detalles()
    {
        return $this->hasMany(DetallePedido::class);
    }
}