function randomGen(){

    const arr = [
    "Říkáš: miluji déšť, když však prší, jdeš se schovat, abys nezmokl. Říkáš: miluji slunce, když však svítí, jdeš se schovat do stínu. Mám strach, že mi jednoho dne řekneš: miluji tě.“",
    "„Mír neohrožují zbraně jako takové, ale lidé, kteří je konstruují, instalují a jsou ochotni je použít.“",
    "„Síla lásky spočívá v tom, že je člověk šťasten se ženou. Síla sebelásky, že je šťasten bez ní.“",
    "„Nejšťastnější je ten, kdo má nejméně žádostí.“",
    "„Jinoch se stává mužem, když obejde kaluž, místo aby do ní vstoupil.“",
    "„Pravá láska je stav, ve kterém člověk cítí osudovou potřebu být neustále s milovanou bytostí.“",
    "„Hodinka na klíně vašeho milého se zdá minutkou; minutka na horké peci se zdá hodinou. A to je relativita.“",
    "„Teorie relativity může platit tisíc let a o den později může být vyvrácena.“",
    "„Spánek. Ty malé kousky smrti. Jak je nenávidím.“",
    "„Strach a žárlivost mají velké oči.“",
    "„Žijte pro sebe a budete žít v marnosti; Žijte pro ostatní a budete opět žít.“",


]

const random1 = arr[(Math.floor(Math.random()*(arr.length)))];
document.getElementById("outputGen").innerHTML = random1
console.log(random1);

}