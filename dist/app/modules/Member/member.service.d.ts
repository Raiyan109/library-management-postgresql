import { IMember } from "./member.interface";
export declare const MemeberServices: {
    createMemberService: (payload: IMember) => Promise<any>;
    findAllMembersService: () => Promise<any>;
    findMemberByIdService: (memberId: string) => Promise<any>;
    updateMemberService: (memberId: string, payload: Partial<IMember>) => Promise<any>;
    deleteMemberService: (memberId: string) => Promise<any>;
};
//# sourceMappingURL=member.service.d.ts.map