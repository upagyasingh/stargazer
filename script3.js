const planetImages = {
    "Mercury": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    "Venus": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    "Earth": "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    "Mars": "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    "Jupiter": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    "Saturn": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    "Uranus": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    "Neptune": "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    "Pluto": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Nh-pluto-in-true-color_2x_JPEG-edit-frame.jpg"
};
async function fetchPlanets(name) {
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
                imageUrl: planetImages[planet.name]
            };
        });

        console.log(planetsWithImages)  ;
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

planets.map((pl)=>{
    fetchPlanets(pl)
})


/*
// Example object
const obj1 = { a: 1, b: 2 };

// Creating a shallow copy of obj1
const obj2 = { ...obj1 };

console.log(obj2); // Output: { a: 1, b: 2 }

// Merging multiple objects
const obj3 = { c: 3 };
const mergedObj = { ...obj1, obj3 };

console.log(mergedObj); // Output: { a: 1, b: 2, c: 3 }
*/