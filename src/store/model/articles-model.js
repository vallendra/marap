import { thunk, action } from 'easy-peasy';
import httpHandler from 'utils/http-handler';

const Articles = {
  items: {},

  fetchAction: action((state, payload) => {
    state.items = payload;
  }),

  getArticles: thunk(async actions => {
    const articles = await httpHandler.getRequest(
      'https://news.ralali.com/wp-json/wp/v2/posts'
    );
    actions.fetchAction(articles);
  })
};

export default Articles;
