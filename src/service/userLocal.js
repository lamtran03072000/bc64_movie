export const userLocal = {
  set: (infoUser) => {
    let json = JSON.stringify(infoUser);
    localStorage.setItem('USER_INFO', json);
  },
  get: () => {
    let json = localStorage.getItem('USER_INFO');
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  delete: () => {
    localStorage.removeItem('USER_INFO');
  },
};
