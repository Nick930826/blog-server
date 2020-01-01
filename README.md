# nick-blog-server

## 前台接口
#### 文章列表： /default/lists
##### 请求类型 get
##### 参数: 无

#### 文章详情： /default/detail/:id
##### 请求类型 get
##### 参数: /1

#### 文章标签： /default/type
##### 请求类型 get
##### 参数: 无

#### 通过id获取文章列表： /default/list_by_typeid/:id
##### 请求类型 get
##### 参数: /2; /3

## 后台接口

#### 添加文章： /admin/add_article
##### 请求类型 post
##### 参数:
```
{
	"title": "我是帅哥",
	"type_id": 2,
	"introduce": "这是一个postman创建的文章",
	"article_content": "爸爸吃酒我吃肉",
	"view_count": "291"
}
```

#### 删除文章： /admin/delete_article
##### 请求类型 post
##### 参数：
```
{
	"id": 1
}
```

#### 编辑文章： /admin/update_article
##### 请求类型 post
##### 参数：
```
{
	"id": 1,
  "title": "我是帅哥",
	"type_id": 2,
	"introduce": "这是一个postman创建的文章",
	"article_content": "爸爸吃酒我吃肉",
	"view_count": "291"
}
```

#### 查询文章： /admin/search_article
##### 请求类型 get
##### 参数：?title='你好'



