'use client'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { useSession } from 'next-auth/react'
import { options } from '@/app/api/auth/[...nextauth]/options';
import { httpGetAllCourses } from '@/app/hooks/hooks'
import { effect } from 'zod'

interface Course {
    "id": string
    "name": string,
    "category": string,
    "description": string,
    "ownerId": string,
    "createdAt": string,
    "updatedAt": string,
    "owner": {
        "id": string,
        "name": string,
        "email": string,
        "userType": string,
        "state": false,
        "password": null,
        "createdAt": string,
        "updatedAt": string,
        "emailVerified": Boolean,
        "image": string
    }
}

const srverUrl = 'http://localhost:3000';
function getAvatarFallback(name: string) {
    const [first, last] = name.split(' ');
    return `${first[0]}${last[0]}`;
}

function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(false);
                const response = await httpGetAllCourses();
                setCourses(response);
                setLoading(false);

            } catch (err) {
            }
        }

        fetchData();
    }, []); // Empty dependency array to run the effect only once



    return (
        <div className='flex flex-col text-sm space-y-4 m-4 w-full h-screen'>

            {courses.map((course: Course, index) => (
                <Card className={`w-4/5 text-sm `} key={index}>
                    <CardHeader className='flex flex-row justify-between'>
                        <div className="flex flex-row space-x-4">
                            <Avatar>
                                <AvatarImage src={course.owner.image} alt={`@${course.owner.email}`} />
                                <AvatarFallback>{getAvatarFallback(course.owner.name)}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <CardTitle className='text-base'>{course.owner.name}</CardTitle>
                                <CardDescription className='text-xs'>5 min ago</CardDescription>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon">
                            <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" data-darkreader-inline-fill=""></path></svg>
                        </Button>
                    </CardHeader>
                    <CardContent className="grid gap-y-2">
                        <div className="flex flex-col">
                            <p className='text-base font-semibold'>{course.name}</p>
                            <p>{course.description}</p>
                        </div>
                    </CardContent>

                    <CardFooter className='justify-between'>
                        <div className="flex space-x-2">
                            <Button variant={'secondary'}>goland</Button>
                            <Button variant={'secondary'}>linux</Button>
                            <Button variant={'secondary'}>overflow</Button>
                        </div>
                        <div className="flex space-x-1 text-xs items-center text-muted-foreground ">
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" data-darkreader-inline-fill=""></path></svg>
                            <p className='pr-2'>210</p>
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" data-darkreader-inline-fill=""></path></svg>
                            <p className='pr-2SS'>30</p>
                            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" data-darkreader-inline-fill=""></path></svg>
                            <p className=''>57</p>
                        </div>
                    </CardFooter>
                </Card>

            ))}






        </div>
    )
}

export default Courses

export { type Course };