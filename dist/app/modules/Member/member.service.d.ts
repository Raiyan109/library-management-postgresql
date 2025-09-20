import { IMember } from "./member.interface";
export declare const MemeberServices: {
    createMemberService: (payload: IMember) => Promise<{
        name: string;
        memberId: string;
        email: string;
        phone: string;
        memberShipDate: Date;
    }>;
    findAllMembersService: () => Promise<{
        name: string;
        memberId: string;
        email: string;
        phone: string;
        memberShipDate: Date;
    }[]>;
    findMemberByIdService: (memberId: string) => Promise<{
        name: string;
        memberId: string;
        email: string;
        phone: string;
        memberShipDate: Date;
    } | null>;
    updateMemberService: (memberId: string, payload: Partial<IMember>) => Promise<{
        name: string;
        memberId: string;
        email: string;
        phone: string;
        memberShipDate: Date;
    }>;
    deleteMemberService: (memberId: string) => Promise<{
        name: string;
        memberId: string;
        email: string;
        phone: string;
        memberShipDate: Date;
    }>;
};
//# sourceMappingURL=member.service.d.ts.map