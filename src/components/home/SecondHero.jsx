const SecondHero = () => {
    return(
    <>
        <section className="my-10 px-[32px]">
            <div className="flex flex-row -bg-primary-500 rounded-lg p-4 shadow-lg">
                <div className="w-2/5">
                    <img src="../assets/home/img-section2.png" alt="" className="border rounded-xl"/>
                </div>
                <div className="w-3/5 flex flex-col justify-center items-center p-4">
                    <h3 className="font-semibold text-[32px] text-white mb-2">
                        About Qollab
                    </h3>
                    <p className="text-center font-regular text-[20px] text-white w-11/12">
                    Qollab is a dynamic learning platform that transforms traditional quizzes into engaging collaborative experiences. Founded in 2024, we believe that learning becomes more meaningful when students can interact, challenge, and grow together.
                    </p>
                </div>
            </div>
        </section>
    </>
    )
}

export default SecondHero