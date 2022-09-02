import axios from "axios"

export default {
	state: {
		movies: []
	},
	mutations: {
		SET_MOVIES(state, result) {
			state.movies = result
		}
	},
	actions: {
		async GET_MOVIES({ commit }) {
			const response = await axios.get(
				'https://floating-sierra-20135.herokuapp.com/api/movies'
			);

			// const result = response.data
			const result = response
			commit('SET_MOVIES', result)
		}
	},
	getters: {
		MOVIES(state) {
			return state.movies
		}
	},
}