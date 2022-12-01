export class MyForm extends HTMLElement {
    
    email = "";
    password = "";  
    name = "";
    user = "";
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", () => {
            const event: CustomEvent<{ email: string, password: string, name:string, user: string }> =
                new CustomEvent("formulario-fullfiled", {
                    detail: { email: this.email, password: this.password, name: this.name, user: this.user },
                    composed: true
            });

            this.dispatchEvent(event);
        });

        const emailInput = this.shadowRoot?.querySelector('input[type="text"]');
        const passwordInput = this.shadowRoot?.querySelector('input[type="password"]');
        const nameInput = this.shadowRoot?.querySelector('input[type="text"]')
        const userInput = this.shadowRoot?.querySelector('input[type="text"]')

        
        emailInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.email = value;
        });

        passwordInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.password = value;
        });

        nameInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.password = value;
        });

        userInput?.addEventListener("change", (evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
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