export const AppUtils = {
    getUrlParam(key) {
      let pageUrl = window.location.search.substring(1);
      let urlParams = pageUrl.split("&");
  
      for (let i = 0; i < urlParams.length; i++) {
        let paramName = urlParams[i].split("=");
  
        if (paramName[0] === key) {
          return paramName[1] === undefined
            ? true
            : decodeURIComponent(paramName[1]);
        }
      }
    },
  };