const fs = require('fs');

(async function () {
    const q1 = await fetch('https://opentdb.com/api.php?amount=1&category=9&type=multiple');
    const stream = new ReadableStream(q1.body);
    for(let chunk of stream) {
        console.log(chunk.toString());
    }
    await setTimeout(()=>{
        console.log("Wait for 1 second");    
    },1000);

    // const q2 = await fetch('https://opentdb.com/api.php?amount=1&category=18&type=multiple');
    // await setTimeout(()=>{
    //     console.log("Wait for 1 second");    
    // },1000);
    // const q3 = await fetch('https://opentdb.com/api.php?amount=1&category=30&type=multiple');
    // console.log(q1);
    // console.log(q2);
    // console.log(q3);
})();