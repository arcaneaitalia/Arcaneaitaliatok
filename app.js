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

    const data = {

        natal:{
            title:"✨ Tema Natale",
            intro:"Una prima lettura gratuita del tuo cielo di nascita.",
            preview:`
                <div class="free-reading">
                    <div class="free-label">ANTEPRIMA GRATUITA</div>

                    <h3>🌙 Cosa osserva Arcanea</h3>

                    <p>
                        Il Tema Natale nasce dall'incontro tra
                        <strong>data, ora e luogo di nascita</strong>.
                        Da questi elementi emerge una struttura
                        simbolica personale.
                    </p>

                    <div class="mini-reading">
                        <span>☀️</span>
                        <div>
                            <strong>IDENTITÀ</strong>
                            <p>
                                Il Sole rappresenta il centro
                                dell'espressione personale:
                                ciò che vuoi sviluppare e manifestare.
                            </p>
                        </div>
                    </div>

                    <div class="mini-reading">
                        <span>🌙</span>
                        <div>
                            <strong>MONDO INTERIORE</strong>
                            <p>
                                La Luna mostra bisogni emotivi,
                                sensibilità e modalità istintive.
                            </p>
                        </div>
                    </div>

                    <div class="preview-note">
                        Questa è solo una prima chiave di lettura.
                        L'analisi completa approfondisce la tua
                        configurazione personale.
                    </div>
                </div>
            `
        },

        compatibility:{
            title:"💞 Compatibilità",
            intro:"Una prima lettura gratuita della dinamica tra due persone.",
            preview:`
                <div class="free-reading">
                    <div class="free-label">ANTEPRIMA GRATUITA</div>

                    <h3>💫 Cosa osserva Arcanea</h3>

                    <p>
                        La Compatibilità mette in relazione
                        le due firme personali per osservare
                        <strong>attrazione, comunicazione e punti di tensione</strong>.
                    </p>

                    <div class="mini-reading">
                        <span>💞</span>
                        <div>
                            <strong>CONNESSIONE</strong>
                            <p>
                                Una relazione può essere intensa
                                quando le energie personali
                                si riconoscono e si completano.
                            </p>
                        </div>
                    </div>

                    <div class="mini-reading">
                        <span>🗣️</span>
                        <div>
                            <strong>COMUNICAZIONE</strong>
                            <p>
                                Il modo in cui due persone
                                esprimono bisogni e pensieri
                                può creare armonia oppure distanza.
                            </p>
                        </div>
                    </div>

                    <div class="preview-note">
                        L'anteprima mostra il principio della lettura.
                        L'analisi completa entra nella dinamica specifica
                        della coppia.
                    </div>
                </div>
            `
        },

        matrix:{
            title:"🜂 Matrice Arcanea®",
            intro:"Una prima lettura gratuita attraverso il metodo Arcanea.",
            preview:`
                <div class="free-reading">
                    <div class="free-label">ANTEPRIMA GRATUITA</div>

                    <h3>🔮 La tua firma simbolica</h3>

                    <p>
                        La Matrice Arcanea® parte da una
                        <strong>firma</strong>: un nome, una data,
                        una parola o un evento.
                    </p>

                    <div class="matrix-demo">
                        <div class="matrix-number">1</div>
                        <div class="matrix-number">5</div>
                        <div class="matrix-number">9</div>
                        <div class="matrix-number">16</div>
                    </div>

                    <div class="mini-reading">
                        <span>🔢</span>
                        <div>
                            <strong>SCOMPOSIZIONE</strong>
                            <p>
                                La firma viene trasformata in una
                                sequenza numerica attraverso i livelli
                                della Matrice.
                            </p>
                        </div>
                    </div>

                    <div class="mini-reading">
                        <span>🜂</span>
                        <div>
                            <strong>CHIAVE ARCANEА</strong>
                            <p>
                                Dalla convergenza dei valori emerge
                                una chiave simbolica da interpretare.
                            </p>
                        </div>
                    </div>

                    <div class="preview-note">
                        Questa è una dimostrazione del metodo.
                        La Matrice completa viene costruita sulla
                        tua firma personale.
                    </div>
                </div>
            `
        }

    }[type];

    if(!data) return;

    modal(`
        <div class="service">

            <h2>${data.title}</h2>

            <p class="service-intro">
                ${data.intro}
            </p>

            ${data.preview}

            <div class="continue-box">

                <p>
                    ✨ Vuoi ricevere la lettura completa?
                </p>

                <button class="action"
                    onclick="continueService('${type}')">
                    CONTINUA CON LA LETTURA →
                </button>

            </div>

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
