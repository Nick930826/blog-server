'use strict';

module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.post('/admin/login', controller.admin.main.checkLogin);
  router.post('/admin/add_article', adminauth, controller.admin.home.addArticle);
  router.post('/admin/delete_article', adminauth, controller.admin.home.deleteArticle);
  router.post('/admin/update_article', adminauth, controller.admin.home.updateArticle);
  router.get('/admin/detail/:id', adminauth, controller.admin.home.getArticleById);
  router.get('/admin/search_article', adminauth, controller.admin.home.searchByTitle);
  router.get('/admin/type_info', adminauth, controller.admin.main.getTypeInfo);
  router.get('/admin/get_article_list', adminauth, controller.admin.main.getArticleList);
};
