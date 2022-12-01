export class MyForm extends HTMLElement {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.name = "";
        this.user = "";
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("formulario-fullfiled", {
                detail: { email: this.email, password: this.password, name: this.name, user: this.user },
                composed: true
            });
            this.dispatchEvent(event);
        });
        const emailInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[type="text"]');
        const passwordInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="password"]');
        const nameInput = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('input[type="text"]');
        const userInput = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector('input[type="text"]');
        emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.email = value;
        });
        passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.password = value;
        });
        nameInput === null || nameInput === void 0 ? void 0 : nameInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.password = value;
        });
        userInput === null || userInput === void 0 ? void 0 : userInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.password = value;
        });
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Form/style.css">
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
customElements.define("my-form", MyForm);
