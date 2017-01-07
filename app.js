import greet from './greet';

var content = document.getElementById('content');

content.innerHTML = greet('webpack');

if(module.hot) {
  module.hot.accept();
}