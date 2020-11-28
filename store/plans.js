export const state = () => ({
  plan_info: null
})

export const mutations = {
  setPlanInfo(state, info){
    state.plan_info = info
  }
}
