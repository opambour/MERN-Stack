import React, { Component } from 'react';
import { Button } from '../button.component';

const leftNavLinks = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
];

const rightNavLinks = [
    {
        name: 'Login',
        link: '/login'
    },
    {
        name: 'Signup',
        link: '/signup'
    }
];

export class HeaderComponent extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const listLeftNavItems = leftNavLinks.map((nav, index) => {
            return(
                <li className={'nav-item'} key={index}>
                    <a className={window.location.pathname === nav.link ? 'nav-link active' : 'nav-link'}
                       href={nav.link}
                       data-toggle="tooltip"
                       data-placement="bottom"
                       title={'Go to ' + nav.name}
                    >
                        {nav.name}
                    </a>
                </li>
            );
        });

        const listRightNavItems = rightNavLinks.map((nav, index) => {
            return(
                <li className={'nav-item'} key={index}>
                    <a className={window.location.pathname === nav.link ? 'nav-link active' : 'nav-link'}
                       href={nav.link}
                       data-toggle="tooltip" data-placement="bottom" title={'Go to ' + nav.name}>{nav.name}</a>
                </li>
            );
        });

        return(
            <nav className={'navbar navbar-expand-lg fixed-top navbar-dark bg-dark'}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="../../../../public/img/react-logo_2.png"
                             alt="react logo"
                             width="30"
                             height="30"
                             className={'d-inline-block align-top'}
                        />
                        <span data-toggle="tooltip"
                              data-placement="bottom"
                              title={'Home page'}
                        >
                            {this.props.brand}
                        </span>
                    </a>

                    <Button buttonType={'button'}
                            buttonClasses={'navbar-toggler'}
                            dataToggle={'collapse'}
                            dataTarget={'#mainNav'}
                            buttonIcon={<span className={'navbar-toggler-icon'}></span>}
                    />

                    <div className='collapse navbar-collapse' id='mainNav'>
                        <ul className={'navbar-nav mr-auto'}>
                            {listLeftNavItems}
                        </ul>
                        <ul className={'navbar-nav ml-auto'}>
                            {listRightNavItems}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

