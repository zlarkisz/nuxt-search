import axios from 'axios'

export default {
  async fetchCards({ commit }, search) {
    try {
      commit('loading/downloadPercent', 0, { root: true });
      commit('loading/setLoading', true, { root: true });
      const {
        data: {
          data: cardsList
        }
      } = await axios.get('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3');
      commit('updateCardsList', cardsList.filter(card => {
        return card.name.toLowerCase().includes(search.toLowerCase())
      }));
      commit('loading/downloadPercent', 100, { root: true })
      commit('loading/setLoading', false, { root: true });
    } catch (e) {
      console.log(e.message);
    }
    return Promise.resolve()
  }
}
