// 获取计划的账单详情
const cloud = require('wx-server-sdk')

cloud.init({
  traceUser: true,
  // env: 'test-gp4ml'
  env:'apgy-876ffd'
});

// 云函数入口函数
const db = cloud.database();
exports.main = async (event, context) => {
  return await db.collection('bookList').where({
    openid:event.userInfo.openId,
    planId:event.planId
  }).get();
}