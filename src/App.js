import Image from 'next/image'
import files from './files'

// PhotoListItem bileşeni oluşturup, files array kullanarak görüntülemeye çalışın. Verileri bir prop olarak geçirin ve görüntüleyin
function PhotoList() {
  return (
    <ul
    
    role='list'
    className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
  >
    
      {files.map((file) => (
            <PhotoListItem 
            key={file.source}
            title={file.title} 
            size={file.size} 
            source={file.source} 
/>
      ))}
      </ul>
     
  )
}

const PhotoListItem =({key,title,size,source})=>{
  return (
<>
        <li key={key} className='relative'>
          <div className='group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
            <Image
              src={source}
              alt=''
              className='pointer-events-none object-cover group-hover:opacity-75'
              width={500}
              height={500}
              />
            <button
              type='button'
              className='absolute inset-0 focus:outline-none'
              >
              <span className='sr-only'>
                Ayrıntıları görüntüle {title}
              </span>
            </button>
          </div>
          <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
            {title}
          </p>
          <p className='pointer-events-none block text-sm font-medium text-gray-500'>
            {size}
          </p>
        </li>
    
              
    </>
  )
}



export default function App() {
  return (
    <div className='bg-purple-100'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <PhotoList />
      </div>
    </div>
  )
}
