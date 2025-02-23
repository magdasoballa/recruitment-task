<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SurveyController extends Controller
{
    public function index(): Response
    {
        $survey = auth()->user()->survey;

        if ($survey) {
            return Inertia::render('Survey/SurveyCompleted', [
                'survey' => $survey,
            ]);
        }

        return Inertia::render('Survey/Survey');
    }

    public function store(Request $request)
    {
        $request->validate([
            'age' => 'required|string',
            'experience' => 'required|string',
            'languages' => 'required|array',
        ]);


        $languages = implode(',', $request->input('languages'));

        $survey = new Survey();
        $survey->user_id = auth()->id();
        $survey->age = $request->input('age');
        $survey->experience = $request->input('experience');
        $survey->languages = $languages;
        $survey->save();

        return redirect()->route('survey')->with('success', 'Ankieta została zapisana.');
    }

    public function edit($id)
    {
        $survey = Survey::findOrFail($id);

        if ($survey->user_id !== auth()->id()) {
            abort(403, 'Nie masz dostępu do tej ankiety.');
        }

        return Inertia::render('Survey/SurveyEdit', [
            'survey' => $survey
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'age' => 'required|string',
            'experience' => 'required|string',
            'languages' => 'required|string',
        ]);

        $survey = Survey::findOrFail($id);

        if ($survey->user_id !== auth()->id()) {
            abort(403, 'Nie masz dostępu do tej ankiety.');
        }

        $survey->age = $request->input('age');
        $survey->experience = $request->input('experience');
        $survey->languages = $request->input('languages');
        $survey->save();

        return redirect()->route('survey')->with('success', 'Ankieta została zaktualizowana.');
    }
}
