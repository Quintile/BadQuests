<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Quest;
use Illuminate\Support\Collection;

class Quests
{
    public function __construct(string $threshold)
    {
        //
    }

    public function all(): Collection
    {
        return Quest::all();
    }
}
