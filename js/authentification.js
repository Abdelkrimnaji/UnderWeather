const connexionLogin = document.querySelector("#connexion_login");
const loginLogin = document.querySelector("#login_login");
const passLogin = document.querySelector("#pass_login");
const messageLogin = document.querySelector("#error");

function verify(element, event) {

    if ((element) != null) {

    element.addEventListener(event, (e) => {

        console.log("listener");
        if (e.key === "Enter" || event === "click") {

            console.log("un evenement");

           
            let data = new FormData();
            data.append("login", loginLogin.value);
            data.append("pass", passLogin.value);
        
            fetch("https://meteo.abdelkrim-naji.com/login/verif", {method: "POST", body: data})
            .then( (result) => { return result.json() } )
            .then( (result) => {
                if(!result.error){
                    console.log(result);
                    console.log(result.adresse)
                    console.log(result.ville)
                    document.querySelector("#error").innerHTML = 'Connexion réussie';
                    location.reload();

                } else {
                    document.querySelector("#error").innerHTML = result.error;
                }
            });
        }
    })
}
}


verify(connexionLogin, "click");
verify(loginLogin, "keydown");
verify(passLogin, "keydown");