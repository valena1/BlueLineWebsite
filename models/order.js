var order = function(first, last, email, phone, date, message) {
    var orderModel = {first: first, last: last, email: email, phone: phone, 
    date: date, message: message};
    return orderModel;
  };
  
  module.exports.order = order;