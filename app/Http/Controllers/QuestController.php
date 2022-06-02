<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Quest;
use App\Services\Quests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class QuestController extends Controller
{
    public function index(Quests $quests): JsonResponse
    {
        return response()->json($quests->all());
    }

    public function store(Request $request): JsonResponse
    {
        $this->validate($request, [
            'name' => 'required',
            'zone' => 'required',
        ]);

        $quest = Quest::create($request->all());

        return response()->json($quest);
    }
}
