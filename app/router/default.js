'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/lists', controller.default.home.lists);
  router.get('/default/detail/:id', controller.default.home.detail);
  router.get('/default/type', controller.default.home.type);
  router.get('/default/list_by_typeid/:id', controller.default.home.listByTypeId);
};
