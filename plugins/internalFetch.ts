export default defineNuxtPlugin((nuxtApp) => {

  const api = $fetch.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return {
    provide: {
      api,
    },
  };
});