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
            'question1' => 'required|string',
            'question2' => 'required|string',
            'question3' => 'required|string',
        ]);

        $survey = new Survey();
        $survey->user_id = auth()->id();
        $survey->question1 = $request->input('question1');
        $survey->question2 = $request->input('question2');
        $survey->question3 = $request->input('question3');
        $survey->save();

        return redirect()->route('survey.index')->with('success', 'Ankieta została zapisana.');
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
            'question1' => 'required|string',
            'question2' => 'required|string',
            'question3' => 'required|string',
        ]);

        $survey = Survey::findOrFail($id);

        if ($survey->user_id !== auth()->id()) {
            abort(403, 'Nie masz dostępu do tej ankiety.');
        }

        $survey->question1 = $request->input('question1');
        $survey->question2 = $request->input('question2');
        $survey->question3 = $request->input('question3');
        $survey->save();

        return redirect()->route('survey')->with('success', 'Ankieta została zaktualizowana.');
    }
}
