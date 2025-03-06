function randomMessagingSessionId(context, events, done) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = context.vars.messageLength || 8;
    const prefix = "0MwHZ00000";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    context.vars.messagingSessionId = prefix + result;
    return done();
  }
  
  module.exports = {
    randomMessagingSessionId
  };
  