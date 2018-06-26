import * as React from 'react'
import * as css from './styles.scss'

import { Title } from 'components'

import image from 'images/cat.jpg'

export function ChangelogPage () {
    document.title = 'Changelog Page'

    return (
        <div className={css.content}>
            <Title size="huge" type="primary" center>Changelog Page</Title>
            <Title size="medium" type="secondary" center>Changelog Page</Title>

            <p className={css.description}>
                Reference site about Lorem Ipsum, giving information on its origins.
            </p>

            <img src={image} width={400} height={400} alt=""/>
        </div>
    )
}

export default ChangelogPage
