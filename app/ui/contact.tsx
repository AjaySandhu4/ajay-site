import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function contact() {
    return (<>
        <div id="experience" className="bg-blue-950 flex flex-row w-full top-0 h-full py-4 justify-center">
            <div className="flex flex-col justify-between items-center px-4 py-2 w-full text-white text-lg">
                <h1 className="text-5xl text-center pt-4">Contact</h1>
                <p className="my-4">Feel free to reach out!</p>
                <div className="flex flex-col">
                    <div className="flex flex-row my-4"><EmailIcon className="mx-4"/><p>ajaysandhu@cmail.carleton.ca</p></div>
                    <div className="flex flex-row my-4"><LinkedInIcon className="mx-4"/><a href="https://www.linkedin.com/in/ajay-sandhu-dev/">https://www.linkedin.com/in/ajay-sandhu-dev/</a></div>
                </div>
            </div>
        </div>
    </>)
}