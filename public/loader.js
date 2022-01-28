const _init = () => {
  const CLIENT_ID = '72622534160-ifku0o6toknndafb6k3q8hust9haq1u7.apps.googleusercontent.com';
  window.handleCredentialResponse = (data) => {
    const decodedData = jwt_decode(data?.credential);
    htmlNodeOperations(decodedData);
    const logoNode = document.getElementById("spinnable-logo");
    if (logoNode) {
      if (data && data.clientId && data.credential && !logoNode.classList.contains('spinnable-logo')) {
        logoNode.classList.add("App-logo-spin");
      }
      else if (!(data && data.clientId && data.credential)) {
        logoNode.classList.remove("App-logo-spin");
      };
    };
  };

  window.onload = () => {
    // https://stackoverflow.com/questions/14563155/oauth-2-0-client-id-and-client-secret-exposed-is-it-a-security-issue
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: window.handleCredentialResponse
    });
    google.accounts.id.prompt();
  };
};

_init();

const htmlNodeOperations = (decodedData) => {
  const signInElement = document.getElementById('signin-container');
  signInElement.style.display = 'none';
  const messageAppendNode = document.getElementById('user-welcome');
  messageAppendNode.append(`Welcome to the spinner. ${decodedData?.name || 'User'}`);
}