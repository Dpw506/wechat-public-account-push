/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx43a1d9db68c091ec',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c792680ced5f29174de8a42b16eeeb28',

  PROVINCE: "宁夏",
  CITY: "银川",

  USERS: [
    {
      // 想要发送的人的名字
      name: 'sonuui🍧',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okIOa6NqtnSdZgMmrJuBGv14Jiyw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GTPD0sAhth5x0VTTg5x2YeVj55DWEEUm6sBs8zdjY7Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小董的宝贝', year: '1996', date: '10-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小董的宝贝', year: '1996', date: '11-30',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '03-09',
        },
      ],
      love_day:"2019-03-09",
      birthdays: [
        {"name": "宝贝", "year": "1996", "data" : "10-20", "type": "new"},
        {"name": "宝贝", "year": "1996", "data" : "10-16", "type": "new"}
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-03-09' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'GTPD0sAhth5x0VTTg5x2YeVj55DWEEUm6sBs8zdjY7Q',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'okIOa6M9gXTWRzZsX82ECrvVZwEc',
    }
  ],

}

module.exports = USER_CONFIG

