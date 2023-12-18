import { useParams } from "react-router-dom"

import posts from '../../posts.json'
import { useEffect, useState } from "react"

const Post = () => {
    const { id } = useParams()
    const [postDetalhado, setPostDetalhado] = useState({})

    useEffect(() => {
        const post = posts.find(p => {
            return p.id == id
        })
        setPostDetalhado(post)
    }, [id])

    return (<h1>
        {postDetalhado.titulo}
    </h1>)
}

export default Post