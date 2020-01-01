'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {

  async lists() {
    const { app } = this;
    try {
      const result = await app.mysql.select('article');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async detail(id) {
    const { app } = this;
    if (!id) {
      console.log('id不能为空');
      return null;
    }
    try {
      const result = await app.mysql.get('article', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async type() {
    const { app } = this;
    try {
      const result = await app.mysql.select('type');
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async listByTypeId(id) {
    const { app } = this;
    if (!id) {
      console.log('id不能为空');
      return null;
    }
    try {
      const result = await app.mysql.select('article', {
        where: { type_id: id },
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async addArticle(params) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('article', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteArticle(id) {
    const { app } = this;
    try {
      const result = await app.mysql.delete('article', { id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateArticle(params) {
    const { app } = this;
    try {
      const result = await app.mysql.update('article', params);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async searchByTitle(title) {
    const { app } = this;
    if (!title) {
      console.log('id不能为空');
      return null;
    }
    try {
      const sql = `select * from react_blog.article where title like "%${title}%"`;
      const result = await app.mysql.query(sql);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}

module.exports = ArticleService;
