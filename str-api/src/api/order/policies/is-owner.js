'use strict';

const utils = require("@strapi/utils")
const {PolicyError} = utils.errors

 module.exports = async (policyContext, config, { strapi }) => {

const { id } = policyContext.request.params
 const user = policyContext.state.user
 const order = await strapi.entityService.findOne("api::order.order", id, {
   populate: ["owner"]
 })

 if(order.owner.id === user.id){
  // Go ahead to excecute
  return true;
}
// Error thrown when condition not met
throw PolicyError('Nekje moci!')
 }