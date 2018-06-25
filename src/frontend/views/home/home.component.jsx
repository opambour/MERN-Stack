import React, { Component } from 'react';
import { Ahref } from '../../components/ahref.component';

export class HomeComponent extends Component{
    render() {
        return(
            <div className="row">
                <article className="col-md-12"> {/*Jumbotron */}
                    <div className="jumbotron">
                        <h1 className="display-4">Hello, React!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam dolore eaque ex
                            laudantium mollitia nam obcaecati porro quos? A ad alias aut consectetur eos nulla quae
                            saepe temporibus? A!
                        </p>
                        <hr className="my-4" />
                        <Ahref hrefLink={'#'} hrefClassName={'btn btn-lg btn-primary'}
                               hrefTooltipDataToggle={'tooltip'}
                               hrefDataPlacement={'top'}
                               hrefTitle={'Read more...'}
                               hrefName={'READ MORE'}
                        />
                    </div>
                </article>

                <article className="col-md-8"> {/* -- main content -- */ }
                    <h1 className={'display-4'}>Main Content</h1>
                    <span>Pathname: {window.location.pathname}</span>
                </article>

                <article className="col-md-4"> {/* -- aside content -- */}
                    <h1 className={'display-4'}>Aside Content</h1>
                </article>
            </div>
        );
    }
}
