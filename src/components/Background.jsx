import estrelas from '../assets/estrelas.png'

function Background({children}) {

  return (
    <>
      <div className="bg-stone-800 relative w-full min-h-screen bg-auto bg-repeat overflow-x-hidden overflow-y-auto"> 
        
        <div className="absolute right-[15%] top-[20%] w-[480px] h-[480px] rounded-full bg-gradient-to-l from-amber-600 via-amber-900 to-amber-950 blur-[128px] opacity-50 transform translate-x-1/2"/>
        
        <div className="absolute left-[15%]  top-[50%] w-[480px] h-[480px] rounded-full bg-gradient-to-r from-amber-600 via-amber-900 to-amber-950 blur-[128px] opacity-50 transform -translate-x-1/2"/>

        <div className="absolute right-[15%]  top-[80%] w-[480px] h-[480px] rounded-full bg-gradient-to-r from-amber-600 via-amber-900 to-amber-950 blur-[128px] opacity-50 transform translate-x-1/2"/>
        
        <div 
          className="absolute inset-0 opacity-15"
          style={{ 
            backgroundImage: `url(${estrelas})`,
            animation: 'moveBackground 30s linear infinite',
          }}
        />        
                
        <div className='h-full w-full flex justify-center' >
          <div 
            className='max-w-screen-xl w-full h-auto overlapping-element' 
            style={{ position: 'relative', zIndex: 1 }}
          >
              {children}
          </div>
        </div>       
      </div>

      <style>
      {`
        @keyframes moveBackground {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 100% 0;
          }
        }
      `}
      </style>
    </>
  )
}

export default Background