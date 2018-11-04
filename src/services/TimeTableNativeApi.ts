import {buildNativeApiUrl} from "../utils/UrlBuilders";
import IDivision from '../models/IDivision'
import ITimetableRow from '../models/ITimetableRow'
import IProgramGroups from '../models/IProgramGroups'
import axios from "axios";

export default class TimeTableNativeApi {
    static async get(groupId : number) : Promise<ITimetableRow[]> {
        return axios.get(buildNativeApiUrl(`groups/${groupId}/events`))
                          .then(response => response.data)
    }

    static async getPeriod(groupId : number, from : Date, to : Date): Promise<ITimetableRow[]> {
        return await axios.get(buildNativeApiUrl(`groups/${groupId}/events/${from}/${to}`))
                          .then(response => response.data)
    }

    static async getDivisions() : Promise<IDivision[]> {
        return await axios.get<IDivision[]>(buildNativeApiUrl('study/divisions'))
                          .then(response => response.data)
    }

    static async getGroupsByProgramId(programId : number) : Promise<IProgramGroups[]> {
        return await axios.get(buildNativeApiUrl(`progams/${programId}/groups`))
                          .then(response => response.data)
    }
} 