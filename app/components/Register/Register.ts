import DB from "../../services/firebase.js";
import { Register } from "../../types/types.js";

export class MyRegister extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.mount();
    }

    mount(){
        this.render();
        this.addListeners();
    }

    addListeners(){
        const form = this.shadowRoot?.querySelector("form");
        form?.addEventListener("submit", (e: SubmitEvent) => {
            e.preventDefault();
            const target = e.target as HTMLFormElement;

            const inputEmail = target.elements[0] as HTMLInputElement;
            const inputName = target.elements[1] as HTMLInputElement;
            const inputUser = target.elements[2] as HTMLInputElement;
            const inputPassword = target.elements[3] as HTMLInputElement;

            const newUser: Register = { name: inputName.value, user: inputUser.value, email: inputEmail.value, password: inputPassword.value };
            DB.onRegister(newUser);

        })
    }

    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Register/style.css" type="text/css" >
            <section>
                <my-form></my-form>
            </section>
            <article>
                <form>
                    <img class="logo" src="./app/assets/logo.svg.png"></img>
                    <h1 class="encabezado">Regístrate para ver fotos y videos de tus amigos.</h1>
                    <input type="email" placeholder="Número de celular o correo electrónico"/>
                    <input type="text" placeholder="Nombre completo"/>
                    <input type="text" placeholder="Nombre de usuario"/>
                    <input type="password" placeholder="Contraseña"/>
                    <p>Es posible que las personas que usan nuestro servicio hayan subido tu información de contacto a Instagram. Más información</p>
                    <p>Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.</p>
                    <button type="submit">Registrarte</button>
                </form>
                <div class="contenedor">
                    <p class="cuenta">Tienes una cuenta? <b>Inicia sesión</b></p>
                </div>
            </article>
            `;
        }
    }
}

customElements.define("my-register", MyRegister);