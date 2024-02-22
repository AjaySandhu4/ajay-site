import { Button, CardMedia} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Github from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

export default function projects() {
    return (<>
       <div id="experience" className="bg-red-800 flex flex-row w-full top-0 h-full py-4 justify-center">
            <div className="flex flex-col justify-between items-center px-4 py-2 w-full text-white text-lg">
                <h1 className="text-5xl text-center py-4">Projects</h1>
                <p className="py-4">Here are a few notable projects that I have developed.</p>
                <Card className='w-1/2 mb-4'/*sx={{ maxWidth: 345 }}*/>
                    <CardMedia
                        sx={{ height: 240 }}
                        image="/kami.png"
                        title="Kami"
                    />
                    <CardContent>
                        <div className='flex flex-row'>
                            <h1 className='text-2xl '>Kami</h1>
                            <Button className="mx-1" href="https://github.com/AjaySandhu4/efficient-tasks"><Github/></Button>
                            <Button href="https://efficient-tasks.web.app/"><OpenInBrowserIcon/></Button>
                        </div>
                        <p>
                            Kami is a web app designed to help students manage their coursework. Used by dozens of students, it has improved the organization
                            through its simple, clean, and intuitive interface. It was developed using Typescript, Ember.JS, and Cloud Firestore.
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-1/2 my-4'/*sx={{ maxWidth: 345 }}*/>
                    <CardMedia
                        sx={{ height: 250 }}
                        image="/relax.png"
                        title="relax"
                    />
                    <CardContent>
                        <div className='flex flex-row'>
                            <h1 className='text-2xl '>Relational Algebra Processor</h1><Button className="mx-1" href="https://github.com/AjaySandhu4/relax-bonus"><Github/></Button>
                        </div>
                        <p>
                            I completed this as a bonus challenge in my Database Management class. 
                            It's a Python program designed to take relational data and relational algebra as input and produce tables representing the query as output. The queries are parsed by defining the relational algebra query language as a context-free language. 
                            My professor even highlighted this project as a particularly clever solution out of 600 students enrolled in the course.
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-1/2 my-4'/*sx={{ maxWidth: 345 }}*/>
                    <CardMedia
                        sx={{ height: 300 }}
                        image="/elevator-sim.png"
                        title="elevator-sim"
                    />
                    <CardContent>
                            <div className='flex flex-row'>
                                <h1 className='text-2xl '>Elevator Simulator</h1><Button className="mx-1" href="https://github.com/AjaySandhu4/comp3004-a3"><Github/></Button>
                            </div>
                            
                            <p>
                            It was programmed in C++ using the QT framework for my software engineering class. I implemented efficient elevator algorithms and created easily maintainable
                            code using the strategy and observer design patterns.
                            I also composed detailed documentation with use cases, sequence diagrams, UML diagrams, and activity diagrams to clearly illustrate overarching logic and design.
                            </p>
                    </CardContent>

                </Card>
            </div>
        </div>
    </>)
}