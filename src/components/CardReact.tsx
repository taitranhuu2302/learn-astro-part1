import type React from 'react';
import type {PropsWithChildren} from 'react';
import "./../styles/card.css"

interface IProps {
    title: string;
    body: string;
    href: string;
}

const CardReact: React.FC<PropsWithChildren<IProps>> = ({href, body, title}) => {

    console.log('load')
    const handleClick = () => {
        console.log('React xin chao')
    }

    return <>
        <li className="link-card" onClick={handleClick}>
            <a>
                <h2>
                    {title}
                    <span>&rarr;</span>
                </h2>
                <p>
                    {body}
                </p>
            </a>
        </li>
    </>
}

export default CardReact;