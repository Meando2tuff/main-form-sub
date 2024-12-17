document.addEventListener('DOMContentLoaded', () =>{
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message= document.getElementById("message").value
    let form = document.getElementById("form")
    form.addEventListener("Submit", (event) => {
        event.preventDefault()
        if(name&&email&&message) {
           alert("form Succesfully submi")
        }
        else{
            alert("form incomplete")
        }
    })






}) 