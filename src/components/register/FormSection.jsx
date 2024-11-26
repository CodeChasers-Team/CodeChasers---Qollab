const FormSection = () => {
    return(
        <>
            <section className="flex justify-center items-center min-h-screen">
                <div className="w-[400px]">
                    <img src="../assets/Qollab.png" alt="" className="w-[144px]"/>
                    <div className="flex flex-col justify-start mb-[20px]">
                        <h2 className="text-start font-bold text-primary-600 text-xl">Login to your Account</h2>
                        <h3 className="text-start -text-primary-700">Login in to connect, collaborate and learn together</h3>
                    </div>
                    <form action="">
                        <input type="text" className="border -border-primary-700 -text-primary-700 py-[4px] px-[8px] w-full rounded-lg mb-[16px] text-[16px] font-regular" placeholder="fullname"/>
                        <input type="text" className="border -border-primary-700 -text-primary-700 py-[4px] px-[8px] w-full rounded-lg mb-[16px] text-[16px] font-regular" placeholder="username"/>
                        <input type="email" className="border -border-primary-700 -text-primary-700 py-[4px] px-[8px] w-full rounded-lg mb-[16px] text-[16px] font-regular" placeholder="username or email"/>
                        <input type="password" className="border -border-primary-700 -text-primary-700 py-[4px] px-[8px] w-full rounded-lg mb-[16px] text-[16px] font-regular" placeholder="password"/>
                    </form>
                    <button type="submit" className="w-full font-semibold -text-primary-100 -bg-primary-400 py-[8px] px-auto rounded-lg mb-[12px]">Login</button>
                    <p className="text-center">Dont have account? 
                        <span className="font-bold text-primary-600">Register</span>
                    </p>
                </div>
            </section>
        </>
    )
}

export default FormSection