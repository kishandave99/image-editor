(function(window) {
    window.environment = window.environment || {};

    // API url
    // window.environment.webService = 'https://api.91erp.in/'; //Live server url
    window.environment.webService = 'http://localhost:9000/api/';
    // window.environment.webService = 'http://api.91erp.info/'; //test server url

    // Base url
    // window.environment.baseUrl = '/image-editor';
    window.environment.baseUrl = '';

    // Public Resource url
    // window.environment.publicResourceUrl = 'https://api.91erp.in/91erp-public-resource/'; //live server url
    window.environment.publicResourceUrl = 'http://localhost:9000/';
    // window.environment.publicResourceUrl = 'http://api.91erp.info/91erp-public-resource/'; //test server url

}(this));