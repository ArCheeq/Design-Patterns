import { HTMLRenderer } from "./modules/HtmlRenderer.js";
import { JsonRenderer } from "./modules/JsonRenderer.js";
import { Product, ProductPage } from "./modules/ProductPage.js";
import { SimplePage } from "./modules/SimplePage.js";
import { XmlRenderer } from "./modules/XmlRenderer.js";

const htmlRenderer = new HTMLRenderer();
const jsonRenderer = new JsonRenderer();
const xmlRenderer = new XmlRenderer();

const simplePage = new SimplePage(
  htmlRenderer,
  "Simple Page",
  "This is a simple page content."
);
const product = new Product(
  1,
  "Product Name",
  "Product Description",
  "product.jpg"
);
const productPage = new ProductPage(jsonRenderer, product);

console.log("Simple Page (HTML):");
console.log(simplePage.render());

console.log("Product Page (JSON):");
console.log(productPage.render());

productPage.renderer = xmlRenderer;

console.log("Product Page (XML):");
console.log(productPage.render());
