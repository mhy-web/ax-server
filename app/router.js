'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // user
  // router.post('/user/update', controller.user.updateUser);
  router.post('/user/edit', controller.user.userEdit);
  router.get('/login', controller.user.login);
  router.get('/logout', controller.user.logout);
  router.get('/user/info', controller.user.userInfo);

  // home page
  router.get('/', controller.home.homeInfo);
  router.get('/index/info', controller.home.homeInfo);
  router.get('/project/list', controller.home.projectList);
  router.get('/project/detail', controller.home.projectDetail);
  router.get('/activity/list', controller.home.activityList);
  router.get('/activity/detail', controller.home.activityDetail);
  router.post('/activity/add', controller.home.activityAdd);
};
