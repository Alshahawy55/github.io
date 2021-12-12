

/* ignore this comment 

const myHeading = document.querySelector('h1');
        myHeading.textContent = 'Sigh, I lied!';

*/


let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

myImage.onclick = function() 
    {
        let mySrc = myImage.getAttribute('src');
        if
            (mySrc === 'images/fflogo.png') 
            {
                myImage.setAttribute('src','images/fflogo2.png');
            }   
        else 
        {
            myImage.setAttribute('src','images/fflogo.png');
        }
    }


function setUserName() 
    {
        let myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }

if
    (!localStorage.getItem('name')) 
    {
        setUserName();
    }

else 
    {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
    }

function setUserName() 
    {
        let myName = prompt('Please enter your name.');
        if(!myName) 
        {
          setUserName();
        } 
        
        else 
        {
          localStorage.setItem('name', myName);
          myHeading.textContent = 'Mozilla is cool, ' + myName;
        }
    }

myButton.onclick = function() 
    {
        setUserName();
    }