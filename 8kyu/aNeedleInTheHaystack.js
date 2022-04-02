/*
8kyu_a needle in the haystack
27 march 2022

Write a function findNeedle() that takes an array full of junk but containing one "needle".
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle

So findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5" (in COBOL "found the needle at position 6")
*/

function findNeedle(haystack) {
    needleIndex = haystack.findIndex(x => x === 'needle')
    
    return `found the needle at position ${needleIndex}`
}