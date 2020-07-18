export const HabrComExtractor = {
  domain: 'habr.com',

  title: {
    selectors: ['span.post__title-text'],
  },

  author: {
    selectors: ['.post__user-info > span:nth-child(2)'],
  },

  date_published: {
    selectors: [['span.post__time', 'data-time_published']],
  },
  content: {
    selectors: ['div.post__body_full'],

    // Is there anything in the content you selected that needs transformed
    // before it's consumable content? E.g., unusual lazy loaded images
    transforms: {},

    // Is there anything that is in the result that shouldn't be?
    // The clean selectors will remove anything that matches from
    // the result
    clean: [],
  },
};
