import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Umar",
          lastName: "Muavia",
          areas: ["backend", "career"],
          description: "I am a Back End Developer",
          horlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Ali",
          lastName: "Imran",
          areas: ["frontend", "career"],
          description: "I am a Front End Developer",
          horlyRate: 20,
        },
        {
          id: "c3",
          firstName: "Usama",
          lastName: "Arif",
          areas: ["backend", "career"],
          description: "I am a Back End Developer",
          horlyRate: 25,
        },
        {
          id: "c4",
          firstName: "Ali",
          lastName: "Imran",
          areas: ["frontend", "career"],
          description: "I am a Front End Developer",
          horlyRate: 40,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
