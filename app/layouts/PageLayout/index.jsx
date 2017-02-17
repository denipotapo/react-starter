import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import styles from './styles.scss';

export default class PageLayout extends Component {

    static propTypes = {
        children: React.PropTypes.object.isRequired,
        title: React.PropTypes.string
    }

    static defaultProps = {
        title: 'Main Layout title'
    }

    render() {
        return (
            <div className={styles.layout}>
                <header className={styles.layout__header}>
                    <h1 className={styles.layout__header__title}>{this.props.title}</h1>
                </header>

                <div className={styles.layout__row}>
                    <aside className={styles.layout__navbar}>
                        <ul>
                            <li><Link to="/" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Main</Link></li>
                            <li><Link to="/page" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Page</Link></li>
                            <li><Link to="/page/page1" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Page1</Link></li>
                            <li><Link to="/page/page2" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Page2</Link></li>
                            <li><Link to="/page/page3" className={styles.layout__navbar__link} activeClassName={styles.layout__navbar__active}>Page3</Link></li>
                        </ul>
                    </aside>

                    <main className={styles.layout__main}>
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}
