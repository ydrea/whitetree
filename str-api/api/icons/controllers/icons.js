"use strict";

/**
 * Read the documentation
 * https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.icons.create(data, { files });
    } else {
      entity = await strapi.services.icons.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.icons });
  },
  async update(ctx) {
    const { id } = ctx.params;

    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.icons.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.icons.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.icons });
  },
};
