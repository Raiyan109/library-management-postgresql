import { JwtPayload, Secret } from 'jsonwebtoken';
export declare const jwtHelpers: {
    generateToken: (payload: any, secret: Secret, expiresIn: string) => string;
    verifyToken: (token: string, secret: Secret) => JwtPayload;
};
//# sourceMappingURL=jwtHelpers.d.ts.map