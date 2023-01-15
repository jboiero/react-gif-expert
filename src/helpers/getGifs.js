const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HSG0B5RZAksjsgCYzMiMDf4Ywpav3UFj&q=${category}&limit=10`
    const res = await fetch(url);
    const {data} = await res.json()

    const gifs = data.map( image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))
    return gifs
}   

export default getGifs