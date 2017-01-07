import greet from './greet';
import camera from './camera';

var content = document.getElementById('content');

// content.innerHTML = greet('webpack');

content.innerHTML = camera;

if(module.hot) {
  module.hot.accept();
}