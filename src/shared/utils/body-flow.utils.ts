class BodyFlowUtils {
  handlerShow = (): void => {
    try {
      document.body.style.overflow = "hidden";
    } catch (e) {
      console.error(e);
    }
  };

  handlerHide = (): void => {
    try {
      document.body.style.overflow = "auto";
    } catch (e) {
      console.error(e);
    }
  };
}

const bodyFlowUtils = new BodyFlowUtils();
export default bodyFlowUtils;
