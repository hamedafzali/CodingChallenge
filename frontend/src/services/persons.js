import http from "./httpService";

import { apiUrl } from "../config.json";

export function getMembersAbsences() {
  return http.get(apiUrl + `/persons/members-absences`);
}

export function getMembers() {
  return http.get(apiUrl + `/persons/members`);
}

export function getAbsences() {
  return http.get(apiUrl + `/persons/absences`);
}

export function getSummary() {
  return http.get(apiUrl + `/persons/members-absences-sum`);
}
