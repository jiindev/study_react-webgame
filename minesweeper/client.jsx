const React = require('react');
const ReactDom = require('react-dom');
const {hot} = require('react-hot-loader/root');
import MineSweeper from './MineSweeper';

const Hot = hot(MineSweeper);

ReactDom.render(<Hot/>,document.querySelector('#root'));