export type code = 'ROLA34' | 'ROLB00'

export interface User{
    rol: string;
    password: string
}

export interface UserResponse{
    ok: boolean;
    rol: string;
    code: code;
}