/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

const sectionComponent = path.resolve('src/template/section.js')
const page = path.resolve('src/template/page.js')

exports.createPages = ({
  actions
}) => {

  const depth = 10;

  actions.createPage({
    path: `/pages`,
    component: sectionComponent,
    links: (new Array(depth).join(' ').split(' '))
      .map((_, x) => `/page/${x}`)
  })

  for (let i = 0; i < depth; i++) {
    actions.createPage({
      path: `/page/${i}`,
      component: path.resolve('src/template/section.js'),
      context: {
        links: (new Array(depth).join(' ').split(' '))
          .map((_, x) => `/page/${i}/section/${x}`)
      }
    });

    for (let j = 0; j < depth; j++) {
      actions.createPage({
        path: `/page/${i}/section/${j}`,
        component: path.resolve('src/template/section.js'),
        context: {
          links: (new Array(depth).join(' ').split(' '))
            .map((_, x) => `/page/${i}/section/${j}/option/${x}`)
        }
      });

      for (let k = 0; k < depth; k++) {
        actions.createPage({
          path: `/page/${i}/section/${j}/option/${k}`,
          component: path.resolve('src/template/section.js'),
          context: {
            links: (new Array(depth).join(' ').split(' '))
              .map((_, x) => `/page/${i}/section/${j}/option/${k}/choice/${x}`)
          }
        });

        for (let l = 0; l < depth; l++) {
          actions.createPage({
            path: `/page/${i}/section/${j}/option/${k}/choice/${l}`,
            component: page
          });
        }
      }

    }
  }
};