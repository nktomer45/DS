// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
    stringA=stringA.toLowerCase().replace(/[\W_]+/g,'');
    stringB=stringB.toLowerCase().replace(/[\W_]+/g,'');
    let string1=stringA.split("").sort().join("")
    let string2=stringB.split('').sort().join("")
    if(string1===string2){
        return true
    }
    return false

    // let Astring = {}
    // let Bstring = {}
    // if (!stringA.length || !stringB.length || stringA.length!==stringB.length) {
    //     return false
    // }
    // for (let i = 0; i < stringA.length; i++) {
    //     Astring[stringA[i]] = Astring[stringA[i]] + 1 || 1
    // }
    // for (let i = 0; i < stringB.length; i++) {
    //     Bstring[stringB[i]] = Bstring[stringB[i]] + 1 || 1
    // }

    // for (let i=0;i<stringA.length;i++){
    //     let item=stringA[i]
    //     if(!Bstring[item]){
    //         return false
    //     }
    //     else{
    //         Bstring[item]--
    //     }
        
    // }
    // return true


}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Anagrams", () => {
    it("works if case sensitivity and non word characters NOT taken into account", () => {
        assert.equal(anagrams("earth", "heart"), true);

        assert.equal(anagrams("love", "meow"), false);
        assert.equal(anagrams("lol", "lolc"), false);
    });
    it("is case insensitive. 'HEART' and 'earth' should return true", () => {
        assert.equal(anagrams("HEART", "earth"), true);
        assert.equal(anagrams("heart", "EARTH"), true);

        assert.equal(anagrams("love", "meow"), false);
        assert.equal(anagrams("lol", "lolc"), false);
    });
    it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
        assert.equal(anagrams("heart!", " earth"), true);

        assert.equal(anagrams("love", "meow"), false);
        assert.equal(anagrams("lol", "lolc"), false);
    });
});

mocha.run();