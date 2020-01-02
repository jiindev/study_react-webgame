const React = require('react');
const ReactDom = require('react-dom');
const {hot} = require('react-hot-loader/root');
import Rsp from './Rsp';

const Hot = hot(Rsp);

ReactDom.render(<Hot/>, document.querySelector('#root'));