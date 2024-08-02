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
    username: z.string().min(4, {
        message: "Username shoudld be minimum 4 characters."
    }).max(18, {
        message: "Username should be maximum 18 characters."
    }),
    password: z.string().min(6, {
        message: "Password should be Minimum 6 characters"
    }),
})