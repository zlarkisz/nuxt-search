export default {
  setLoading(state, payload) {
    state.loading = payload
  },
  downloadPercent(state, payload) {
    state.downloadPercent = payload
  }
}
