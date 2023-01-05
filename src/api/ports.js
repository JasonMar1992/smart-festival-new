export default {
  business: {
    getWechatSign: '/api/getWechatSign',
    getOpenId: '/api/getInfo',
    getLuck: '/api/getLuck',
    addInfo: '/api/addInfo',
    getShareCount: '/api/getShareCount',
    addShare: '/api/addShare',
    getSelfInfo: '/api/getSelfInfo',
    getMyAwards: '/api/getMyAwards',
    getAwardsWithMobileShop: '/api/getAwardsWithMobileShop',
    verifyAward: '/api/verifyAward/',
  },
  wx: {
    getToken: '/wx/cgi-bin/token',
    getTicket: '/wx/cgi-bin/ticket/getticket',
  },
  newyear: {
    getWechatSign: '/api/getWechatSign',
    getOpenId: '/api/newYear/getInfo',
    getShareCount: '/api/newYear/getShareCount',
    addShare: '/api/newYear/addShare',
    addCard: '/api/newYear/addCard',
    getCard: '/api/newYear/getCard',
  },
  building: {
    getOpenId: '/api/building/getInfo',
    getCards: '/api/building/getCards',
    getCount: '/api/building/getCount',
    getSelfInfo: '/api/building/getSelfInfo',
    draw: '/api/building/draw',
    send: '/api/building/send',
  },
  answer: {
    getOpenId: '/api/answer/getInfo',
    getSelfInfo: '/api/answer/getSelfInfo',
    updateUserInfo: "/api/answer/updateUserInfo",
    getRank: '/api/answer/getRank',
    getScore: '/api/answer/getScore',
    addQuestion: "/api/answer/addQuestion",
    finishQuestion: "/api/answer/finishQuestion",
  },
  drum: {
    getOpenId: '/api/drum/getInfo',
    getSelfInfo: '/api/drum/getSelfInfo',
    updateUserInfo: "/api/drum/updateUserInfo",
    getCards: '/api/drum/getCards',
    offline: '/api/drum/offline',
    getOffline: '/api/drum/getOffline',
    getUserInfo: '/api/drum/getUserInfo',
    offlineCheck: '/api/drum/offlineCheck',
    subscribe: '/api/drum/subscribe',
  },
};
