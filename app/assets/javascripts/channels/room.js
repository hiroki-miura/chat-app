App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
    console.log('connected')
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(message) {
    alert(message)
  },

  speak: function(content) {
    return this.perform('speak',{message: "ハロー！"});
  }
});
