'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order'
, ({strapi}) => ({
    confirmOrder: async (ctx, next) => {
      ctx.body = "ok"
    },
// //confirm order
      confirmOrder: async (ctx, next) => {
        const {id} = ctx.request.params
        console.log(id);
      },
  }));
