const queens = []     // using later to create a string to hail each added queen individually

const tributeChest = []     // Three items for each tributeObject - id for tribute, string value for description of tribute, and associated queen id.



    // Storing queen names with assigned Id and pushing(adding) to the queens array
const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

const trinity = createQueen(0, "Trinity Terry")
const maemae = createQueen(1, "Mae Mae")
const teetee = createQueen(2, "Tee Tee")
const sarah = createQueen(3, "Sarah")

console.log(queens)




    // Storing and pushing tribute items and id values to the tributeChest array
const payTribute = (tributeId, description, queenId) => {
    const tributeObject = {
        id: tributeId,
        description: description,
        queenId: queenId
    }

    tributeChest.push(tributeObject)
}

const trinityTribute = payTribute(0, "Three trained terriers", 0)
const sarahTribute = payTribute(1, "\u266A\u266B Fiiive goooolden riiiings \u266A\u266B", 3)
const maemaeTribute = payTribute(2, "One hundred million princess dresses", 1)
const teeteeTribute = payTribute(3, "One golden goose egg", 2)


/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

// This will hail each queen in the queens array
for (const queen of queens) {
    const hailMessage = hailTheQueen(queen.name)
    console.log(hailMessage)
    
}


console.log(tributeChest)


            // Creating a nested for loop to iterate through and match tribute.id with queen.id to print tribute message

// Iterate the queen objects to show tribute for each one
for (const queen of queens) {

    // Each queen will look at every item to see if it is hers
    for (const tribute of tributeChest) {
        if (tribute.queenId === queen.id) {
            console.log(`${queen.name} has received a tribute of ${tribute.description}.`)
        }
    }
}



//################################     ORIGINAL CODE     ###################################################

                /* const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
                console.log(athena)

                const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
                console.log(charisse)

                const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
                console.log(jenna)

                //      ** My Queens  **

                const sarah = hailTheQueen("Sarah") // Argument value is "Sarah"
                console.log(sarah)

                const maemae = hailTheQueen("Mae Mae") // Argument value is "Mae Mae"
                console.log(maemae)

                const teetee = hailTheQueen("Tee Tee") // Argument value is "Tee Tee"
                console.log(teetee)


                // Logical Errors

                const ramona = hailTheQueen("Ramona")  // without a provided argument inside of the function call (), the default 'undefined' value is returned. 
                console.log(ramona)


                // Syntactical Errors - Time to make a common, beginner syntactical error.

                const monica = hailTheQueen("Monica Dinglehopper")  // hailTheQuen was missing an 'e', which caused the error below:
                console.log(monica)


                Uncaught ReferenceError ReferenceError: hailTheQuen is not defined             < --- This is the helpful bit where the debugger tries to give you hints of the issue
                    at <anonymous> (c:\Users\mrRev\NewForceProjects_AH\book-1\majesty\main.js:38:16)     < --- This is your source where the debugger gives you the exact line of the error (line 38 here)
                    at Module._compile (internal/modules/cjs/loader:1369:14)
                    at Module._extensions..js (internal/modules/cjs/loader:1427:10)
                    at Module.load (internal/modules/cjs/loader:1206:32)
                    at Module._load (internal/modules/cjs/loader:1022:12)
                    at executeUserEntryPoint (internal/modules/run_main:135:12)
                    at <anonymous> (internal/main/run_main_module:28:49)
                main.js:38
                Process exited with code 1
                */