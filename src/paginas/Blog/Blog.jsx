import posts from '../../posts.json'
import LinkEstilizado from '../../componentes/Link/Link'

const Blog = () => {
    return (<ul>
        {posts.map(post => <li key={post.id}>
            <LinkEstilizado to={`post/${post.id}`}>
                {post.titulo}
            </LinkEstilizado>
        </li>)}
    </ul>)
}

export default Blog