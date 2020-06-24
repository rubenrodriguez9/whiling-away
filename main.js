function BannerChallenge(n){
    console.log(`######### Challenge ` + n + ` #########`)
}


BannerChallenge(1);
function sequence(

){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    return 5
    }

console.log(sequence());

BannerChallenge(2);

function sequence2(x){
    while(x < 6){
        console.log(x);
        x = x +1;
        
    }
}
console.log(sequence(1))

BannerChallenge(3);

function sequence2(x, y){
    while(x <= 6){
        console.log(x);
        x = x +1;
        
    }
}
BannerChallenge(4);


function sequence4(x){
    while(x < 6){
        if(x % 2 === 0){console.log('even')}
        else if(x % 2 === 1){console.log('odd')}
    x++;
    }
}

console.log(sequence4(1));

BannerChallenge(5);

function sequence5(y){
    let x = 1;
    while(x < y){
        if(x % 2 === 0){console.log(x)}
        x++;
    }
}

console.log(sequence5(11))

BannerChallenge(6);

function sequence6(x){
    while(x <= 10 && x > 0){
        console.log(x)
        x--;
    }
}
console.log(sequence6(10))

BannerChallenge(7)

function sequence7(x){
    while(x <= 10 && x > 0){
        console.log(x)
        if(x === 1){console.log('Blast off!')}
        x--;
    }
}

console.log(sequence7(10));

BannerChallenge(8);

function sequence8(x){
    while(x > 1){
        console.log(x);
        x = x - 3;
    }
}

sequence8(20);

BannerChallenge(9);
function hello(x){
    while(x < 8){
        console.log(x+'. Hello!')
        x++
    }
}

console.log(hello(1));

console.log(BannerChallenge(10))
function sup(y){
    let x = 1;
    while(x < 8){
        console.log(x+'. '+y)
        x++
    }
}

console.log(sup('Hello!'));

BannerChallenge(11)

function getOut(x, y){
    let s = 0;
    while(s < y ){

        console.log(x)
        s++;
    }
}
console.log(getOut('Good-bye...', 4));
console.log(getOut('Get out!', 6));


BannerChallenge(12)

function thought(x){
    let z = 0;
    while(z < x.length){
        console.log(x[z])
        z++;
    }
}
thought('think')
BannerChallenge(13)

function thoughts(x){
    let z = 1;
    while(z < x.length){
        console.log(x[z])
        z= z+2;
    }
}
thoughts('Nobody')
BannerChallenge(14)

function backwardo(x){
    let y = 0;
    let z = x.length;
    while(y <= z){
        console.log(x[z])
        z--;
    }
}

backwardo('nice shirt!')

