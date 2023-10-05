import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { prisma } from '@/utils/client';
import { Course } from '../(dashboard)/lab/page'

const serverUrl = process.env.SERVER_URL || "http://localhost:3000";

const httpCreateCourse = async (values: Course) => {
    try {
        const session = await getServerSession(options);
        if (!session) {
            throw new Error("Unauthorized no session");
        }

        const user = await prisma.user.findUnique({
            where: {
                email: session?.user?.email,
            },
        });
        if (!user) {
            throw new Error("Unauthorized user");
        } else {
            console.log("User:", user);
        }

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

        console.log("Course created:", course);

        return course;
    } catch (error) {
        console.error("Error in httpCreateCourse:", error);
        throw error; // Rethrow the error to handle it in the calling code.
    }
}


const httpGetAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const httpGetAllCourses = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/v1/courses`, { method: "GET" });

        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`HTTP Error: ${response.status}`);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // You can choose to handle or propagate the error as needed.
    }

}

export { httpCreateCourse, httpGetAllUsers, httpGetAllCourses }
