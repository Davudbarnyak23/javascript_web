const products = [
{ name: 'Daenerys Sitting on Throne', price: 512, img: 'daenerys.jpeg', type: 'publick' },
{ name: 'Fawkes Vinyl Figure', price: 312, img: 'fawkes.jpeg', type: 'VIP' },
{ name: 'Flash Vinyl Figure', price: 645, img: 'flash.jpeg', type: 'publick' },
{ name: 'Kakashi', price: 700, img: 'kakashi.jpeg', type: 'VIP' },
{ name: 'The Mandalorian on Blurg', price: 400, img: 'mandalorian.jpeg', type: 'publick' },
{ name: 'Naruto', price: 639, img: 'naruto.jpeg', type: 'VIP' },
{ name: 'Rey Vinyl Figure', price: 138, img: 'rey.jpeg', type: 'publick' },
{ name: 'Steve Trevor Vinyl Figure', price: 138, img: 'steve.jpeg', type: 'publick' },
{ name: 'Moana Te Ka', price: 211, img: 'te_ka.jpeg', type: 'publick' }
];

const users = [
    {id:1, login: '1', password: '1', type:'publick'},
    {id:2, login: '2', password: '2', type:'VIP'},
    {id:3, login: '3', password: '3', type:'VIP'}
]
let userType = 'publick';
let userLogin;
let userPassword;
let user = {};

function userVerification(login, password) {
    let id = 0
    for(let i = 0; i < users.length; i++) {
        if (users[i].login === login && users[i]['password'] === password ){
            return {login:users[i].login,
                    type: users[i].type}
        }
    }
    return {}
}

if ( confirm('ви зареестрованій користувач?')){

    userLogin = prompt('login ')
    userPassword = prompt('password ')

    user = userVerification(userLogin, userPassword)
    //if ('login' in user) {}
    if(user.hasOwnProperty('login')) {
        userType = user.type;
    }
}   

console.log(userType)

let content = "<div><header>Funka<h1></h1></header>"

//  TODO: TOVAR

content += "</div>"

document.body.innerHTML = ContentVisibilityAutoStateChangeEvent;