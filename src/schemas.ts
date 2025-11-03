import { z } from 'zod';

export const customerFormSchema = z.object({
    id: z.string().min(1, 'Please enter a valid id'),
})

export type CustomerFormData = z.infer<typeof customerFormSchema>;
