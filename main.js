//message generator program

//1. create the message
const generateRandomNumber = num => {
    return Math.floor(Math.random() * num);
}

//2. come up with a topic
const madLibs = {
    subject: ["He", "She", "It"],
    verb: ["runs", "plays", "eats", "sleeps", "works"],
    adverb: ["horribly", "wonderfully", "beautifully", "badly"],
}

let madLibsOutput = [];

for (let x in madLibs) {
    let randIndex = generateRandomNumber(madLibs[x].length);


switch(x) {
    case 'subject':
    madLibsOutput.push(`${madLibs.subject[randIndex]}`)
    break
    
    case 'verb':
    madLibsOutput.push(`${madLibs.verb[randIndex]}`)
    break

    case 'adverb':
    madLibsOutput.push(`${madLibs.adverb[randIndex]}`);
    break

    default:
    madLibsOutput.push('More information required.');
}
}

let formattedOutput = madLibsOutput.join(' ');

console.log(formattedOutput);
