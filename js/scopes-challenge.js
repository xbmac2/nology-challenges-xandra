const a = 1;
const b = 2;
const c = 3;

function firstFunction() {
    const b = 5;
    const c = 6;
    

    function secondFunction() {
        const b = 8;
        

        function thirdFunction() {
            const a = 7;
            const c = 9;
            

            function fourthFunction() {
                const a = 3;
                const c = 8;
                console.log(`a: ${a}, b: ${b}, c: ${c}`);  
            }

            fourthFunction();
        }

        thirdFunction();
    }

    secondFunction();
}

firstFunction();



// a:1, b:8, c:6 console.log in secondFunction
// a:3, b:8, c:8 console.log in fourthFunction
// a:1, b:5, c:6 console.log in firstFunction
// a:7, b:8, c:9 console.log in thirdFuction