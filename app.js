const SETMORE =
"https://arcaneaitalia.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp";

const SERVICES = {
    natal:"https://arcaneaitalia.setmore.com/services/04d4155b-7e4e-4285-8f48-d655baf3da77",
    compatibility:"https://arcaneaitalia.setmore.com/services/cf85c88f-9dee-41c3-9c4f-753528913c49",
    matrix:"https://arcaneaitalia.setmore.com/services/a0899a4f-4c5e-468a-bb42-8387b8599c3e"
};

const tarot = [
 ["Il Sole","☀️","Chiarezza, vitalità e una risposta che diventa più evidente."],
 ["La Stella","⭐","Fiducia, speranza e una nuova direzione da seguire."],
 ["La Luna","🌙","Ascolta l'intuito, ma non confondere intuizione e paura."],
 ["Il Mago","✨","Hai gli strumenti necessari per trasformare un'idea in azione."],
 ["La Forza","🦁","La vera forza oggi nasce dalla calma e dalla padronanza di sé."],
 ["La Ruota della Fortuna","☸️","Un cambiamento può aprire una possibilità inattesa."]
];

const runes = [
 ["Fehu","ᚠ","Energia, risorse e movimento. Qualcosa può iniziare a crescere."],
 ["Uruz","ᚢ","Forza interiore, resistenza e trasformazione."],
 ["Ansuz","ᚨ","Una parola, un messaggio o una rivelazione può essere importante."],
 ["Raidho","ᚱ","Movimento e percorso. Segui la direzione con consapevolezza."],
 ["Gebo","ᚷ","Scambio, dono e reciprocità."],
 ["Algiz","ᛉ","Protezione e ascolto dell'istinto."]
];

const signs = {
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
    const content = document.getElementById("modalContent");
    const box = document.getElementById("modal");

    if(content) content.innerHTML = html;
    if(box) box.classList.remove("hidden");
}

function closeModal(){
    const box = document.getElementById("modal");
    if(box) box.classList.add("hidden");
}

function openSetmore(){
    window.open(SETMORE,"_blank");
}

function openService(type){

    if(type === "natal"){
        modal(`
            <div class="service">
                <h2>✨ Tema Natale</h2>
                <p>Inserisci i tuoi dati di nascita e ricevi subito un primo estratto gratuito.</p>

                <div class="arcanea-form">

                    <label>Data di nascita</label>
                    <input id="natalDate" type="date">

                    <label>Ora di nascita</label>
                    <input id="natalTime" type="time">

                    <label>Luogo di nascita</label>
                    <input id="natalPlace" type="text"
                           placeholder="Es. Catania">

                    <button class="action"
                        onclick="generateNatal()">
                        🔮 SCOPRI IL TUO ESTRATTO
                    </button>

                </div>
            </div>
        `);
        return;
    }

    if(type === "compatibility"){
        modal(`
            <div class="service">
                <h2>💞 Compatibilità</h2>
                <p>Inserisci i dati delle due persone e scopri la prima dinamica della vostra connessione.</p>

                <div class="arcanea-form">

                    <h3>PERSONA A</h3>

                    <input id="personAName"
                           type="text"
                           placeholder="Nome">

                    <label>Data di nascita</label>
                    <input id="personADate" type="date">

                    <h3>PERSONA B</h3>

                    <input id="personBName"
                           type="text"
                           placeholder="Nome">

                    <label>Data di nascita</label>
                    <input id="personBDate" type="date">

                    <button class="action"
                        onclick="generateCompatibility()">
                        💞 SCOPRI LA VOSTRA DINAMICA
                    </button>

                </div>
            </div>
        `);
        return;
    }

    if(type === "matrix"){
        modal(`
            <div class="service">
                <h2>🜂 Matrice Arcanea®</h2>
                <p>Inserisci una firma e osserva il primo livello della tua Matrice.</p>

                <div class="arcanea-form">

                    <label>Nome</label>
                    <input id="matrixName"
                           type="text"
                           placeholder="Il tuo nome">

                    <label>Cognome</label>
                    <input id="matrixSurname"
                           type="text"
                           placeholder="Il tuo cognome">

                    <label>Data di nascita</label>
                    <input id="matrixDate" type="date">

                    <button class="action"
                        onclick="generateMatrix()">
                        🜂 CALCOLA LA MATRICE
                    </button>

                </div>
            </div>
        `);
    }
}

/* ==========================================
   TEMA NATALE
========================================== */

function getZodiac(dateString){

    const d = new Date(dateString + "T00:00:00");
    const day = d.getDate();
    const month = d.getMonth() + 1;

    if((month===3 && day>=21)||(month===4 && day<=19)) return "Ariete";
    if((month===4 && day>=20)||(month===5 && day<=20)) return "Toro";
    if((month===5 && day>=21)||(month===6 && day<=20)) return "Gemelli";
    if((month===6 && day>=21)||(month===7 && day<=22)) return "Cancro";
    if((month===7 && day>=23)||(month===8 && day<=22)) return "Leone";
    if((month===8 && day>=23)||(month===9 && day<=22)) return "Vergine";
    if((month===9 && day>=23)||(month===10 && day<=22)) return "Bilancia";
    if((month===10 && day>=23)||(month===11 && day<=21)) return "Scorpione";
    if((month===11 && day>=22)||(month===12 && day<=21)) return "Sagittario";
    if((month===12 && day>=22)||(month===1 && day<=19)) return "Capricorno";
    if((month===1 && day>=20)||(month===2 && day<=18)) return "Acquario";
    return "Pesci";
}

const zodiacReading = {
    Ariete:"La tua energia tende all'iniziativa. Quando senti che è il momento di agire, hai bisogno di movimento e di una direzione chiara.",
    Toro:"Cerchi stabilità, ma quando trovi qualcosa in cui credere puoi dimostrare una grande determinazione.",
    Gemelli:"La curiosità e lo scambio sono centrali. Le idee e le parole possono diventare strumenti importanti del tuo percorso.",
    Cancro:"La sensibilità è una delle tue chiavi. Tendi a percepire profondamente persone, ambienti e legami.",
    Leone:"Hai bisogno di esprimere ciò che senti come autenticamente tuo. Creatività e presenza possono diventare punti di forza.",
    Vergine:"Osservazione e attenzione ai dettagli ti permettono di comprendere ciò che altri possono trascurare.",
    Bilancia:"La ricerca dell'equilibrio è importante. Relazioni, armonia e capacità di vedere più prospettive possono guidarti.",
    Scorpione:"La tua energia tende ad andare in profondità. Intuito e trasformazione possono essere temi importanti della tua esperienza.",
    Sagittario:"Curiosità, libertà e ricerca di significato possono spingerti verso nuove esperienze e nuove prospettive.",
    Capricorno:"La costruzione nel tempo è una tua forza. Quando hai un obiettivo puoi procedere con grande costanza.",
    Acquario:"Originalità e indipendenza possono caratterizzare il tuo modo di vedere il mondo e cercare nuove possibilità.",
    Pesci:"Sensibilità, immaginazione e intuizione possono essere strumenti importanti attraverso cui interpreti ciò che ti circonda."
};

function generateNatal(){

    const date = document.getElementById("natalDate")?.value;
    const time = document.getElementById("natalTime")?.value;
    const place = document.getElementById("natalPlace")?.value.trim();

    if(!date || !time || !place){
        alert("Completa data, ora e luogo di nascita.");
        return;
    }

    const sign = getZodiac(date);

    modal(`
        <div class="result personalized">

            <div class="free-label">ESTRATTO GRATUITO</div>

            <h2>✨ La tua prima chiave</h2>

            <div class="personal-data">
                <span>☀️</span>
                <strong>Sole in ${sign}</strong>
            </div>

            <p>${zodiacReading[sign]}</p>

            <div class="reading-detail">
                <strong>🌙 DATI DELLA TUA NASCITA</strong>
                <p>${date} · ${time}<br>${place}</p>
            </div>

            <div class="curiosity">
                <strong>Questa è soltanto la prima soglia.</strong>
                <p>
                    Il Tema Natale completo può approfondire
                    personalità, talenti, mondo emotivo,
                    relazioni e direzioni del tuo percorso.
                </p>
            </div>

            <button class="action"
                onclick="continueService('natal')">
                CONTINUA CON IL TEMA NATALE →
            </button>

        </div>
    `);
}


/* ==========================================
   COMPATIBILITÀ
========================================== */

const compatibilityTexts = {
    "stessa":"Avete una base energetica simile. Questo può creare comprensione immediata, ma anche rendere più evidenti le caratteristiche che condividete.",
    "fuoco-aria":"Tra voi può esserci una dinamica vivace: l'energia dell'uno può alimentare idee, entusiasmo e movimento nell'altro.",
    "terra-acqua":"La combinazione può favorire profondità e stabilità. Una persona può offrire radicamento mentre l'altra porta sensibilità.",
    "fuoco-acqua":"La connessione può essere intensa. Desiderio e sensibilità possono avvicinarsi, ma richiedono attenzione reciproca.",
    "terra-aria":"Avete modalità differenti. Una persona tende alla concretezza, l'altra può avere bisogno di spazio mentale e cambiamento.",
    "aria-acqua":"La mente e l'emotività possono incontrarsi in modo particolare. La comunicazione diventa una chiave fondamentale."
};

function elementOf(sign){

    if(["Ariete","Leone","Sagittario"].includes(sign)) return "fuoco";
    if(["Toro","Vergine","Capricorno"].includes(sign)) return "terra";
    if(["Gemelli","Bilancia","Acquario"].includes(sign)) return "aria";
    return "acqua";
}

function generateCompatibility(){

    const nameA = document.getElementById("personAName")?.value.trim() || "Persona A";
    const dateA = document.getElementById("personADate")?.value;

    const nameB = document.getElementById("personBName")?.value.trim() || "Persona B";
    const dateB = document.getElementById("personBDate")?.value;

    if(!dateA || !dateB){
        alert("Inserisci le due date di nascita.");
        return;
    }

    const signA = getZodiac(dateA);
    const signB = getZodiac(dateB);

    let reading;

    if(signA === signB){
        reading = compatibilityTexts.stessa;
    }else{
        const pair = [elementOf(signA),elementOf(signB)].sort().join("-");

        reading =
            compatibilityTexts[pair] ||
            "La vostra combinazione presenta energie differenti. Proprio questa differenza può diventare una delle chiavi della relazione.";
    }

    modal(`
        <div class="result personalized">

            <div class="free-label">ESTRATTO GRATUITO</div>

            <h2>💞 La vostra prima dinamica</h2>

            <div class="compatibility-pair">
                <span>${nameA}</span>
                <b>${signA}</b>
                <span>♥</span>
                <span>${nameB}</span>
                <b>${signB}</b>
            </div>

            <p>${reading}</p>

            <div class="curiosity">
                <strong>Ma questa è soltanto la superficie.</strong>
                <p>
                    La lettura completa può approfondire attrazione,
                    comunicazione, dinamiche emotive, punti di forza
                    e possibili tensioni della relazione.
                </p>
            </div>

            <button class="action"
                onclick="continueService('compatibility')">
                CONTINUA CON LA COMPATIBILITÀ →
            </button>

        </div>
    `);
}


/* ==========================================
   MATRICE ARCANEА®
========================================== */

function letterValue(char){
    const c = char.toUpperCase();
    const code = c.charCodeAt(0);

    if(code >= 65 && code <= 90){
        return code - 64;
    }

    return 0;
}

function generateMatrix(){

    const name =
        document.getElementById("matrixName")?.value.trim();

    const surname =
        document.getElementById("matrixSurname")?.value.trim();

    const date =
        document.getElementById("matrixDate")?.value;

    if(!name || !surname || !date){
        alert("Completa nome, cognome e data di nascita.");
        return;
    }

    const signature =
        (name + surname).toUpperCase().replace(/[^A-Z]/g,"");

    const values =
        [...signature].map(letterValue);

    const total =
        values.reduce((a,b)=>a+b,0);

    const key =
        ((total - 1) % 22) + 1;

    const sequence =
        values.slice(0,6).join(" · ");

    const arcanaNames = {
        1:"Il Mago",
        2:"La Papessa",
        3:"L'Imperatrice",
        4:"L'Imperatore",
        5:"Il Papa",
        6:"Gli Amanti",
        7:"Il Carro",
        8:"La Giustizia",
        9:"L'Eremita",
        10:"La Ruota della Fortuna",
        11:"La Forza",
        12:"L'Appeso",
        13:"La Morte",
        14:"La Temperanza",
        15:"Il Diavolo",
        16:"La Torre",
        17:"La Stella",
        18:"La Luna",
        19:"Il Sole",
        20:"Il Giudizio",
        21:"Il Mondo",
        22:"Il Matto"
    };

    modal(`
        <div class="result personalized">

            <div class="free-label">ESTRATTO GRATUITO</div>

            <h2>🜂 La tua prima Matrice</h2>

            <div class="matrix-signature">
                ${name} ${surname}
            </div>

            <div class="matrix-demo">
                ${values.slice(0,6).map(v =>
                    `<div class="matrix-number">${v}</div>`
                ).join("")}
            </div>

            <div class="reading-detail">
                <strong>SEQUENZA INIZIALE</strong>
                <p>${sequence}</p>
            </div>

            <div class="personal-data">
                <span>🔑</span>
                <strong>Prima Chiave: ${key} · ${arcanaNames[key]}</strong>
            </div>

            <p>
                La tua firma genera una prima risonanza simbolica
                legata all'energia di <strong>${arcanaNames[key]}</strong>.
            </p>

            <div class="curiosity">
                <strong>Questo è soltanto il primo livello.</strong>
                <p>
                    La Matrice Arcanea® completa approfondisce
                    la sequenza, le ricorrenze e la convergenza
                    dei valori per arrivare alla Chiave Arcanea.
                </p>
            </div>

            <button class="action"
                onclick="continueService('matrix')">
                CONTINUA CON LA MATRICE ARCANEA® →
            </button>

        </div>
    `);
}

function dailyIndex(length){
    const d = new Date();

    const seed =
        d.getFullYear() * 10000 +
        (d.getMonth()+1) * 100 +
        d.getDate();

    return seed % length;
}

function showDaily(type){

    if(type === "tarot"){

        const c = tarot[dailyIndex(tarot.length)];

        modal(`
            <div class="result">
                <h2>🃏 Tarocco del Giorno</h2>
                <div class="symbol">${c[1]}</div>
                <h2>${c[0]}</h2>
                <p>${c[2]}</p>
            </div>
        `);

        return;
    }

    if(type === "rune"){

        const c = runes[dailyIndex(runes.length)];

        modal(`
            <div class="result">
                <h2>ᚱ Runa del Giorno</h2>
                <div class="symbol">${c[1]}</div>
                <h2>${c[0]}</h2>
                <p>${c[2]}</p>
            </div>
        `);

        return;
    }

    if(type === "horoscope"){

        const keys = Object.keys(signs);

        let html = `
            <h2>🌙 Oroscopo Giornaliero</h2>
            <p>Scegli il tuo segno.</p>
            <div style="display:grid;gap:8px;margin-top:18px">
        `;

        keys.forEach(k => {

            html += `
                <button
                    class="action"
                    style="width:100%"
                    onclick="horoscope('${k}')">
                    ${k.toUpperCase()}
                </button>
            `;

        });

        html += `</div>`;

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

    const answers = [
        ["SÌ","L'energia è favorevole. Procedi con consapevolezza."],
        ["NO","Per ora è meglio fermarsi e osservare ciò che sta accadendo."],
        ["NON ANCORA","La risposta può arrivare, ma manca ancora un elemento."]
    ];

    const a =
        answers[Math.floor(Math.random()*answers.length)];

    modal(`
        <div class="result">
            <h2>❓ La tua risposta</h2>
            <div class="answer">${a[0]}</div>
            <p>${a[1]}</p>
        </div>
    `);
}




function continueService(key){

    if(!SERVICES[key]){
        return;
    }

    window.open(
        SERVICES[key],
        "_blank"
    );

}

/* ==========================================
   SERVICE WORKER
========================================== */

if("serviceWorker" in navigator){

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("sw.js")
            .catch(() => {});

    });
}


/* ==========================================
   INSTALLAZIONE PWA
========================================== */






/* =========================================
   ARCANEA — INSTALLAZIONE PWA
========================================= */

let deferredInstallPrompt = null;

const installBox =
    document.getElementById("arcanea-install");

const installButton =
    document.getElementById("install");


/* La card rimane sempre visibile */

if(installBox){
    installBox.hidden = false;
    installBox.style.display = "block";
}


/* Chrome può fornire il vero prompt */

window.addEventListener(
    "beforeinstallprompt",
    (event) => {

        event.preventDefault();

        deferredInstallPrompt = event;

        if(installBox){
            installBox.hidden = false;
            installBox.style.display = "block";
        }

    }
);


/* Pulsante INSTALLA */

if(installButton){

    installButton.addEventListener(
        "click",
        async () => {

            if(deferredInstallPrompt){

                deferredInstallPrompt.prompt();

                const result =
                    await deferredInstallPrompt.userChoice;

                console.log(
                    "ARCANEA install:",
                    result.outcome
                );

                deferredInstallPrompt = null;

                return;
            }

            /* Se Chrome non consegna
               beforeinstallprompt */

            alert(
                "🔮 ARCANEA ITALIA\\n\\n" +
                "Per installare ARCANEA:\\n\\n" +
                "1. Tocca ⋮ in Chrome\\n\\n" +
                "2. Scegli «Installa app»\\n\\n" +
                "3. Conferma l'installazione."
            );

        }
    );

}


/* App installata */

window.addEventListener(
    "appinstalled",
    () => {

        deferredInstallPrompt = null;

        if(installBox){

            installBox.hidden = true;
            installBox.style.display = "none";

        }

    }
);
