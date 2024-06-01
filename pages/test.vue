<script setup lang="ts">
import {createEmptyQuizQuestion} from "~/types/quiz/question/QuizQuestion";

const {quizRepo} = useRepository();
const newQuestions = [createEmptyQuizQuestion("openNumeric"), createEmptyQuizQuestion("multichoice")]
const {data} = await useAsyncData('test', () => quizRepo.addQuestions("1", newQuestions ))
</script>

<template>
<h1>
  Test
</h1>
  {{data}}
</template>

<style scoped>

</style>