import GifItem from './GifItem';
import useFetchGifs from '../hooks/useFetchGifs';

export const GiftGrid = ({category}) => {
  
  const { images, isLoading } = useFetchGifs( category );
  
    return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>{
              images && images.map( (image) =>(
                <GifItem 
                  key={image.id}
                  //Cuando tengo muchas propiedades y se las quiero pasar a todas al componente, desestructuro el objeto y con eso le paso todas las propiedades al componente
                  {...image}/> 
              ))
            }
        </div>
    </>
  )
}
