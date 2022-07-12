const mutations = {
  HANLDE_NEXT(state) {
    // console.log(state.currentPage++);
    state.currentPage++;
  },
  HANDLE_BACK_STEP(state) {
    state.currentPage--;
  },
  HANDLE_ADD_EDUCATION(state, payload) {
    state.formLists[0].form2[1].forms.push(payload);
    // console.log("check payload ", payload);
  },
  HANDLE_RESET(state) {
    state.currentPage = 1;
  },
};

export default mutations;
