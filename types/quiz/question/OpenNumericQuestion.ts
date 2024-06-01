export function createEmptyOpenNumericQuestion(): OpenNumericQuestion {
    return {
        type: "openNumeric",
        answer: null,
        question: "",
        explanation: "",
    }
}

export type OpenNumericQuestion = {
    id?: string;
    type: "openNumeric";
    answer: number | null;
    question: string;
    explanation: string;
};

export type ApiOpenQuestion = {
    id?: string;
    type: "open";
    answer: string;
    question: string;
    explanation: string;
}

export function toApiOpenNumericQuestion(question: OpenNumericQuestion): ApiOpenQuestion {
    if (question.id) {
        return {
            id: question.id,
            type: "open",
            answer: question.answer!.toString(),
            explanation: question.explanation,
            question: question.question
        }
    } else {
        return {
            type: "open",
            answer: question.answer!.toString(),
            explanation: question.explanation,
            question: question.question
        }
    }
}