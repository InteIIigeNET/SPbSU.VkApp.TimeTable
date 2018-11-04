export default interface IGroup {
    studentGroupId: number,
    studentGroupName: string,
    studentGroupStudyForm: string,
    studentGroupProfiles: string,
    publicDivisionAlias: string
}

export default interface IProgramGroups{
    id : number
    groups : IGroup[]
}