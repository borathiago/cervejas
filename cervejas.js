class Cerveja {
    constructor(id,title,style,bitterness,content,harmonization,color,icon,position) {
        this.id = id;
        this.title = title;
        this.style = style;
        this.bitterness = bitterness;
        this.content = content;
        this.harmonization = harmonization;
        this.color = color;
        this.icon = icon;
        this.position = position;
    }
}


/* Cervejas 03 */
const coloradoAppia = new Cerveja('appia','Colorado Appia','Weissbier','baixo (IBU 10)','5,5%',`comidas <br>e massas leves, saladas, <br>galinhada e queijo brie`,'amarelo dourado','left-[7rem]','1');
const paulanerWeiss = new Cerveja('paulaner-weiss','Paulaner Weiss','Weissbier','baixo (IBU 12)','5,5%',`queijo <br>de cabra, saladas e comidas <br>típicas alemãs`,'amarelo dourado','left-[7rem]','2');
const patagoniaWeisse = new Cerveja('patagonia-weisse','Patagonia Weisse','Weissbier','baixo (IBU 10)','4,4%',`peixes<br> e frutos do mar <br>`,'clara','left-0','3');
const leuvenWeissbier = new Cerveja('leuven-weissbier','Leuven Weissbier','Weissbier','baixo (IBU 10)','5%',`frutos <br>do mar, salsichas e molhos <br>de acompanhamento`,'amarelo','left-[3.5rem]','4');


/* Cervejas 04 */
const lagunitasIpa = new Cerveja('lagunitas-ipa','Lagunitas IPA','IPA','alto (IBU 52)','6,2%',`comida <br>mexicana e queijos roquefort, <br>gorgonzola e gouda`,'cobre','left-[10.5rem]','1');
const leuvenIpa = new Cerveja('leuven-ipa','Leuven IPA Dragon','IPA','alto (IBU 50)','7%',`churrasco, <br>hambúrguer e costela assada <br>`,'cobre','left-[10.5rem]','2');
/* const hocusPocusIpa = new Cerveja('hocus-pocus-interstellar','Hocus Pocus Interstellar','IPA','alto (IBU 50)','7%',`carnes, <br>torresmo, hambúrguer <br>e nachos`,'dourado','left-[7rem]','3'); */
const patagoniaIpa = new Cerveja('patagonia-ipa','Patagonia Ipa','IPA','alto (IBU 40)','5,8%',`pratos picantes, <br>queijos e aves <br>`,'clara','left-0','3');
const gooseIslandMidway = new Cerveja('goose-island-midway','Goose Island Midway','IPA','médio (IBU 30)','4,1%','comida <br>mexicana, chicken wings <br>e hambúrguer','amarelo dourado','left-[7rem]','4');


/* Cervejas 05 */
/* const hocusPocusBlondAle = new Cerveja('hocus-pocus-orange-sunshine','Hocus Pocus Orange Sunshine','Blond Ale','baixo (IBU 15)','5%',`peixes <br>e frutos do mar <br>`,'amarelo palha','left-0','1'); */
/* const hocusPocusMagicTrap = new Cerveja('hocus-pocus-magic-trap','Hocus Pocus Magic Trap','Strong Ale','baixo (IBU 12)','8,5%',`cordeiro <br>e massas <br>`,'amarelo ouro','left-[7rem]','2'); */
const leuvenRedAle = new Cerveja('leuven-red-ale-knight','Leuven Red Ale Knight','Red Ale','médio (IBU 24)','5,5%',`churrasco, <br>hambúrguer e quiche <br>de cebola caramelizada`,'avermelhada','left-[10.5rem]','3');
/* const belgaDuvel = new Cerveja('belga-duvel','Belga Duvel','Strong Ale','baixo (IBU 5)','8,5%',`molho pesto <br> <br>`,'amarelo','left-[3.5rem]','4'); */


/* Cervejas 06 */
const eisenbahnPaleAle = new Cerveja('eisenbahn-pale-ale','Eisenbahn Pale Ale','Pale Ale','médio (IBU 23)','4,8%',`carnes <br>vermelhas, frango assado <br>e embutidos em geral`,'amarelo dourado','left-[3.5rem]','1');
const damaBierAmericanPaleAle = new Cerveja('dama-bier-american-pale-ale','Dama Bier American Pale Ale','Pale Ale','alto (IBU 41)','4,8%',`amendoim, <br>batata frita, castanha de caju <br>e pizza`,'dourado','left-[7rem]','2');
const coloradoIndica = new Cerveja('colorado-indica','Colorado Indica','Pale Ale','alto (IBU 45)','7%',`peixes <br>e frutos do mar <br>`,'escura','left-[14rem]','3');


/* Cervejas 08 */
const blueMoonWitbier = new Cerveja('blue-moon','Blue Moon','Witbier','baixo (IBU 9)','5,4%',`frutos <br>do mar, culinária japonesa <br>e queijo brie`,'dourado','left-[7rem]','1');
const leuvenWitbier = new Cerveja('leuven-witbier-the-witch','Leuven Witbier The Witch','Witbier','baixo (IBU 8)','5,5%',`peixes, <br>saladas, churrasco <br>e muçarela de búfala`,'amarelo','left-[3.5rem]','2');
const witbierPraya = new Cerveja('witbier-praya','Witbier Praya','Witbier','baixo (IBU 13)','5,3%',`comida japonesa, <br>ovos mexidos e sobremesas à base <br>de frutas cítricas`,'amarelo palha','left-0','3');
const hoegaarden = new Cerveja('hoegaarden','Hoegaarden','Witbier','baixo (IBU 13)','4,9%',`peixes, <br>frango grelhado, ceviche <br>e feijoada`,'clara','left-0','4');


/* Cervejas 09 */
const paulanerMunchner = new Cerveja('paulaner-muchner','Paulaner Munchner Hell','Lager Escura','médio (IBU 22)','4,9%',`saladas, pratos <br>leves, pretzel e comidas típicas alemãs <br>`,'dourado','left-[7rem]','1');
const schornsteinAmerican = new Cerveja('schornstein-american','Schornstein American','American Lager','baixo (IBU 10)','4,2%',`petiscos, pizzas, <br>peixes e frutos do mar <br>`,'amarela','left-[3.5rem]','2');
const erdingerHelles = new Cerveja('erdinger-helles','Erdinger Helles','Lager','baixo (IBU 5)','5%',`petiscos de <br>queijos leves, espaguete alho e óleo <br>ou com molho ao sugo e isca de peixe`,'amarelo','left-[3.5rem]','3');
const paradisoHoppyLager = new Cerveja('paradiso-hoppy-lager','Paradiso Hoppy Lager','Lager','baixo (IBU 10)','5%',`amendoim, <br>pizzas, massas e burrata <br>ao molho pesto`,'amarelo','left-[3.5rem]','4');


/* Cervejas 10 */
const leuvenPilsenCelebration = new Cerveja('leuven-pilsen-celebration','Leuven Pilsen Celebration','Pilsen','baixo (IBU 9)','4,3%',`pratos <br>leves, frango, comidas <br>de boteco e frutos do mar`,'dourado','left-[7rem]','1');
const patagoniaAmberLager = new Cerveja('patagonia-amber-lager','Patagonia Amber Lager','Lager','baixo (IBU 14,5)','4,7%',`choripán, <br>frango assado, crème brûlée <br>e azeitonas`,'avermelhada','left-[10.5rem]','2');


const items = {
    section03: {
        1: coloradoAppia,
        2: paulanerWeiss,
        3: patagoniaWeisse,
        4: leuvenWeissbier
    },
    section04: {
        1: lagunitasIpa,
        2: leuvenIpa,
        /* 3: hocusPocusIpa, */
        3: patagoniaIpa,
        4: gooseIslandMidway
    },
    section05: {
        /* 1: hocusPocusBlondAle, */
        /* 2: hocusPocusMagicTrap, */
        1: leuvenRedAle,
        /* 4: belgaDuvel */
    },
    section06: {
        1: eisenbahnPaleAle,
        2: damaBierAmericanPaleAle,
        3: coloradoIndica
    },
    section08: {
        1: blueMoonWitbier,
        2: leuvenWitbier,
        3: witbierPraya,
        4: hoegaarden
    },
    section09: {
        1: paulanerMunchner,
        2: schornsteinAmerican,
        3: erdingerHelles,
        4: paradisoHoppyLager
    },
    section10: {
        1: leuvenPilsenCelebration,
        2: patagoniaAmberLager
    }
}


let counter = 1;
let next;
let previous;
let currentSection;
let currentItem;
let objects;
let total;
let nextItem;
let prevItem;
let c;


selectA('.cervejas-navegador .proximo').forEach(item=>{
    item.addEventListener('click',(event)=>{
        currentSection = event.target.closest('section').getAttribute('id');
        global = event.target.closest('.grupo-cervejas').children[0].getAttribute('id');
        switch(currentSection) {
            case 'section-03':
            total = Object.keys(items.section03).length;
            prevItem = items.section03[(counter)];
            counter++;
            nextItem = items.section03[counter];
            if(counter>(total+1)) { 
                nextItem = undefined;
                global = items.section03[total+1];
                return counter;
            }
            goNext(counter,global,currentSection,total,nextItem,prevItem);
            break;
            case 'section-04':
            total = Object.keys(items.section04).length;
            prevItem = items.section04[(counter)];
            counter++;
            nextItem = items.section04[counter];
            if(counter>(total+1)) { 
                nextItem = undefined;
                global = items.section04[total+1];
                return counter;
            }
            goNext(counter,global,currentSection,total,nextItem,prevItem);
            break;
            /* 
            case 'section-05':
            total = Object.keys(items.section05).length;
            prevItem = items.section05[(counter)];
            counter++;
            nextItem = items.section05[counter];
            if(counter>(total+1)) { 
                nextItem = undefined;
                global = items.section05[total+1];
                return counter;
            }
            goNext(counter,global,currentSection,total,nextItem,prevItem);
            break;
             */
            case 'section-06':
            total = Object.keys(items.section06).length;
            prevItem = items.section06[(counter)];
            counter++;
            nextItem = items.section06[counter];
            if(counter>(total+1)) { 
                nextItem = undefined;
                global = items.section06[total+1];
                return counter;
            }
            goNext(counter,global,currentSection,total,nextItem,prevItem);
            break;
            case 'section-08':
            total = Object.keys(items.section08).length;
            prevItem = items.section08[(counter)];
            counter++;
            nextItem = items.section08[counter];
            if(counter>(total+1)) { 
                nextItem = undefined;
                global = items.section08[total+1];
                return counter;
            }
            goNext(counter,global,currentSection,total,nextItem,prevItem);
            break;
            case 'section-09':
            total = Object.keys(items.section09).length;
            prevItem = items.section09[(counter)];
            counter++;
            nextItem = items.section09[counter];
            if(counter>(total+1)) { 
                nextItem = undefined;
                global = items.section09[total+1];
                return counter;
            }
            goNext(counter,global,currentSection,total,nextItem,prevItem);
            break;
            case 'section-10':
            total = Object.keys(items.section10).length;
            prevItem = items.section10[(counter)];
            counter++;
            nextItem = items.section10[counter];
            if(counter>(total)) { 
                nextItem = undefined;
                global = items.section10[total+1];
                return counter;
            }
            goNext(counter,global,currentSection,total,nextItem,prevItem);
            break;
        }
    });
});


function goNext(counter,item,section,total,nextItem,prevItem) {
    if(total>2) {
        if(counter<total) {
            if(prevItem!==undefined) {
                c = counter--;
                startPrev(c,item,section);
            }
        } else {
            stopNext(item,section);
        }
    } else {
        c = counter--;
        startPrev(c,item,section);
        stopNext(item,section);
    }
    printNextObject(item,nextItem,section,counter,prevItem);
}


function printNextObject(former,current,section,counter,previous) {
    let id = current.id;
    let title = current.title;
    let style = current.style;
    let bitterness = current.bitterness;
    let content = current.content;
    let harmonization = current.harmonization;
    let color = current.color;
    let icon = current.icon;
    let position = current.position;
    let f = former;
    let count = counter;
    let p = previous;
    let transitionGroup = selectA(`#${section} .grupo-cervejas .cerveja .cervejas-titulo, #${section} .grupo-cervejas .cerveja .cervejas-titulo-numero, #${section} .grupo-cervejas .cerveja .cervejas-estilo, #${section} .grupo-cervejas .cerveja .cervejas-amargor, #${section} .grupo-cervejas .cerveja .cervejas-teor, #${section} .grupo-cervejas .cerveja .cervejas-harmonizacao, #${section} .grupo-cervejas .cerveja .cervejas-cor`);
    Array.from(transitionGroup).forEach(i=>i.classList.add('opacity-0'));
    setTimeout(()=>{
        select(`#${section} .grupo-cervejas .cerveja`).setAttribute('id',id);
        select(`#${section} .grupo-cervejas .cerveja .cervejas-titulo`).innerHTML = title;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-titulo-numero`).innerHTML = `${position}.`;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-estilo`).innerHTML = style;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-amargor`).innerHTML = bitterness;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-teor`).innerHTML = content;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-harmonizacao`).innerHTML = harmonization;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-cor`).innerHTML = color;
        moveIcon(section,icon);
        switch(section) {
            case 'section-03':
            objects = Object.keys(items.section03).length;
            moveNumberIcon('#cervejas-pg3 .numero-cerveja',position,objects);
            break;
            case 'section-04':
            objects = Object.keys(items.section04).length;
            moveNumberIcon('#cervejas-pg4 .numero-cerveja',position,objects);
            break;
            /* 
            case 'section-05':
            objects = Object.keys(items.section05).length;
            moveNumberIcon('#cervejas-pg5 .numero-cerveja',position,objects);
            break;
             */
            case 'section-06':
            objects = Object.keys(items.section06).length;
            moveNumberIcon('#cervejas-pg6 .numero-cerveja',position,objects);
            break;
            case 'section-08':
            objects = Object.keys(items.section09).length;
            moveNumberIcon('#cervejas-pg8 .numero-cerveja',position,objects);
            break;
            case 'section-09':
            objects = Object.keys(items.section09).length;
            moveNumberIcon('#cervejas-pg9 .numero-cerveja',position,objects);
            break;
            case 'section-10':
            objects = Object.keys(items.section10).length;
            moveNumberIcon('#cervejas-pg10 .numero-cerveja',position,objects);
            break;
        }
        setTimeout(()=>{
            Array.from(transitionGroup).forEach(i=>i.classList.remove('opacity-0'));
            setTimeout(()=>{
                Array.from(transitionGroup).forEach(i=>i.classList.add('opacity-1'));
            },185);
        },75);
    },275);
}


selectA('.cervejas-navegador .anterior').forEach(item=>{
    item.addEventListener('click',(event)=>{
        global = event.target.closest('.grupo-cervejas').children[0].getAttribute('id');
        currentSection = event.target.closest('section').getAttribute('id');
        switch(currentSection) {
            case 'section-03':
            nextItem = items.section03[(counter)];
            counter--;
            prevItem = items.section03[counter];
            goPrev(counter,global,currentSection,Object.keys(items.section03).length,nextItem,prevItem);
            break;
            case 'section-04':
            nextItem = items.section04[(counter)];
            counter--;
            prevItem = items.section04[counter];
            goPrev(counter,global,currentSection,Object.keys(items.section04).length,nextItem,prevItem);
            break;
            /* 
            case 'section-05':
            nextItem = items.section05[(counter)];
            counter--;
            prevItem = items.section05[counter];
            goPrev(counter,global,currentSection,Object.keys(items.section05).length,nextItem,prevItem);
            break; 
            */
            case 'section-06':
            nextItem = items.section06[(counter)];
            counter--;
            prevItem = items.section06[counter];
            goPrev(counter,global,currentSection,Object.keys(items.section06).length,nextItem,prevItem);
            break;
            case 'section-08':
            nextItem = items.section08[(counter)];
            counter--;
            prevItem = items.section08[counter];
            goPrev(counter,global,currentSection,Object.keys(items.section08).length,nextItem,prevItem);
            break;
            case 'section-09':
            nextItem = items.section09[(counter)];
            counter--;
            prevItem = items.section09[counter];
            goPrev(counter,global,currentSection,Object.keys(items.section09).length,nextItem,prevItem);
            break;
            case 'section-10':
            nextItem = items.section10[(counter)];
            counter--;
            prevItem = items.section10[counter];
            goPrev(counter,global,currentSection,Object.keys(items.section10).length,nextItem,prevItem);
            break;
        }
    });
});


function goPrev(counter,item,section,total,nextItem,prevItem) {
    if(total>2) {
        if(counter>1) {
            if(nextItem!==undefined) {
                c = counter++;
                startNext(c,item,section);
            }
        } else {
            stopPrev(item,section);
        }
    } else {
        c = counter++;
        startNext(c,item,section);
        stopPrev(item,section);
    }
    printPreviousObject(item,prevItem,section,counter,nextItem);
}


function printPreviousObject(former,current,section,counter,next) {
    let id = current.id;
    let title = current.title;
    let style = current.style;
    let bitterness = current.bitterness;
    let content = current.content;
    let harmonization = current.harmonization;
    let color = current.color;
    let icon = current.icon;
    let position = current.position;
    let f = former;
    let count = counter;
    let n = next;
    let transitionGroup = selectA(`#${section} .grupo-cervejas .cerveja .cervejas-titulo, #${section} .grupo-cervejas .cerveja .cervejas-titulo-numero, #${section} .grupo-cervejas .cerveja .cervejas-estilo, #${section} .grupo-cervejas .cerveja .cervejas-amargor, #${section} .grupo-cervejas .cerveja .cervejas-teor, #${section} .grupo-cervejas .cerveja .cervejas-harmonizacao, #${section} .grupo-cervejas .cerveja .cervejas-cor`);
    Array.from(transitionGroup).forEach(i=>i.classList.add('opacity-0'));
    setTimeout(()=>{
        select(`#${section} .grupo-cervejas .cerveja`).setAttribute('id',id);
        select(`#${section} .grupo-cervejas .cerveja .cervejas-titulo`).innerHTML = title;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-titulo-numero`).innerHTML = `${position}.`;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-estilo`).innerHTML = style;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-amargor`).innerHTML = bitterness;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-teor`).innerHTML = content;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-harmonizacao`).innerHTML = harmonization;
        select(`#${section} .grupo-cervejas .cerveja .cervejas-cor`).innerHTML = color;
        moveIcon(section,icon);
        switch(section) {
            case 'section-03':
            objects = Object.keys(items.section03).length;
            moveNumberIcon('#cervejas-pg3 .numero-cerveja',position,objects);
            break;
            case 'section-04':
            objects = Object.keys(items.section04).length;
            moveNumberIcon('#cervejas-pg4 .numero-cerveja',position,objects);
            break;
            /* 
            case 'section-05':
            objects = Object.keys(items.section05).length;
            moveNumberIcon('#cervejas-pg5 .numero-cerveja',position,objects);
            break;
             */
            case 'section-06':
            objects = Object.keys(items.section06).length;
            moveNumberIcon('#cervejas-pg6 .numero-cerveja',position,objects);
            break;
            case 'section-08':
            objects = Object.keys(items.section08).length;
            moveNumberIcon('#cervejas-pg8 .numero-cerveja',position,objects);
            break;
            case 'section-09':
            objects = Object.keys(items.section09).length;
            moveNumberIcon('#cervejas-pg9 .numero-cerveja',position,objects);
            break;
            case 'section-10':
            objects = Object.keys(items.section10).length;
            moveNumberIcon('#cervejas-pg10 .numero-cerveja',position,objects);
            break;
        }
        setTimeout(()=>{
            Array.from(transitionGroup).forEach(i=>i.classList.remove('opacity-0'));
            setTimeout(()=>{
                Array.from(transitionGroup).forEach(i=>i.classList.add('opacity-1'));
            },185);
        },75);
    },275);
}


function moveIcon(section,icon) {
    let element = select(`#${section} .cerveja-icone img`);
    element.classList.remove(`${element.getAttribute('class').split(' ').pop()}`);
    element.classList.add(`${icon}`);
}


function moveNumberIcon(element,position,objects) {
    selectA(`${element}`).forEach((item)=>{
        if(item.classList.contains('aberto')) {
            item.classList.remove('aberto');
            item.classList.add('fechado');
            for(let i = 0; i < objects; i++) {
                let number = i+1;
                switch(position) {
                    case `${number}`:
                    let currentItem = `${element}#icone-0${number}`;
                    console.log(currentItem);
                    if(select(currentItem).classList.contains('fechado')) {
                        select(currentItem).classList.remove('fechado');
                        select(currentItem).classList.add('aberto');
                    }
                }
            }
        }
    });
}


function stopNext(item,section) {
    select(`#${section} .cervejas-navegador .proximo`).classList.add('zero');
}


function startNext(counter,item,section) {
    if(select(`#${section} .cervejas-navegador .proximo`).classList.contains('zero')) {
        select(`#${section} .cervejas-navegador .proximo`).classList.remove('zero');
    }
}


function stopPrev(item,section) {
    select(`#${section} .cervejas-navegador .anterior`).classList.add('zero');
}


function startPrev(counter,item,section) {
    if(select(`#${section} .cervejas-navegador .anterior`).classList.contains('zero')) {
        select(`#${section} .cervejas-navegador .anterior`).classList.remove('zero');
    }
}