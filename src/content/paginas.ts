/** Alle lopende teksten van de site, los van de pagina's. */

export const home = {
  titel: "Verse oogst uit eigen tuin, en een plek waar iedereen meetelt",
  intro:
    "Verse streekproducten uit eigen moestuin en een warme plek voor dagbesteding, in Bocholtz midden in het Zuid-Limburgse heuvelland.",
  takken: {
    kop: "Eén boerderij, twee takken",
    tekst:
      "Wat in de moestuin groeit wordt verzorgd door de deelnemers van de zorgboerderij. Een dag later ligt het in de winkel. De winkel en de zorg horen bij elkaar; het een kan hier niet zonder het ander.",
    winkel: {
      titel: "De boerderijwinkel",
      tekst:
        "Groente en fruit uit eigen moestuin, vlees van de eigen koeien, eieren van de eigen kippen en producten van boeren uit de omgeving. Open donderdag, vrijdag en zaterdag.",
      link: "Naar de winkel",
    },
    zorg: {
      titel: "De zorgboerderij",
      tekst:
        "Dagbesteding voor volwassenen met een verstandelijke beperking. Echt werk dat gedaan moet worden: de dieren voeren, de moestuin bijhouden, de schappen vullen. Iedereen doet mee op zijn eigen manier.",
      link: "Naar de zorgboerderij",
    },
  },
  uitgangspunten: [
    {
      titel: "Dichtbij geteeld",
      tekst:
        "Wat hier groeit komt hier vandaan. De rest halen we bij telers en boeren uit het heuvelland.",
    },
    {
      titel: "Iedereen telt mee",
      tekst:
        "Deelnemers doen echt werk op de boerderij. Werk dat gedaan moet worden, en dat je terugziet in de winkel.",
    },
    {
      titel: "Op het tempo van het seizoen",
      tekst:
        "In juni ligt er ander spul in het schap dan in november. Dat hoort erbij. Het aanbod wisselt mee.",
    },
  ],
  assortimentKort: [
    "Groente en fruit uit eigen moestuin",
    "Grasgevoerd rundvlees van de eigen koeien",
    "Zuivel van boerderijen uit de omgeving",
    "Eieren van de eigen kippen",
    "Honing, jam en appelsap uit Zuid-Limburg",
    "Wisselend seizoensaanbod",
  ],
} as const;

export const winkel = {
  titel: "De boerderijwinkel",
  intro:
    "Het aanbod wisselt met het seizoen. Daarom staan er op deze site geen prijzen. In de winkel staat alles met de actuele prijs erbij.",
  groepen: [
    {
      titel: "Groente & fruit",
      tekst:
        "Uit eigen moestuin, aangevuld met wat telers uit het heuvelland op dat moment hebben.",
    },
    {
      titel: "Grasgevoerd rundvlees",
      tekst:
        "Van de eigen koeien. Ze staan in de weides rondom de boerderij en je kunt ze zien staan.",
    },
    {
      titel: "Zuivel",
      tekst: "Van boerderijen uit de omgeving.",
    },
    {
      titel: "Eieren",
      tekst:
        "Van de eigen kippen. Die scharrelen de hele dag buiten rond.",
    },
    {
      titel: "Streekproducten",
      tekst: "Honing, jam en appelsap uit Zuid-Limburg.",
    },
    {
      titel: "Wisselend seizoensaanbod",
      tekst:
        "Wat er net rijp is of net klaar. Loop binnen en kijk wat er ligt.",
    },
  ],
  praktisch: [
    {
      titel: "Vers geoogst",
      tekst:
        "We oogsten op de dag dat de winkel open is. Wat 's ochtends uit de grond komt, ligt er die dag.",
    },
    {
      titel: "Grasgevoerd",
      tekst:
        "De koeien staan op gras in de weides rondom de boerderij.",
    },
    {
      titel: "Grotere bestelling?",
      tekst:
        "Even bellen kan ook. Dan leggen we het voor je klaar.",
    },
  ],
} as const;

export const zorg = {
  titel: "De zorgboerderij",
  intro:
    "Dagbesteding voor volwassenen met een verstandelijke beperking, op een werkende boerderij in Bocholtz.",
  kern: {
    kop: "Werk dat gedaan moet worden",
    tekst:
      "Het gaat hier om echt werk. De dieren willen eten. De moestuin vraagt onderhoud. De schappen in de winkel moeten gevuld. Als jij er bent, merken ze dat. Iedereen doet mee op zijn eigen manier en in zijn eigen tempo.",
  },
  activiteiten: [
    {
      titel: "Werken met de dieren",
      tekst: "Voeren en verzorgen. De dieren kennen je na een tijdje.",
    },
    {
      titel: "In de moestuin",
      tekst:
        "Zaaien, wieden, oogsten. Wat hier uit de grond komt, ligt een dag later in de winkel.",
    },
    {
      titel: "In de boerderijwinkel",
      tekst: "Schappen vullen, wegen, inpakken en klanten helpen.",
    },
    {
      titel: "Samen koken en eten",
      tekst: "We koken samen en eten met de hele groep aan één tafel.",
    },
    {
      titel: "Creatief bezig zijn",
      tekst: "Ruimte om met je handen iets te maken.",
    },
  ],
  voorWie: {
    kop: "Voor wie is het",
    punten: [
      "Volwassenen met een verstandelijke beperking.",
      "Begeleiding in een kleine groep of individueel.",
      "Ook geschikt als stageplek.",
    ],
  },
  stappen: [
    {
      titel: "Bellen of mailen",
      tekst: "Je neemt contact op en vertelt kort wie je bent.",
    },
    {
      titel: "Kennismaken",
      tekst: "We lopen samen over de boerderij en kijken hoe het voelt.",
    },
    {
      titel: "Een dag meedraaien",
      tekst: "Vrijblijvend een dag meewerken, om het echt te ervaren.",
    },
    {
      titel: "Afspraken vastleggen",
      tekst: "Past het, dan leggen we samen de afspraken vast.",
    },
  ],
  ontbrekendeDocumenten: [
    "Klachtenregeling (verplicht op grond van de Wkkgz)",
    "Onafhankelijke klachtenfunctionaris: wie is dat en hoe is die bereikbaar",
    "Privacyverklaring (verplicht op grond van de AVG)",
    "Kwaliteitskeurmerk: welk keurmerk en sinds wanneer",
    "Vertrouwenspersoon: naam en contactgegevens",
    "Meldcode huiselijk geweld en kindermishandeling",
  ],
} as const;

export type Dier = {
  naam: string;
  tekst: string;
  foto: string;
  breed?: boolean;
};

export const dieren = {
  titel: "De dieren",
  intro:
    "Voor de deelnemers zijn de dieren geen decor. Ze moeten gevoerd worden en ze merken het als je er bent. Dat geeft een dag richting.",
  bezoek:
    "Kom je voor de winkel, loop dan gerust even door naar de wei. De ezels komen meestal zelf naar het hek.",
  kaarten: [
    {
      naam: "De koeien",
      tekst:
        "De koeien staan op gras in de weides rondom de boerderij. Ze worden elke dag nagelopen: staat het hek dicht, is er water, is iedereen er nog bij. Van deze dieren komt het rundvlees dat in de winkel ligt.",
      foto: "De koeien in de wei rondom de boerderij, breed liggend beeld",
      breed: true,
    },
    {
      naam: "De ezels",
      tekst:
        "De ezels zijn nieuwsgierig. Loop je langs het hek, dan staan ze er meestal binnen een minuut bij.",
      foto: "De twee ezels bij het hek, kop naar de camera",
    },
    {
      naam: "De kippen en de haan",
      tekst:
        "De kippen scharrelen de hele dag buiten. De haan laat 's ochtends weten hoe laat het is. De eieren gaan naar de winkel.",
      foto: "Scharrelende kippen met de haan op het erf",
    },
    {
      naam: "De kuikens",
      tekst:
        "In het voorjaar lopen er kuikens rond. Voorzichtig oppakken mag, als je het rustig doet.",
      foto: "Kuikens in het voorjaar, close-up in twee handen",
    },
    {
      naam: "De eenden",
      tekst: "De eenden doen hun eigen ding, meestal bij het water.",
      foto: "De eenden bij het water op het erf",
    },
    {
      naam: "De ganzen",
      tekst:
        "De ganzen laten van zich horen. Wie er aankomt, weten ze eerder dan wij.",
      foto: "De ganzen op het erf",
    },
    {
      naam: "Het varken",
      tekst: "Het varken wroet graag en heeft een vaste plek in de schaduw.",
      foto: "Het varken in de modder of in zijn schaduwplek",
    },
    {
      naam: "De hond",
      tekst: "De hond loopt mee over het erf en hoort er gewoon bij.",
      foto: "De hond op het erf, meelopend met een deelnemer",
    },
    {
      naam: "Vriendjes onder elkaar",
      tekst:
        "Het varken, het konijn en een kuiken eten hier samen uit dezelfde bak sla. Ze hebben dat zelf zo bedacht.",
      foto:
        "Varken, konijn en kuiken die samen uit één bak sla eten, breed liggend beeld",
      breed: true,
    },
  ] satisfies Dier[],
  rundvlees: {
    kop: "Over het grasgevoerde rundvlees",
    tekst:
      "De koeien staan op gras in de weides rondom de boerderij. Het rundvlees in de winkel komt van die dieren. Je kunt ze zien staan als je hier boodschappen doet. Dat is precies het verschil met het schap van de supermarkt: je weet waar het vandaan komt en je kunt het zelf nakijken.",
  },
} as const;

export const overOns = {
  titel: "Over ons",
  intro:
    "Een boerderij in Bocholtz met een winkel en een zorgboerderij, aan de Groeneweg in het Zuid-Limburgse heuvelland.",
  verhaalVragen: [
    "Sinds wanneer bestaat de boerderij?",
    "Wie werken er op de boerderij?",
    "Waarom een zorgboerderij naast de winkel?",
    "Waar komt de naam Onder de Eik vandaan?",
  ],
  team: [
    "Portretfoto en naam van de eerste medewerker, plus wat deze persoon op de boerderij doet",
    "Portretfoto en naam van de tweede medewerker, plus wat deze persoon op de boerderij doet",
    "Portretfoto en naam van de derde medewerker, plus wat deze persoon op de boerderij doet",
  ],
} as const;

export const contact = {
  titel: "Contact & route",
  intro:
    "Bellen of mailen kan altijd. Voor de winkel hoef je geen afspraak te maken; loop gewoon binnen als we open zijn.",
  handig: [
    "Gratis parkeren voor de deur.",
    "De winkel en de zorgboerderij liggen naast elkaar aan de Groeneweg.",
  ],
} as const;
