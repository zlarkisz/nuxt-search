export default {
  allCards: state => state.cardsList,
  getLoader: state => state.downloadPercent,
  getQuery: state => state.setLoading
}
