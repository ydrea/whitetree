const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const sizeOf = require("image-size");
const path = require("path");
module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.menu.create(data, { files });
    } else {
      entity = await strapi.services.menu.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.menu });
  },
  // async find(ctx) {
  //   let entity;
  //   if (ctx.query._q) {
  //     entities = await strapi.services.menu.search(ctx.query);
  //   } else {
  //     entities = await strapi.services.menu.find(ctx.query);
  //   }
  //   const menu = sanitizeEntity(entity, {
  //     model: strapi.models.menu,
  //   });
  //   if (menu.img_main !== null) {
  //     const dimensions = sizeOf(
  //       path.resolve(__dirname, "../../../public" + menu.img_main)
  //     );
  //     menu.img_main.width = dimensions.width;
  //     menu.img_main.height = dimensions.height;
  //   }
  //   return menu;
  // },
};
