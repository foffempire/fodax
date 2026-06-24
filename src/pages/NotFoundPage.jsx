import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-[80vh]'>
                <h1 className='text-8xl text-slate-950 font-bold'>OOPS</h1>
                <h4 className='text-xl text-slate-950'>Page not found</h4>
                <Link to='/' className="bg-transparent text-tertiary border border-primary rounded-4xl px-6 py-3 font-medium hover:bg-slate-50  transition duration-300 mt-6">Go Home</Link>
            </div>
        </>
    )
}

export default NotFoundPage