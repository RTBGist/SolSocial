import React from 'react';
import {useForm} from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/shared/components/ui/button";
import {Input} from "@/shared/components/ui/input";
import {formSchema} from "../model/types";

const SignInForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			login: '',
			password: '',
		},
	})

	function onSubmit(values: unknown) {
		console.log(values);
		const isValidData = formSchema.parse(form);
		console.log(isValidData);
	}

	return (
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
							name="login"
							render={({ field }) => (
									<FormItem>
										<FormLabel>Логин</FormLabel>
										<FormControl>
											<Input className="shad-input" type="text" placeholder="login" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
							)}
					/>
					<FormField
							name="Пароль"
							render={({ field }) => (
									<FormItem>
										<FormLabel>Login</FormLabel>
										<FormControl>
											<Input className="shad-input" type="password" placeholder="password" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
							)}
					/>
					<Button type="submit">Войти</Button>
				</form>
			</Form>
	);
};

export default SignInForm;