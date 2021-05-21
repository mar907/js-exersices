const usuarios = [
    {
        name: "Maria Veronica Fernandez",
        email: "maria_veronica_f@outlook.com",
        password: "tiagoivan"
    }
]

function validarImput(){
    respuesta= prompt("")
}
document.getElementById("login_form").addEventListener(
    "submit",
    event => {
        event.preventDefault()
        const email = event.target.children.namedItem("email").value
        const password = event.target.children.namedItem("password").value
        //debugger
        const user = usuarios.find( item => item.email  === email  )
        const user = usuarios.find( item => item.password  === password  )
       
        console.log(user)
    }
) 


