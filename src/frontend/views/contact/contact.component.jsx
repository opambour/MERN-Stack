import React, { Component } from 'react';

export class ContactComponent extends Component {
    render() {
        return (
            <div className={'row'}>
                <article className="col-md-8"> {/* -- main content -- */ }
                    <h1 className={'display-4'}>Main Content</h1>
                    Contact page
                </article>

                <article className="col-md-4"> {/* -- aside content -- */}
                    <h1 className={'display-4'}>Aside Content</h1>
                </article>
            </div>
        );
    }
}
