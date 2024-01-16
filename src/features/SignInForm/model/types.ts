import {z} from "zod";

export const formSchema = z.object({
	login: z.string({required_error: 'Необходимо ввести логин'}).min(2, {message: 'Нужно минимум 2 символа'}).max(50, {message: 'Максимум 50 символов'}),
	password: z.string({required_error: 'Необходимо ввести пароль'}).min(6, {message: 'Нужно минимум 6 символов'}).max(50, {message: 'Максимум 50 символов'}),
})