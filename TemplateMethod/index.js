import { Order } from "./modules/Order.js";
import { Product } from "./modules/Product.js";
import { User } from "./modules/User.js";

(async () => {
  const product = new Product();
  const user = new User();
  const order = new Order();

  console.log(await product.update({ name: "Pizza", price: 10 }));

  console.log(
    await user.update({ name: "John Doe", email: "john@example.com" })
  );

  console.log(await order.update({ items: ["Pizza"], total: 10 }));
})();
