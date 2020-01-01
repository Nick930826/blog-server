'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {
  async checkLogin() {
    const { ctx, app } = this;
    const userName = ctx.request.body.userName;
    const password = ctx.request.body.password;
    const sql = " SELECT userName FROM admin_user WHERE userName = '" + userName +
                  "' AND password = '" + password + "'";
    const res = await app.mysql.query(sql);
    if (res.length > 0) {
      // 登录成功,进行session缓存
      const openId = new Date().getTime();
      ctx.session.openId = { openId };
      ctx.body = { data: '登录成功', openId };
    } else {
      ctx.body = { data: '登录失败' };
    }
  }

  async getTypeInfo() {
    const { ctx, app } = this;
    const resType = await app.mysql.select('type');
    ctx.body = {
      data: resType,
    };
  }

  // 获得文章列表
  async getArticleList() {
    const { ctx, app } = this;
    const sql = 'SELECT article.id as id,' +
          'article.title as title,' +
          'article.introduce as introduce,' +
          'article.addTime as addTime,' +
          'article.view_count as view_count, ' +
          'type.typeName as typeName ' +
          'FROM article LEFT JOIN type ON article.type_id = type.id ' +
          'ORDER BY article.id DESC ';

    const resList = await app.mysql.query(sql);
    ctx.body = { list: resList };

  }
}

module.exports = MainController;
