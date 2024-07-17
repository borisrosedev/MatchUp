export function paragraph (d) {
    // cette fonction créatrice d'un paragraphe accepte un paramètre ici que j'ai appelé d ( à votre discrétion concernant le nom que vous voulez donner à votre paramètre)

    return(
        `
            <p class="${d.classNames}">${d.content}</p>
        `
    )
}