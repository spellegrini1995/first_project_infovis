# Primo progetto infovis - Pie Chart con animazioni
Mini progetto d3.js per il corso di Visualizzazione delle Informazioni, Università Roma Tre, a.a. 2018-2019.

## Specifica del progetto
<p align="justify">
Crea un file json con dei dati bivariati: ci sono 20 data-point e ogni data-point ha due variabili, una categorica e una quantitative. Prima disegna questo dataset tramite un diagramma a torta in cui la prima variabile categorica è assegnata ad uno spicchio della torta e la
seconda varibile quantitativa è utilizzata per l'angolo dello spicchio di torta (attento, devi fare una proporzione in modo che la somma dia 360). Inizialmente l'ordine dei data-point è quello del file json. Facendo click con il pulsante sinistro del mouse su uno spicchio di
torta questo si scambia di posto con lo spicchio di torta successivo (il successivo dell'ultimo spicchio è il primo).
</p>

## Versione utilizzata
La versione di [d3.js](https://github.com/d3/d3) utilizzata per questo mini progetto è la [v5](https://github.com/d3/d3/blob/master/CHANGES.md), ad oggi la più recente.

## Funzionalità aggiuntive
Le seguenti funzionalità, seppur non richieste in maniera esplicita, rendono migliore la visualizzazione del Pie Chart:
- <p align="justify"> Caricamento dati da file esterno. </p>
- <p align="justify"> Passando con il mouse sugli spicchi della torta che rappresentano le varie regioni italiane è possibile visionare alcuni dettagli come il nome e la popolazione della regione e la percentuale rispetto al totale della popolazione italiana; </p>
- <p align="justify"> Cliccando sui rettangoli colorati della legenda è possibile escludere la regione da essi rappresentata dal diagramma a torta. </p>

## Caricamento dati da file esterno
<p align="justify"> Qualora si volessero caricare i dati da file esterno, potremmo riscontrare dei problemi di sicurezza relativi alle politiche usate dal particolare Web Browser scelto. Per questo motivo, bisogna usare un server http.
<ul>
<li>Su un terminale Windows, dal prompt dei comandi bisogna spostarsi nella cartella in cui si trova il file index.html e, avendo Python installato, bisogna digitare il comando: <i><b>python -m http.server [porta]</b></i>. </li>
<li>Su un terminale Linux, dal prompt dei comandi bisogna spostarsi nella cartella in cui si trova il file index.html e, avendo Python installato, bisogna digitare il comando: <i><b>python -m SimpleHTTPServer [porta]</b></i> o l'equivalente per Python3 <i><b>python3 -m http.server [porta]</b></i>. </li>
  </ul>
</p>

## Anteprima grafica
![alt text](anteprima_piechart.PNG "Pie Chart")
