let name1;
let planetArray = []
let cardbg = document.getElementsByClassName('cardbg')[0]
checkLocal()
// the navbar of responsive design

var val = true
let nav = document.getElementById('res__navlist')
let ul = document.getElementById('res__ul')
ul.classList.add('d1')


// modla #m1
let m1 = document.getElementById('m1')
m1.style.display="none"
let m2 = document.getElementById('m2')
m2.style.display="none"
let mdata1 = document.getElementById('mdata1')
let cross = document.getElementsByClassName('cross')[0]
function close1(){
    // console.log(`1`)
    m1.style.display = "none"
    m2.style.display = "none"
}

// function to toggle te navbar

function appear(){
    if(val==true){
    
        nav.classList.add('load1') 
        ul.classList.add('d2')
        

        nav.classList.remove('load2') 
        ul.classList.remove('d1') 

    }
    else{
        nav.classList.remove('load1') 
        nav.classList.add('load2') 

        ul.classList.add('d1')
        ul.classList.remove('d2') 

    }    
    val = !val
}


// fetching data from planet api

const planetImages = {
    Mercury: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    Venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    Earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    Mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    Jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    Saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    Uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    Neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    Pluto: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg"
};

const planetDescriptions = {
    Mercury: "Mercury is the smallest planet in our solar system and closest to the Sun.",
    Venus: "Venus is the second planet from the Sun and has a thick, toxic atmosphere.",
    Earth: "Earth is the third planet from the Sun and the only known planet to support life.",
    Mars: "Mars is the fourth planet from the Sun, known as the Red Planet due to its reddish appearance.",
    Jupiter: "Jupiter is the fifth planet from the Sun and the largest in our solar system.",
    Saturn: "Saturn is the sixth planet from the Sun, famous for its prominent ring system.",
    Uranus: "Uranus is the seventh planet from the Sun, known for its blue-green color and tilted axis.",
    Neptune: "Neptune is the eighth planet from the Sun, characterized by its deep blue color and strong winds.",
    Pluto: "Pluto, once considered the ninth planet, is now classified as a dwarf planet in the Kuiper belt."
};


async function fetchPlanets(name) {

    console.log("debugging")
    const url = `https://api.api-ninjas.com/v1/planets?name=${name}`;
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'MaIr0oG8Jarc65kkYxDBiA==9R7dbAXWcNzY9cDz'
        }
    };

    try {
        const response = await fetch(url, options);
        
        const planets = await response.json();
        // console.log(planets);

        const planetsWithImages = planets.map(planet => {
            return {
                ...planet,
                imageUrl: planetImages[planet.name],
                desc : planetDescriptions[planet.name]
            };
        });
        // console.log(planetsWithImages)
        planetArray.push(planetsWithImages)

    } catch (error) {
        console.error('Error fetching planets:', error);
    }
}

const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto" 
];
async function fet() {
    await Promise.all(planets.map((ele)=>fetchPlanets(ele)));
    planetArray.map((ele,i)=>{
        // console.log(ele)
        ele.map((subPlanet)=>{
            // console.log(subPlanet)
            // console.log(subPlanet.name)
            // console.log(subPlanet.imageUrl)
            // console.log(subPlanet.desc)

            let cardbgData = document.createElement('div')
            cardbgData.className = "cardbgData"
            cardbgData.style.setProperty("--position",i)
            cardbgData.innerHTML = `
                <div><img src=${subPlanet.imageUrl} height="40px"></div>
                <h1>${subPlanet.name}</h1>
                <p>${subPlanet.desc}</p>
                <br>
                <button onclick="expand(${i})">View More</button>
            `;

            cardbg.appendChild(cardbgData);
        })
    })
}

fet();


// function to expand
function expand(id){
    console.log(planetArray[id])
    p = planetArray[id][0]
    mdata1.innerHTML=`
    <h1>About Planet : ${p.name}</h1>
        <div id="tbl">
            <table  align="center" cellpadding="20">
                <tr>
                    <td>Mass</td>
                    <td> ${p.mass}</td>
                </tr>
                 <tr>
                    <td>Distance</td>
                    <td> ${p.distance_light_year}</td>
                </tr>
                 <tr>
                    <td>radius</td>
                    <td> ${p.radius}</td>
                </tr>
                 <tr>
                    <td>Period</td>
                    <td> ${p.period}</td>
                </tr>
                 <tr>
                    <td>Temprature</td>
                    <td> ${p.temprature}</td>
                </tr>
                 <tr>
                    <td>Semi Axis</td>
                    <td> ${p.semi_major_axis}</td>
                </tr>
            </table>
        </div>
    `
    m1.style.display= "block"

}


// Space-snap api integration 
async function abc() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=xdG1OVTjGzsge9DeOAnY0drd7DVEKaMxqsohy9B5';
  
   try {
       const response = await fetch(url);
       const result = await response.json();
       console.log(result);

       let ss = document.createElement('div')
       ss.innerHTML=`
       <br>
        <h1 align="center">${result.title}</h1>
        <h4  align="center">${result.date}</h4>
        <br>
        <img src=${result.hdurl} style="box-shadow: 0px 0px 20px white">
        <br>
        <div id="bckimg"><p>${result.explanation}</p></div>
       `;

       document.getElementById('spaceSnap').appendChild(ss)
   } catch (error) {
       console.error('Error fetching events:', error);
   }
}

abc();


// login function

const signup = ()=>{
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    var fobj = {
        name ,
        email ,
        pass
    }
    console.log(fobj);

    if(fobj.pass == cpass)
    {
        // console.log(1)
        localStorage.setItem('loggedIn',1)
        localStorage.setItem('name',name)
        checkLocal()

    }
    else{
        alert("Please Enter Correct Password")
        document.getElementById('name').value='';   
        document.getElementById('email').value='';   
        document.getElementById('pass').value='';   
        document.getElementById('cpass').value='';   
    }
    


}


const signup1 = ()=>{
    event.preventDefault();

    let name = document.getElementById('name11').value;
    let email = document.getElementById('email1').value;
    let pass = document.getElementById('pass1').value;
    let cpass = document.getElementById('cpass1').value;
    var fobj = {
        name ,
        email ,
        pass
    }
    console.log(fobj);

    if(fobj.pass == cpass)
    {
        // console.log(1)
        localStorage.setItem('loggedIn',1)
        localStorage.setItem('name',name)
        checkLocal()
        document.getElementById('m2').style.display="none";
    }
    else{
        alert("Please Enter Correct Password")
        document.getElementById('name11').value='';   
        document.getElementById('email1').value='';   
        document.getElementById('pass1').value='';   
        document.getElementById('cpass1').value='';   
    }
    


}



// to check if loggedIn or not
function checkLocal(){
    if(localStorage.getItem('loggedIn') == 1){
        let name = localStorage.getItem('name')
        document.getElementById('login01').innerHTML=`Hello ${name}`;
        document.getElementById('login').style.display="none";
    }
    else{
        // setTimeout(()=>{
        //     m2.style.display="block"
        // },30000)
        // document.getElementById('login').style.display="flex";

    }
    }