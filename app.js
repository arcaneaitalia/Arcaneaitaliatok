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

    const services = {

        natal: {
            icon: "✨",
            title: "Tema Natale",

            intro:
                "La tua nascita contiene una trama simbolica unica.",

            previewTitle:
                "IL PRIMO SEGNO",

            preview:
                "Il Tema Natale osserva le principali energie presenti al momento della nascita e le trasforma in una lettura simbolica personale.",

            insight:
                "L'analisi completa approfondisce personalità, talenti, dinamiche emotive e direzioni del tuo percorso.",

            button:
                "CONTINUA CON IL TEMA NATALE"
        },

        compatibility: {
            icon: "💞",
            title: "Compatibilità",

            intro:
                "Due persone possono creare una dinamica completamente diversa da ciò che sembrano singolarmente.",

            previewTitle:
                "IL PRIMO SEGNO",

            preview:
                "La lettura mette in relazione le due energie per individuare affinità, differenze e punti di tensione.",

            insight:
                "L'analisi completa entra nella dinamica della relazione e nei suoi principali punti di incontro.",

            button:
                "CONTINUA CON LA COMPATIBILITÀ"
        },

        matrix: {
            icon: "🜂",
            title: "Matrice Arcanea®",

            intro:
                "Una firma può essere osservata attraverso più livelli simbolici.",

            previewTitle:
                "IL PRIMO LIVELLO",

            preview:
                "La Matrice Arcanea® parte dalla firma originaria e osserva lettere, numeri e corrispondenze per arrivare alla Chiave Arcanea.",

            insight:
                "La lettura completa sviluppa i diversi livelli della Matrice e costruisce la tua interpretazione personale.",

            button:
                "CONTINUA CON LA MATRICE"
        }

    };

    const data = services[type];

    if(!data){
        return;
    }

    modal(`

        <div class="arcanea-service">

            <div class="arcanea-service-icon">
                ${data.icon}
            </div>

            <div class="arcanea-service-brand">
                ARCANEA ITALIA
            </div>

            <h2>${data.title}</h2>

            <p class="arcanea-service-intro">
                ${data.intro}
            </p>

            <div class="arcanea-service-preview">

                <span>
                    ${data.previewTitle}
                </span>

                <p>
                    ${data.preview}
                </p>

            </div>

            <p class="arcanea-service-insight">
                ${data.insight}
            </p>

            <div class="arcanea-service-separator"></div>

            <button
                class="arcanea-service-button"
                onclick="continueService('${type}')"
                type="button">

                ${data.button}

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
