export class Uebung {
    id: number
    name: string
    leicht: number
    mittel: number
    schwer: number
    beschreibung: string
  
    constructor() {
  
    }
  }

export function defaultUebungen(): Uebung[] {
    let uebungen: Uebung[] = [];
    let u1 = new Uebung();
    u1.id = 1
    u1.name = "Liegestützen"
    u1.leicht = 10
    u1.mittel = 15
    u1.schwer = 20
    u1.beschreibung = "Hände unterhalb der Schulter aufstützen, die Zeigefinger zeigen nach vorne. Füße aufstellen, sodass der Körper von Kopf bis Fuß eine gerade Linie bildet. Einatmend die Ellenbogen beugen und den Körper gerade wie ein Brett Richtung Boden absenken. (Nicht schummeln, indem du den Kopf vorschiebst – auch der Nacken bleibt gerade. Ausatmend mit der Kraft des Oberkörpers wieder hochdrücken."
    uebungen.push(u1)
    let u2 = new Uebung();
    u2.id = 2
    u2.name = "Superman"
    u2.leicht = 20
    u2.mittel = 40
    u2.schwer = 80
    u2.beschreibung = "Bei der ersten Übungsvariante befinden sich deine Arme über deinem Kopf. Nun spannst du deine Muskulatur an und hebst Beine sowie Oberkörper an. Diese Bewegung geschieht gleichzeitig. Am höchsten Punkt stoppst du und hältst die Körperspannung einige Sekunden. Anschließend senkst du die Glieder wieder auf den Boden zurück, um dich für den nächsten Durchgang bereit zu machen."
    uebungen.push(u2)
    let u3 = new Uebung();
    u3.id = 3
    u3.name = "High Knees"
    u3.leicht = 5
    u3.mittel = 10
    u3.schwer = 20
    u3.beschreibung = "Bei High Knees läufst du sozusagen auf der Stelle, wobei deine Arme genau wie beim Laufen seitlich neben deinem Körper schwingen. Wie der Name schon sagt, hebst du dabei deine Knie bis auf Hüfthöhe oder sogar etwas höher an."
    uebungen.push(u3)
    let u4 = new Uebung();
    u4.id = 4
    u4.name = "Burpees"
    u4.leicht = 5
    u4.mittel = 10
    u4.schwer = 20
    u4.beschreibung = "    Stell dich hüftbreit auf. Jetzt gehst du tief in die Hocke und stützt dich mit den Händen vor den Füßen auf dem Boden ab. Die Hände sind schulterbreit auseinander. Spring nun in die Liegestützposition und führe einen Push-up aus. Jetzt springst du mit den Füßen wieder nach vorn, so dass du erneut in Hockposition bist. Zum Abschluss führst du einen kerzengeraden Strecksprung nach oben aus."
    uebungen.push(u4)
    let u5 = new Uebung();
    u5.id = 5
    u5.name = "Jumping Jacks"
    u5.leicht = 30
    u5.mittel = 45
    u5.schwer = 60
    u5.beschreibung = "Um mit Jumping Jacks zu starten, stelle dich aufrecht hin. Die Füße sind schulterschmal. Dein Nacken ist in Verlängerung der Wirbelsäule. Schaue gerade nach vorne. Deine Arme sind in der Ausgangsposition seitlich neben dem Körper, die Handflächen zeigen nach vorne. Ziehe die Schulterblätter nach hinten unten und fixiere sie hier, damit du während der Ausführung den Nacken nicht verspannst. Springe vom Boden ab, indem du zunächst deine Knie minimal beugst und dich vom Boden abstößt. Dabei kommt die Kraft in erster Linie aus den Waden und Oberschenkeln. Vergiss aber nicht, auch deinen Bauch anzuspannen, um aufrecht zu bleiben. Während du hochspringst, spreizt du deine Beine und führst parallel deine Arme über dem Kopf zusammen. Sie sind unter Spannung und nur minimal gebeugt. Komme im über hüftbreiten Stand auf dem Boden auf. Die Zehen zeigen leicht nach außen. Deine Hände berühren sich kurz über dem Kopf. Springe sofort wieder ab und komme mit den Füßen in die schulterschmale Ausgangsposition zurück. Führe die Hände zeitgleich hinter dem Oberkörper zusammen. Auch hier können sich die Fingerspitzen kurz berühren. Wem es an Mobilität im Schultergelenk fehlt, kann die Hände auch seitlich zu den Oberschenkeln führen. Sprungbewegung beim Jumping Jack"
    uebungen.push(u5)
    let u6 = new Uebung();
    u6.id = 6
    u6.name = "Mountain Climber"
    u6.leicht = 10
    u6.mittel = 15
    u6.schwer = 20
    u6.beschreibung = "    Beginne mit den Händen auf dem Boden in Schulterbreite, Arme gestreckt. Die Hände sollten sich ungefähr in senkrechter Linie mit dem Brustkorb befinden. Halte die Plank-Position im Oberkörper während du deine Knie nacheinander zur projizierten Linie, die sich auf dem Boden befindet, ziehst. Ziehe deine Knie abwechselnd zur projizierten Linie auf dem Boden, während du dich mit den Händen abstützt und deinen Rumpf stabilisierst."
    uebungen.push(u6)
    let u7 = new Uebung();
    u7.id = 7
    u7.name = "Squats"
    u7.leicht = 10
    u7.mittel = 15
    u7.schwer = 20
    u7.beschreibung = "    Beuge die Knie und schiebe das Gesäß leicht nach hinten, bis sich die Oberschenkel in etwa in der Waagerechten befinden, jedoch so, dass die Knie nicht über die Zehenspitzen hinaus stehen. Der Rücken bleibt bei herausgedrückter Brust gerade. Atme währenddessen ein. Strecke die Beine in die Ausgangssituation zurück und atme aus. Die Beine bzw. die Knie dürfen dabei nicht vollständig durchgedrückt werden."
    uebungen.push(u7)
    let u8 = new Uebung();
    u8.id = 8
    u8.name = "Trizep Dips"
    u8.leicht = 10
    u8.mittel = 15
    u8.schwer = 20
    u8.beschreibung = "Nun atmest du aus und bewegst dein Gesäß vor die Bank oder dem Stuhl. Deine Arme sind fast vollständig gestreckt. Beim Einatmen senkst du dein Gesäß in Richtung Boden. Die Ellenbogen beugen sich langsam, sodass der Oberarm und Unterarm einen rechten Winkel bilden. Die Ellenbogen bleiben nah am Körper, um den Reiz auf den Trizeps zu legen. Beim Ausatmen drückst du nun deinen Oberkörper wieder nach oben. Achte darauf, dass du auch in der Ausgangsposition deine Arme nie vollständig gestreckt hast, um die Ellenbogengelenke zu schützen."
    uebungen.push(u8)
    let u9 = new Uebung();
    u9.id = 9
    u9.name = "Crunces"
    u9.leicht = 10
    u9.mittel = 15
    u9.schwer = 20
    u9.beschreibung = "Zum Beginn der Übung bewegst du den Oberkörper nach oben. Dabei hältst du die beiden Hände beispielsweise vor deinem Kopf. Die Arme befinden sich tendenziell neben deinem Körper. Bei der Aufwärtsbewegung atmest du aus und solltest darauf achten, dass der Rücken keinen zu starken Buckel macht. Die Kraft sollte einzig und allein aus dem Bauch stammen. Nur der Oberkörper bewegt sich. Unterstützung durch die Oberschenkel oder eine schwungartige Bewegung sollten unterbleiben. Wenn der Körper aufrecht ist, bist du in der Endposition angekommen. Beim Einatmen kehrst du nun langsam in die Ausgangsposition zurück."
    uebungen.push(u9)
    let u10 = new Uebung();
    u10.id = 10
    u10.name = "Leg Raise"
    u10.leicht = 10
    u10.mittel = 15
    u10.schwer = 20
    u10.beschreibung = "Um mit dieser Variante des klassischen Beinheben im Liegen zu beginnen, hebst du die Beine senkrecht nach oben. Die Beine sind dabei nicht vollständig ausgestreckt, damit du die Gelenke schützt. Somit behältst du eine minimale Beugung in den Knien. Allerdings solltest du den Po leicht in die Luft bewegen, um den Muskelreiz zu erzeugen bzw. zu verstärken.  Dein Oberkörper, Kopf und Nacken bewegen sich nicht. Spanne deinen Bauch an und senke im Anschluss die Beine wieder langsam nach unten ab. Du führst die Abwärtsbewegung so weit fort, dass du deinen unteren Rücken noch auf dem Boden halten kannst. Deine Beine können dann ganz kurz den Boden berühren. Dabei atmest du langsam aus. Im Anschluss atmest du ein und fängst mit der Übung wieder von vorne an."
    uebungen.push(u10)
    let u11 = new Uebung();
    u11.id = 11
    u11.name = "Flutter Kicks"
    u11.leicht = 30
    u11.mittel = 40
    u11.schwer = 60
    u11.beschreibung = "Um mit den klassischen Flutter Kicks zu beginnen, hebst du zunächst ein Bein nach oben. Das untere Bein schwebt weiterhin parallel über dem Boden. Die Streckung der Beine bleibt die ganze Zeit bestehen. Der Ausschlag der Beine hängt zudem von deinem Wohlgefühl ab. Hier gibt es keine festen Regeln. Du solltest immer darauf achten, dass du die Bewegung kontrolliert und mit Spannung in der Bauchmuskulatur ausführst. Dies ist deutlich wichtiger als ein großer Radius. Im Anschluss hebst du das andere Bein nach oben, während du die entgegengesetzte Seite absenkst."
    uebungen.push(u11)
    let u12 = new Uebung();
    u12.id = 12
    u12.name = "Russian Twist"
    u12.leicht = 20
    u12.mittel = 25
    u12.schwer = 40
    u12.beschreibung = "Nun beginnst du mit der Übung, indem du deinen Oberkörper zu einer Seite drehst. Der Unterkörper sollte bei dieser Bewegung starr in der Mitte bleiben. Die Bewegung stammt einzig und allein aus dem Oberkörper. Im Anschluss kehrst du in die Ausgangsposition zurück und drehst den Oberkörper nun in die andere Richtung. Dabei musst du allerdings gar nicht in der Mitte verharren, sondern kannst die Bewegung auch problemlos fließend ausüben."
    uebungen.push(u12)
    let u13 = new Uebung();
    u13.id = 13
    u13.name = "Ausfallschritt"
    u13.leicht = 10
    u13.mittel = 15
    u13.schwer = 20
    u13.beschreibung = "Die Ausgangsposition: Stelle Deine Beine hüftbreit auf. Dein Blick ist nach vorn gerichtet. Jetzt machst Du einen großen Schritt nach vorne. Nun senkst du den Körper ab, indem du die Beine in den Knien beugst. Achte darauf, dass der vordere Oberschenkel in der Endstellung parallel zum Boden ist. Wichtig ist, dass Dein vorderes Knie nicht über die Fußspitze hinausragt, sondern sich über dem Fuß befindet, das hintere Bein berührt den Boden nur fast. Jetzt verbleibst Du einen kurzen Moment in dieser Position. Um in die Ausgangsposition zurückzukehren, drückst Du Dich aktiv aus dem vorderen Fuß wieder in die Schrittstellung und kehrst dann in die Ausgansposition zurück. Anschließend Beinwechsel. "
    uebungen.push(u13)
    let u14 = new Uebung();
    u14.id = 14
    u14.name = "Umgedrehter Schneeengel"
    u14.leicht = 10
    u14.mittel = 15
    u14.schwer = 20
    u14.beschreibung = "Auf den Bauch legen, die Arme über den Kopf lang strecken. Lasse die Handflächen auf dem Boden, stelle die Beine nebeneinander. Auch die Fußspitzen sollen auf dem Boden bleiben. Nun hebst du deine Brust, deine Arme und Beine an und machst die gleichen Bewegungen wie beim klassischen Schneeengel, d.h. Arme wandern im breiten Bogen zur Hüfte, gleichzeitig öffnest du deine Beine – alles in der Schwebe. Wieder zur Ausgangsstellung zurückkehren, kurz Arme und Beine ablegen und erneut den umgekehrten Schneeengel ausführen."
    uebungen.push(u14)
    let u15 = new Uebung();
    u15.id = 15
    u15.name = "Spiederman push up"
    u15.leicht = 10
    u15.mittel = 15
    u15.schwer = 20
    u15.beschreibung = "Starte in der oberen Liegestütz-Position. Senke dann den Körper ab und ziehe das rechte Knie nach vorn. Beim Hochdrücken das Bein wieder nach hinten strecken. Beim nächsten Absenken das linke Knie hochziehen usw. Wichtig: Der Rumpf ist während des Satzes komplett angespannt!"
    uebungen.push(u15)
    let u16 = new Uebung();
    u16.id = 16
    u16.name = "Planke"
    u16.leicht = 30
    u16.mittel = 40
    u16.schwer = 60
    u16.beschreibung = "Die klassische Ausführung des Unterarmstützes beginnt in liegender Position auf dem Bauch, wobei der Oberkörper auf die Unterarme gestützt ist. Die Ellenbogen befinden sich auf Schulterhöhe. Die Unterarme können parallel zueinander liegen oder spitz zulaufen, so dass sich die Hände berühren. Die Füße berühren den Boden nur mit den Zehen. Aus dieser Position versetzt du deinen Körper in Spannung und bringst den durchhängenden Bauch-Hüftbereich in eine Linie mit deinen Schultern und Beinen."
    uebungen.push(u16)
    let u17 = new Uebung();
    u17.id = 17
    u17.name = "Seitlicher Unterarmstütze"
    u17.leicht = 10
    u17.mittel = 15
    u17.schwer = 20
    u17.beschreibung = "Der seitliche Unterarmstütz beginnt damit, dass du mit der linken oder rechten Körperfläche auf dem Boden liegst. Es berühren also eine Fußaußenkante, ein Bein, die Hüfte sowie ein Unterarm den Boden. Der Unterarm zeigt vom Körper in Blickrichtung weg. Der andere Arm kann in bequemer Position an die Hüfte gelegt werden. Aus dieser Position heraus spannst du deinen Körper wieder an und bringst ihn in eine Linie."
    uebungen.push(u17)
    let u18 = new Uebung();
    u18.id = 18
    u18.name = "Weitarm Push up"
    u18.leicht = 10
    u18.mittel = 15
    u18.schwer = 20
    u18.beschreibung = "Mit der breiten Handstellung lässt du deinen Körper voller Spannung nach unten sinken, während du ausatmest. Du stoppst kurz, bevor dein Körper den Boden berührt. Beim Ausatmen drückst du dich wieder nach oben, bis die Ellenbogen nur noch leicht gebeugt sind."
    uebungen.push(u18)
    let u19 = new Uebung();
    u19.id = 19
    u19.name = "Fersenschlag"
    u19.leicht = 10
    u19.mittel = 15
    u19.schwer = 20
    u19.beschreibung = "Du hebst deinen Oberkörper leicht an, sodass sich Kopf und Schultern in der Luft befinden. Dabei achtest du darauf, dass in deiner Bauchmuskulatur Muskelspannung entsteht. Zunächst bewegst du nun deinen Oberkörper in eine Richtung. Deine Arme befindet sich an der Seite deines Körpers und schweben leicht angehoben in der Luft. Du bewegst deine Hände in Richtung deiner Füße, sodass die Fingerspitzen bestenfalls die Ferse berühren. Im Anschluss ziehst du den Oberkörper wieder zurück und drehst den Körper in die andere Richtung. Abwechselnd sollte immer ein Arm in Richtung deiner Fersen gelangen. Du legst deinen Oberkörper zu keinem Zeitpunkt dieser Übung ab, um die notwendige Spannung auf der Bauchmuskulatur beizubehalten. Heel-Touches"
    uebungen.push(u19)
    let u20 = new Uebung();
    u20.id = 20
    u20.name = "Faustschläge"
    u20.leicht = 20
    u20.mittel = 30
    u20.schwer = 40
    u20.beschreibung = "Deine Füße stehen ungefähr schulterbreit auseinander, aber nicht parallel zueinander. Und ab wechseln mit den Fäsuten nach vorne Boxen."
    uebungen.push(u20)
    let u21 = new Uebung();
    u21.id = 21
    u21.name = "Wand Push up"
    u21.leicht = 10
    u21.mittel = 15
    u21.schwer = 20
    u21.beschreibung = "Du stehst etwa eine Armlänge von der Wand entfernt. Die Füße stehen mit ganzen Fußsohlen oder auf den Zehenspitzen auf den Boden. Die Hände werden entweder flach oder geballt an der Wand platziert (sie befinden sich auf Brusthöhe und sind breiter als schulterbreit positioniert). Danach senkst Du den Oberkörper, bis der Kopf fast die Wand berührt. Am Umkehrpunkt die Arme langsam bis in die Ausgangsposition drücken"
    uebungen.push(u21)
    let u22 = new Uebung();
    u22.id = 22
    u22.name = "Wand Sitzen"
    u22.leicht = 10
    u22.mittel = 20
    u22.schwer = 30
    u22.beschreibung = "Stelle dich mit dem Rücken an eine Wand. Die Füße sind in etwa hüftbreit, leicht nach außen gedreht aufgestellt. Die Arme können seitlich am Körper herabhängen oder vor dem Oberkörper verschränkt werden. Rutsche an der Wand mit geradem Rücken herunter bis die Oberschenkel eine waagerechte Position angenommen haben. Halte diese Position ohne Körperbewegung so lange wie möglich."
    uebungen.push(u22)
    let u23 = new Uebung();
    u23.id = 23
    u23.name = "Diamant Push up"
    u23.leicht = 10
    u23.mittel = 15
    u23.schwer = 20
    u23.beschreibung = "Ausgangsposition: Handoberfläche berührt den Boden und dabei berühren sich Daumen und Zeigefinger. In der Ausgangsposition sind die Arme durchgestreckt und bilden dabei einen 90° Winkel. Die Beine stehen hüftbreit und die Fußspitzen berühren den Boden. Vom Fuß bis zum Kopf weist der Körper eine gerade Linie auf. Spannt den Körper richtig an und geht weg von der lockeren Haltung. Der schweißtreibende Part folgt jetzt: Ihr senkt den Körper langsam ab und dabei berührt die Brust im Idealfall die Hände. Aller Anfang ist für Einsteiger natürlich schwer und vielen fällt das Absenken natürlich alles andere als leicht. Aber zumindest solltet ihr den Körper so weit absenken, wie es nur geht. Das Tempo ist dabei durchgehend in moderater Geschwindigkeit gehalten. So ist sicher gestellt, dass ihr über einen längeren Zeitraum diese Intensität beibehält und mit vorgenommener Wiederholungszahl wird die Übung schwieriger."
    uebungen.push(u23)
    let u24 = new Uebung();
    u24.id = 24
    u24.name = "Klappmesser"
    u24.leicht = 10
    u24.mittel = 15
    u24.schwer = 20
    u24.beschreibung = "Nun beginnst du mit der Übung, indem du beim Ausatmen den Oberkörper aufrichtest und deine Beine anhebst. Die Hände ziehen hier durch die Mitte deiner Beine in Richtung des Bodens. Du kannst die Bewegung so weit wie möglich ausführen. Im Anschluss kehrst du in die Ausgangsposition zurück, während du tief Luft holst. Bei der gesamten Übung hältst du deinen Rücken gerade. Reduziere lieber den Bewegungsradius, anstatt einen Rundrücken zu machen."
    uebungen.push(u24)
    return uebungen;
}