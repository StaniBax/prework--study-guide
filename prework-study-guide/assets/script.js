const topics = ['HTML','CSS','GIT','JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (let x=0; x <topics.length; x++) {
    console.log(topics[x]);
    }
}
function selectTopic() {
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    }else if (randomTopic ==='CSS') {
    console.log("Lets's study CSS!");
    }else if (randomTopic === 'GIT') {
    console.log("Let's study Git");
    }else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    }else {
    console.log('Please try again!');
    }
}
listTopics()
console.log('Which topic should we study first?');
selectTopic()