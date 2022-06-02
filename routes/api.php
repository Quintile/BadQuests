<?php

use App\Http\Controllers\QuestController;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'quests',
], static function (Router $router): void {
    $router->get('', [QuestController::class, 'index']);
    $router->post('', [QuestController::class, 'store']);
});
