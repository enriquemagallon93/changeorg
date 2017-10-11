var config = {
    userAgents: {
        chrome: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
        mozilla: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41',
        safari: 'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        ie: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)',
    }
};

Nightmare = require('nightmare');


const names = ['Yisus','David','Juan','Iris','Rosa','Luis','Margarita'];
const lastnames = ['Garcia','Jimenez','Alvarado','Rosas','Mejia'];

function sign() {
  console.log('Signing');
  let nightmare = new Nightmare({ show: true }).useragent(config.userAgents.chrome);
  const user = createRandomUser();
  nightmare
  .goto('https://www.change.org/p/iris-vergara-que-iris-nos-diga-su-edad')
  .wait('.js-sign-button')
  .type('#first_name', user.name)
  .type('#last_name', user.lastname)
  .type('.js-email-sign',user.email)
  .click('.js-sign-button')
  .end()
  .catch(e=>console.log(e))
}

function createRandomUser() {
  const name = names[Math.floor(Math.random() * names.length )];
  const lastname = lastnames[Math.floor(Math.random() * lastnames.length )];
  return {
    name,
    lastname,
    email: `${name}_${lastname}${Math.random()}@gmail.com`.toLowerCase()
  }
}

function recursiveRandomSign() {
  let time = Math.ceil(Math.random()*10) * 1000;
  setTimeout(function(){
    sign();
    recursiveRandomSign();
  },time);
  console.log('next in',time,'seconds');
}

sign();
recursiveRandomSign();


