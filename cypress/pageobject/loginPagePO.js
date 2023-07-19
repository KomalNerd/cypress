import utilFuncs from "../utils/reusableFuncs";

class loginpo {
  label_login(labeltext) {
    utilFuncs.isLabelPresent(labeltext);
  }
}
export default new loginpo();
