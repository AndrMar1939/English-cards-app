const getLoading = (state=>state.cardsStore.loading);

const getApiInfo = (state=>state.cardsStore.apiInfo);

const getApiError = (state=>state.cardsStore.apiError);

const getLessonsTitles = (state=>state.cardsStore.lessonsTitles);

const getCardsInLessons = (state=>state.cardsStore.cardsInLesson);

const getCards = (state=>state.cardsStore.cards);

const getLessonMode = (state=>state.cardsStore.lessonMode);




export {getLoading, getApiInfo, getApiError, getCardsInLessons, getCards, getLessonsTitles, getLessonMode};