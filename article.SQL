create database react_blog;

use react_blog;

create table article(
  id int(10) not null auto_increment comment '文章编号',
  title varchar(80) default null  comment '文章类型编号',
  type_id varchar(30) default null comment '类型',
  introduce varchar(300) default null comment '文章简介',
  article_content text default null comment '文章主体内容',
  addTime varchar(300) default null comment '发布时间',
  view_count int(10) not null comment '浏览次数',
  primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';

insert into article(title, type_id, introduce, article_content, addTime, view_count)
values('你好啊32兄弟231111', 2, '嘻嘻哈哈的3333', '哈哈大撒333上大撒上d嘻的哈哈大撒上大撒上d嘻的哈哈大撒上大撒上d嘻的哈哈大撒上大撒上d嘻的哈哈大撒上大撒上d嘻的', '2019-10-10 10:20:40', 2132333);


create table type(
  id int(10) not null auto_increment comment '类型编号',
  typeName varchar(30) default null comment '文章类型名称',
  orderNum int(10) default null comment '类型排序编号',
  icon varchar(30) default null comment '类型icon',
  primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '类型表';

insert into type(typeName, orderNum, icon)
values('视频教程', 1, 'youtube');

insert into type(typeName, orderNum, icon)
values('视频教程', 2, 'message');

insert into type(typeName, orderNum, icon)
values('视频教程', 3, 'smile');


create table admin_user(
  id int(10) not null auto_increment comment '用户编号',
  userName varchar(80) default null  comment '用户名',
  password varchar(80) default null  comment '密码',
  primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '用户表';

insert into admin_user(userName, password)
values('nickchen', 123);