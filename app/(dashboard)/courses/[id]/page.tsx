import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function Course() {
    //component to express interest in a course

    return (
        <div className='p-8 flex flex-col'>
            <p className='text-8xl'>Learn Without</p>
            <span>Limits</span>
            <div>
                <div>
                    <p>Course Name</p>
                    <p>Course Description</p>
                    <p>Course Category</p>
                    <p>Course Owner</p>
                </div>


            </div>
        </div>
    )
}

export default Course