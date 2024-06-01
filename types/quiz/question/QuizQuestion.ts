import {
    type ApiMultichoiceQuestion,
    createEmptyMultichoiceQuestion,
    type MultichoiceQuestion,
    toApiMultichoiceQuestion
} from "./MultichoiceQuestion";
import {createEmptyOpenTextQuestion, type OpenTextQuestion, toApiOpenTextQuestion} from "./OpenTextQuestion";
import {
    type ApiOpenQuestion,
    createEmptyOpenNumericQuestion,
    type OpenNumericQuestion,
    toApiOpenNumericQuestion,
} from "~/types/quiz/question/OpenNumericQuestion";

export function createEmptyQuizQuestion(type: "openText" | "openNumeric" | "multichoice") {
    if (type === "openText") return createEmptyOpenTextQuestion();
    else if (type === "openNumeric") return createEmptyOpenNumericQuestion();
    else  return createEmptyMultichoiceQuestion();
}

export type QuizQuestion = MultichoiceQuestion | OpenTextQuestion | OpenNumericQuestion ;
export type ApiQuizQuestion = ApiOpenQuestion | ApiMultichoiceQuestion;

export function toApiQuizQuestion(question: QuizQuestion): ApiQuizQuestion {
    const {type} = question
    if (type === "openText") return toApiOpenTextQuestion(question)
    else if (type === "openNumeric") return toApiOpenNumericQuestion(question);
    else  return toApiMultichoiceQuestion(question);
}