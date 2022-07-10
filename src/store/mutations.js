const mutations = {
  HANLDE_NEXT(state) {
    state.currentPage++;
    console.log(state.currentPage);
  },
  HANDLE_BACK_STEP(state) {
    state.currentPage--;
  },
};

export default mutations;
