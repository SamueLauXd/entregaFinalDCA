import DB from "../../services/firebase.js";
export class MyRegister extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.mount();
    }
    mount() {
        this.render();
        this.addListeners();
    }
    addListeners() {
        var _a;
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("form");
        form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
            e.preventDefault();
            const target = e.target;
            const inputEmail = target.elements[0];
            const inputName = target.elements[1];
            const inputUser = target.elements[2];
            const inputPassword = target.elements[3];
            const newUser = { name: inputName.value, user: inputUser.value, email: inputEmail.value, password: inputPassword.value };
            DB.onRegister(newUser);
        });
    }
    render() {
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
