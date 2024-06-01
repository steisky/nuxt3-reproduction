import type {ApiOpenQuestion} from "~/types/quiz/question/OpenNumericQuestion";

export function createEmptyOpenTextQuestion(): OpenTextQuestion {
    return {
        type: "openText",
        answer: "",
        question: "",
        explanation: "",
    }
}

export type OpenTextQuestion = {
    id?: string;
    type: "openText";
    answer: string;
    question: string;
    explanation: string;
};

export function toApiOpenTextQuestion(question: OpenTextQuestion): ApiOpenQuestion {
    if (question.id) {
        return {
            id: question.id,
            type: "open",
            answer: question.answer!,
            explanation: question.explanation,
            question: question.question
        }
    } else {
        return {
            type: "open",
            answer: question.answer!,
            explanation: question.explanation,
            question: question.question
        }
    }
}