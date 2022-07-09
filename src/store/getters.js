const getters = {
  getSiginInformations(state) {
    return state.formLists.map((item) => {
      return item.form2.filter((data) => {
        return data.name === "sigin";
      });
    });
  },
  getEducatioms(state) {
    return state.formLists.map((item) => {
      return item.form2.filter((data) => {
        return data.name === "education";
      });
    });
  },
  getInsurances(state) {
    return state.formLists.map((item) => {
      return item.form2.filter((data) => {
        return data.name === "insurance";
      });
    });
  },
  getSalarys(state) {
    return state.formLists.map((item) => {
      return item.form2.filter((data) => {
        return data.name === "salary";
      });
    });
  },
  getResidents(state) {
    return state.formLists.map((item) => {
      return item.form2.filter((data) => {
        return data.name === "resident";
      });
    });
  },
  getsiginAddress(state) {
    return state.formLists.map((item) => {
      return item.form2.filter((data) => {
        return data.name === "siginAddress";
      });
    });
  },
  // getDataForms(state) {
  //   return state.formLists.filter((formList) => {
  //     return formList.form2;
  //   });
  // },
};

export default getters;
