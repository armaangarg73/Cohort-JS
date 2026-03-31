function prepareOrderCB(dish, cb) {
  setTimeout(() => cb(null, { dish, status: "prepared" }), 100);
}
function pickupOrderCB(order, cb) {
  setTimeout(() => cb(null, { ...order, status: "picked-up" }), 100);
}
function deliverOrderCB(order, cb) {
  setTimeout(() => cb(null, { ...order, status: "delivered" }), 100);
}

// pending , fulfilled , rejected

function prepareOrder(dish) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dish) {
        reject(new Error("No dish is there"));
        return;
      }
      console.log(`${dish} is ready`);
      resolve({ dish, status: "prepared" });
    }, 100);
  });
}
function pickupOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!order) {
        reject(new Error("No order is there"));
        return;
      }
      console.log(`${order} is ready to be picked up`);
      resolve({ order, status: "picked up" });
    }, 100);
  });
}
function deliverOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!order) {
        reject(new Error("No order is there"));
        return;
      }
      console.log(`${order} is ready to be delivered`);
      resolve({ order, status: "delivered" });
    }, 100);
  });
}
// Consume
prepareOrder("Coffee")
  //-> .then handles success or resolve case
  .then((order) => pickupOrder(order))
  .then((order) => deliverOrder(order))
  .catch()

