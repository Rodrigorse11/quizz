async function readJsonFile(nameOfJsonFile) {
    try {
        const response = await fetch(nameOfJsonFile);

        if (!response.ok) {
            throw new Error(' Network response was not ok ' + response.statusText);
        }
        return await response.json();
    }catch(error) {
        console.error('There was a problem with the fetch operation: ' , error);
    }
}

async function start(){
    const jsonData = await readJsonFile("questions.json");

    console.log(jsonData)
}