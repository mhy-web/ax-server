'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  // console.log('controller', controller);
  // user
  router.post('/user/edit', controller.h5.user.userEdit);
  router.get('/signup', controller.h5.user.signUp);
  router.post('/login', controller.h5.user.login);
  router.get('/logout', controller.h5.user.logout);
  router.get('/user/info', jwt, controller.h5.user.userInfo);
  // router.post('/user/update', jwt, controller.h5.user.updateUser);

  // home page
  router.get('/egg', controller.h5.home.index);
  router.get('/', jwt, controller.h5.home.homeInfo);
  router.get('/index/info', controller.h5.home.homeInfo);
  router.get('/project/list', controller.h5.home.projectList);
  router.get('/project/detail', controller.h5.home.projectDetail);
  router.get('/activity/list', controller.h5.home.activityList);
  router.get('/activity/detail', controller.h5.home.activityDetail);
  router.post('/activity/add', controller.h5.home.activityAdd);
  router.post('/activity/update', controller.h5.home.activityUpdate);
  router.get('/personal', jwt, controller.h5.home.homeInfo);
  router.post('/apply/submit', jwt, controller.h5.home.homeInfo);
  router.get('/apply/list', jwt, controller.h5.home.homeInfo);
  router.get('/invate/list', jwt, controller.h5.home.homeInfo);

  // admin
  router.get('/admin/banner/list', controller.admin.banner.getBannerList);
  router.post('/admin/banner/update', controller.admin.banner.updateOrCreateBanner);
  router.get('/api/range', controller.h5.range.rangeFile);
};
