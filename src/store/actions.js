const actions = {
  HANLDE_NEXT({ commit }) {
    commit("HANLDE_NEXT");
  },
  HANDLE_BACK_STEP({ commit }) {
    commit("HANDLE_BACK_STEP");
  },
  HANDLE_ADD_EDUCATION({ commit }, payload) {
    commit("HANDLE_ADD_EDUCATION", payload);
  },
};

export default actions;
