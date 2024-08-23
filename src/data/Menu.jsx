import BurgerImage from "../assets/images/burger.png";
import PizzaImage from "../assets/images/pizza.png";
import IceCreamImage from "../assets/images/icecream.png";
import RamenImage from "../assets/images/ramen.png";
import CupcakeImage from "../assets/images/cupcake.png";
import SodaImage from "../assets/images/soda.png";
import JuiceImage from "../assets/images/juice.png";
import BurgerContent from "../assets/images/burgerContent.jpg";
import IceCreamContent from "../assets/images/iceCreamContent.jpg";
import RamenContent from "../assets/images/ramenContent.jpg";
import PizzaContent from "../assets/images/pizzaContent.jpg";
import CupcakeContent from "../assets/images/cupcakeContent.jpg";
import SodaContent from "../assets/images/sodaContent.jpg";
import JuiceContent from "../assets/images/juiceContent.jpg";

export const menuItems = [
  {
    id: 0,
    name: "burger",
    title: "Burger",
    image: BurgerImage,
  },
  {
    id: 1,
    name: "icecream",
    title: "Ice Cream",
    image: IceCreamImage,
  },
  {
    id: 2,
    name: "ramen",
    title: "Ramen",
    image: RamenImage,
  },
  {
    id: 3,
    name: "pizza",
    title: "Pizza",
    image: PizzaImage,
  },
  {
    id: 4,
    name: "cupcake",
    title: "Cupcake",
    image: CupcakeImage,
  },
  {
    id: 5,
    name: "soda",
    title: "Soda",
    image: SodaImage,
  },
  {
    id: 6,
    name: "juice",
    title: "Juice",
    image: JuiceImage,
  },
];

export const menuContent = [
  // Burgers
  {
    id: 0,
    name: "burger",
    title: "Double Cheese Burger",
    price: 7.5,
    image: BurgerContent,
  },
  {
    id: 1,
    name: "burger",
    title: "Bacon Burger",
    price: 8.0,
    image: BurgerContent,
  },
  {
    id: 2,
    name: "burger",
    title: "Veggie Burger",
    price: 6.5,
    image: BurgerContent,
  },
  // Ice Cream
  {
    id: 3,
    name: "icecream",
    title: "Vanilla Ice Cream",
    price: 3.0,
    image: IceCreamContent,
  },
  {
    id: 4,
    name: "icecream",
    title: "Chocolate Ice Cream",
    price: 3.5,
    image: IceCreamContent,
  },
  {
    id: 5,
    name: "icecream",
    title: "Strawberry Ice Cream",
    price: 3.2,
    image: IceCreamContent,
  },
  // Ramen
  {
    id: 6,
    name: "ramen",
    title: "Spicy Ramen Bowl",
    price: 9.0,
    image: RamenContent,
  },
  {
    id: 7,
    name: "ramen",
    title: "Chicken Ramen Bowl",
    price: 8.5,
    image: RamenContent,
  },
  {
    id: 8,
    name: "ramen",
    title: "Vegetable Ramen Bowl",
    price: 8.0,
    image: RamenContent,
  },
  // Pizza
  {
    id: 9,
    name: "pizza",
    title: "Pepperoni Pizza",
    price: 12.0,
    image: PizzaContent,
  },
  {
    id: 10,
    name: "pizza",
    title: "Margherita Pizza",
    price: 11.0,
    image: PizzaContent,
  },
  {
    id: 11,
    name: "pizza",
    title: "BBQ Chicken Pizza",
    price: 13.0,
    image: PizzaContent,
  },
  // Cupcake
  {
    id: 12,
    name: "cupcake",
    title: "Chocolate Cupcake",
    price: 2.5,
    image: CupcakeContent,
  },
  {
    id: 13,
    name: "cupcake",
    title: "Vanilla Cupcake",
    price: 2.5,
    image: CupcakeContent,
  },
  {
    id: 14,
    name: "cupcake",
    title: "Red Velvet Cupcake",
    price: 2.8,
    image: CupcakeContent,
  },
  // Soda
  {
    id: 15,
    name: "soda",
    title: "Cola Soda",
    price: 1.5,
    image: SodaContent,
  },
  {
    id: 16,
    name: "soda",
    title: "Lemonade",
    price: 1.5,
    image: SodaContent,
  },
  {
    id: 17,
    name: "soda",
    title: "Orange Soda",
    price: 1.5,
    image: SodaContent,
  },
  // Juice
  {
    id: 18,
    name: "juice",
    title: "Fresh Orange Juice",
    price: 4.0,
    image: JuiceContent,
  },
  {
    id: 19,
    name: "juice",
    title: "Apple Juice",
    price: 4.0,
    image: JuiceContent,
  },
  {
    id: 20,
    name: "juice",
    title: "Carrot Juice",
    price: 4.0,
    image: JuiceContent,
  },
];

export const footerContent = [
  {
    title: "About",
    content: ["About Us", "Features", "News", "Menu"],
  },
  {
    title: "Company",
    content: ["Why Fudo", "Partner With Us", "FAQ", "Blog"],
  },
  {
    title: "Support",
    content: [
      "Account",
      "Support Center",
      "Feedback",
      "Contact Us",
      "Accessibility",
    ],
  },
];
