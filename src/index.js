import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from 'linnia-brand/ThemeProvider';
import Favicon from 'linnia-brand/Favicon';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<React.Fragment>
	<CssBaseline />
  <Favicon />
  <ThemeProvider>
    <BrowserRouter>
	    <App />
    </BrowserRouter>
  </ThemeProvider>
</React.Fragment>, document.getElementById('root'));
registerServiceWorker();
