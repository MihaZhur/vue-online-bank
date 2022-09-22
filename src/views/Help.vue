<template>
  <app-page back title="Помощь">
    <questions-item
      v-for="question in questions"
      :question="question"
      :key="question.title"
    ></questions-item>
  </app-page>
</template>

<script>
import AppPage from "../components/ui/AppPage.vue";
import QuestionsItem from "../components/QuestionsItem.vue";
export default {
  setup() {
    const questions = [
      {
        title: "Что тут интересного?",
        text: "Мы може увидет список сотрудников",
      },
      {
        title: "Что мы можем желать с сотрудниками?",
        text:
          "С сотрудниками мы можем, менять статус, удалять, добавлять нового соррудника",
      },
    ];
    return {
      questions,
    };
  },
  components: {
    AppPage,
    QuestionsItem,
  },
};
</script>
