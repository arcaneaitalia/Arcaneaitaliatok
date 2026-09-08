const SETMORE="https://arcaneaitalia.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp";

const SERVICES={
 natal:"https://arcaneaitalia.setmore.com/services/04d4155b-7e4e-4285-8f48-d655baf3da77",
 compatibility:"https://arcaneaitalia.setmore.com/services/cf85c88f-9dee-41c3-9c4f-753528913c49",
 matrix:"https://arcaneaitalia.setmore.com/services/a0899a4f-4c5e-468a-bb42-8387b8599c3e"
};

function modal(html){
 document.getElementById("modalContent").innerHTML=html;
 document.getElementById("modal").classList.remove("hidden");
}

function closeModal(){
 document.getElementById("modal").classList.add("hidden");
}

function openSetmore(){
 window.open(SETMORE,"_blank");
}

/* =========================
   TEMA NATALE
========================= */

function openNatal(){
 modal(`
 <div class="service">
 <h2>✨ Tema Natale</h2>
 <p>Inserisci i tuoi dati di nascita per ricevere un <strong>piccolo estratto gratuito</strong>.</p>

 <input id="nName" placeholder="Nome" class="arc-input">
 <input id="nDate" type="date" class="arc-input">
 <input id="nTime" type="time" class="arc-input">
 <input id="nPlace" placeholder="Luogo di nascita" class="arc-input">

 <button class="action" onclick="calculateNatal()">CALCOLA ESTRATTO GRATUITO</button>
 </div>
 `);
}

function calculateNatal(){
 const name=document.getElementById("nName").value.trim()||"Tu";
 const date=document.getElementById("nDate").value;
 const time=document.getElementById("nTime").value||"non indicata";
 const place=document.getElementById("nPlace").value.trim()||"non indicato";

 if(!date){
  alert("Inserisci la data di nascita.");
  return;
 }

 const d=new Date(date+"T12:00:00");
 const day=d.getDate();
 const month=d.getMonth()+1;

 const signs=[
  ["Capricorno","Disciplina e costruzione"],
  ["Acquario","Originalità e libertà"],
  ["Pesci","Sensibilità e intuizione"],
  ["Ariete","Iniziativa e coraggio"],
  ["Toro","Stabilità e concretezza"],
  ["Gemelli","Comunicazione e curiosità"],
  ["Cancro","Sensibilità e protezione"],
  ["Leone","Espressione e vitalità"],
  ["Vergine","Analisi e precisione"],
  ["Bilancia","Equilibrio e relazione"],
  ["Scorpione","Profondità e trasformazione"],
  ["Sagittario","Espansione e ricerca"]
 ];

 let index=(month+day)%12;
 const s=signs[index];

 modal(`
 <div class="result">
 <h2>✨ Il tuo piccolo estratto</h2>
 <p><strong>${name}</strong></p>
 <p>Data: ${date}<br>Ora: ${time}<br>Luogo: ${place}</p>

 <div class="preview">
 <h2>${s[0]}</h2>
 <p><strong>Tema dominante:</strong> ${s[1]}.</p>
 <p>Questa è solo una prima indicazione simbolica. Il Tema Natale completo analizza pianeti, segni, case e aspetti.</p>
 </div>

 <button class="action" onclick="window.open('${SERVICES.natal}','_blank')">
 ACQUISTA TEMA NATALE COMPLETO
 </button>
 </div>
 `);
}

/* =========================
   COMPATIBILITÀ
========================= */

function openCompatibility(){
 modal(`
 <div class="service">
 <h2>💞 Compatibilità</h2>
 <p>Inserisci i nomi delle due persone per ottenere un primo estratto gratuito.</p>

 <input id="c1" placeholder="Prima persona" class="arc-input">
 <input id="c2" placeholder="Seconda persona" class="arc-input">

 <button class="action" onclick="calculateCompatibility()">CALCOLA ESTRATTO</button>
 </div>
 `);
}

function calculateCompatibility(){
 const a=document.getElementById("c1").value.trim()||"Persona 1";
 const b=document.getElementById("c2").value.trim()||"Persona 2";

 let total=0;
 (a+b).toUpperCase().replace(/[^A-Z]/g,"").split("").forEach(x=>{
  total+=x.charCodeAt(0)-64;
 });

 const value=(total%22)||22;

 modal(`
 <div class="result">
 <h2>💞 Primo sguardo</h2>
 <p><strong>${a}</strong> + <strong>${b}</strong></p>

 <div class="preview">
 <p>Numero di convergenza simbolica: <strong>${value}</strong></p>
 <p>La relazione mostra una dinamica che merita un'analisi più approfondita.</p>
 </div>

 <p>L'analisi completa confronta le strutture astrologiche e simboliche delle due persone.</p>

 <button class="action" onclick="window.open('${SERVICES.compatibility}','_blank')">
 ACQUISTA COMPATIBILITÀ COMPLETA
 </button>
 </div>
 `);
}

/* =========================
   MATRICE ARCANEA
========================= */

function openMatrix(){
 modal(`
 <div class="service">
 <h2>🜂 Matrice Arcanea®</h2>
 <p>Inserisci una firma per ottenere un <strong>piccolo estratto gratuito</strong>.</p>

 <input id="mName" placeholder="Nome e Cognome" class="arc-input">
 <input id="mDate" type="date" class="arc-input">

 <button class="action" onclick="calculateMatrix()">CALCOLA ESTRATTO GRATUITO</button>
 </div>
 `);
}

function arcaneNumber(n){
 let r=n;
 while(r>22){
  r=String(r).split("").reduce((a,b)=>a+Number(b),0);
 }
 return r||22;
}

function calculateMatrix(){
 const name=document.getElementById("mName").value.trim();

 if(!name){
  alert("Inserisci una firma.");
  return;
 }

 const date=document.getElementById("mDate").value;

 let letters=name.toUpperCase().replace(/[^A-Z]/g,"");
 let alpha=0;
 let ascii=0;

 for(const ch of letters){
  alpha+=ch.charCodeAt(0)-64;
  ascii+=ch.charCodeAt(0);
 }

 let dateSum=0;
 if(date){
  date.replace(/-/g,"").split("").forEach(n=>dateSum+=Number(n));
 }

 const frequency=arcaneNumber(alpha+ascii+dateSum);

 const dictionary={
  1:["L'Origine","Il Punto","inizio, identità, principio"],
  2:["La Polarità","Il Duale","relazione, equilibrio, scelta"],
  3:["La Creazione","La Triade","espressione, sviluppo, manifestazione"],
  4:["La Struttura","Il Quadrato","ordine, stabilità, costruzione"],
  5:["Il Movimento","Il Viaggio","cambiamento, esperienza, trasformazione"],
  6:["L'Armonia","L'Unione","equilibrio, integrazione"],
  7:["La Conoscenza","Il Custode","ricerca, profondità, intuizione"],
  8:["Il Ciclo","L'Infinito","potenza, continuità"],
  9:["Il Compimento","Il Cerchio","maturazione, sintesi"],
  10:["La Soglia","La Ruota","passaggio, cambiamento"],
  11:["L'Equilibrio","L'Asse","centratura, armonizzazione"],
  12:["Il Ciclo Completo","L'Integrazione","chiusura e nuovo inizio"],
  13:["La Trasformazione","La Rinascita","metamorfosi"],
  14:["L'Alchimia","La Fusione","trasformazione degli elementi"],
  15:["L'Ombra","Il Legame","confronto con ciò che è nascosto"],
  16:["La Rottura","La Torre","crollo e ricostruzione"],
  17:["La Guida","La Stella","direzione e ispirazione"],
  18:["Il Profondo","La Luna","intuizione e memoria"],
  19:["La Luce","Il Sole","chiarezza e manifestazione"],
  20:["Il Risveglio","La Chiamata","consapevolezza"],
  21:["L'Integrazione","Il Mondo","completezza"],
  22:["Il Maestro","Il Viandante","libertà e percorso"]
 };

 const x=dictionary[frequency];

 modal(`
 <div class="result">
 <h2>🜂 Estratto della Matrice</h2>

 <p><strong>Firma:</strong> ${name}</p>

 <div class="preview">
 <p><strong>Frequenza Unitaria:</strong></p>
 <div class="answer">${frequency} Hz</div>
 <h2>${x[0]}</h2>
 <p><strong>Archetipo:</strong> ${x[1]}</p>
 <p>${x[2]}.</p>
 </div>

 <p>Questo è un primo frammento della Matrice Arcanea®. La lettura completa integra codici alfabetici, ASCII, binario, sequenze, ricorrenze, astrologia runica, Tarocchi, Rune ed esagrammi.</p>

 <button class="action" onclick="window.open('${SERVICES.matrix}','_blank')">
 ACQUISTA MATRICE ARCANEA® COMPLETA
 </button>
 </div>
 `);
}

/* =========================
   COLLEGAMENTO SERVIZI
========================= */

function openService(type){
 if(type==="natal") openNatal();
 if(type==="compatibility") openCompatibility();
 if(type==="matrix") openMatrix();
}

/* =========================
   GIORNALIERO
========================= */

const tarot=[
 ["Il Sole","☀️","Chiarezza, vitalità e una risposta che diventa più evidente."],
 ["La Stella","⭐","Fiducia, speranza e una nuova direzione da seguire."],
 ["La Luna","🌙","Ascolta l'intuito, ma non confondere intuizione e paura."],
 ["Il Mago","✨","Hai gli strumenti necessari per trasformare un'idea in azione."],
 ["La Forza","🦁","La vera forza oggi nasce dalla calma e dalla padronanza di sé."],
 ["La Ruota della Fortuna","☸️","Un cambiamento può aprire una possibilità inattesa."]
];

const runes=[
 ["Fehu","ᚠ","Energia, risorse e movimento."],
 ["Uruz","ᚢ","Forza interiore e trasformazione."],
 ["Ansuz","ᚨ","Messaggio, parola e rivelazione."],
 ["Raidho","ᚱ","Movimento e percorso."],
 ["Gebo","ᚷ","Scambio, dono e reciprocità."],
 ["Algiz","ᛉ","Protezione e istinto."]
];

function dailyIndex(length){
 const d=new Date();
 const seed=d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();
 return seed%length;
}

function showDaily(type){
 if(type==="tarot"){
  const c=tarot[dailyIndex(tarot.length)];
  modal(`<div class="result"><h2>🃏 Tarocco del Giorno</h2><div class="symbol">${c[1]}</div><h2>${c[0]}</h2><p>${c[2]}</p></div>`);
 }

 if(type==="rune"){
  const c=runes[dailyIndex(runes.length)];
  modal(`<div class="result"><h2>ᚱ Runa del Giorno</h2><div class="symbol">${c[1]}</div><h2>${c[0]}</h2><p>${c[2]}</p></div>`);
 }

 if(type==="horoscope"){
  modal(`<div class="result"><h2>🌙 Oroscopo Giornaliero</h2><p>Il tuo messaggio astrologico del giorno è disponibile scegliendo il segno nella lettura.</p></div>`);
 }
}

function question(){
 const answers=[
 ["SÌ","L'energia è favorevole. Procedi con consapevolezza."],
 ["NO","Per ora è meglio fermarsi e osservare."],
 ["NON ANCORA","Manca ancora un elemento."]
 ];

 const a=answers[Math.floor(Math.random()*answers.length)];

 modal(`<div class="result"><h2>❓ La tua risposta</h2><div class="answer">${a[0]}</div><p>${a[1]}</p></div>`);
}

if("serviceWorker" in navigator){
 navigator.serviceWorker.register("sw.js").catch(()=>{});
}
