var logEmail = document.getElementById('logEmail')
var logPass = document.getElementById('logPass')
var signEmail = document.getElementById('signEmail')
var signName = document.getElementById('signName')
var signPass = document.getElementById('signPass')



if(localStorage.getItem("Users")==null)
    {
       var Accounts = []
        localStorage.setItem("Users",JSON.stringify(Accounts))
    }
    else
    {
        Accounts = JSON.parse(localStorage.getItem("Users"))
    }

//---------------START SIGN UP PAGE--------------------------
function signUp()
{
    signUpValidation()
    signUpClear()   
}
function signUpValidation()
{   
    var counter;
    var signEmail = document.getElementById('signEmail').value;
    var reservedEmails = JSON.parse(localStorage.getItem('Users'))
    for(var i=0; i < reservedEmails.length;i++)
        {
            if(signEmail == reservedEmails[i].Email)
                {
                    counter = 1;
                }
        }
    if(counter == 1)
        {
            
            document.getElementById('alreadyReserved').innerHTML=
            `
                <p class="text-danger fw-bolder">This Email address is already in use</p>
            `  
        }
        else
        {
            var signEmail = document.getElementById('signEmail').value
            var signName = document.getElementById('signName').value
            var signPass = document.getElementById('signPass').value
            var details = 
             {
                Email:signEmail,
                Name:signName,
                Password:signPass
            }
            Accounts.push(details)
            localStorage.setItem('Users', JSON.stringify(Accounts))
            document.getElementById('alreadyReserved').innerHTML=`<p class="text-success fw-bolder">Success</p>`;               
        }
}
function signUpClear()
{
    signEmail.value=""
    signName.value =""
    signPass.value ="" 
}
//var callSign = document.getElementById('signBtn')
//callSign.addEventListener('click',signUp)
//----------------END SIGN UP PAGE-------------------------------
//----------------START LOGIN PAGE-------------------------------
function log()
{
    var existingUsers;
    var counter;
    var logEmail = document.getElementById('logEmail').value
    var logPass = document.getElementById('logPass').value

    existingUsers = JSON.parse(localStorage.getItem('Users'))
    
    
    for( var i = 0 ; i<existingUsers.length ; i++ )
        {
            if(logEmail == existingUsers[i].Email && logPass == existingUsers[i].Password)
                {
                    counter = 1

                }
        }
    if(counter == 1)
            {
                document.getElementById("error").innerHTML = `` 
                console.log("Login successful, redirecting...");
                var btn = document.getElementById("logBtn")
                btn.setAttribute('href',"home.htm")
            }
        else
        {
            document.getElementById("error").innerHTML = 
            `
                <p class="text-danger fs-4 fw-bold">Incorrect email or password</p>

            `  
        }
        welcome()
}

 
//----------------END LOGIN PAGE-------------------------------
//---------------START HOME UP PAGE--------------------------



//---------------ENd HOME UP PAGE--------------------------



function welcome()
{
    var greet;
    var logEmail = document.getElementById('logEmail').value;
    console.log(logEmail);
    
    console.log(document.getElementById("welcome"));
    
    greet = JSON.parse(localStorage.getItem("Users"))
    
    for(i=0;i<greet.length;i++)
        {
            if(logEmail==greet[i].Email)
                {
                    document.getElementById("welcome").innerHTML=
                    `
                        <h1>Welcome ${greet[i].Name}</h1>
                    `
                }
        }
}

