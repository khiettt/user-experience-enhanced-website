
# Enhanced website
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Als je opzoek bent naar een cadeau voor iemand, is milledoni de website voor je zoektocht. Ze hebben cadeautjes voor alle leeftijden en gelegenheden en je kan samen met de chatbox de juiste cadeau vinden. Voor deze sprint ben ik mij gaan focussen op de emty state van de wishlist pagina. Als een gebruiker wilt weten hoeveel cadeaus zijn opgeslagen in zijn/haar lijstje kan de dat makkelijk zien

geïnteresseerd in cadeaus zoeken voor je familie of vrienden, bezoek dan Milledoni.com.

## Gebruik
Als gebruiker wil je weten of je cadeau is opgeslagen en hoeveel cadeaus je hebt opgeslagen in je lijst. 


_**Succes state**_

<img width="800" height="600" alt="Scherm­afbeelding 2026-06-20 om 14 26 16" src="https://github.com/user-attachments/assets/4d0b09df-978f-4696-b95d-e128ff438972" />

<hr>

_**Met "Size" wordt er aangegeven hoeveel producten worden opgeslagen**_

<img width="380" height="803" alt="Scherm­afbeelding 2026-06-18 om 18 14 40" src="https://github.com/user-attachments/assets/689629dc-d29f-43db-8bf0-1205d5f40d6e" />

<img width="380" height="803" alt="Scherm­afbeelding 2026-06-18 om 18 17 29" src="https://github.com/user-attachments/assets/f18941a8-e85d-44b2-9155-e1ffb8d50b36" />


## Kenmerken

Om mijn ontwerpt tot leven te brengen heb ik gebruik gemaakt van HTML, CSS, JS, NodeJS, Express, JSON en Liquid.

**POST**

Voor het opslaan van cadeautjes heb ik eerst een [formulier](https://github.com/khiettt/user-experience-enhanced-website/blob/9052cdc389ead67c5c58b70873ec62cf59e072c3/views/index.liquid#L41-L45) gemaakt met de data van de prodcuten erin en een POST methode gebruikt. Het gebruiken van `<form>` is het meest betrouwbare element, omdat dit werkt in elke browser, op elk apparaat, overal, voor iedereen. Wanneer je op de knop klikt, wordt er een POST-verzoek gestuurd naar [server.js](https://github.com/khiettt/user-experience-enhanced-website/blob/9052cdc389ead67c5c58b70873ec62cf59e072c3/server.js#L69-L83) met het product-ID. De server ontvangt dit ID en stuurt het door naar een API om het product op te slaan in de lijst van de gebruiker. Daarna wordt je teruggestuurd naar de homepage.

### Aantal cadeautjes in je lijst 

Ik heb met behulp van server-js en liquid een succes state toegevoegd zodat de gebruiker weet dat een cadeau is opgeslagen. Als je wilt weten welke cadeutjes allemaal zijn ogeslagen ga je naar je "lijstje" en krijg je gelijk te zien hoeveel cadeau's zijn opgeslagen. Dat heb ik met begulp van een {{ | **size** }} kunenn doen

https://github.com/khiettt/user-experience-enhanced-website/blob/85a0595d7523e415242409dcdf40285014e2625c/views/wishlist.liquid#L25

<img width="380" height="142" alt="Scherm­afbeelding 2026-06-18 om 20 35 09" src="https://github.com/user-attachments/assets/2de099b6-c5ba-468f-87df-dda52b309e55" />


_Server js:_

Leest de status van de URL bijvoorbeeld: _?status=success_

https://github.com/khiettt/user-experience-enhanced-website/blob/81168550d83d93bc476aa2b5c083bdd045a2387f/server.js#L48


**status=success** ----> opslaan is gelukt 

**product=id** -----> welke product is opgeslagen

https://github.com/khiettt/user-experience-enhanced-website/blob/81168550d83d93bc476aa2b5c083bdd045a2387f/server.js#L100

Toon de succesmelding alleen wanneer:

                1. De URL aangeeft dat het opslaan gelukt is
                2. Het huidige product hetzelfde ID heeft als het opgeslagen product

https://github.com/khiettt/user-experience-enhanced-website/blob/81168550d83d93bc476aa2b5c083bdd045a2387f/views/index.liquid#L31-L49


## Bronnen

[Liquid](https://shopify.github.io/liquid/filters/size/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)
