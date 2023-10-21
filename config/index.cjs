/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbf5ec5ad90bad5bf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'dd7b77aae11f7417fd942786ba967d1a',

  PROVINCE: '广东',
  CITY: '广州',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'Gemini',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohjpI6sA_wE7aT5wN2OJUtSsF5BY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'IuNECnYuD5_FHm08vGdjylrW4Rb9CaaTk-xoEBQqH2Y',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-13',
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'gh_0891edb17cdcgh_0891edb17cdc',
    }
  ],

}

module.exports = USER_CONFIG

