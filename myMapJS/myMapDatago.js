// JavaScript Document
// auteur: Sanne 't Hooft


/* JE KEY (SLEUTEL) */
// Google vraagt om een KEY (sleutel/code) als je een eigen kaart aan je site wilt toevoegen 
// Je kunt jouw KEY aanvragen op https://developers.google.com/maps/documentation/javascript/
// Nb. Je hebt een google account nodig om een KEY aan te vragen 
// Vervang vervolgens onderstaande KEY door jouw eigen KEY 
var myMapKey = "AIzaSyA5_vDDyGxubMqytTj06bNbSwjzDvGBBBw";




/* JE EIGEN MARKER */
// Je kunt een eigen marker gebruiken voor de locaties op je kaart 
// De marker is het plaatje dat naar de locatie wijst
// Voeg jouw plaatje toe aan de folder myMapsJS/images 
// Vervang vervolgens hieronder 'marker.svg' door de naam van jouw plaatje

// Nb. Als je geen eigen marker wilt, kun je de hele onderstaande regel deleten.
var myMapImage = '1.svg';




/* DE STARTLOCATIE */
// Je kunt kiezen of het middelpunt van de kaart in het midden is van alle markers of dat het midden van de kaart de huidige locatie is.
// Om voor het midden van de markers te keizen - vul 'center in'.
// Om voor de huidige locatie te kiezen - vul onderstaand 'gps in'.
// Nb. Het bepalen van de huidige locatie lukt niet altijd - dan wordt toch voor het midden van de markers gekozen.
var myMapStartLocation = 'gps';




/* DE LOCATIES OP JE KAART */
// Onderstaand de lijst met locaties die op de kaart getoond worden.
// Elke locatie bestaat uit 4 delen: 
	// de titel/naam van de locatie
	// de GPS positie van de locatie
	// een korte omschrijving van de locatie (optioneel)
	// een link naar een pagina van de locatie (optioneel)
// Je kunt de voorbeeld-info in de lijst vervangen door de info van jouw locaties 
// Als je meer locaties hebt, kun je extra blokken kopieren.
// Als je minder locaties hebt, kun je de overbodige blokken verwijderen 


/* De titel/naam van de locatie */
// De naam van je locatie - pas op met speciale tekens als ' en / 


/* De GPS positie van de locatie */
// De GPS positie kun je als volgt vinden: 
	// Ga naar https://www.google.nl/maps
	// Zoek de locatie die je op jouw kaart wilt opnemen - die wordt dan op de kaart getoond.
	// Rechtermuisklik op de marker van de locatie.
	// Kies in het menu voor 'What's here?'.
	// Er verschijnt nu een klein window met daarin o.a. de GPS positie - die kun je kopieren en in de lijst opnemen.


/* Een korte omschrijving van de locatie (optioneel) */
// De omschrijving je locatie - pas op met speciale tekens als ' en /
// De omschrijving is optioneel. Je mag hem leeglaten - laat de komma op het einde wel staan.


/* Een link naar een pagina van de locatie (optioneel) */
// De url waar meer info over de locatie te vinden is.
// De url kan zowel naar een pagina binnen je eigen site verwijzen als naar een externe website.
// Voor een interne link kun je een relatief path gebruiken.
// De url is optioneel. Je mag hem leeglaten.

var myMapLocations = [ 
  	[
		'Het centraal station', 
  		52.379328, 4.900261,
		'Als u naar links kijkt, ziet u het Centraal Station. Gebouwd tussen 1881 en 1889 door architect P.H.J. Cuypers of P.J.H. Cuypers, daar wil ik graag van af wezen. Volgens Cuypers moest een station een ‘doorgangsroute zijn waar vermoeide reiziger even tot rust konden komen’. Dit is het einde van de busrit, hierna gaan we wandelend verder. Let u bij het uitstappen op het afstapje? En vergeet u uw slapende zonen en dochters niet?'
	],
  	
	[
		'Het stationsplein',
		52.378851, 4.898988,
		'Het stationsplein waarop wij thans lopen, is in 1978 vervaardigd door de legendarische stoeptegellegger Kensel de Vlieger. Het is jammer dat het momenteel zo regent en waait, want droog zijn de subtiele Mondrianeske motieven op de tegels veel beter waarneembaar. Deze wandeltocht zal uiteindelijk moeten leiden tot de Openbare Bibliotheek Amsterdam, ook wel bekend als de OBA, waar wij het boek Stijloefeningen van de Normandische schrijver Raymond Queneau hopen te treffen.'
	],
	
	[
		'Het Amsterdam van de toekomst',
		52.376953, 4.903765,
		'Wij vervolgen onze tocht over een plank. Aan weerszijden treft u diepe bouwputten waar men aan het bouwen is aan het Amsterdam van de toekomst. Luistert u vooral goed naar het imposante gebeuk van de heipalen, subtiel begeleid door het constante gedril van de drilboren.'
	],
	
  	[
		'Het oosterdokseiland',
		52.376178, 4.906183,
		'Het Oosterdokseiland waarop wij ons momenteel bevinden, is in 1832 aangelegd om een deel van het IJ af te scheiden, zodat de verbinding met de Zuiderzee verbroken werd en men aan deze kant geen last meer van eb en vloed zou hebben. Tot 2005 was hier het hoofdpostkantoor van Amsterdam gehuisvest. Inmiddels is dat verhuisd naar de Raadhuisstraat. Als u achter u kijkt, ziet u een achteruit rijdende auto van het merk Renault, met daar achteraan hollend een Franse vrouw met pikzwart, krullend haar.'
	],
  	
	[
		'De openbare bibliotheek',
		52.375864, 4.908415,
		'De Openbare Bibliotheek Amsterdam is geopend op 7 juli 2007. Op 070707 dus. Ontworpen door de architect Joe Coenen. De OBA heeft een vloeroppervlakte van 28.500 vierkante meter en herbergt 1.7 miljoen boeken. Een van die boeken is wellicht Stijloefeningen van Raymond Queneau. Wij staan momenteel op de tweede verdieping bij de kast met schrijvers wier achternaam begint met de letter Q. Er zijn, zoals u ziet, aardig wat boeken van Queneau aanwezig, maar net Stijloefeningen niet. Wij vervolgen onze zoektocht op een computer, een vierde generatie iMac, vervaardigd door de firma Macintosh. Als wij Stijloefeningen intikken in het zoekvenster van het online archief, zien wij dat Stijloefeningen wel degelijk aanwezig is. Om onze zoektocht extra sjeu te geven, leggen wij ons probleem voor aan een authentieke medewerker. Deze medewerker staat geheel en al tot onze dienst en komt zelfs persoonlijk met ons meekijken. De gemiddelde medewerker van de Openbare Bibliotheek ziet dagelijks 2864 boeken door zijn of haar handen passeren. Of Stijloefeningen daar onlangs heeft bij gezeten, blijft vooralsnog onduidelijk. Want ook de medewerker kan het boek niet vinden. Als laatste strohalm reikt hij ons de unieke kans aan om ons probleem voor te leggen aan het magazijn, een even mysterieuze als geheimzinnige orgaan waar dag en nacht 77 vrouwelijke maagden werken die hermetisch worden afgeschermd van de buitenwereld. Deze magazijners, zoals de vrouwen worden genoemd, kun je uitsluitend per mail contacteren. Maar áls Stijloefeningen aanwezig is, dan weten zijn het. Via een mail stellen wij de vraag, waarop wij vijftien minuten dienen te wachten. Een tijdsspanne waarin u iets voor uzelf kunt doen. Zo kunt u boven genieten van een fantastisch panorama over onze geliefde hoofdstad. En natuurlijk van een zalig kopje koffie met bijvoorbeeld de befaamde appeltaart met in rum gewelde krenten! Opdat u weet dat ook de innerlijke mens niet wordt vergeten. Of breng een bezoekje aan het kleine, maar knusse Gerard Reve-museum!'
	],

	[
		'Verzamelen',
		52.375569, 4.908254,
		'(15 minuutjes gaan voorbij)Goed. Ik zie dat u allen weer terug bent. Helaas heb ik een droevige mededeling. Volgens de magazijners is Stijloefeningen wel degelijk aanwezig. En wel op de tweede verdieping, waar wij al de ganse middag hebben lopen zoeken. We mogen met een gerust hart concluderen dat Stijloefeningen kwijt is. Als u achter u kijkt, ziet u de geniepige tronie van de ironie. Wij hopen dat u, ondanks dit tegenvallende einde, hebt genoten van de rondleiding. Zo straks gaan wij terug naar het hotel. Daar krijgt u, voordat we aan tafel gaan, nog de gelegenheid om uitgebreid te shoppen. Zo weet ik dat er op het Bos en Lommerplein een uitstekende babywinkel is waar ze schattige babyschoentjes verkopen.'
	]

];