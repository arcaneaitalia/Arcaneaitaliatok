const SETMORE =
"https://arcaneaitalia.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp";

const SERVICES={
    natal:"https://arcaneaitalia.setmore.com/services/04d4155b-7e4e-4285-8f48-d655baf3da77",
    compatibility:"https://arcaneaitalia.setmore.com/services/cf85c88f-9dee-41c3-9c4f-753528913c49",
    matrix:"https://arcaneaitalia.setmore.com/services/a0899a4f-4c5e-468a-bb42-8387b8599c3e"
};

const tarot=[
 ["Il Sole","☀️","Chiarezza, vitalità e una risposta che diventa più evidente."],
 ["La Stella","⭐","Fiducia, speranza e una nuova direzione da seguire."],
 ["La Luna","🌙","Ascolta l'intuito, ma non confondere intuizione e paura."],
 ["Il Mago","✨","Hai gli strumenti necessari per trasformare un'idea in azione."],
 ["La Forza","🦁","La vera forza oggi nasce dalla calma e dalla padronanza di sé."],
 ["La Ruota della Fortuna","☸️","Un cambiamento può aprire una possibilità inattesa."]
];

const runes=[
 ["Fehu","ᚠ","Energia, risorse e movimento. Qualcosa può iniziare a crescere."],
 ["Uruz","ᚢ","Forza interiore, resistenza e trasformazione."],
 ["Ansuz","ᚨ","Una parola, un messaggio o una rivelazione può essere importante."],
 ["Raidho","ᚱ","Movimento e percorso. Segui la direzione con consapevolezza."],
 ["Gebo","ᚷ","Scambio, dono e reciprocità."],
 ["Algiz","ᛉ","Protezione e ascolto dell'istinto."]
];

const signs={
 ariete:"Oggi agisci con coraggio, ma lascia spazio all'ascolto.",
 toro:"Una scelta paziente può portare più stabilità di una decisione impulsiva.",
 gemelli:"Una conversazione può cambiare il modo in cui guardi una situazione.",
 cancro:"Proteggi ciò che senti importante senza chiuderti alle nuove possibilità.",
 leone:"La tua presenza può farsi notare: usa questa energia con equilibrio.",
 vergine:"Ordine e attenzione ai dettagli ti aiutano a vedere ciò che prima sfuggiva.",
 bilancia:"Cerca equilibrio senza rinunciare a ciò che desideri davvero.",
 scorpione:"Una verità può emergere quando smetti di forzare una risposta.",
 sagittario:"Una nuova prospettiva può riaccendere entusiasmo e curiosità.",
 capricorno:"La costanza oggi vale più della velocità.",
 acquario:"Un'idea originale può diventare il punto di partenza di qualcosa di nuovo.",
 pesci:"Intuito e sensibilità sono forti: ascoltali mantenendo i piedi per terra."
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

function openService(type){
 const data={
  natal:{
   title:"✨ Tema Natale",
   text:"Inserisci i tuoi dati di nascita per ricevere un primo orientamento astrologico. L'analisi completa viene effettuata tramite Arcanea Italia.",
   preview:"L'estratto ti permette di entrare nella lettura. Per ricevere il Tema Natale completo puoi prenotare direttamente il servizio."
  },
  compatibility:{
   title:"💞 Compatibilità",
   text:"Confronta due temi e scopri le principali dinamiche simboliche della relazione.",
   preview:"Ricevi un primo orientamento sulla connessione. Per l'analisi completa prenota il servizio."
  },
  matrix:{
   title:"🜂 Matrice Arcanea®",
   text:"La Matrice Arcanea® osserva una firma attraverso diversi livelli simbolici per arrivare alla Chiave Arcanea.",
   preview:"Scopri il metodo e richiedi la tua Matrice Arcanea® completa attraverso Arcanea Italia."
  }
 }[type];

 modal(`
  <div class="service">
   <h2>${data.title}</h2>
   <p>${data.text}</p>
   <div class="preview">${data.preview}</div>
   <p>Il pagamento avviene direttamente tramite <strong>Setmore</strong>.</p>
   <br>
   <button class="action" onclick="window.open('${SERVICES[type]}','_blank')">
    PRENOTA / ACQUISTA SU SETMORE
   </button>
  </div>
 `);
}

function dailyIndex(length){
 const d=new Date();
 const seed=d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate();
 return seed%length;
}

function showDaily(type){
 if(type==="tarot"){
  const c=tarot[dailyIndex(tarot.length)];
  modal(`
   <div class="result">
    <h2>🃏 Tarocco del Giorno</h2>
    <div class="symbol">${c[1]}</div>
    <h2>${c[0]}</h2>
    <p>${c[2]}</p>
   </div>
  `);
 }

 if(type==="rune"){
  const c=runes[dailyIndex(runes.length)];
  modal(`
   <div class="result">
    <h2>ᚱ Runa del Giorno</h2>
    <div class="symbol">${c[1]}</div>
    <h2>${c[0]}</h2>
    <p>${c[2]}</p>
   </div>
  `);
 }

 if(type==="horoscope"){
  const keys=Object.keys(signs);
  let html="<h2>🌙 Oroscopo Giornaliero</h2><p>Scegli il tuo segno.</p>";
  html+="<div style='display:grid;gap:8px;margin-top:18px'>";
  keys.forEach(k=>{
   html+=`<button class="action" style="width:100%" onclick="horoscope('${k}')">${k.toUpperCase()}</button>`;
  });
  html+="</div>";
  modal(html);
 }
}

function horoscope(sign){
 modal(`
  <div class="result">
   <h2>🌙 ${sign.toUpperCase()}</h2>
   <p>${signs[sign]}</p>
  </div>
 `);
}

function question(){
 const answers=[
  ["SÌ","L'energia è favorevole. Procedi con consapevolezza."],
  ["NO","Per ora è meglio fermarsi e osservare ciò che sta accadendo."],
  ["NON ANCORA","La risposta può arrivare, ma manca ancora un elemento."]
 ];

 const a=answers[Math.floor(Math.random()*answers.length)];

 modal(`
  <div class="result">
   <h2>❓ La tua risposta</h2>
   <div class="answer">${a[0]}</div>
   <p>${a[1]}</p>
  </div>
 `);
}

if("serviceWorker" in navigator){
 navigator.serviceWorker.register("sw.js").catch(()=>{});
}

let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  const button = document.getElementById("installApp");
  if (button) button.hidden = false;
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("installApp");

  if (button) {
    button.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      button.hidden = true;
    });
  }
});

/* === POPUP INSTALLAZIONE ARCANEA === */
(function(){
  let installPrompt = null;

  const style = document.createElement("style");
  style.textContent = `
    #arcaneaInstallOverlay{
      position:fixed;
      inset:0;
      background:rgba(0,0,0,.72);
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:99999;
      padding:20px;
    }
    #arcaneaInstallBox{
      width:min(420px,100%);
      background:#101b17;
      border:1px solid rgba(255,255,255,.18);
      border-radius:24px;
      padding:28px 22px;
      text-align:center;
      box-shadow:0 20px 60px rgba(0,0,0,.5);
      color:#fff;
    }
    #arcaneaInstallBox .install-logo{
      width:82px;
      height:82px;
      object-fit:contain;
      margin-bottom:10px;
    }
    #arcaneaInstallBox h2{
      margin:8px 0 10px;
    }
    #arcaneaInstallBox p{
      line-height:1.5;
      opacity:.9;
    }
    #arcaneaInstallBtn{
      width:100%;
      padding:15px;
      border:0;
      border-radius:14px;
      font-weight:bold;
      font-size:16px;
      margin-top:14px;
      cursor:pointer;
    }
    #arcaneaInstallClose{
      background:transparent;
      color:#aaa;
      border:0;
      margin-top:12px;
      padding:10px;
      cursor:pointer;
    }
  `;
  document.head.appendChild(style);

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installPrompt = event;
  });

  function isInstalled(){
    return window.matchMedia("(display-mode: standalone)").matches ||
           window.navigator.standalone === true;
  }

  function showInstallPopup(){
    if(isInstalled()) return;
    if(document.getElementById("arcaneaInstallOverlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "arcaneaInstallOverlay";

    overlay.innerHTML = `
      <div id="arcaneaInstallBox">
        <img class="install-logo" src="assets/logo.png" alt="Arcanea Italia">
        <h2>🔮 ARCANEA ITALIA</h2>
        <p>
          Porta Arcanea direttamente sulla schermata Home
          e aprila come una vera app.
        </p>

        <button id="arcaneaInstallBtn">
          📲 INSTALLA ARCANEA
        </button>

        <button id="arcaneaInstallClose">
          Continua sul sito
        </button>
      </div>
    `;

    document.body.appendChild(overlay);

    document.getElementById("arcaneaInstallClose").onclick = () => {
      overlay.remove();
    };

    document.getElementById("arcaneaInstallBtn").onclick = async () => {
      if(installPrompt){
        await installPrompt.prompt();
        installPrompt = null;
        overlay.remove();
        return;
      }

      const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);

      if(ios){
        alert("Su iPhone: premi Condividi → Aggiungi alla schermata Home.");
      } else {
        alert("Apri il menu del browser e scegli «Installa app» oppure «Aggiungi alla schermata Home».");
      }
    };
  }

  window.addEventListener("load", () => {
    setTimeout(showInstallPopup, 1200);
  });

  window.addEventListener("appinstalled", () => {
    const overlay = document.getElementById("arcaneaInstallOverlay");
    if(overlay) overlay.remove();
  });
})();
