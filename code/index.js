
function add ( a, b ) {
    return a+b ;
}
function substract( a, b ) {
    return a-b ;
}
function sayHello( name ) {
    return `hello ${name}` ;
}

// testing frame work
function test ( message , callback ) {
    try {
        callback();
        console.log('✅' , message)
    } catch (error) {
        console.error(error)
        console.log('❌' , message)
    }
}

function expect (actual) {
    return {
        isEqual : function ( expected ) {
            if ( actual !== expected ) {
                throw new Error(`${result} is not expected value`)
            } 
        },
        isEqualto : function ( expected ) {
            if ( typeof actual !== expected ) {
                throw new Error ( `it is not a ${expected}`)
            }
        }
    }
}

function testAdd ( ) {
    let result = add ( 2, 4 )
    let expected = 6
    expect(result).isEqual(expected)
}
test('adding 2 and 4' , testAdd)

function testSub () {
    let result = substract( 20, 4 )
    let expected = 16
    expect(result).isEqual(expected)
}
test('substracting 20 and 4' , testSub)

function testSayHello () {
    let result = sayHello("uppi")
    let expected = 'string'
    expect(result).isEqualto(expected)
}
test ('it is string or not', testSayHello)
