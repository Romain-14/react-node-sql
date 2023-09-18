function setTitle(page){

    switch (page) {
        case "/":
            return "Accueil Cup of Tea - Les meilleurs thés au monde sélectionnés pour vous !"
        case "/the":
            return "Nos thés - Tous nos thés"
        default:
    }

}


export {setTitle}