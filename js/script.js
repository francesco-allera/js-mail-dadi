/* // MAIL VERIFICATION
var mails = ['tizio@gmail.com', 'caio@outlook.com', 'sempronio@icloud.com'];
var passwords = ['gmailPassword', 'outlookPassword', 'icloudPassword'];
var output = document.getElementById('output');
var verified, indexMail, password;

console.log('mails: ', mails);
console.log('passwords: ', passwords);

// ask for a mail
var mailUser = prompt('Inserisci la tua mail per giocare\n(Vedi i console.log per entrare)');

// check if 'mailUser' is in 'mails'
for (var i = 0; i < mails.length && !verified; i++) {
    if (mailUser === mails[i]) {
        verified = true;
        indexMail = i;
    }
}

// stop + print if 'mailUser' isn't in 'mails'
if (!verified) {
    output.innerHTML = '<h1>Questa mail non risulta nell\'elenco</h1>';

} else {
    // ask for the password
    password = prompt('Inserisci la password per ' + mailUser);

    // stop + print if the password is wrong
    if (password !== passwords[indexMail]) {
        output.innerHTML = '<h1>Password non corretta</h1>';

    // print + btn-play visible if 'password' is correct
    } else {
        output.innerHTML = '<h1>Benvenuto!</h1>';
        button.style = 'display:block';
    }
} */


// DICE GAME
var button = document.getElementById('btn-play');
var min = 1, max = 6;

button.addEventListener('click', function() {
    document.getElementsByTagName('h1')[0].innerHTML = '';
    var userDice = pcDice = result = '';

    // generating random numbers
    var userNumber = Math.floor(Math.random() * (max + 1 - min) + min);
    var pcNumber = Math.floor(Math.random() * (max + 1 - min) + min);

    // create + print user dice
    document.querySelector('.user').innerHTML = '<h2>Il tuo dado</h2><div class="dice"><div class="grid"></div></div>';

    if (userNumber % 2 !== 0)
        userDice = '<i class="fas fa-circle central"></i>';
    if (userNumber >= 2)
        userDice += '<i class="fas fa-circle top left"></i> <i class="fas fa-circle bottom right"></i>';
    if (userNumber >= 4)
        userDice += '<i class="fas fa-circle top right"></i> <i class="fas fa-circle bottom left"></i>';
    if (userNumber === 6)
        userDice += '<i class="fas fa-circle center left"></i> <i class="fas fa-circle center right"></i>';

    document.querySelector('.user .grid').innerHTML = userDice;

    // create + print pc dice
    document.querySelector('.pc').innerHTML = '<h2>Il dado del pc</h2><div class="dice"><div class="grid"></div></div>';

    if (pcNumber % 2 !== 0)
        pcDice = '<i class="fas fa-circle central"></i>';
    if (pcNumber >= 2)
        pcDice += '<i class="fas fa-circle top left"></i> <i class="fas fa-circle bottom right"></i>';
    if (pcNumber >= 4)
        pcDice += '<i class="fas fa-circle top right"></i> <i class="fas fa-circle bottom left"></i>';
    if (pcNumber === 6)
        pcDice += '<i class="fas fa-circle center left"></i> <i class="fas fa-circle center right"></i>';

    document.querySelector('.pc .grid').innerHTML = pcDice;

    // Printing result
    if (userNumber > pcNumber)
        result = 'Hai vinto!';
    else if (userNumber < pcNumber)
        result = 'Hai perso!';
    else
        result = 'Pareggio!';

    document.getElementsByTagName('h1')[0].innerText = result;
});