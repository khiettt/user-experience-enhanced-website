import express, { request, response } from 'express'

import { Liquid } from 'liquidjs';


const app = express()

// Fetch de data die ik nodig heb
const baseUrl = 'https://fdnd-agency.directus.app/items/milledoni_products'

// ik krijg antwoord terug
const apiResponseJSON = await apiResponse.json()

// console.log(apiResponseJSON)

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }))


app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

app.set('views', './views')

app.get('/', async function (request, response) {
  const parms = {
    'fields': 'name,image,shop_url,description,shop_name,slug,url,amount, id',
    'filter[tags][_icontains]': 'moederdag',
    'fields': '*,img.width,img.height'
  }

  const productResponse = await fetch(`${baseUrl}?${params.toString()}` + new URLSearchParams(parms))

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

app.post('/:id', async function (request, response) {

  // console.log(request.body)
  await fetch("https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1",
    {
      method: "POST",
      body: JSON.stringify({
        milledoni_users_id: 60,
        milledoni_products_id: request.params.id,
      }),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  )

  response.redirect(303, '/')
})

app.post('/remove/:id', async function (request, response) {
  const productId = request.params.id;
  // 1. koppeling ophalen 
  const res= await fetch (
    "https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1?filter[milledoni_products_id][_eq]=" + productId + "&filter[milledoni_users_id][_eq]=60" 
  )

  const data = await res.json();
  const relationId = data.data[0]?.id;

  // 2. verwijderen
  if (relationId){
    await fetch(
      `https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1/${relationId}`,
      {
        method: "DELETE",
      }
    )
  }

  response.redirect(303, '/wishlist');
});
// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`)
})

app.use((req, res, next) => {
  res.status(404).send("Sorry can not find page")
})