import axios from "axios"

export default {
	state: {
		status: 'loading',
		movies: [],
	},
	mutations: {
		SET_MOVIES(state, result) {
			state.movies = result,
			state.status = 'success'
		},
		ERROR_MOVIES(state) {
				state.status = 'error'
		}
	},
	actions: {
		async GET_MOVIES({ commit }) {
			try {
				const response = await axios.get(
					'https://floating-sierra-20135.herokuapp.com/api/movies'
				);
				const result = response.data.data
				commit('SET_MOVIES', result)
			} catch (error) {
				commit('ERROR_MOVIES')
			}
		}
	},
	getters: {
		MOVIES(state) {
			return state.movies
		},
		STATUS(state) {
			return state.status
		}
	},
}