
const checkTitle = () => {
  const url = window.location.pathname;
  if (url.includes('cv')) {
    document.title = 'Radu Farcas CV';
  } else {
    document.title = 'Radu Farcas';
  }
}

const isOnCv = () => window.location.pathname === '/cv';

export { checkTitle, isOnCv };
