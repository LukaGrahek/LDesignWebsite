// process
// Stores the html elements of the process section

import React from 'react'; // Imports react framework

import '../styles/processStyle.css' // Imports styling

// Renders html elements
const Process = () => {
    return (
        <div id='infoTable'>
            <h1 id='ProcessTitle'>Process</h1>
            <table>
                <tr>
                    <th id='left'>O PROCESU</th>
                    <th id='center'>PRISTUP POSLU</th>
                    <th id='right'>O MOJIM KLIJENTIMA</th>
                </tr>
                <tr>
                    <td id='left'>Proces saradnje uvek zapocinje upoznavanjem kroz otvoreni razgovor o tome ko je moj Klijent, I kako
                    On/Ona zele da zive. Zelim da cujem sve o vasem buducem prostoru kao I o vasim potrebama,
                    sklonostima, ukusima, zeljama, ocekivanjima I snovima... Uspostavljanje otvorenog dijaloga kroz
                    konstruktivnu razmenu informacija, ideja I misljenja, vode ka uspostavljanju medjusobnog razumevanja,
                    poverenja I skladne saradnje . Vazno je da budite iskreni, opusteni , otvoreni za nove ideje i da
                    dopustite/prepustite profesionalcu da vas savetuje I vodi kroz ceo process. Iz takve saradnje proizilaze i
                    najbolja resenja: funkcionalni, autenticni, pazljivo krojeni prostori/ambijenti u kojima cete moci da se
                    prepoznate. Svaki novi projekat, za mene predstavlja I novi izazov I zapravo daje unikatan odgovor (u
                        smislu funkcije I stila) na pocetno,vrlo licno I kompleksno pitanje, ko ste Vi I kako zelite da zivite. </td>

                    <td id='center'>Tokom saradnje, moj pristup poslu, klijentima I svim saradnicima je prijateljski ali istovremeno I
                    organizovan. Velika posvecenost svakom pojedinacnom klijentu I projektu, dostupnost I fleksibilnost
                    tokom saradnje, kao i licni I profesionalni integritet , su principi od kojih nikada ne odustajem I na koje
                    mozete da racunate. Takodje, jedan od mojih vaznih ciljeva je da planirani predlozi I resenja budu
                    uklopljeni u predvidjeni budzet. Budzeti mogu da variraju, narocito kada govorimo o opremanju. Lepo je
                    raditi sa visokim budzetom, ali uz pravilno resenje I odabir, moguce je I sa manjim sredstvima postici
                    vrlo lep, atraktivan ambijent, koji ce u potpunosti zadovoljiti sve kriterijume.
                    Smatram da enterijeri moraju biti prostori nastali kao plod funkcije po meri coveka a ne puke kulise.
                    Kreirani prostori I ambijenti jesu setovi-scene, ali kreirani ne za teatar ,vec za stvarni zivot I stvarne
                    ljude…Krojeni po meri, takvi enterijeri u potpunosti reflektuju svoje buduce korisnike. Svojom
                    autenticnom lepotom I znacenjem oni doticu njihova srca (pa I moje ) u najsirem I najlepsem mogucem
                    smislu. Veoma volim to sto radim i nastojim da svojim klijentima prenesem entuzijazam I znanje a da im
                    pritom pruzim potrebnu podrsku u svakoj ideji , zelji i koraku. Moj osnovni a ujedno I najvazniji cilj je
                    da budete zadovoljni celim procesom saradnje kao I da budete potpuno iznenadjeni I istinski
                    odusevljeni krajnjim rezultatom ! </td>

                    <td id='right'>Moji klijenti su uglavnom porodicni ljudi ili pojedinci koji se aktivno bave svojim profesijama I koji zive
                    svoje uzurbane gradske zivote... U 100% slucajeva, oni se javljaju preko preporuke prijatelja ili bivsih
                    zadovoljnih klijenata. To su ljudi koji imaju nadprosecna ocekivanja povodom funkcionalno-estetskih
                    resenja prostora u kojima zele da zive ili koje zele da izdaju/prodaju. Oni shvataju da im je potrebna
                    profesionalna pomoc u dostizanju tog cilja a ujedno zele da izbegnu greske , losa resenja I da sacuvaju
                    svoje vreme, zivce I novac. Pored toga, oni znaju da je to I najbolji nacin da podignu vrednost svoje
                    nekretnine.</td>
                </tr>
            </table>
        </div>

    )
}

export default Process