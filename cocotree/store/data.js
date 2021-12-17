export const state = ()=>({
    name: "test"
})
export const mutations = {
    add(state, name) {
      state.name = name
    }
  }