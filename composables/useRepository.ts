import useQuizRepository from "~/utils/useQuizRepository";

export default () => {
    const {$api} = useNuxtApp();
    const quizRepo = useQuizRepository($api);
    return {
        quizRepo,
    };
};