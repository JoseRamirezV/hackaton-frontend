import OpinionList from "./Opinionlist"

export default function UserProfile(){
    const comments = [1, 2, 3, 4, 5];
    const name = "Pablo"
    const number = "3122626947"
    const email = "pablor10@gmail.com"
    const imageURL = 'https://th.bing.com/th/id/OIP.OWHqt6GY5jrr7ETvJr8ZXwHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7'
    return(
        <section className='gap-5 w-3/4 px-2 py-5  mx-auto items-center'>
            <div className="flex gap-5">  
                <img
                src={imageURL}
                alt="" 
                className='size-10 shadow-xl rounded-md'/>
                
                <div className=" text-black">
                    <h2 className="font-medium items-end text-black">{name}</h2>
                    <ul className="font-sans text-sm">
                        <li>{number}</li>
                        <li>{email}</li>
                    </ul>

                </div>
            </div> 
            <div className='flex flex-col gap-5'>
             {/* {comments.map((comment) => (
                <OpinionList/>
            ))} */}
            </div>
            <OpinionList/>
        </section>
    )
}