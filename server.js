console.log('Hier komt je server voor Sprint 10.')

console.log('Gebruik uit Sprint 9 alleen de code die je mee wilt nemen.')

console.log('Zet \'m op!')app.get('/', async function (request, response) {
  const parms = {
    'fields': 'name,image,shop_url,description,shop_name,slug,url,amount, id',
    'filter[tags][_icontains]': 'moederdag',
    'fields': '*,img.width,img.height'
  }
