class CookieUtils {
  setCookie = (name: string, value: string, options?: any) => {
    try {
      if (document) {
        options = {
          path: "/",
          ...options,
        };

        let updatedCookie: string = String(name) + "=" + value.toString();

        for (const optionKey in options) {
          updatedCookie += "; " + optionKey;
          const optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }

        document.cookie = updatedCookie;
      }
    } catch (error: any) {
      if (error.message === "document is not defined") {
        return undefined;
      }
      console.error(error);
      return undefined;
    }
  };

  setCookieWithToken = (name: string, token: string, options?: any) => {
    try {
      if (document) {
        options = {
          path: "/",
          Secure: true,
          SameSite: "Lax",
          ...options,
        };

        let updatedCookie =
          encodeURIComponent(name) + "=" + encodeURIComponent(token);

        for (const optionKey in options) {
          updatedCookie += "; " + optionKey;
          const optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }

        document.cookie = updatedCookie;
      }
    } catch (error: any) {
      console.log("Ошибка установки куки с токеном:", error);
    }
  };

  getCookie = (name: string) => {
    try {
      if (document) {
        const match = document.cookie.match(
          new RegExp("(^| )" + name + "=([^;]+)"),
        );
        if (match) return match[2].replaceAll('"', "");
      }
      return undefined;
    } catch (error: any) {
      if (error.message === "document is not defined") {
        return undefined;
      }
      console.error(error);
      return undefined;
    }
  };

  deleteCookie = (name: string) => {
    try {
      cookiesUtils.setCookie(name, "", {
        "max-age": -1,
      });
    } catch (error: any) {
      if (error.message === "document is not defined") {
        return undefined;
      }
      console.error(error);
    }
  };
}

const cookiesUtils = new CookieUtils();
export default cookiesUtils;
