"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useSession } from 'next-auth/react'
import { httpCreateCourse, httpGetAllUsers } from "@/app/hooks/hooks"


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


interface Course {
    name: string
    description: string
    category: any
}


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "description must be at least 2 characters.",
    }),
    category: z.string().min(2, {
        message: "category must be at least 2 characters.",
    })
})

export default function NewCourse() {
    const { data: session } = useSession()
    const msg = useToast(); // Move the useToast hook call here

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "Python 3",
            description: "Introduction to python 3 and programming.",
            category: "Business",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>, e: any) {
        try {
            console.log(values);
            const res = await fetch("http://localhost:3000/api/v1/courses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (res) {
                form.reset();
                msg.toast({
                    title: "Course Created",
                    description: "Your course has been created.",
                    type: "foreground",
                });
            }
        } catch (error) {
            console.error('Order creation error:', error);
            msg.toast({
                title: "Error",
                description: "There was an error creating your course.",
                type: "foreground",
            });
        }
    }

    return (
        <div className="p-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Course Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Course name ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public course name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Course Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Course description ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public course description.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Course Category</FormLabel>
                                <FormControl>
                                    <Input placeholder="Course category ..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public course category.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
export { type Course }
