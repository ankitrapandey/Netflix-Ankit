export default function Movies() {

    const movie = [
        {
            id : 1,
            poster: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/06/02/hrithik-roshan-s-Super-30-Movie-Latest-poster-.jpg?fit=1080%2C1080&quality=80&zoom=1&ssl=1",
            name : "Super 30"
        },
        {
            id : 2,
            poster: "https://img.freepik.com/premium-psd/psd-free-psd-diwali-celebration-poster-instagram-feed-banner-tamplates_933969-297.jpg?w=740",
            name : "Happy diwali"
        },
        {
            id:3,
            poster:"https://img.freepik.com/free-psd/horror-video-game-3d-text-style-effect_1389-1574.jpg?w=826&t=st=1712640095~exp=1712640695~hmac=fb942064cf7418097f062f866d1bfb63b0767da2fe274f11160793b219e9dc9a",
            name:"Hunter"
        },
        {
            id:4,
            poster:"https://img.freepik.com/premium-psd/electro-party-flyer-event-poster-template_197952-50.jpg?w=740",
            name:"Jackson"
        },
        {
            id:5,
            poster:"https://img.freepik.com/free-psd/jazz-concert-print-template_23-2149016061.jpg?w=740&t=st=1712640797~exp=1712641397~hmac=d6a03ae72d3513564ec22efb3bddc5cf60c504d5ba8f9a00860cde34e461d94c",
            name:"concert"
        },
        {
            id:6,
            poster:"https://img.freepik.com/free-vector/realistic-horror-movie-poster_23-2149721019.jpg?w=740&t=st=1712640912~exp=1712641512~hmac=0ffb7b3203c3b56b922cde12beca3a1e8ce7557cf3b87da6b6881db11a52cdd8",
            name:"Darkest"
        },
        {
            id:7,
            poster:"https://img.freepik.com/premium-psd/photo-effect_501590-1256.jpg?w=740",
            name:"Fire"
        },
        {
            id:8,
            poster:"https://img.freepik.com/premium-psd/sci-fi-movi-poster-design_841014-23213.jpg?w=360",
            name:"Lorem"
        }
    ]
    return(
        <>
            <div className='w-full h-[100vh] px-5 bg-slate-300 py-7 border grid grid-cols-4 '>
                {movie.slice(0, 8).map((value) => 
                    <div className='w-[200px] h-[200px] rounded-md relative '>
                        <h1 className='text-[13px] text-black bg-zinc-100 px-6 font-semibold absolute bottom-6 right-10 left-12'>{ value.name}</h1>
                        <img src={ value.poster} className='w-full h-full object-cover'/>
                    </div>
                
                )}
                
                
            </div>  
        </>
    )
}