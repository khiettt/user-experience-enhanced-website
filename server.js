console.log('Hier komt je server voor Sprint 10.')
import express, { request, response } from 'express'

console.log('Gebruik uit Sprint 9 alleen de code die je mee wilt nemen.')
// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

console.log('Zet \'m op!')app.get('/', async function (request, response) {
// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Fetch de data die ik nodig heb
const apiResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_products')

// ik krijg antwoord terug
const apiResponseJSON = await apiResponse.json()

// console.log(apiResponseJSON)

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.get('/', async function (request, response) {
  const parms = {
    'fields': 'name,image,shop_url,description,shop_name,slug,url,amount, id',
    'filter[tags][_icontains]': 'moederdag',
    'fields': '*,img.width,img.height'
  }

  const productResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_products/?' + new URLSearchParams(parms))

  const productResponseJSON = await productResponse.json()
  // console.log(productResponseJSON.data)
  response.render('index.liquid', { products: productResponseJSON.data })
})


app.get("/wishlist", async function (req, res) {
  const params = {
    fields:
      "liked_products.milledoni_products_id.slug," +
      "liked_products.milledoni_products_id.image," +
      "liked_products.milledoni_products_id.name," +
      "liked_products.milledoni_products_id.amount," +
      "liked_products.milledoni_products_id.id",
  };
 
  const productResponse = await fetch(
    "https://fdnd-agency.directus.app/items/milledoni_users/60/?" +
      new URLSearchParams(params),
  );
 
  const productResponseJSON = await productResponse.json();
  // console.log({ productResponseJSON.data.liked_products})
  res.render("wishlist.liquid", {
    likedProducts: productResponseJSON.data.liked_products,
  });
});

