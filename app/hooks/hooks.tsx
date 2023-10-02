
import { useState } from "react";
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { prisma } from '@/utils/client';
import { Course } from '../(dashboard)/lab/page'
import { useToast } from "@/components/ui/use-toast"

const httpCreateCourse = async (values: Course) => {
    const msg = useToast();
    const session = await getServerSession(options);

    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email,
        },
    });

    const { name, description, category } = values;
    const course = await prisma.course.create({
        data: {
            name,
            description,
            category,
            owner: {
                model: "User",
                connect: {
                    id: user.id,
                },
            }
        }
    });
    if (course) {
        msg.toast({
            title: "Course Created",
            description: "Your course has been created.",
            type: "foreground",
        });
    } else {
        msg.toast({
            title: "Error",
            description: "There was an error creating your course.",
            type: "foreground",
        });
    }



    return course;
}

export { httpCreateCourse }
