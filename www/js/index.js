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
      let message = ["Fit zu sein ist kein Ziel, es ist eine Lebenshaltung.", "Erfolg hat drei Buchstaben TUN", "You cant spell challenge without challenge"];
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
    u1.beschreibung = "H\xE4nde unterhalb der Schulter aufst\xFCtzen, die Zeigefinger zeigen nach vorne. F\xFC\xDFe aufstellen, sodass der K\xF6rper von Kopf bis Fu\xDF eine gerade Linie bildet. Einatmend die Ellenbogen beugen und den K\xF6rper gerade wie ein Brett Richtung Boden absenken. (Nicht schummeln, indem du den Kopf vorschiebst \u2013 auch der Nacken bleibt gerade. Ausatmend mit der Kraft des Oberk\xF6rpers wieder hochdr\xFCcken.";
    uebungen.push(u1);
    let u2 = new Uebung();
    u2.id = 2;
    u2.name = "Superman";
    u2.leicht = 20;
    u2.mittel = 40;
    u2.schwer = 80;
    u2.beschreibung = "Bei der ersten \xDCbungsvariante befinden sich deine Arme \xFCber deinem Kopf. Nun spannst du deine Muskulatur an und hebst Beine sowie Oberk\xF6rper an. Diese Bewegung geschieht gleichzeitig. Am h\xF6chsten Punkt stoppst du und h\xE4ltst die K\xF6rperspannung einige Sekunden. Anschlie\xDFend senkst du die Glieder wieder auf den Boden zur\xFCck, um dich f\xFCr den n\xE4chsten Durchgang bereit zu machen.";
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
    u4.beschreibung = "    Stell dich h\xFCftbreit auf. Jetzt gehst du tief in die Hocke und st\xFCtzt dich mit den H\xE4nden vor den F\xFC\xDFen auf dem Boden ab. Die H\xE4nde sind schulterbreit auseinander. Spring nun in die Liegest\xFCtzposition und f\xFChre einen Push-up aus. Jetzt springst du mit den F\xFC\xDFen wieder nach vorn, so dass du erneut in Hockposition bist. Zum Abschluss f\xFChrst du einen kerzengeraden Strecksprung nach oben aus.";
    uebungen.push(u4);
    let u5 = new Uebung();
    u5.id = 5;
    u5.name = "Jumping Jacks";
    u5.leicht = 30;
    u5.mittel = 45;
    u5.schwer = 60;
    u5.beschreibung = "Um mit Jumping Jacks zu starten, stelle dich aufrecht hin. Die F\xFC\xDFe sind schulterschmal. Dein Nacken ist in Verl\xE4ngerung der Wirbels\xE4ule. Schaue gerade nach vorne. Deine Arme sind in der Ausgangsposition seitlich neben dem K\xF6rper, die Handfl\xE4chen zeigen nach vorne. Ziehe die Schulterbl\xE4tter nach hinten unten und fixiere sie hier, damit du w\xE4hrend der Ausf\xFChrung den Nacken nicht verspannst. Springe vom Boden ab, indem du zun\xE4chst deine Knie minimal beugst und dich vom Boden abst\xF6\xDFt. Dabei kommt die Kraft in erster Linie aus den Waden und Oberschenkeln. Vergiss aber nicht, auch deinen Bauch anzuspannen, um aufrecht zu bleiben. W\xE4hrend du hochspringst, spreizt du deine Beine und f\xFChrst parallel deine Arme \xFCber dem Kopf zusammen. Sie sind unter Spannung und nur minimal gebeugt. Komme im \xFCber h\xFCftbreiten Stand auf dem Boden auf. Die Zehen zeigen leicht nach au\xDFen. Deine H\xE4nde ber\xFChren sich kurz \xFCber dem Kopf. Springe sofort wieder ab und komme mit den F\xFC\xDFen in die schulterschmale Ausgangsposition zur\xFCck. F\xFChre die H\xE4nde zeitgleich hinter dem Oberk\xF6rper zusammen. Auch hier k\xF6nnen sich die Fingerspitzen kurz ber\xFChren. Wem es an Mobilit\xE4t im Schultergelenk fehlt, kann die H\xE4nde auch seitlich zu den Oberschenkeln f\xFChren. Sprungbewegung beim Jumping Jack";
    uebungen.push(u5);
    let u6 = new Uebung();
    u6.id = 6;
    u6.name = "Mountain Climber";
    u6.leicht = 10;
    u6.mittel = 15;
    u6.schwer = 20;
    u6.beschreibung = "    Beginne mit den H\xE4nden auf dem Boden in Schulterbreite, Arme gestreckt. Die H\xE4nde sollten sich ungef\xE4hr in senkrechter Linie mit dem Brustkorb befinden. Halte die Plank-Position im Oberk\xF6rper w\xE4hrend du deine Knie nacheinander zur projizierten Linie, die sich auf dem Boden befindet, ziehst. Ziehe deine Knie abwechselnd zur projizierten Linie auf dem Boden, w\xE4hrend du dich mit den H\xE4nden abst\xFCtzt und deinen Rumpf stabilisierst.";
    uebungen.push(u6);
    let u7 = new Uebung();
    u7.id = 7;
    u7.name = "Squats";
    u7.leicht = 10;
    u7.mittel = 15;
    u7.schwer = 20;
    u7.beschreibung = "    Beuge die Knie und schiebe das Ges\xE4\xDF leicht nach hinten, bis sich die Oberschenkel in etwa in der Waagerechten befinden, jedoch so, dass die Knie nicht \xFCber die Zehenspitzen hinaus stehen. Der R\xFCcken bleibt bei herausgedr\xFCckter Brust gerade. Atme w\xE4hrenddessen ein. Strecke die Beine in die Ausgangssituation zur\xFCck und atme aus. Die Beine bzw. die Knie d\xFCrfen dabei nicht vollst\xE4ndig durchgedr\xFCckt werden.";
    uebungen.push(u7);
    let u8 = new Uebung();
    u8.id = 8;
    u8.name = "Trizep Dips";
    u8.leicht = 10;
    u8.mittel = 15;
    u8.schwer = 20;
    u8.beschreibung = "Nun atmest du aus und bewegst dein Ges\xE4\xDF vor die Bank oder dem Stuhl. Deine Arme sind fast vollst\xE4ndig gestreckt. Beim Einatmen senkst du dein Ges\xE4\xDF in Richtung Boden. Die Ellenbogen beugen sich langsam, sodass der Oberarm und Unterarm einen rechten Winkel bilden. Die Ellenbogen bleiben nah am K\xF6rper, um den Reiz auf den Trizeps zu legen. Beim Ausatmen dr\xFCckst du nun deinen Oberk\xF6rper wieder nach oben. Achte darauf, dass du auch in der Ausgangsposition deine Arme nie vollst\xE4ndig gestreckt hast, um die Ellenbogengelenke zu sch\xFCtzen.";
    uebungen.push(u8);
    let u9 = new Uebung();
    u9.id = 9;
    u9.name = "Crunces";
    u9.leicht = 10;
    u9.mittel = 15;
    u9.schwer = 20;
    u9.beschreibung = "Zum Beginn der \xDCbung bewegst du den Oberk\xF6rper nach oben. Dabei h\xE4ltst du die beiden H\xE4nde beispielsweise vor deinem Kopf. Die Arme befinden sich tendenziell neben deinem K\xF6rper. Bei der Aufw\xE4rtsbewegung atmest du aus und solltest darauf achten, dass der R\xFCcken keinen zu starken Buckel macht. Die Kraft sollte einzig und allein aus dem Bauch stammen. Nur der Oberk\xF6rper bewegt sich. Unterst\xFCtzung durch die Oberschenkel oder eine schwungartige Bewegung sollten unterbleiben. Wenn der K\xF6rper aufrecht ist, bist du in der Endposition angekommen. Beim Einatmen kehrst du nun langsam in die Ausgangsposition zur\xFCck.";
    uebungen.push(u9);
    let u10 = new Uebung();
    u10.id = 10;
    u10.name = "Leg Raise";
    u10.leicht = 10;
    u10.mittel = 15;
    u10.schwer = 20;
    u10.beschreibung = "Um mit dieser Variante des klassischen Beinheben im Liegen zu beginnen, hebst du die Beine senkrecht nach oben. Die Beine sind dabei nicht vollst\xE4ndig ausgestreckt, damit du die Gelenke sch\xFCtzt. Somit beh\xE4ltst du eine minimale Beugung in den Knien. Allerdings solltest du den Po leicht in die Luft bewegen, um den Muskelreiz zu erzeugen bzw. zu verst\xE4rken.  Dein Oberk\xF6rper, Kopf und Nacken bewegen sich nicht. Spanne deinen Bauch an und senke im Anschluss die Beine wieder langsam nach unten ab. Du f\xFChrst die Abw\xE4rtsbewegung so weit fort, dass du deinen unteren R\xFCcken noch auf dem Boden halten kannst. Deine Beine k\xF6nnen dann ganz kurz den Boden ber\xFChren. Dabei atmest du langsam aus. Im Anschluss atmest du ein und f\xE4ngst mit der \xDCbung wieder von vorne an.";
    uebungen.push(u10);
    let u11 = new Uebung();
    u11.id = 11;
    u11.name = "Flutter Kicks";
    u11.leicht = 30;
    u11.mittel = 40;
    u11.schwer = 60;
    u11.beschreibung = "Um mit den klassischen Flutter Kicks zu beginnen, hebst du zun\xE4chst ein Bein nach oben. Das untere Bein schwebt weiterhin parallel \xFCber dem Boden. Die Streckung der Beine bleibt die ganze Zeit bestehen. Der Ausschlag der Beine h\xE4ngt zudem von deinem Wohlgef\xFChl ab. Hier gibt es keine festen Regeln. Du solltest immer darauf achten, dass du die Bewegung kontrolliert und mit Spannung in der Bauchmuskulatur ausf\xFChrst. Dies ist deutlich wichtiger als ein gro\xDFer Radius. Im Anschluss hebst du das andere Bein nach oben, w\xE4hrend du die entgegengesetzte Seite absenkst.";
    uebungen.push(u11);
    let u12 = new Uebung();
    u12.id = 12;
    u12.name = "Russian Twist";
    u12.leicht = 20;
    u12.mittel = 25;
    u12.schwer = 40;
    u12.beschreibung = "Nun beginnst du mit der \xDCbung, indem du deinen Oberk\xF6rper zu einer Seite drehst. Der Unterk\xF6rper sollte bei dieser Bewegung starr in der Mitte bleiben. Die Bewegung stammt einzig und allein aus dem Oberk\xF6rper. Im Anschluss kehrst du in die Ausgangsposition zur\xFCck und drehst den Oberk\xF6rper nun in die andere Richtung. Dabei musst du allerdings gar nicht in der Mitte verharren, sondern kannst die Bewegung auch problemlos flie\xDFend aus\xFCben.";
    uebungen.push(u12);
    let u13 = new Uebung();
    u13.id = 13;
    u13.name = "Ausfallschritt";
    u13.leicht = 10;
    u13.mittel = 15;
    u13.schwer = 20;
    u13.beschreibung = "Die Ausgangsposition: Stelle Deine Beine h\xFCftbreit auf. Dein Blick ist nach vorn gerichtet. Jetzt machst Du einen gro\xDFen Schritt nach vorne. Nun senkst du den K\xF6rper ab, indem du die Beine in den Knien beugst. Achte darauf, dass der vordere Oberschenkel in der Endstellung parallel zum Boden ist. Wichtig ist, dass Dein vorderes Knie nicht \xFCber die Fu\xDFspitze hinausragt, sondern sich \xFCber dem Fu\xDF befindet, das hintere Bein ber\xFChrt den Boden nur fast. Jetzt verbleibst Du einen kurzen Moment in dieser Position. Um in die Ausgangsposition zur\xFCckzukehren, dr\xFCckst Du Dich aktiv aus dem vorderen Fu\xDF wieder in die Schrittstellung und kehrst dann in die Ausgansposition zur\xFCck. Anschlie\xDFend Beinwechsel. ";
    uebungen.push(u13);
    let u14 = new Uebung();
    u14.id = 14;
    u14.name = "Umgedrehter Schneeengel";
    u14.leicht = 10;
    u14.mittel = 15;
    u14.schwer = 20;
    u14.beschreibung = "Auf den Bauch legen, die Arme \xFCber den Kopf lang strecken. Lasse die Handfl\xE4chen auf dem Boden, stelle die Beine nebeneinander. Auch die Fu\xDFspitzen sollen auf dem Boden bleiben. Nun hebst du deine Brust, deine Arme und Beine an und machst die gleichen Bewegungen wie beim klassischen Schneeengel, d.h. Arme wandern im breiten Bogen zur H\xFCfte, gleichzeitig \xF6ffnest du deine Beine \u2013 alles in der Schwebe. Wieder zur Ausgangsstellung zur\xFCckkehren, kurz Arme und Beine ablegen und erneut den umgekehrten Schneeengel ausf\xFChren.";
    uebungen.push(u14);
    let u15 = new Uebung();
    u15.id = 15;
    u15.name = "Spiederman push up";
    u15.leicht = 10;
    u15.mittel = 15;
    u15.schwer = 20;
    u15.beschreibung = "Starte in der oberen Liegest\xFCtz-Position. Senke dann den K\xF6rper ab und ziehe das rechte Knie nach vorn. Beim Hochdr\xFCcken das Bein wieder nach hinten strecken. Beim n\xE4chsten Absenken das linke Knie hochziehen usw. Wichtig: Der Rumpf ist w\xE4hrend des Satzes komplett angespannt!";
    uebungen.push(u15);
    let u16 = new Uebung();
    u16.id = 16;
    u16.name = "Planke";
    u16.leicht = 30;
    u16.mittel = 40;
    u16.schwer = 60;
    u16.beschreibung = "Die klassische Ausf\xFChrung des Unterarmst\xFCtzes beginnt in liegender Position auf dem Bauch, wobei der Oberk\xF6rper auf die Unterarme gest\xFCtzt ist. Die Ellenbogen befinden sich auf Schulterh\xF6he. Die Unterarme k\xF6nnen parallel zueinander liegen oder spitz zulaufen, so dass sich die H\xE4nde ber\xFChren. Die F\xFC\xDFe ber\xFChren den Boden nur mit den Zehen. Aus dieser Position versetzt du deinen K\xF6rper in Spannung und bringst den durchh\xE4ngenden Bauch-H\xFCftbereich in eine Linie mit deinen Schultern und Beinen.";
    uebungen.push(u16);
    let u17 = new Uebung();
    u17.id = 17;
    u17.name = "Seitlicher Unterarmst\xFCtze";
    u17.leicht = 10;
    u17.mittel = 15;
    u17.schwer = 20;
    u17.beschreibung = "Der seitliche Unterarmst\xFCtz beginnt damit, dass du mit der linken oder rechten K\xF6rperfl\xE4che auf dem Boden liegst. Es ber\xFChren also eine Fu\xDFau\xDFenkante, ein Bein, die H\xFCfte sowie ein Unterarm den Boden. Der Unterarm zeigt vom K\xF6rper in Blickrichtung weg. Der andere Arm kann in bequemer Position an die H\xFCfte gelegt werden. Aus dieser Position heraus spannst du deinen K\xF6rper wieder an und bringst ihn in eine Linie.";
    uebungen.push(u17);
    let u18 = new Uebung();
    u18.id = 18;
    u18.name = "Weitarm Push up";
    u18.leicht = 10;
    u18.mittel = 15;
    u18.schwer = 20;
    u18.beschreibung = "Mit der breiten Handstellung l\xE4sst du deinen K\xF6rper voller Spannung nach unten sinken, w\xE4hrend du ausatmest. Du stoppst kurz, bevor dein K\xF6rper den Boden ber\xFChrt. Beim Ausatmen dr\xFCckst du dich wieder nach oben, bis die Ellenbogen nur noch leicht gebeugt sind.";
    uebungen.push(u18);
    let u19 = new Uebung();
    u19.id = 19;
    u19.name = "Fersenschlag";
    u19.leicht = 10;
    u19.mittel = 15;
    u19.schwer = 20;
    u19.beschreibung = "Du hebst deinen Oberk\xF6rper leicht an, sodass sich Kopf und Schultern in der Luft befinden. Dabei achtest du darauf, dass in deiner Bauchmuskulatur Muskelspannung entsteht. Zun\xE4chst bewegst du nun deinen Oberk\xF6rper in eine Richtung. Deine Arme befindet sich an der Seite deines K\xF6rpers und schweben leicht angehoben in der Luft. Du bewegst deine H\xE4nde in Richtung deiner F\xFC\xDFe, sodass die Fingerspitzen bestenfalls die Ferse ber\xFChren. Im Anschluss ziehst du den Oberk\xF6rper wieder zur\xFCck und drehst den K\xF6rper in die andere Richtung. Abwechselnd sollte immer ein Arm in Richtung deiner Fersen gelangen. Du legst deinen Oberk\xF6rper zu keinem Zeitpunkt dieser \xDCbung ab, um die notwendige Spannung auf der Bauchmuskulatur beizubehalten. Heel-Touches";
    uebungen.push(u19);
    let u20 = new Uebung();
    u20.id = 20;
    u20.name = "Faustschl\xE4ge";
    u20.leicht = 20;
    u20.mittel = 30;
    u20.schwer = 40;
    u20.beschreibung = "Deine F\xFC\xDFe stehen ungef\xE4hr schulterbreit auseinander, aber nicht parallel zueinander. Und ab wechseln mit den F\xE4suten nach vorne Boxen.";
    uebungen.push(u20);
    let u21 = new Uebung();
    u21.id = 21;
    u21.name = "Wand Push up";
    u21.leicht = 10;
    u21.mittel = 15;
    u21.schwer = 20;
    u21.beschreibung = "Du stehst etwa eine Arml\xE4nge von der Wand entfernt. Die F\xFC\xDFe stehen mit ganzen Fu\xDFsohlen oder auf den Zehenspitzen auf den Boden. Die H\xE4nde werden entweder flach oder geballt an der Wand platziert (sie befinden sich auf Brusth\xF6he und sind breiter als schulterbreit positioniert). Danach senkst Du den Oberk\xF6rper, bis der Kopf fast die Wand ber\xFChrt. Am Umkehrpunkt die Arme langsam bis in die Ausgangsposition dr\xFCcken";
    uebungen.push(u21);
    let u22 = new Uebung();
    u22.id = 22;
    u22.name = "Wand Sitzen";
    u22.leicht = 10;
    u22.mittel = 20;
    u22.schwer = 30;
    u22.beschreibung = "Stelle dich mit dem R\xFCcken an eine Wand. Die F\xFC\xDFe sind in etwa h\xFCftbreit, leicht nach au\xDFen gedreht aufgestellt. Die Arme k\xF6nnen seitlich am K\xF6rper herabh\xE4ngen oder vor dem Oberk\xF6rper verschr\xE4nkt werden. Rutsche an der Wand mit geradem R\xFCcken herunter bis die Oberschenkel eine waagerechte Position angenommen haben. Halte diese Position ohne K\xF6rperbewegung so lange wie m\xF6glich.";
    uebungen.push(u22);
    let u23 = new Uebung();
    u23.id = 23;
    u23.name = "Diamant Push up";
    u23.leicht = 10;
    u23.mittel = 15;
    u23.schwer = 20;
    u23.beschreibung = "Ausgangsposition: Handoberfl\xE4che ber\xFChrt den Boden und dabei ber\xFChren sich Daumen und Zeigefinger. In der Ausgangsposition sind die Arme durchgestreckt und bilden dabei einen 90\xB0 Winkel. Die Beine stehen h\xFCftbreit und die Fu\xDFspitzen ber\xFChren den Boden. Vom Fu\xDF bis zum Kopf weist der K\xF6rper eine gerade Linie auf. Spannt den K\xF6rper richtig an und geht weg von der lockeren Haltung. Der schwei\xDFtreibende Part folgt jetzt: Ihr senkt den K\xF6rper langsam ab und dabei ber\xFChrt die Brust im Idealfall die H\xE4nde. Aller Anfang ist f\xFCr Einsteiger nat\xFCrlich schwer und vielen f\xE4llt das Absenken nat\xFCrlich alles andere als leicht. Aber zumindest solltet ihr den K\xF6rper so weit absenken, wie es nur geht. Das Tempo ist dabei durchgehend in moderater Geschwindigkeit gehalten. So ist sicher gestellt, dass ihr \xFCber einen l\xE4ngeren Zeitraum diese Intensit\xE4t beibeh\xE4lt und mit vorgenommener Wiederholungszahl wird die \xDCbung schwieriger.";
    uebungen.push(u23);
    let u24 = new Uebung();
    u24.id = 24;
    u24.name = "Klappmesser";
    u24.leicht = 10;
    u24.mittel = 15;
    u24.schwer = 20;
    u24.beschreibung = "Nun beginnst du mit der \xDCbung, indem du beim Ausatmen den Oberk\xF6rper aufrichtest und deine Beine anhebst. Die H\xE4nde ziehen hier durch die Mitte deiner Beine in Richtung des Bodens. Du kannst die Bewegung so weit wie m\xF6glich ausf\xFChren. Im Anschluss kehrst du in die Ausgangsposition zur\xFCck, w\xE4hrend du tief Luft holst. Bei der gesamten \xDCbung h\xE4ltst du deinen R\xFCcken gerade. Reduziere lieber den Bewegungsradius, anstatt einen Rundr\xFCcken zu machen.";
    uebungen.push(u24);
    return uebungen;
  }

  // src/uebung/uebung-list.ts
  var template3 = document.createElement("template");
  template3.innerHTML = `
<style>


table{
  width:100%;
  table-layout: fixed;
}
 th{
  background-color: rgba(255,255,255,0.3);
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
}
td{
  
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 20px;
  color: #fff;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
#content{
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
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
  </style>
<div id="buttonlink">
    <button id="copyurl">Kopieren</button>
    <a id="link"> </a>
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

</style>
<div class="container">

    <ol id="ol">
     </ol>
     <button id="back">
    Zur\xFCck
     </buuton>
      
     
  

      </div>
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

  // src/index.ts
  var date = new Date();
  console.log(date.toLocaleDateString());
})();
