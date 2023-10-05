import { prisma } from "@/utils/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from 'next-auth';
import { options } from "@/app/api/auth/[...nextauth]/options";



export async function GET(req: NextRequest) {
    const query = req.nextUrl;
    const id = query.searchParams.get('id');
    if (id) {
        const course = await prisma.course.findUnique({
            where: {
                id: id,
            },
            include: {
                owner: true,
            }
        });
        return NextResponse.json(course);
    }
    const courses = await prisma.course.findMany(
        {
            include: {
                owner: true,
            }
        }
    );
    return NextResponse.json(courses);
}




export async function POST(req: NextRequest) {
    const session = await getServerSession(options);
    if (!session) {
        throw new Error("Unauthorized no session");
    }
    const { name, description, category } = await req.json();
    const categoryName = category.toUpperCase();

    const course = await prisma.course.create({
        data: {
            name,
            description,
            category: categoryName,
            owner: {
                connect: {
                    email: session?.user?.email as string,
                },
            }
        }
    });
    if (!course) {
        throw new Error("Course not created");
    }
    return NextResponse.json(course);
}