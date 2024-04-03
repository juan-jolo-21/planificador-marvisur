export interface JwtResponse {
    dataUser : {
        user_type: string,
        email: string,
        employee :{
            dni: number,
            person: {
                name: string,
                last_name_1: string
            }
            name_branch: string
        }
        expiresIn: string,
        accessToken: string
    }

}
