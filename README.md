
# Enhanced website
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

Readme schrijven

Schrijf daarna een nette Readme, waarin je laat zien wat je hebt gedaan. In de Readme presenteer je wat je hebt gemaakt en leg je je ontwerpkeuzes en eigen ideeën uit.

User experience

Laat zien hoe je de user experience hebt verbeterd, hoe werkt de post interactie? Welke Loading state en Success state hebt je toegevoegd? En hoe ziet het eruit? Misschien kan je dit met een filmpje laten zien.

Frontend performance

Beschrijf kort wat er uit de Performance audit is gekomen en hoe je de frontend performance hebt verbeterd, bijvoorbeeld met responsive images, layout shift en/of perceived performance.

## Beschrijving
Als je opzoek bent naar een cadeau voor iemand, is milledoni de website voor je zoektocht. Ze hebben cadeautjes voor alle leeftijden en gelegenheden en je kan samen met de chatbox de juiste cadeau vinden. Voor deze sprint ben ik mij gaan focussen op de emty state van de wishlist pagina. Als een gebruiker wilt weten hoeveel cadeaus zijn opgeslagen in zijn/haar lijstje kan de dat makkelijk zien

geïnteresseerd in cadeaus zoeken voor je familie of vrienden, bezoek dan Milledoni.com.

## Gebruik
Als gebruiker wil je weten hoeveel cadeaus je hebt opgeslagen in je lijst

<img width="380" height="803" alt="Scherm­afbeelding 2026-06-18 om 18 14 40" src="https://github.com/user-attachments/assets/689629dc-d29f-43db-8bf0-1205d5f40d6e" />

<img width="380" height="803" alt="Scherm­afbeelding 2026-06-18 om 18 17 29" src="https://github.com/user-attachments/assets/f18941a8-e85d-44b2-9155-e1ffb8d50b36" />


## Kenmerken

Om mijn ontwerpt tot leven te brengen heb ik gebruik gemaakt van HTML, CSS, JS, NodeJS, Express, JSON en Liquid.

**POST**

Voor het opslaan van cadeautjes heb ik eerst een [formulier](https://github.com/khiettt/user-experience-enhanced-website/blob/9052cdc389ead67c5c58b70873ec62cf59e072c3/views/index.liquid#L41-L45) gemaakt met de data van de prodcuten erin en een POST methode gebruikt. Het gebruiken van `<form>` is het meest betrouwbare element, omdat dit werkt in elke browser, op elk apparaat, overal, voor iedereen. Wanneer je op de knop klikt, wordt er een POST-verzoek gestuurd naar [server.js](https://github.com/khiettt/user-experience-enhanced-website/blob/9052cdc389ead67c5c58b70873ec62cf59e072c3/server.js#L69-L83) met het product-ID. De server ontvangt dit ID en stuurt het door naar een API om het product op te slaan in de lijst van de gebruiker. Daarna wordt je teruggestuurd naar de homepage.

### Aantal cadeautjes in je lijst 

Met `size` kan er aangegeven worden hoeveel cadeau's zijn opgeslagen. 

https://github.com/khiettt/user-experience-enhanced-website/blob/85a0595d7523e415242409dcdf40285014e2625c/views/wishlist.liquid#L25

<img width="380" height="142" alt="Scherm­afbeelding 2026-06-18 om 20 35 09" src="https://github.com/user-attachments/assets/2de099b6-c5ba-468f-87df-dda52b309e55" />


## Bronnen

[Liquid](https://shopify.github.io/liquid/filters/size/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)
