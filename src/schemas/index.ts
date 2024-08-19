import * as z from 'zod'

//signup schema
export const SignupSchema = z.object({
    email: z.string().email({
        message: "Please provide an email"
    }),
    username: z.string().min(4, {
        message: "Username should be minimum 4 characters!"
    }).max(18, {
        message: "Username should be maximum 18 characters!"
    }),
    password: z.string().min(6, {
        message: "Password should be minimum 6 characters!"
    }),
    confirmPassword: z.string().min(1, { message: "Confirm your password" })
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match"
});

//for backend without confirm password
export const BackendSignupSchema = z.object({
    email: z.string().email(),
    username: z.string().min(4).max(18),
    password: z.string().min(6)
});

//login schema
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

//playlist schema
export const PlaylistSchema = z.object({
    link: z.string().min(1, {
        message: "Please add an valid link"
    }),
    description: z.string().min(4, {
        message: "Please Add a description"
    })
})

//edit playlist schema
export const EditPlaylistSchema = z.object({
    
    description: z.string().min(4, {
        message: "Please enter a valid link"
    })
})