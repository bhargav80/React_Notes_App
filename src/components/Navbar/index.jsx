import logo from '../../assets/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg'
export const Navbar = ()=> {
    return(
       <>
        <header className="flex px-4 py-1 gap-3 border-b-2 border-gray-100">
            <div className='w-12 h-12'>
                <img className='w-full h-full' src={logo} alt="" />
            </div>
            <h1 className="text-indigo-800 text-4xl font-bold">Note it</h1>
        </header>
       </>
    )
}

