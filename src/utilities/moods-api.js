import sendRequest from "./send-request";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/moods'

export function index() {
    return sendRequest(BASE_URL)
}

export function newMood(moodData){
  return sendRequest(`${BASE_URL}/new`, 'POST', moodData)
}

export function editMood(id, moodData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', moodData);
}


export function deleteMood(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

