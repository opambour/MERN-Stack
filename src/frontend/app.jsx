import React from 'react';
import ReactDom from 'react-dom';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/includes/header.component';

// header
ReactDom.render(<HeaderComponent/>, document.getElementById('main_header'));

// main content
ReactDom.render(<HomeComponent/>, document.getElementById('main_content'));
