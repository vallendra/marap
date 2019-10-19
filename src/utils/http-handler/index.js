import axios from 'axios';

const instance = axios;

// Headers
const xAccessTokenHeader = {
  headers: {
    'x-access-token':
      'zw3ba199e4d35b50d569a64b04305367c9a1fc77f3de5bd3a587062cae2f7b3b942-_-WiONhP5'
  }
};

const setOptions = type => {
  switch (type) {
  case 'x-access-token':
    return xAccessTokenHeader;
  default:
    return null;
  }
};

export default (type) => {
  return instance.create(setOptions(type));
};
