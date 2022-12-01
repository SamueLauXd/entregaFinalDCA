import { addPost } from "../../services/firebase";
import user from "../../types/types";
export class MyHome extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render(){
        const perfil = user.map(({user, post}) => {`
            <my-posts
            user="${user}"
            post="${post}"
        `})

        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``
                {perfil.join("")}
            ;
        }
    }
}

customElements.define("my-home", MyHome);