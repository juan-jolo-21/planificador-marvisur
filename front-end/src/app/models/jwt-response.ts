export interface JwtResponse {
    dataUser : {
        id: string,
        user_type: string,
        email: string,
        employee :{
            dni: number,
            person: {
                name: string,
                last_name_1: string,
                last_name_2: string
            }
            name_branch: string
        }
        expiresIn: string,
        accessToken: string
    }

}