import axios from 'axios'

export default {
  async fetchCards({ commit }, search) {
    try {
      commit('downloadPercent', 0);
      commit('setLoading', true);
      const {
        data: {
          data: cardsList
        }
      } = await axios.get('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3');
      commit('updateCardsList', cardsList.filter(card => {
        return card.name.toLowerCase().includes(search.toLowerCase())
      }));
      commit('setLoading', false);
      commit('downloadPercent', 100)
    } catch (e) {
      console.log(e.message);
    }
    return Promise.resolve()
  }
}
