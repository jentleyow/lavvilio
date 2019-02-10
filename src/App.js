import React, { Component } from 'react';
import $ from 'jquery';
import Loader from './components/loader/Loader';
import Top from './components/top/Top';
import Middle from './components/middle/Middle';
import Bottom from './components/bottom/Bottom';

import './scss/app.scss';

class App extends Component {
  render() {
    $(document).ready(function() {
      let activeId = 'link1';
      $('#link1').addClass('active');
      $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
        $('.menu-toggle').toggleClass('menu-bar');
        $('.menu-toggle').toggleClass('menu-cross');
      });
      $('nav li').click(function(event) {
        $('#' + activeId).removeClass('active');
        $('#' + event.target.id).toggleClass('active');
        activeId = event.target.id;
      });
    });
    $(window).on('load', function() {
      $('#app').fadeIn('slow');
      $('#loadingbox ').fadeOut('slow');
    });
    return (
      <React.Fragment>
        <Loader />
        <div id="app">
          <Top />
          <Middle />
          <Bottom />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
