import "./components/Register/Register.js";
import { Register } from "./types/types.js";
import DB from "./services/firebase.js";

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        DB.listenUsers((users:any) => this.render(users));
    }

    render(users: Register[]){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./styles.css" type="text/css" >
            <section>
                <my-register></my-register>
            </section>
            `;
        }
    }
}

customElements.define("app-container", AppContainer);