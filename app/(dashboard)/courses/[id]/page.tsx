'use client'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { httpGetCourse } from "@/app/hooks/hooks"
import { Course as CourseProps } from '../page'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function Course({ params }: { params: { id: string } }) {
    //component to express interest in a course
    const { id } = params;
    const [course, setCourse] = useState('null');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(false);
                const response = await httpGetCourse(id);
                setCourse(response);
                setLoading(false);
            } catch (err) {
            }
        }

        fetchData();
    }, []); // Empty dependency array to run the effect only once





    return (
        <div className='p-8 flex flex-col w-1/2'>
            <p className='text-8xl'>Learn Without</p>
            <span className='text-8xl'>Limits</span>

            <div className='space-y-4'>
                <p className='w-3/4 text-ellipsis'>Join your peers in learning the course of your choice today. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam ex odio maiores dolores sequi quisquam ratione nulla. Eius velit atque, sapiente deleniti voluptatibus excepturi illo minus impedit debitis officiis.</p>


                <div className='flex gap-x-8 w-full'>
                    <div className='w-2/5 h-16 bg-slate-700 text-2xl text-white flex items-center justify-center'>
                        Peer<span className='text-orange-600'>Zone</span>
                    </div>
                    <div className='w-3/5 h-16 border-2 border-slate-700'>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Course