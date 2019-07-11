'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // console.log('controller', controller);
  // user
  // router.post('/user/update', controller.h5.user.updateUser);
  router.post('/user/edit', controller.h5.user.userEdit);
  router.get('/login', controller.h5.user.login);
  router.get('/logout', controller.h5.user.logout);
  router.get('/user/info', controller.h5.user.userInfo);

  // home page
  router.get('/', controller.h5.home.homeInfo);
  router.get('/index/info', controller.h5.home.homeInfo);
  router.get('/project/list', controller.h5.home.projectList);
  router.get('/project/detail', controller.h5.home.projectDetail);
  router.get('/activity/list', controller.h5.home.activityList);
  router.get('/activity/detail', controller.h5.home.activityDetail);
  router.post('/activity/add', controller.h5.home.activityAdd);
  router.post('/activity/update', controller.h5.home.activityUpdate);

  // admin
  router.get('/admin/banner/list', controller.admin.banner.getBannerList);
};
