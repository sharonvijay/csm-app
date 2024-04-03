import { User } from "./user.model"

export interface Issue{
    id:number
    name:string
    raisedAt:string
    resolvedAt:string
    status:string
    raisedBy:User
    resolvedBy:number
    issueStatus: string
}