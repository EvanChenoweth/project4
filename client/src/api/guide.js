import apiUrl from '../apiConfig'
import axios from 'axios'

export const guideCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/guides',
		data: {
			guide: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const guideIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/guides'
	})
}

export const guideShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/guides/' + id
	})
}

export const guideUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/guides/' + id,
		data: {
			guide: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const guideDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/guides/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}