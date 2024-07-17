interface FigureProps {
    img: {
        src: string 
        alt: string
    }
    classNames?: string
}


export default function({ img: { src, alt }, classNames }: FigureProps){
    return(
        `
            <figure class="figure ${classNames}">
                <img src="${src}" alt="${alt}" />
            </figure>
        
        `
    )
}


