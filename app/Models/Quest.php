<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    protected $guarded = [
        'id', 'created_at', 'updated_at',
    ];
}
