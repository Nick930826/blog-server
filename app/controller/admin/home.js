'use strict';

const Controller = require('egg').Controller;
// const moment = require('moment');

class HomeController extends Controller {
  async addArticle() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    };
    const result = await ctx.service.article.addArticle(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '发布失败',
      };
    }
  }

  async deleteArticle() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const result = await ctx.service.article.deleteArticle(id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '删除失败',
      };
    }
  }

  async updateArticle() {
    const { ctx } = this;
    const params = {
      ...ctx.request.body,
    };
    const result = await ctx.service.article.updateArticle(params);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '编辑失败',
      };
    }
  }

  async searchByTitle() {
    const { ctx } = this;
    const { title } = ctx.query;
    const result = await ctx.service.article.searchByTitle(title);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询失败',
      };
    }
  }

  async getArticleById() {
    const { ctx } = this;
    console.log('ctx.params', ctx.params);
    const result = await ctx.service.article.detail(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '获取失败',
      };
    }
  }
}

module.exports = HomeController;
