async function abc() {
     const url = 'https://api.nasa.gov/planetary/apod?api_key=xdG1OVTjGzsge9DeOAnY0drd7DVEKaMxqsohy9B5';
    const options = {
        method: 'GET',
        headers: {}
    };

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorDetail = await response.json();
            throw new Error(`HTTP error! Status: ${response.status}, Detail: ${JSON.stringify(errorDetail)}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

abc();


