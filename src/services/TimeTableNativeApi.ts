import {buildNativeApiUrl} from "../utils/UrlBuilders";
import HttpClient from '../utils/HttpClient';
import IDivision from '../models/IDivision'
import ITimetableRow from '../models/ITimetableRow'
import IProgramGroups from '../models/IProgramGroups'

export default class TimeTableNativeApi {
    static async get(groupId : number) : Promise<ITimetableRow[]> {
        return await HttpClient.get(buildNativeApiUrl(`groups/${groupId}/events`));
    }

    static async getPeriod(groupId : number, from : Date, to : Date): Promise<ITimetableRow[]> {
        return await HttpClient.get(buildNativeApiUrl(`groups/${groupId}/events/${from}/${to}`));
    }

    static async getDivisions() : Promise<IDivision[]> {
        return await HttpClient.get(buildNativeApiUrl('study/divisions'));
    }

    static async getGroupsByProgramId(programId : number) : Promise<IProgramGroups[]> {
        return await HttpClient.get(buildNativeApiUrl(`progams/${programId}/groups`));
    }
} 