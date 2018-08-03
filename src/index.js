import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<React.Fragment>
	<CssBaseline />
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
	    <App />
    </BrowserRouter>
  </MuiThemeProvider>
</React.Fragment>, document.getElementById('root'));
registerServiceWorker();
