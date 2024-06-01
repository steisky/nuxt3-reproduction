export function createEmptyMultichoiceQuestion(): MultichoiceQuestion {
    return {
        type: "multichoice",
        answers: ["", ""],
        question: "",
        explanation: "",
    }
}

export type MultichoiceQuestion = {
    id?: string;
  type: "multichoice";
  question: string;
  explanation: string;
  answers: string[];
};

export type ApiMultichoiceQuestion = {
    id?: string;
    type: "multichoice";
    question: string;
    explanation: string;
    answers: string[];
}

export function toApiMultichoiceQuestion(question: MultichoiceQuestion): ApiMultichoiceQuestion {
    const answers: string[] = question.answers;

    if (question.id) {
        return {
            id: question.id,
            type: "multichoice",
            answers,
            explanation: question.explanation,
            question: question.question
        }
    } else {
        return {
            type: "multichoice",
            answers,
            explanation: question.explanation,
            question: question.question
        }
    }
}