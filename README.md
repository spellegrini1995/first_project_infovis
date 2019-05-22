# Primo progetto infovis - Pie Chart con animazioni
Mini progetto d3.js per il corso di Visualizzazione delle Informazioni, Università Roma Tre, a.a. 2018-2019.

## Specifica del progetto
<p align="justify">
Crea un file json con dei dati bivariati: ci sono 20 data-point e ogni data-point ha due variabili, una categorica e una quantitative. Prima disegna questo dataset tramite un diagramma a torta in cui la prima variabile categorica è assegnata ad uno spicchio della torta e la
seconda varibile quantitativa è utilizzata per l'angolo dello spicchio di torta (attento, devi fare una proporzione in modo che la somma dia 360). Inizialmente l'ordine dei data-point è quello del file json. Facendo click con il pulsante sinistro del mouse su uno spicchio di
torta questo si scambia di posto con lo spicchio di torta successivo (il successivo dell'ultimo spicchio è il primo).
</p>

## Funzionalità aggiuntive
Le seguenti funzionalità, seppur non richieste in maniera esplicita, rendono migliore la visualizzazione del Pie Chart:
- <p align="justify"> Passando con il mouse sugli spicchi della torta che rappresentano le varie regioni italiane è possibile visionare alcuni dettagli come il nome e la popolazione della regione e la percentuale rispetto al totale della popolazione italiana; </p>
- <p align="justify"> Cliccando sui rettangoli colorati della legenda è possibile escludere la regione da essi rappresentata dal diagramma a torta. </p>

## Caricamento dati da file esterno
<p align="justify"> Se si volessero caricare i dati da file esterno ![alt text](https://github.com/spellegrini1995/first_project_infovis/blob/master/data/dataset_infovis.json "JSON"), potrebbero rilevarsi dei problemi di sicurezza relativi alle politiche usate dal particolare Web Browser scelto. Per questo motivo, bisogna usare un server http.
  In Windows, da terminale andare nella cartella del file html e, se avendo Python installato, digitare il comando: "python -m http.server [porta]".
	Inoltre, ci possono riscontrarsi problemi di compatibilità dovuti al tipo di browser:
	- Con Mozilla Firefox funziona tutto bene.
	- Con Chrome bisogna settare opportunamente l'attributo di sicurezza Acces-Control-Allow-Origin del CORS.
Rispetto al codice originale, se si volesse caricare il file json da filesystem, sostituire la variabile dataset con il seguente comando:" d3.json("data/dataset_infovis.json").then(function(dataset){" e inserire una parentesi tonda e una graffa nell'ultima riga del file.
</p>

## Anteprima grafica
![alt text](anteprima_piechart.PNG "Pie Chart")
