<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Quest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class QuestController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Quest::all());
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
