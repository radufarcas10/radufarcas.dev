
const checkTitle = () => {
  const url = window.location.hash;
  const homeTitle = process.env.REACT_APP_WEBSITE_NAME;
  if (url.includes('#cv')) {
    document.title = 'Radu Farcas CV';
  } else {
    document.title = homeTitle;
  }
}

const isOnCv = () => window.location.hash === '#cv';

const goBack = () => window.history.back();

export { checkTitle, isOnCv, goBack };
