(() => {
  // src/motivation/motivation-zeile.ts
  var template = document.createElement("template");
  template.innerHTML = `
<style>
#motivation {
    margin-bottom: 25px;
    color: white;
    text-align:center;
}
</style>
<div id="motivation">

</div>
`;
  var MotivationZeile = class extends HTMLElement {
    constructor() {
      super();
      let root = this.attachShadow({ mode: "open" });
      root.append(template.content.cloneNode(true));
      let div = root.getElementById("motivation");
      let message = ["Fit zu sein ist kein Ziel, es ist eine Lebenshaltung.", "Erfolg hat drei Buchstaben TUN", "You cant spell challenge without challenge", "Das was dich nicht umbringt macht dich st\xE4rker", "Dein einziges Limit bist du", "Verwandle Gr\xF6\xDFe Schwierigkeit in kleine und kleinere in gar keine", "Am ende der Ausreden beginnt dein Leben", "Wenn du ganz unten bist, f\xFChrt der einzige weg nach oben", "IF IT DOESNT Challenge you, it doesn\u2019t change you", "Es wird nicht leichter, sondern du wirst besser", "Es ist egal wie langsam du vorankommst du \xFCberrundest noch jeden auf dem Sofa", "Wer nicht will findet ausreden wer will findet Wege "];
      let i = Math.floor(message.length * Math.random());
      div.innerText = message[i];
    }
  };
  customElements.define("motivation-zeile", MotivationZeile);

  // src/sportkuss-herz.ts
  var template2 = document.createElement("template");
  template2.innerHTML = `
<style>
#herz {
    fill: var(--app-blue-light);
    filter: drop-shadow(0px 5px 5px var(--app-blue)) 


}
</style>
<svg version="1.1" id="herz" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="64px" height="64px" viewBox="0 0 378.94 378.94" 
	 xml:space="preserve">
<g>
	<path d="M348.151,54.514c-19.883-19.884-46.315-30.826-74.435-30.826c-28.124,0-54.559,10.942-74.449,30.826l-9.798,9.8l-9.798-9.8
		c-19.884-19.884-46.325-30.826-74.443-30.826c-28.117,0-54.56,10.942-74.442,30.826c-41.049,41.053-41.049,107.848,0,148.885
		l147.09,147.091c2.405,2.414,5.399,3.892,8.527,4.461c1.049,0.207,2.104,0.303,3.161,0.303c4.161,0,8.329-1.587,11.498-4.764
		l147.09-147.091C389.203,162.362,389.203,95.567,348.151,54.514z M325.155,180.404L189.47,316.091L53.782,180.404
		c-28.368-28.364-28.368-74.514,0-102.893c13.741-13.739,32.017-21.296,51.446-21.296c19.431,0,37.702,7.557,51.438,21.296
		l21.305,21.312c6.107,6.098,16.897,6.098,23.003,0l21.297-21.312c13.737-13.739,32.009-21.296,51.446-21.296
		c19.431,0,37.701,7.557,51.438,21.296C353.526,105.89,353.526,152.039,325.155,180.404z"/>
</g>
</svg>


`;
  var SportkussHerz = class extends HTMLElement {
    constructor() {
      super();
      let root = this.attachShadow({ mode: "open" });
      root.append(template2.content.cloneNode(true));
    }
  };
  customElements.define("sportkuss-herz", SportkussHerz);

  // src/uebung/uebung.ts
  var Uebung = class {
    constructor() {
    }
  };
  function defaultUebungen() {
    let uebungen = [];
    let u1 = new Uebung();
    u1.id = 1;
    u1.name = "Liegest\xFCtzen";
    u1.leicht = 10;
    u1.mittel = 15;
    u1.schwer = 20;
    u1.beschreibung = "H\xE4nde unterhalb der Schulter aufst\xFCtzen, die Zeigefinger zeigen nach vorne.F\xFC\xDFe aufstellen, sodass der K\xF6rper von Kopf bis Fu\xDF eine gerade Linie bildet. \nEinatmend die Ellenbogen beugen und den K\xF6rper gerade wie ein Brett Richtung Boden absenken. \nAusatmend mit der Kraft des Oberk\xF6rpers wieder hochdr\xFCcken.";
    uebungen.push(u1);
    let u2 = new Uebung();
    u2.id = 2;
    u2.name = "Superman";
    u2.leicht = 20;
    u2.mittel = 40;
    u2.schwer = 80;
    u2.beschreibung = "Lege dich b\xE4uchlings auf den Boden. Bei der ersten \xDCbungsvariante befinden sich deine Arme \xFCber deinem Kopf.\n Nun spannst du deine Muskulatur an und hebst Beine sowie Oberk\xF6rper an. \nDiese Bewegung geschieht gleichzeitig. Am h\xF6chsten Punkt stoppst du und h\xE4ltst die K\xF6rperspannung einige Sekunden. \nAnschlie\xDFend senkst du die Glieder wieder auf den Boden zur\xFCck, um dich f\xFCr den n\xE4chsten Durchgang bereit zu machen.";
    uebungen.push(u2);
    let u3 = new Uebung();
    u3.id = 3;
    u3.name = "High Knees";
    u3.leicht = 5;
    u3.mittel = 10;
    u3.schwer = 20;
    u3.beschreibung = "Bei High Knees l\xE4ufst du sozusagen auf der Stelle, wobei deine Arme genau wie beim Laufen seitlich neben deinem K\xF6rper schwingen. Wie der Name schon sagt, hebst du dabei deine Knie bis auf H\xFCfth\xF6he oder sogar etwas h\xF6her an.";
    uebungen.push(u3);
    let u4 = new Uebung();
    u4.id = 4;
    u4.name = "Burpees";
    u4.leicht = 5;
    u4.mittel = 10;
    u4.schwer = 20;
    u4.beschreibung = "Stell dich h\xFCftbreit auf. Jetzt gehst du tief in die Hocke und st\xFCtzt dich mit den H\xE4nden vor den F\xFC\xDFen auf dem Boden ab.\n Die H\xE4nde sind schulterbreit auseinander. Spring nun in die Liegest\xFCtzposition und f\xFChre einen Push-up aus. \nJetzt springst du mit den F\xFC\xDFen wieder nach vorn, so dass du erneut in Hockposition bist. Zum Abschluss f\xFChrst du einen kerzengeraden Strecksprung nach oben aus.";
    uebungen.push(u4);
    let u5 = new Uebung();
    u5.id = 5;
    u5.name = "Jumping Jacks";
    u5.leicht = 30;
    u5.mittel = 45;
    u5.schwer = 60;
    u5.beschreibung = "Um mit Jumping Jacks zu starten, stelle dich aufrecht hin. Die F\xFC\xDFe sind schulterschmal. Schaue gerade nach vorne. Deine Arme sind in der Ausgangsposition seitlich neben dem K\xF6rper, die Handfl\xE4chen zeigen nach vorne.  Springe vom Boden ab, indem du zun\xE4chst deine Knie minimal beugst und dich vom Boden abst\xF6\xDFt. W\xE4hrend du hochspringst, spreizt du deine Beine und f\xFChrst parallel deine Arme \xFCber dem Kopf zusammen. Komme im \xFCber h\xFCftbreiten Stand auf dem Boden auf. Deine H\xE4nde ber\xFChren sich kurz \xFCber dem Kopf. Springe sofort wieder ab und komme mit den F\xFC\xDFen in die schulterschmale Ausgangsposition zur\xFCck. F\xFChre die H\xE4nde zeitgleich hinter dem Oberk\xF6rper zusammen.";
    uebungen.push(u5);
    let u6 = new Uebung();
    u6.id = 6;
    u6.name = "Mountain Climber";
    u6.leicht = 10;
    u6.mittel = 15;
    u6.schwer = 20;
    u6.beschreibung = "Beginne mit den H\xE4nden auf dem Boden in Schulterbreite, Arme gestreckt. Die H\xE4nde sollten sich ungef\xE4hr in senkrechter Linie mit dem Brustkorb befinden. Halte die Plank-Position im Oberk\xF6rper w\xE4hrend du deine Knie nacheinander zur projizierten Linie, die sich auf dem Boden befindet, ziehst. \nZiehe deine Knie abwechselnd zur projizierten Linie auf dem Boden, w\xE4hrend du dich mit den H\xE4nden abst\xFCtzt und deinen Rumpf stabilisierst.";
    uebungen.push(u6);
    let u7 = new Uebung();
    u7.id = 7;
    u7.name = "Squats";
    u7.leicht = 10;
    u7.mittel = 15;
    u7.schwer = 20;
    u7.beschreibung = " F\xFC\xDFe etwas weiter als schulterbreit voneinander entfernt aufstellen. Beuge die Knie und schiebe das Ges\xE4\xDF leicht nach hinten, bis sich die Oberschenkel in etwa in der Waagerechten befinden, jedoch so, dass die Knie nicht \xFCber die Zehenspitzen hinaus stehen.\n Der R\xFCcken bleibt bei herausgedr\xFCckter Brust gerade. Atme w\xE4hrenddessen ein. \nStrecke die Beine in die Ausgangssituation zur\xFCck und atme aus. \nDie Beine bzw. die Knie d\xFCrfen dabei nicht vollst\xE4ndig durchgedr\xFCckt werden.";
    uebungen.push(u7);
    let u8 = new Uebung();
    u8.id = 8;
    u8.name = "Trizep Dips";
    u8.leicht = 10;
    u8.mittel = 15;
    u8.schwer = 20;
    u8.beschreibung = "Dein Ges\xE4\xDF vor die Bank oder dem Stuhl. Deine Arme sind fast vollst\xE4ndig gestreckt. Beim Einatmen senkst du dein Ges\xE4\xDF in Richtung Boden.\n Die Ellenbogen beugen sich langsam, sodass der Oberarm und Unterarm einen rechten Winkel bilden. Die Ellenbogen bleiben nah am K\xF6rper, um den Reiz auf den Trizeps zu legen. Beim Ausatmen dr\xFCckst du nun deinen Oberk\xF6rper wieder nach oben.\n Achte darauf, dass du auch in der Ausgangsposition deine Arme nie vollst\xE4ndig gestreckt hast, um die Ellenbogengelenke zu sch\xFCtzen.";
    uebungen.push(u8);
    let u9 = new Uebung();
    u9.id = 9;
    u9.name = "Crunces";
    u9.leicht = 10;
    u9.mittel = 15;
    u9.schwer = 20;
    u9.beschreibung = "In der Grundposition liegst du auf dem R\xFCcken und winkelst deine Beine im 90 Grad Winkel an. Zum Beginn der \xDCbung bewegst du den Oberk\xF6rper nach oben. Dabei h\xE4ltst du die beiden H\xE4nde beispielsweise vor deinem Kopf. Die Arme befinden sich tendenziell neben deinem K\xF6rper.\n Bei der Aufw\xE4rtsbewegung atmest du aus und solltest darauf achten, dass der R\xFCcken keinen zu starken Buckel macht.\n Die Kraft sollte einzig und allein aus dem Bauch stammen. Nur der Oberk\xF6rper bewegt sich.\n Unterst\xFCtzung durch die Oberschenkel oder eine schwungartige Bewegung sollten unterbleiben.\n Wenn der K\xF6rper aufrecht ist, bist du in der Endposition angekommen. Beim Einatmen kehrst du nun langsam in die Ausgangsposition zur\xFCck.";
    uebungen.push(u9);
    let u10 = new Uebung();
    u10.id = 10;
    u10.name = "Leg Raise";
    u10.leicht = 10;
    u10.mittel = 15;
    u10.schwer = 20;
    u10.beschreibung = "Ausgangsposition: im Liegen , hebst du die Beine senkrecht nach oben. Die Beine sind dabei nicht vollst\xE4ndig ausgestreckt. Allerdings solltest du den Po leicht in die Luft bewegen, um den Muskelreiz zu erzeugen bzw. zu verst\xE4rken.\n  Dein Oberk\xF6rper, Kopf und Nacken bewegen sich nicht. Spanne deinen Bauch an und senke im Anschluss die Beine wieder langsam nach unten ab. Du f\xFChrst die Abw\xE4rtsbewegung so weit fort, dass du deinen unteren R\xFCcken noch auf dem Boden halten kannst.\n Deine Beine k\xF6nnen dann ganz kurz den Boden ber\xFChren. Dabei atmest du langsam aus. Im Anschluss atmest du ein und f\xE4ngst mit der \xDCbung wieder von vorne an.";
    uebungen.push(u10);
    let u11 = new Uebung();
    u11.id = 11;
    u11.name = "Flutter Kicks";
    u11.leicht = 30;
    u11.mittel = 40;
    u11.schwer = 60;
    u11.beschreibung = "Ausgangsposition: Du legst gerade auf den R\xFCcken. Um mit den klassischen Flutter Kicks zu beginnen, hebst du zun\xE4chst ein Bein nach oben. Das untere Bein schwebt weiterhin parallel \xFCber dem Boden. Die Streckung der Beine bleibt die ganze Zeit bestehen. Der Ausschlag der Beine h\xE4ngt zudem von deinem Wohlgef\xFChl ab. Hier gibt es keine festen Regeln. Du solltest immer darauf achten, dass du die Bewegung kontrolliert und mit Spannung in der Bauchmuskulatur ausf\xFChrst. Dies ist deutlich wichtiger als ein gro\xDFer Radius. Im Anschluss hebst du das andere Bein nach oben, w\xE4hrend du die entgegengesetzte Seite absenkst.";
    uebungen.push(u11);
    let u12 = new Uebung();
    u12.id = 12;
    u12.name = "Russian Twist";
    u12.leicht = 20;
    u12.mittel = 25;
    u12.schwer = 40;
    u12.beschreibung = "Ausgangsposition: Du legst dich mit dem R\xFCcken auf den Boden. Deine Beine winkelst du vor dir an. Nun beginnst du mit der \xDCbung, indem du deinen Oberk\xF6rper zu einer Seite drehst. Der Unterk\xF6rper sollte bei dieser Bewegung starr in der Mitte bleiben. Die Bewegung stammt einzig und allein aus dem Oberk\xF6rper. Im Anschluss kehrst du in die Ausgangsposition zur\xFCck und drehst den Oberk\xF6rper nun in die andere Richtung.\n Dabei musst du allerdings gar nicht in der Mitte verharren, sondern kannst die Bewegung auch problemlos flie\xDFend aus\xFCben.";
    uebungen.push(u12);
    let u13 = new Uebung();
    u13.id = 13;
    u13.name = "Ausfallschritt";
    u13.leicht = 10;
    u13.mittel = 15;
    u13.schwer = 20;
    u13.beschreibung = "Die Ausgangsposition: Stelle Deine Beine h\xFCftbreit auf. Dein Blick ist nach vorn gerichtet.\n Jetzt machst Du einen gro\xDFen Schritt nach vorne. Nun senkst du den K\xF6rper ab, indem du die Beine in den Knien beugst.\n Achte darauf, dass der vordere Oberschenkel in der Endstellung parallel zum Boden ist. Wichtig ist, dass dein vorderes Knie nicht \xFCber die Fu\xDFspitze hinausragt, sondern sich \xFCber dem Fu\xDF befindet, das hintere Bein ber\xFChrt den Boden nur fast.\n Jetzt verbleibst Du einen kurzen Moment in dieser Position.\n Um in die Ausgangsposition zur\xFCckzukehren, dr\xFCckst Du Dich aktiv aus dem vorderen Fu\xDF wieder in die Schrittstellung und kehrst dann in die Ausgansposition zur\xFCck. Anschlie\xDFend Beinwechsel. ";
    uebungen.push(u13);
    let u14 = new Uebung();
    u14.id = 14;
    u14.name = "Umgedrehter Schneeengel";
    u14.leicht = 10;
    u14.mittel = 15;
    u14.schwer = 20;
    u14.beschreibung = "Auf den Bauch legen, die Arme \xFCber den Kopf lang strecken. Lasse die Handfl\xE4chen auf dem Boden, stelle die Beine nebeneinander. Auch die Fu\xDFspitzen sollen auf dem Boden bleiben.\n Nun hebst du deine Brust, deine Arme und Beine an und machst die gleichen Bewegungen wie beim klassischen Schneeengel, d.h. Arme wandern im breiten Bogen zur H\xFCfte, gleichzeitig \xF6ffnest du deine Beine.\n Wieder zur Ausgangsstellung zur\xFCckkehren, kurz Arme und Beine ablegen und erneut den umgekehrten Schneeengel ausf\xFChren.";
    uebungen.push(u14);
    let u15 = new Uebung();
    u15.id = 15;
    u15.name = "Spiederman push up";
    u15.leicht = 10;
    u15.mittel = 15;
    u15.schwer = 20;
    u15.beschreibung = "Starte in der oberen Liegest\xFCtz-Position. Senke dann den K\xF6rper ab und ziehe das rechte Knie nach vorn. Beim Hochdr\xFCcken das Bein wieder nach hinten strecken.\n Beim n\xE4chsten Absenken das linke Knie hochziehen usw. Wichtig: Der Rumpf ist w\xE4hrend des Satzes komplett angespannt!";
    uebungen.push(u15);
    let u16 = new Uebung();
    u16.id = 16;
    u16.name = "Planke";
    u16.leicht = 30;
    u16.mittel = 40;
    u16.schwer = 60;
    u16.beschreibung = "Die klassische Ausf\xFChrung des Unterarmst\xFCtzes beginnt in liegender Position auf dem Bauch, wobei der Oberk\xF6rper auf die Unterarme gest\xFCtzt ist. Die Ellenbogen befinden sich auf Schulterh\xF6he.\n Die Unterarme k\xF6nnen parallel zueinander liegen oder spitz zulaufen, so dass sich die H\xE4nde ber\xFChren. \nDie F\xFC\xDFe ber\xFChren den Boden nur mit den Zehen. Aus dieser Position versetzt du deinen K\xF6rper in Spannung und bringst den durchh\xE4ngenden Bauch-H\xFCftbereich in eine Linie mit deinen Schultern und Beinen.";
    uebungen.push(u16);
    let u17 = new Uebung();
    u17.id = 17;
    u17.name = "Seitlicher Unterarmst\xFCtze";
    u17.leicht = 10;
    u17.mittel = 15;
    u17.schwer = 20;
    u17.beschreibung = "Der seitliche Unterarmst\xFCtz beginnt damit, dass du mit der linken oder rechten K\xF6rperfl\xE4che auf dem Boden liegst.\n Es ber\xFChren also eine Fu\xDFau\xDFenkante, ein Bein, die H\xFCfte sowie ein Unterarm den Boden.\n Der Unterarm zeigt vom K\xF6rper in Blickrichtung weg. Der andere Arm kann in bequemer Position an die H\xFCfte gelegt werden.\n Aus dieser Position heraus spannst du deinen K\xF6rper wieder an und bringst ihn in eine Linie.";
    uebungen.push(u17);
    let u18 = new Uebung();
    u18.id = 18;
    u18.name = "Weitarm Push up";
    u18.leicht = 10;
    u18.mittel = 15;
    u18.schwer = 20;
    u18.beschreibung = "Ausgangsposition: Liegest\xFCtzposition. Mit der breiten Handstellung l\xE4sst du deinen K\xF6rper voller Spannung nach unten sinken, w\xE4hrend du ausatmest.\n Du stoppst kurz, bevor dein K\xF6rper den Boden ber\xFChrt. Beim Ausatmen dr\xFCckst du dich wieder nach oben, bis die Ellenbogen nur noch leicht gebeugt sind.";
    uebungen.push(u18);
    let u19 = new Uebung();
    u19.id = 19;
    u19.name = "Fersenschlag";
    u19.leicht = 10;
    u19.mittel = 15;
    u19.schwer = 20;
    u19.beschreibung = "Ausgangsposition: Du legst dich mit dem R\xFCcken auf den Boden. Deine Beine winkelst du vor dir an.Du hebst deinen Oberk\xF6rper leicht an, sodass sich Kopf und Schultern in der Luft befinden. Dabei achtest du darauf, dass in deiner Bauchmuskulatur Muskelspannung entsteht. Zun\xE4chst bewegst du nun deinen Oberk\xF6rper in eine Richtung.\n Deine Arme befindet sich an der Seite deines K\xF6rpers und schweben leicht angehoben in der Luft.\n Du bewegst deine H\xE4nde in Richtung deiner F\xFC\xDFe, sodass die Fingerspitzen bestenfalls die Ferse ber\xFChren.\n Im Anschluss ziehst du den Oberk\xF6rper wieder zur\xFCck und drehst den K\xF6rper in die andere Richtung.\n Abwechselnd sollte immer ein Arm in Richtung deiner Fersen gelangen.";
    uebungen.push(u19);
    let u20 = new Uebung();
    u20.id = 20;
    u20.name = "Faustschl\xE4ge";
    u20.leicht = 20;
    u20.mittel = 30;
    u20.schwer = 40;
    u20.beschreibung = "Deine F\xFC\xDFe stehen ungef\xE4hr schulterbreit auseinander, aber nicht parallel zueinander. \n Und ab wechseln mit den F\xE4suten nach vorne Boxen.";
    uebungen.push(u20);
    let u21 = new Uebung();
    u21.id = 21;
    u21.name = "Wand Push up";
    u21.leicht = 10;
    u21.mittel = 15;
    u21.schwer = 20;
    u21.beschreibung = "Du stehst etwa eine Arml\xE4nge von der Wand entfernt. Die F\xFC\xDFe stehen mit ganzen Fu\xDFsohlen oder auf den Zehenspitzen auf den Boden. Die H\xE4nde werden entweder flach oder geballt an der Wand platziert.\n Danach senkst Du den Oberk\xF6rper, bis der Kopf fast die Wand ber\xFChrt.\n Am Umkehrpunkt die Arme langsam bis in die Ausgangsposition dr\xFCcken";
    uebungen.push(u21);
    let u22 = new Uebung();
    u22.id = 22;
    u22.name = "Wand Sitzen";
    u22.leicht = 30;
    u22.mittel = 40;
    u22.schwer = 60;
    u22.beschreibung = "Stelle dich mit dem R\xFCcken an eine Wand. Die F\xFC\xDFe sind in etwa h\xFCftbreit, leicht nach au\xDFen gedreht aufgestellt.\n Die Arme k\xF6nnen seitlich am K\xF6rper herabh\xE4ngen oder vor dem Oberk\xF6rper verschr\xE4nkt werden.\n Rutsche an der Wand mit geradem R\xFCcken herunter bis die Oberschenkel eine waagerechte Position angenommen haben.\n Halte diese Position ohne K\xF6rperbewegung so lange wie m\xF6glich.";
    uebungen.push(u22);
    let u23 = new Uebung();
    u23.id = 23;
    u23.name = "Diamant Push up";
    u23.leicht = 10;
    u23.mittel = 15;
    u23.schwer = 20;
    u23.beschreibung = "Ausgangsposition: Handoberfl\xE4che ber\xFChrt den Boden und dabei ber\xFChren sich Daumen und Zeigefinger.\n In der Ausgangsposition sind die Arme durchgestreckt und bilden dabei einen 90\xB0 Winkel.\n Die Beine stehen h\xFCftbreit und die Fu\xDFspitzen ber\xFChren den Boden. Vom Fu\xDF bis zum Kopf weist der K\xF6rper eine gerade Linie auf. Ihr senkt den K\xF6rper langsam ab und dabei ber\xFChrt die Brust im Idealfall die H\xE4nde. Aller Anfang ist f\xFCr Einsteiger nat\xFCrlich schwer. Aber zumindest solltet ihr den K\xF6rper so weit absenken, wie es nur geht.";
    uebungen.push(u23);
    let u24 = new Uebung();
    u24.id = 24;
    u24.name = "Klappmesser";
    u24.leicht = 10;
    u24.mittel = 15;
    u24.schwer = 20;
    u24.beschreibung = "Ausgangsposition: Du legst gerade auf den R\xFCcken. Nun beginnst du mit der \xDCbung, indem du beim Ausatmen den Oberk\xF6rper aufrichtest und deine Beine anhebst. \nDie H\xE4nde ziehen hier durch die Mitte deiner Beine in Richtung des Bodens. Du kannst die Bewegung so weit wie m\xF6glich ausf\xFChren. Im Anschluss kehrst du in die Ausgangsposition zur\xFCck, w\xE4hrend du tief Luft holst.\n Bei der gesamten \xDCbung h\xE4ltst du deinen R\xFCcken gerade. Reduziere lieber den Bewegungsradius, anstatt einen Rundr\xFCcken zu machen.";
    uebungen.push(u24);
    return uebungen;
  }

  // src/uebung/uebung-list.ts
  var template3 = document.createElement("template");
  template3.innerHTML = `
<style>
table{
  border: 1px solid rgba(255,255,255,0.3);
  table-layout: auto;
  width:80%;
}
 th{
  
  background-color: rgba(255,255,255,0.3);
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 30px;
  color: #fff;
}
td{
  padding: 3px;
  text-align: left;
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
#check{
  filter: hue-rotate(120deg)
}

</style>
<div class="container">
<div id="content">
    <table cellpadding="0" cellspacing="0" border="0">
    <thead>
      <tr>
        <th></th>
        <th>Name:</th>
        <th>Leicht:</th>
        <th>Mittel:</th>
        <th>Schwer:</th>
      </tr>
    </thead>
      <tbody id="uebungentbody">
      </tbody>
    </table> 
    </div>
  </div>
</div>
`;
  function _td(text) {
    let td = document.createElement("td");
    td.innerText = text;
    return td;
  }
  var UebungList = class extends HTMLElement {
    constructor() {
      super();
      this.selectedUebungen = /* @__PURE__ */ new Set();
      let root = this.attachShadow({ mode: "open" });
      root.append(template3.content.cloneNode(true));
      let uebungentbody = root.getElementById("uebungentbody");
      let uebungen = defaultUebungen();
      for (let i = 0; i < uebungen.length; i++) {
        let u = uebungen[i];
        let tr = document.createElement("tr");
        let checkbox = document.createElement("input");
        checkbox.id = "check";
        checkbox.type = "checkbox";
        let tdcheckbox = document.createElement("td");
        tdcheckbox.appendChild(checkbox);
        tr.appendChild(tdcheckbox);
        tr.appendChild(_td(u.name));
        tr.appendChild(_td(u.leicht.toString()));
        tr.appendChild(_td(u.mittel.toString()));
        tr.appendChild(_td(u.schwer.toString()));
        uebungentbody.appendChild(tr);
        checkbox.addEventListener("input", () => {
          if (checkbox.checked) {
            this.selectedUebungen.add(u.id);
          } else {
            this.selectedUebungen.delete(u.id);
          }
          this.dispatchEvent(new Event("selected", {}));
        });
      }
    }
  };
  customElements.define("uebung-list", UebungList);

  // src/uebung/aufgaben-link.ts
  var template4 = document.createElement("template");
  template4.innerHTML = `
<style>
a {
    color: white;
    text-decoration: none;
  }
  button {
    background-color: transparent;
    border-radius: 30px;
    margin-top: 20px;
    height: 50px;
    width: 120px;
    text-decoration: none;
    border: 2px solid #b33d3d;
    position: relative;
    overflow: hidden;
  }
  button:hover {
    box-shadow: 1px 1px 10px 5px #b33d3d;
  }
  button:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      #b33d3d,
      transparent
    );
    transition: all 650ms;
  }
  button:hover:before {
    left: 100%;
  }
  #text{
    font-size: 11px;
    margin: 0;
    color: white;
  }
  </style>
  <div id="buttonlink">
    <button id="copyurl">Kopieren</button>
    <a id="link"> </a>
    <br> </br>
    <sportkuss-github> </sportkuss-github>
    <p id="text">Github link</p>
  </div>
`;
  var AufgabenLink = class extends HTMLElement {
    constructor() {
      super();
      this._selected = /* @__PURE__ */ new Set();
      let root = this.attachShadow({ mode: "open" });
      root.appendChild(template4.content.cloneNode(true));
    }
    set selected(v) {
      this._selected = v;
      let root = this.shadowRoot;
      let link = root.getElementById("link");
      let url = new URL("/aufgabe/", window.location.href);
      url.searchParams.set("uebungen", [...this._selected].join(","));
      link.href = url.href;
      link.innerText = url.href;
      let copy = root.getElementById("copyurl");
      copy.addEventListener("click", () => {
        let selection = window.getSelection();
        selection.selectAllChildren(link);
        document.execCommand("copy");
      });
    }
  };
  customElements.define("aufgaben-link", AufgabenLink);

  // src/uebung/aufgaben-liste.ts
  var template5 = document.createElement("template");
  template5.innerHTML = `
<style>
#ol{
  display: flex;
  flex-direction: column;
  gap: 30px 20px;
  margin: 30px;
  color: white;
  width: auto;
  height: auto;
  overflow: auto;
}
#content{
  font-size: 20px;
  color: white;
}
li{
  float: left;
  margin: 0 20px;
}
p{
  display:inline
  
  
}
button {
  background-color: transparent;
  border-radius: 30px;
  margin-top: 20px;
  height: 50px;
  width: 120px;
  text-decoration: none;
  border: 2px solid #b33d3d;
  position: relative;
  overflow: hidden;
  float: right;
}
button:hover {
  box-shadow: 1px 1px 10px 5px #b33d3d;
}
button:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    #b33d3d,
    transparent
  );
  transition: all 650ms;
}
button:hover:before {
  left: 100%;
}
#text{
  float:left;
}
</style>
<div class="container">
  <ol id="ol">
  </ol>
  <button id="back">Zur\xFCck</button>    
</div>

`;
  function _li(text) {
    let p = document.createElement("p");
    p.innerText = text;
    return p;
  }
  function _lidetail(text, text2) {
    let p1 = document.createElement("p");
    let details = document.createElement("details");
    let sumary = document.createElement("summary");
    let p2 = document.createElement("p");
    sumary.innerText = text;
    p2.setAttribute("id", "text");
    p2.innerText = text2;
    details.appendChild(sumary);
    details.appendChild(p2);
    p1.appendChild(details);
    return p1;
  }
  var AufgabenList = class extends HTMLElement {
    constructor() {
      super();
      this._selected = /* @__PURE__ */ new Set();
      let root = this.attachShadow({ mode: "open" });
      root.appendChild(template5.content.cloneNode(true));
    }
    set selected(v) {
      this._selected = v;
      let root = this.shadowRoot;
      let uebungen = defaultUebungen();
      let schwierigkeit;
      this._selected.forEach(function(value) {
        let u = uebungen[value - 1];
        let ol = root.getElementById("ol");
        let li = document.createElement("li");
        schwierigkeit = " " + u.leicht.toString() + ", " + u.mittel.toString() + ", " + u.schwer.toString() + "; ";
        li.appendChild(_li(u.name));
        li.appendChild(_li(schwierigkeit));
        li.appendChild(_lidetail("Details", u.beschreibung.toString()));
        ol.appendChild(li);
      });
      let back = root.getElementById("back");
      back.addEventListener("click", () => {
        window.location.href = "/";
      });
    }
  };
  customElements.define("aufgaben-liste", AufgabenList);

  // src/sportkuss-github.ts
  var template6 = document.createElement("template");
  template6.innerHTML = `
<style>
#github {
    width: 64px;
    height: 64px; 


}
</style>
<svg id="github" xmlns="http://www.w3.org/2000/svg" aria-label="GitHub" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#1B1817"/>
<path fill="#fff" d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"/>
</svg>


`;
  var SportkussGithub = class extends HTMLElement {
    constructor() {
      super();
      let root = this.attachShadow({ mode: "open" });
      root.append(template6.content.cloneNode(true));
      let github = root.getElementById("github");
      github.addEventListener("click", () => {
        window.location.href = "https://github.com/sportkuss/sportkuss.github.io";
      });
    }
  };
  customElements.define("sportkuss-github", SportkussGithub);

  // src/Popup.ts
  var template7 = document.createElement("template");
  template7.innerHTML = `
<style>

#popup{
    background:rgba(0,0,0,.4);
    cursor:pointer;
    display:none;
    height:100%;
    position:fixed;
    text-align:center;
    top:0;
    width:100%;
    z-index:10000;
}
#popup .helper{
    display:inline-block;
    height:100%;
    vertical-align:middle;
}
#popup > div {
  background: linear-gradient(to right, #3a69cf, #13e0f3);
    box-shadow: 10px 10px 60px #555;
    display: inline-block;
    height: auto;
    max-width: 551px;
    min-height: 100px;
    vertical-align: middle;
    width: 100%;
    position: relative;
    border-radius: 8px;
}
#close {
    background-color: var(--app-red);
    border: 3px solid #999;
    border-radius: 50px;
    cursor: pointer;
    display: inline-block;
    font-family: arial;
    font-weight: bold;
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 25px;
    line-height: 30px;
    width: 30px;
    height: 30px;
    text-align: center;
}
#close:hover {
    background-color: #ccc;
}
button {
    background-color: transparent;
    border-radius: 30px;
    height: 30px;
    width: 80px;
    border: 2px solid #b33d3d;
    position: relative;
    overflow: hidden;
  }
  button:hover {
    box-shadow: 1px 1px 10px 5px #b33d3d;
  }
  button:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      #b33d3d,
      transparent
    );
    transition: all 650ms;
  }
  button:hover:before {
    left: 100%;
  }
  #openbutton{
      margin: 20px;
  }
  br{
    display: block;
    margin-bottom: 1em;

  }
</style>
<button id="openbutton" >Info</button>

<div id="popup">
    <span class="helper"></span>
    <div>
        <div id="close" >&times;</div>
        <p>Kurze Erkl\xE4rung<br />\xDCbungen ausw\xE4hlen! <br />Auf den Link klicken und schwieigkeits level selbst w\xE4hlen <br />Selber die \xDCbungen machen oder deinem Freund oder Kollgen schicken <br /> Viel Spa\xDF! </p>
    </div>
</div>

`;
  var Popup = class extends HTMLElement {
    constructor() {
      super();
      let root = this.attachShadow({ mode: "open" });
      root.append(template7.content.cloneNode(true));
      let openbutton = this.shadowRoot.getElementById("openbutton");
      let popup = this.shadowRoot.getElementById("popup");
      let close = this.shadowRoot.getElementById("close");
      openbutton.addEventListener("click", () => {
        popup.style.display = "block";
      });
      close.addEventListener("click", () => {
        popup.style.display = "none";
      });
    }
  };
  customElements.define("popup-ex", Popup);

  // src/index.ts
  var date = new Date();
  console.log(date.toLocaleDateString());
})();
