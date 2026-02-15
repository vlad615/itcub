
const model = {
    data: {
        isOpen: false
    },
    
    showMenu(){
        this.data.isOpen = !this.data.isOpen
        
        view.renderMenu(this.data.isOpen)
    }



}

const view = {
    init(){
        const menu = document.querySelector('img.menu')
        const links = document.querySelector("div.menu")
        menu.addEventListener("click", ()=>{ controler.checkMenu() })

        links.addEventListener("click", ()=>{ controler.checkMenu() })
    },

    renderMenu(isOpen){
        const menu = document.querySelector('img.menu')
        const main = document.querySelector('div.menu')

        if(isOpen){
            menu.setAttribute("src", "./accets/close.svg")
            main.setAttribute("style", "display: flex;")
            main.innerHTML = `
            <nav class="mobile">
                <ul>
                    <li><a href="#main">Home</a></li>
                    <li><a href="#episodes">Episodes</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            `

        } else {
            menu.setAttribute("src", "./accets/menu.svg")
            main.setAttribute("style", "display: none;")
            main.replaceChildren();
        }
    }
}

const controler = {
    checkMenu(){
        model.showMenu()
    }
}

function init() {
  view.init()
}

document.addEventListener('DOMContentLoaded', init)
