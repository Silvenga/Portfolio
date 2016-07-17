
// import 'semantic.css';
// import 'semantic.js';
import '../styles/styles.css';

// import 'components/reset.css';
// import 'components/loader.css';
import 'semantic-ui-container/container.css'

require.ensure(["./bootstrapper"], function(require) {
    require("./bootstrapper");
});