import type {$Fetch, NitroFetchRequest} from "nitropack";
import type {QuizQuestion} from "~/types/quiz/question/QuizQuestion";
import {toApiQuizQuestion} from "~/types/quiz/question/QuizQuestion";

export default <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
    async addQuestions(quizId: string, questions: QuizQuestion[]): Promise<void> {
        const apiQuestions = questions.map((question: QuizQuestion) => {
            return toApiQuizQuestion(question)
        })

        return fetch<void>(`/api/quizzes/${quizId}/questions`, {
            method: "POST",
            body: apiQuestions
        })
    },
});